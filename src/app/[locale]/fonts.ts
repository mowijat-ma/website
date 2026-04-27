import { Amiri, Geist, Geist_Mono, IBM_Plex_Sans_Arabic, Lora } from "next/font/google";

const lora = Lora({subsets:['latin'],variable:'--font-serif'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  variable: '--font-amiri', // This creates a CSS variable
});
const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '700'],
  variable: '--font-ibm',
});


export {
    ibmArabic, amiri, lora
}