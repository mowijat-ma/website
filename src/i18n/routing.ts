import { createNavigation } from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ar'],
  defaultLocale: 'ar',
  pathnames: {
    '/': '/',
    // '/pathnames': {
    //   de: '/pfadnamen'
    // }
  }
});


export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);