// import { Footer2 } from "@/components/footer2"
import { socialLinks } from "@/data/social"
// import { IconContext } from "@phosphor-icons/react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Logo, LogoImage } from "../Logo"
import { Separator } from "@/components/ui/separator"
// import { Fo } from "@/data/navigation"
import { IconContext } from "react-icons"
import { FOOTER_LINKS } from "@/data/navigation"

interface FooterLink {
  id?: number
  title: string
  href: string
}

interface FooterProps {
  links?: FooterLink[]
}

const Footer = () => {
  const t = useTranslations()
  const links = FOOTER_LINKS || []

    return (<>
      <section className=" bg-white border-t border-mesure">
        <footer className="border-mesure lg:max-w-6xl px-4 py-8 w-full mx-auto">
          {/* <Footer2 menuItems={menuItems} tagline={t('footer.tagline')} /> */}
          <div className="border-mesure">
          <div className="grid md:grid-cols-12 gap-8 text-center sm:text-start ">
{/* {JSON.stringify(menuItems)}
{menuItems.length} */}
            {links?.length > 0 && links.map((section, sectionIdx) => (
              <div key={sectionIdx} className="col-span-4 flex flex-col border-mesure">
                <h3 className="mb-4 font-bold">{t(section.title)}</h3>
                <ul className="space-y-4 text-muted-foreground ">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium group w-full"
                    >
                      <Link href={link.href} className="group-hover:text-primary group-hover:underline">
                        {t(link.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-4 sm:mb-8 lg:mb-0 flex flex-col items-center sm:items-center justify-center gap-8 border-mesure">
              <Logo url="/" className="flex items-center gap-2 w-full border-mesure  max-w-48">
                <LogoImage
                  src={'/logos/logo_light_1.png'}
                  alt={'logo.alt'}
                  className="w-full"
                />
              </Logo>
              {/* {tagline && <p className="mt-4 text-sm font-medium text-muted-foreground text-left">{tagline}</p>} */}
              <div className="flex gap-2 justify-end">

                  {socialLinks.map(link=>(
                    <Link key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon  size='25' className="text-primary"  />
                    </Link>
                  ))}


              </div>

            </div>
          </div>
          <Separator role="presentation" className="my-4 sm:my-10" />
          <div className="flex flex-col justify-center gap-4 text-base font-semibold text-muted-foreground md:flex-row md:items-center text-center sm:text-start">
            <p>{t('footer.copyright')}</p>
  
          </div>
        </div>
        </footer>
      </section>
    </>)
}

export default Footer
