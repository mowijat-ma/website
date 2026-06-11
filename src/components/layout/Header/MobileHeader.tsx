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
import { useState } from "react";
import {ListIcon} from "@phosphor-icons/react"
import { usePathname, useRouter } from "next/navigation";
export default function MobileHeader({  links}: { links: any[] }) {
  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(true)
  const router = useRouter()

  const pathname = usePathname()
  const isSearchPath = pathname === "/search";
  
  // check if this page
  return (
    <div className="md:hidden flex gap-4 bg-background- py-4 items-center justify-between">
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
    </div>
  );
}

