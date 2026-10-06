import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { updateSession } from './lib/supabase/proxy';

const intlMiddleware = createMiddleware({
  ...routing,
  defaultLocale: 'ar',
  localeDetection: false,
  localePrefix: 'as-needed',
});

export default async function proxy(request: NextRequest) {
  const sessionResponse = await updateSession(request);

  if (sessionResponse.status >= 300) {
    return sessionResponse;
  }

  const response = intlMiddleware(request);
  sessionResponse.cookies
    .getAll()
    .forEach((cookie) => response.cookies.set(cookie));
  return response;
}

export const config = {
  // Matcher remains the same
  matcher: ['/', '/(ar|fr)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
