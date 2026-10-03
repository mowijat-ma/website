import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware({
  ...routing,
  defaultLocale: 'ar',
  localeDetection: false,
  localePrefix: 'as-needed',
});

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isComingSoonRoute = routing.locales.some(
    (locale) => pathname === `/${locale}/coming-soon` || pathname === `/${locale}/coming-soon/`,
  ) || pathname === '/coming-soon' || pathname === '/coming-soon/';

  if (!isComingSoonRoute) {
    const locale = routing.locales.find((candidate) => pathname.startsWith(`/${candidate}/`));
    const destination = locale ? `/${locale}/coming-soon` : '/coming-soon';
    return NextResponse.redirect(new URL(destination, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  // Matcher remains the same
  matcher: ['/', '/(ar|fr)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
