import type { Metadata, Route } from "next";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight, Facebook, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/data/social";
import { Label } from "@/components/ui/label";
export const metadata: Metadata = {
  title: "مويجات",
  manifest: "/icons/site.webmanifest",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "مجلة رقمية خاصة بالسينما و الثقافة",
    description:
      "نبضُ السينما.. وإكسيرُ الثقافة. قراءات نقدية، مراجعات، وحوارات ثقافية.",
    url: "https://mowijat.com",
    siteName: "Mowijat.ma",
    images: [
      {
        url: "/logos/graph.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Page() {
  const t = await getTranslations("pages.coming-soon");
  const socialLinksa = [
    {
      label: t("social.instagram"),
      href: "https://www.instagram.com/mowijat.ma",
      icon: Instagram,
    },
    {
      label: t("social.facebook"),
      href: "https://facebook.com/profile.php?id=61587179966907",
      icon: Facebook,
    },
    {
      label: t("social.whatsapp"),
      href: "https://wa.me/212635062998?text=Hi-Mowijat",
      icon: MessageCircle,
    },
  ];

  return (
    <main
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-slate-950 text-white"
      dir="rtl"
    >
      <video
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 -z-20 size-full object-cover motion-reduce:hidden"
        loop
        muted
        playsInline
        poster="/logos/coming-soon.png"
        preload="metadata"
        tabIndex={-1}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-slate-950/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/65- via-slate-950/25 to-slate-950/75"
      />

      <header className=" mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 sm:py-8">
        <div className="w-full mx-auto flex items-center justify-between px-4 pt-4 ">
                        <Link href={"/" as Route} className="flex items-center gap-2">
                            <img
                                src="/logos/logo_light_1.png"
                                className="h-8 sm:h-12 dark:invert - "
                                alt="Mowijat Logo"
                            />
                            {/* <img src="/logos/Vector.png" className="h-8 dark:invert sm:hidden"
                                alt="Mowijat Logo" /> */}
                            {/* <span className="hidden sm:block text-lg font-semibold">موجات</span> */}
                        </Link>
                        <div className="">
        
                            <div className="flex gap-2 justify-end">
        
        
                                {socialLinks.map(link => (
                                    <Link key={link.id} href={link.href as Route} target="_blank" rel="noopener noreferrer">
                                        <link.icon size="25" className="text-" />
                                    </Link>
                                ))}
        
                            </div>
                            {/* <div className="">mowijat.contact@gmail.com</div> */}
                        </div>
                    </div>
      </header>

      <section
        aria-labelledby="coming-soon-title"
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-start justify-center px-5 py-16 text-start sm:px-8"
      >
        {/* <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-sky-300 sm:text-sm">
          Mowijat.ma
        </p> */}
        <h1
          className="max-w-4xl text-5xl font-semibold leading-[1.2] tracking-tight text-white sm:text-6xl md:text-7xl"
          id="coming-soon-title"
        >
            <span className="">
          {t("title")}

            </span>
          <span className="mt-1 block text-primary">{t("title1")}</span>
        </h1>
        <p className="mt-6 text-start max-w-xl text-base leading-8 text-white/75 sm:mt-8 sm:text-lg">
          {t("subtitle")}
        </p>

        <div className="mt-9 flex flex-col items-start gap-4 sm:mt-11">
          <p className="text-sm text-white/65">{t("follow")}</p>
          <nav aria-label={t("follow")} className="flex flex-wrap justify-center gap-2.5">
            {socialLinks.map(({ label,href, icon: Icon }) => (
              <a
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white/90 backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                href={href}
                key={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon aria-hidden="true" className="size-4" />
                <Label className="text-sm font-medium">{t(`social.${label.toLowerCase()}`)}</Label>
                <ArrowUpRight aria-hidden="true" className="size-3.5 opacity-60" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 text-xs text-white/50 sm:px-8 sm:py-6">
        {/* <span>Mowijat.ma</span> */}
        <span>{t("title")}</span>
      </footer>
    </main>
  );
}
