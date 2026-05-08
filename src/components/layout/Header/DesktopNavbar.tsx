"use client";

import { cn } from "@/lib/utils";
import { Menu, Search } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";



import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { SearchInput } from "@/components/ux/search-input";
// import { searchWpPosts } from "@/app/api/posts";
// import { LayoutSearch } from "./custom/search-input";
interface MenuItem {
  title: string;
  href?: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  menu = [

  ],
  className,
}: Navbar1Props) => {
  const t = useTranslations()
  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(true)
  const onClose = () => {
    setOpen(false)
  }


  const otherLinks = [
    {
      title: t('layout.otherLinks.about_'),
      href: "/about-us",
    },
    {
      title: t('layout.otherLinks.contact_us'),
      href: "/contact-us",
    },
    {
      title: t('layout.otherLinks.publish_in'),
      href: "",
    },
    {
      title: t('layout.otherLinks.terms'),
      href: "/terms",
    },
    {
      title: t('layout.otherLinks.team'),
      href: "/team",
    }
  ]
  // const t = useTranslations("layout")
  return (
    <section className={cn("w-full max-w-7xl mx-auto", className)}>
      <div className="">
        {/* Desktop Menu */}
        <nav className="items-center justify-between lg:flex hidden">
          <div className="flex items-center gap-6 w-full">
            {/* Logo */}
            {/* <a href={logo.url} className="items-center gap-2 flex md:hidden lg:flex">
              <img
                src={logo.src}
                className="max-h-8 max-w-8 dark:invert"
                alt={logo.alt}
              />

            </a> */}
            <div className="flex items-center gap-4 w-full flex-nowrap justify-between">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-4">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex gap-4">
                {/* <div className="bg-muted w-full flex items-center rounded-full p-3 py-1">
                      <MagnifyingGlassIcon size={25} className=""/>
                      <input type="text" className="w-full  border-none- p-none ring-none outline-none border-input-0 bg-transparent p-2" placeholder={t('ui.search.placeholder')}/>
                     </div> */}
                {/* <Dialog>
                  <DialogTrigger>
                  </DialogTrigger>
                  <DialogContent className="w-fit">
                    <DialogTitle /> 
                    <SearchForm />
                  </DialogContent>
                </Dialog> */}
                {/* <LayoutSearch /> */}

              </div>
            </div>
          </div>

        </nav>

        {/* Mobile Menu */}
        <div className="block sm:hidden fixed- top-0 py-4 bg-primary z-10 ">
          <div className="px-4 sm:px-0 flex gap-4 flex-row-reverse items-center justify-between">
            {/* Logo */}
            {/* <LayoutSearch /> */}
            <Sheet >
              <SheetTrigger asChild onClick={() => setOpen(!open)}>
                <Button size="icon" className="border-none">
                  <Menu className="size-7 font-thin" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto ">
                <SheetHeader>
                  <SheetTitle className="" />

                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item, onClose))}
                  </Accordion>

                  <Separator />

                  <div className="flex flex-col gap-3">
                    {otherLinks.map((item) => (
                      <Link key={item.title} href={item.href} className="text-md font-semibold">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  const t = useTranslations('layout.navLinks');
  const pathname = usePathname();
  let isActive = false
  if (item.href) {
    isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
  }

  // if (item.items && item.items.length > 0) {
  //   return (
  //     <NavigationMenuItem key={item.title}>
  //       <NavigationMenuTrigger className={cn(
  //         'text-lg font-semibold hover:bg-transparent',
  //       )}
  //       >{item.title}
  //       </NavigationMenuTrigger>
  //       <NavigationMenuContent className="bg-popover text-popover-foreground w-fit">
  //         {item.items.map((subItem) => (
  //           <NavigationMenuLink asChild key={subItem.title} className="w-">
  //             <SubMenuLink item={subItem} />
  //           </NavigationMenuLink>
  //         ))}
  //       </NavigationMenuContent>
  //     </NavigationMenuItem>
  //   );
  // }

  return (
    <Link
      // href={item.href}
      href={item.href || ''}
      key={item.title}
      className={cn(
        "font- group inline-flex items-center justify-center text-lg transition-colors border-b-[3px] py-4 px-3",
        isActive ? "text-primary border-b-primary" : "border-transparent",

      )}

    >
      {t(item.title)}
    </Link>
    // <NavigationMenuItem key={item.title}>
    // </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, onClose: () => void) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md font-semibold hover:no-underline">
          <span className="[data-state=open]:text-primary">
            {item.title}
          </span>
        </AccordionTrigger>
        <AccordionContent className="mt-2 bg-muted rounded">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>

      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.href || ''} className="text-md font-semibold" onClick={onClose}>
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.href}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );

};

const DesktopNavbar = ({
  links
}: {
  links: Array<{
    title: string
    href?: string
    items?: Array<{ title: string; href: string }>
  }>
}) => {
  return (<>
    <nav className="w-full flex items-center justify-between gap-8 text-nowrap">
      <div className="flex gap-4">
          {/* <NavigationMenu> */}
          {links.map((item) => renderMenuItem(item))}
          {/* </NavigationMenu> */}
      </div>
      <div className="grow w-full border">
        <SearchInput />
        {/* <div className="bg-muted p-2 rounded flex">
          <input type="text" className="w-full border-none outline-none bg-transparent" placeholder="Search..." />

        </div> */}
      </div>
    </nav>
  </>)
}

export default DesktopNavbar;

