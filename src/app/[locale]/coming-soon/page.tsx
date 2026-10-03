import './coming.style.css'
import { getTranslations } from 'next-intl/server'
import { IconContext } from 'react-icons'
import Link from "next/link"
import { socialLinks } from "@/data/social"
import { Metadata, Route } from 'next'

export const metadata: Metadata = {
    title: 'مويجات',
    openGraph: {
        title: 'مجلة رقمية خاصة بالسينما و الثقافة',
        description: `
            🎬 نبضُ السينما.. وإكسيرُ الثقافة.
        🎞️ نغوصُ في أعماق الفن السابع لنستخلص جوهر الفكر.
        ✨ قراءات نقدية | مراجعات | حوارات ثقافية.
      `,
        url: 'https://mowijat.com',
        siteName: 'Mowijat.ma',
        images: [
            {
                url: '/logos/graph.png', // Must be an absolute URL
                width: 1200,
                height: 630,
                // alt: 'Our team working together',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};
export default async function Page() {
    const [t] = await Promise.all([
        getTranslations("pages.coming-soon"),


    ])

    const QuickLinks = [
        { label: t('social.facebook'), short: 'f', href: 'https://facebook.com/profile.php?id=61587179966907' },
        { label: t('social.instagram'), short: 'ig', href: 'https://www.instagram.com/mowijat.ma' },
        { label: t('social.whatsapp'), short: 'wa', href: 'https://wa.me/212635062998?text=Hi-Mowijat' },
    ]
    return (
        <main dir="rtl" className="coming-soon-page">
            <div className="lg:max-w-6xl w-full mx-auto flex items-center justify-between px-4 pt-4 bg-background">
                <Link href={"/" as Route} className="flex items-center gap-2">
                    <img
                        src="/logos/logo_light_1.png"
                        className="h-8 sm:h-12 dark:invert "
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
                                <link.icon size="25" className="text-primary" />
                            </Link>
                        ))}

                    </div>
                    {/* <div className="">mowijat.contact@gmail.com</div> */}
                </div>
            </div>

            <section id="" className="lg:max-w-6xl md:max-w-5xl w-full mx-auto px-4 pt-16 bg-background grid grid-cols-3" aria-labelledby="coming-soon-title">
                <div className="hero-copy- sm:col-span-2 col-span-full w-full" >
                    {/* <p className="eyebrow">سينما • ثقافة • حكايات</p> */}
                    <h1 id="coming-soon-title-" className="mb-4 text w-full">
                        {t('title')}
                        <br />
                        <span>{t('title1')}</span>
                    </h1>
                    <p className="intro">
                        {t('subtitle')}
                    </p>
                    <div className="">
                        <div className="rule" aria-hidden="true" />
                        <p className="follow-copy text-gray-800">{t('follow')}</p>
                        <div className="social-pills">
                            {QuickLinks.map((link) => (
                                <a key={link.short} href={link.href} target="_blank" rel="noreferrer">
                                    {link.label}
                                    <span aria-hidden="true">↗</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-muted h-full w-full col-span-1 hidden sm:block">
                    <img
                        src="./logos/coming-soon.png"
                        alt="لقطة سينمائية بالأبيض والأسود لمخرج خلف كاميرا"
                        className="h-full w-full object-cover"
                    />

                </div>

            </section>

            <footer className="site-footer">
                <span>نلتقي قريباً</span>
                <span className="footer-dot" aria-hidden="true" />
                <span>من الشاشة إلى الحكاية</span>
            </footer>
            <main>
                {/* <Heading1>موفيجات</Heading1> */}
            </main>
        </main>

    )
}
