import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import useAuthStore from "./store/authStore";

export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("token");
    const currentPath = request.nextUrl.pathname;
    const publicPaths = ["/login", "/register"];
    const isPublicPath = publicPaths.some((path) =>
      currentPath.startsWith(path)
    );

    if (!token && !isPublicPath) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/((?!_next|api|public|favicon.ico).*)",
};