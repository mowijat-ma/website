import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  ...routing,
  // 1. Force the default locale
  defaultLocale: 'ar',
  // 2. Disable browser language sensing
  localeDetection: false,
  // 3. Optional: If you don't want /ar/ in the URL, use 'as-needed'
  localePrefix: 'as-needed' 
});

export const config = {
  // Matcher remains the same
  matcher: ['/', '/(ar|fr)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};