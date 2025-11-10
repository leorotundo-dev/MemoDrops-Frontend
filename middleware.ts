import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const protectedPaths = ['/dashboard', '/decks', '/study', '/profile'];

  if (protectedPaths.some(p => req.nextUrl.pathname.startsWith(p))) {
    if (!token) {
      const url = new URL('/login', req.url);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/decks/:path*', '/study/:path*', '/profile/:path*']
};
