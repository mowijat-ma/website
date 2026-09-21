"use client"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SearchInput } from "@/components/ux/search-input";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {ListIcon} from "@phosphor-icons/react"
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
export default function MobileHeader({  links}: { links: { title: string; href?: string }[] }) {
  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(true)
  const router = useRouter()

  const pathname = usePathname()
  const isSearchPath = pathname === "/search";
  
  const [isVisible, setIsVisible] = useState(true);
  
      // مراقبة التمرير لإظهار أو إخفاء الزر
      useEffect(() => {
          const toggleVisibility = () => {
            // console.log(window.scrollY)
              // يظهر الزر بعد التمرير لأسفل بمقدار 300 بكسل
              if (window.scrollY > 70) {
                  setIsVisible(false);
              } else {
                  setIsVisible(true);
              }
          };
  
          window.addEventListener("scroll", toggleVisibility);
          return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);
  // check if this page
  return (
    <div className="md:hidden flex gap-4 bg-background-t py-4 items-center justify-between">
      <Sheet >
        <SheetTrigger asChild onClick={() => setOpen(!open)}>
          <button  className="border-none ">
            <ListIcon className="font-thin+-" size={24} />
          </button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto ">
          <SheetHeader className="bg-background border-mesure-">
            <SheetTitle className="" />

          </SheetHeader>

        </SheetContent>
      </Sheet>
      
      {!isSearchPath && <SearchInput />}
      {/* <div className={`${isVisible ? "hidden": ""}`}>
        <Image src='/logos/Vector.png' alt="logo" width={100} height={48}>

        </Image>
      </div> */}
    </div>
  );
}

