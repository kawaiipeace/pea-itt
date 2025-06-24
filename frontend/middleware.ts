import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookie = request.headers.get('cookie');

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}me`, {
      headers: {
        Cookie: cookie || '',
      },
      credentials: 'include',
    });

    if (!res.ok) {
      throw new Error('Unauthorized');
    }

    const data = await res.json();
    const roleId = data?.data?.role_id;

    const currentPath = new URL(request.url).pathname;

    // เช็คและเปลี่ยนเส้นทางตามบทบาท
    if (roleId === 1 && !currentPath.startsWith('/')) {
      return NextResponse.redirect(new URL('/', request.url));
    } else if (roleId === 2 && !currentPath.startsWith('/')) {
      return NextResponse.redirect(new URL('/', request.url));
    } else if (roleId === 3 && !currentPath.startsWith('/')) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/main/:path*', '/mentor/:path*', '/admin/:path*'],
};
