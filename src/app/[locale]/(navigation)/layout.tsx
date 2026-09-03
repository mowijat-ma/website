import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import LogoBar from "@/components/layout/Header/LogoBar";
import ScrollToTop from "@/components/ux/scroll-to-top-button";
import { SearchInput } from "@/components/ux/search-input";
import { useLocale, useTranslations } from "next-intl";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مويجات',
  openGraph: {
    title: 'مجلة رقمية خاصة بالسينا و الثقافة',
    description: `
            🎬 نبضُ السينما.. وإكسيرُ الثقافة.
        🎞️ نغوصُ في أعماق الفن السابع لنستخلص جوهر الفكر.
        ✨ قراءات نقدية | مراجعات | حوارات ثقافية.
      `,
    url: 'https://example.com/about',
    siteName: 'Mowijat.ma',
    images: [
      {
        url: '/images/hemdi.jpeg', // Must be an absolute URL
        width: 1200,
        height: 630,
        // alt: 'Our team working together',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="flex flex-col min-h-screen max-w-screen">
      <button className="button-mesure fixed top-0 right-4 z-50 px-4 py-1">
        خطوط قياس الابعاد
      </button>

      {/* <main className="lg:max-w-7xl w-full mx-auto grow border h-full text-7xl">
          {children}
          </main> */}
      {/* <div className="flex flex-col h-full border py-2"> */}
      <div className="bg-white w-full ">
      </div>
      <div className="sticky top-0 bg-background z-10 shadow-sm print:relative print:top-0 print:left-0 print:right-0 print:z-50 print:shadow-none">
        <LogoBar />
        <Header />
        {/* <SearchInput /> */}
      </div>

      <main className="flex-1 grow lg:max-w-6xl px-0 sm:px-8 py-4 sm:py-8 w-full mx-auto bg-background sm:bg-transparent border-mesure h-full ">
        {children}
        {/* <ScrollToTop /> */}

      </main>
      <ScrollToTop />
      <Footer />
      <div className="mb-16 sm:mb-0"></div>
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}
