// import { Navbar1 } from "@/components/navbar"
import { navigationLinksWithIntl } from "@/data/navigation"
import { useTranslations } from "next-intl"
import { Navbar1 } from "./navbar"

interface HeaderProps {
  links?: Array<{
    title: string
    href?: string
    items?: Array<{ title: string; href: string }>
  }>
}

const Header = () => {
  const t = useTranslations('layout.navLinks')
  
  const links = navigationLinksWithIntl(t)
  return <Navbar1 menu={links} />
}

export default Header
