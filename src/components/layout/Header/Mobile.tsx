"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IconContext } from "react-icons";
import { BiHomeAlt, BiCalendar, BiMessageDetail } from "react-icons/bi";
import { PiNewspaperBold } from "react-icons/pi";
import { FaRegRectangleList } from "react-icons/fa6";
import { cn } from "@/lib/utils"; // Standard shadcn utility
import { HouseIcon , NewspaperIcon , ArticleIcon , CalendarDotsIcon } from "@phosphor-icons/react";
import { TfiMicrophone } from "react-icons/tfi";

export default function HeaderMobile() {
  const t = useTranslations('layout.navLinks');
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
      title: t("cinema"),
      href: "/cinema",
      icon: <ArticleIcon   size={25}/>,
    },
    {
      id: 3,
      title: t("interviews_mobile"),
      href: "/interviews",
      icon: <TfiMicrophone   size={25} className=""/>,
    },
    {
      id: 4,
      title: t("critic"),
      href: "/critic",
      icon: <BiMessageDetail   size={25}/>,
    },
    {
      id: 5,
      title: t("calendar"),
      href: "/calendar",
      icon: <CalendarDotsIcon   size={25}/>,
    },
  ];
  
  return (
    <div className="sm:hidden bg-white/90 backdrop-blur-md border-t-2 fixed- bottom-0 right-0 left-0 z-50 pb-safe">
      <nav className="px-4 py-3-">
        <IconContext.Provider value={{ size: '24' }}>
          <div className="flex justify-around items-center gap-4">
            {MobileLinks.map((link) => {
              // Active state logic
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={cn(
                    "flex flex-col flex-1 items-center justify-center gap-1 transition-all duration-200 py-2",
                    isActive 
                      ? "text-primary scale-110- " 
                      : "text-muted-foreground- hover:text-primary "
                  )}
                >
                  <div className={cn(
                    "p-1 rounded-xl transition-colors",
                    isActive ? "bg-primary/10" : "bg-transparent"
                  )}>
                    {link.icon}
                  </div>
                  <span className="text-xs font-bold">
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