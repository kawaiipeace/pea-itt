import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookie = request.headers.get('cookie');
  const currentPath = new URL(request.url).pathname;

  const publicPaths = ['/login', '/register'];
  const isPublic = publicPaths.includes(currentPath);

  if (!cookie && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}me`, {
      headers: {
        Cookie: cookie || '',
      },
      credentials: 'include',
    });

    if (!res.ok) throw new Error('Unauthorized');
    const data = await res.json();
    const roleId = data?.data?.role_id;

    if (isPublic) {
      if (roleId === 1) return NextResponse.redirect(new URL('/', request.url));
      if (roleId === 2) return NextResponse.redirect(new URL('/', request.url));
      if (roleId === 3) return NextResponse.redirect(new URL('/', request.url));
    const currentPath = request.nextUrl.pathname;

    // 🔓 อนุญาตให้เข้าถึง /login และ /register ได้โดยไม่ต้องมี token
    const publicPaths = ["/login", "/register"];

    const isPublicPath = publicPaths.some((path) =>
      currentPath.startsWith(path)
    );

    if (!token && !isPublicPath) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (roleId === 1 && !currentPath.startsWith('/')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    if (roleId === 2 && !currentPath.startsWith('/')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    if (roleId === 3 && !currentPath.startsWith('/')) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  } catch {
    if (!isPublic) return NextResponse.redirect(new URL('/login', request.url));
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/', '/login', '/main/:path*', '/mentor/:path*', '/admin/:path*'],
};
