'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname, routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    // router.replace automatically handles the locale prefixing
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <select 
      defaultValue={locale} 
      onChange={(e) => onSelectChange(e.target.value)}
      className="bg-transparent border border-gray-300 rounded p-1"
    >
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur.toUpperCase()}
        </option>
      ))}
    </select>
  );
}