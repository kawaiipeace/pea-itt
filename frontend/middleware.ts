import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import leaverequset from "./components/leaverequset";

export async function middleware(request: NextRequest) {
  try {
    // const cookie = request.headers.get('cookie');
    const token = request.cookies.get("token");
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}me`, {
    //   credentials: 'include',
    // });

    // if (!res.ok) {
    //   throw new Error('Unauthorized');
    // }

    const currentPath = request.nextUrl.pathname;

    // 🔓 อนุญาตให้เข้าถึง /login และ /register ได้โดยไม่ต้องมี token
    const publicPaths = ["/login", "/register","/users/leaverequest"];

    const isPublicPath = publicPaths.some((path) =>
      currentPath.startsWith(path)
    );

    if (!token && !isPublicPath) {
      return NextResponse.redirect(new URL("/login", request.url));
    if (isPublic) {
      if (roleId === 1) return NextResponse.redirect(new URL('/', request.url));
      if (roleId === 2) return NextResponse.redirect(new URL('/', request.url));
      if (roleId === 3) return NextResponse.redirect(new URL('/', request.url));
    }

    //const data = await res.json();
    //const roleId = data?.data?.role_id;

    //const currentPath = new URL(request.url).pathname;

    // เช็คและเปลี่ยนเส้นทางตามบทบาท
    // if (roleId === 1 && !currentPath.startsWith('/')) {
    //   return NextResponse.redirect(new URL('/', request.url));
    // } else if (roleId === 2 && !currentPath.startsWith('/')) {
    //   return NextResponse.redirect(new URL('/', request.url));
    // } else if (roleId === 3 && !currentPath.startsWith('/')) {
    //   return NextResponse.redirect(new URL('/', request.url));
    // }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  // matcher: ['/main/:path*', '/mentor/:path*', '/admin/:path*'],
  matcher: "/((?!_next|api|public|favicon.ico).*)",
};