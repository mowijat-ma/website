import Header from "@/components/layout/Header";
import { useLocale, useTranslations } from "next-intl";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <>
    <Header />
    {children}
    </>
  );
}
