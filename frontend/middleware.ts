import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from 'axios';

export async function middleware(request: NextRequest) {
  const cookie = request.headers.get('cookie'); // ดึง cookie จาก request

  try {
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}me`, {
      headers: {
        Cookie: cookie || '',
      },
      withCredentials: true,
    });

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/main', '/mentor/:path*', '/admin/:path*'],
};
