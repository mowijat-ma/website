// import { Navbar1 } from "@/components/navbar"
import { NAVIGATION_LINKS } from "@/data/navigation"
import { useTranslations } from "next-intl"
import DesktopNavbar  from "./DesktopNavbar"
import LogoBar from "./LogoBar"
// import MobileNavbar from "./MobileNavbar"
import { Separator } from "@/components/ui/separator"
import MobileNavigation from "./MobileNavbar"
import MobileHeader from "./MobileHeader"

interface HeaderProps {
  links?: Array<{
    title: string
    href?: string
    items?: Array<{ title: string; href: string }>
  }>
}

const Header = () => {
  const t = useTranslations('layout.navLinks')
  

  return <header className="lg:max-w-6xl w-full mx-auto bg-background px-4 border-mesure print:hidden">
  {/* <Navbar1 menu={links} /> */}
  {/* <LogoBar /> */}
    {/* <Separator className="my-2" /> */}
    <DesktopNavbar links={NAVIGATION_LINKS || []} />
    <MobileHeader links={NAVIGATION_LINKS || []} />
    <MobileNavigation />
  </header>
}

export default Header
