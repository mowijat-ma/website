"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IconContext } from "react-icons";
import { BiHomeAlt, BiCalendar, BiMessageDetail } from "react-icons/bi";
import { PiNewspaperBold } from "react-icons/pi";
import { FaRegRectangleList } from "react-icons/fa6";
import { cn } from "@/lib/utils"; // Standard shadcn utility
import { HouseIcon , NewspaperIcon , ArticleIcon , CalendarDotsIcon, MagnifyingGlassIcon, LightningIcon } from "@phosphor-icons/react";
import { TfiMicrophone } from "react-icons/tfi";
import { Route } from "next";

export default function MobileNavigation() {
  const t = useTranslations('navigation.links');
  const pathname = usePathname();

  const MobileLinks = [
    {
      id: 1,
      title: t("home"),
      href: "/",
      icon: <HouseIcon size={25} />,
    },
    
    {
      id: 2,
      title: t("news"),
      href: "/news",
      icon: <LightningIcon   size={25}/>,
    },
    {
      id: 3,
      title: t("articles"),
      href: "/articles",
      icon: <ArticleIcon   size={25} className=""/>,
    },
    {
      id: 4,
      title: t("search"),
      href: "/search",
      icon: <MagnifyingGlassIcon   size={25}/>,
    },
    // {
    //   id: 5,
    //   title: t("calendar"),
    //   href: "/calendar",
    //   icon: <CalendarDotsIcon   size={25}/>,
    // },
  ];
  
  return (
    <div className="sm:hidden bg-white backdrop-blur-md- border-t-2- fixed bottom-0 right-0 left-0 z-50 pb-safe lg:w-7xl mx-auto border-t ">
      <nav className="px-4- py-">
        <IconContext.Provider value={{ size: '24' }}>
          <div className="flex justify-around items-center gap-4">
            {MobileLinks.map((link) => {
              // Active state logic
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));              return (
                <Link
                  key={link.id}
                  href={link.href as Route}
                  className={cn(
                    "flex flex-col flex-1 items-center justify-center gap-1 transition-all duration-200 py-3",
                    isActive 
                      ? "text-primary scale-110- " 
                      : "text-muted-foreground- hover:text-primary"
                  )}
                >
                  <div className={cn(
                    "px-1 rounded-xl transition-colors",
                    isActive ? "bg-primary/10" : "bg-transparent"
                  )}>
                    {link.icon}
                  </div>
                  <span className="text-sm leading-normal font-">
                    {link.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </IconContext.Provider>
      </nav>
    </div>
  );
}