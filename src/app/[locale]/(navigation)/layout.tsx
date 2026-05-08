import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import LogoBar from "@/components/layout/Header/LogoBar";
import ScrollToTop from "@/components/ux/scroll-to-top-button";
import { SearchInput } from "@/components/ux/search-input";
import { useLocale, useTranslations } from "next-intl";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <div className="flex flex-col min-h-screen bg-muted max-wscreen">
        {/* <main className="lg:max-w-7xl w-full mx-auto grow border h-full text-7xl">
          {children}
          </main> */}
        {/* <div className="flex flex-col h-full border py-2"> */}
              <div className="bg-white w-full ">
              <LogoBar />
              </div>
              <div className="sticky top-0 bg-background z-10">
                <Header />
                {/* <SearchInput /> */}
              </div>

              <main className="flex-1 grow lg:max-w-7xl px-4 py-8 w-full mx-auto bg-background- border h-full ">
                {children}
                {/* <ScrollToTop /> */}
              </main>
              <ScrollToTop />
              <Footer />
        {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}
