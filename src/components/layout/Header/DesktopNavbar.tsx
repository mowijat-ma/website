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
import { Route } from "next";
// import { searchWpPosts } from "@/app/api/posts";
// import { LayoutSearch } from "./custom/search-input";
interface MenuItem {
  title: string;
  href?: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}


const renderMenuItem = (item: MenuItem, t: ReturnType<typeof useTranslations>, pathname: string) => {
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
      href={item.href as Route}
      key={item.title}
      className={cn(
        "font- group inline-flex items-center justify-center text-lg transition-colors border-b-[3px] py-4 px-3 font",
        isActive ? "text-primary border-b-primary" : "border-transparent",

      )}

    >
      {t(item.title)}
    </Link>
    // <NavigationMenuItem key={item.title}>
    // </NavigationMenuItem>
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
  const pathname = usePathname()
  const t = useTranslations('navigation.links');
  const isSearchPath = pathname === "/search";
  return (<>
    <nav className="w-full items-center justify-between gap-8 text-nowrap hidden md:flex">
      <div className="gap-4 hidden sm:flex">
          {/* <NavigationMenu> */}
          {links.map((item) => renderMenuItem(item, t, pathname))}
          {/* </NavigationMenu> */}
      </div>
      <div className="grow w-full border-mesure">
       {!isSearchPath && <SearchInput />}
        {/* <div className="bg-muted p-2 rounded flex">
          <input type="text" className="w-full border-none outline-none bg-transparent" placeholder="Search..." />

        </div> */}
      </div>
    </nav>
  </>)
}

export default DesktopNavbar;

