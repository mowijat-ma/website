'use client'
import { socialLinks } from "@/data/social"
import Link from "next/link"
import { IconContext } from "react-icons"
import { FaFacebook } from "react-icons/fa"
import { FaSquareInstagram, FaThreads } from "react-icons/fa6"

 const LogoBar = ()=>{
    const links = socialLinks
    return (
        <div className="lg:max-w-7xl w-full mx-auto flex items-center justify-between px-12 py-3 bg-background">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/logos/logo_light_1.png" 
              className="h-12 dark:invert" 
              alt="Mowijat Logo" 
            />
            {/* <span className="hidden sm:block text-lg font-semibold">موجات</span> */}
          </Link>
          <div className="">

            <div className="flex gap-2 justify-end">
              <IconContext.Provider value={{ size: '25', className: "text-primary" }}>

                  {links.map(link=>(
                    <Link key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon />
                    </Link>
                  ))}


                </IconContext.Provider>
            </div>
            {/* <div className="">mowijat.contact@gmail.com</div> */}
          </div>
        </div>
    )
 }

 export default LogoBar