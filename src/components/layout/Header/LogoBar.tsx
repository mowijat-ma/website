'use client'
import { socialLinks } from "@/data/social"
import { Route } from "next"
import Link from "next/link"
import { IconContext } from "react-icons"
import { FaFacebook } from "react-icons/fa"
import { FaSquareInstagram, FaThreads } from "react-icons/fa6"

 const LogoBar = ()=>{
    const links = socialLinks
    return (
        <div className="lg:max-w-6xl w-full mx-auto flex items-center justify-between px-4 pt-4 bg-background">
          <Link href={"/" as Route} className="flex items-center gap-2">
            <img 
              src="/logos/logo_light_1.png" 
              className="h-12 dark:invert  hidden sm:block" 
              alt="Mowijat Logo" 
            />
            <img src="/logos/vector.png" className="h-8 dark:invert sm:hidden" 
              alt="Mowijat Logo"/>
            {/* <span className="hidden sm:block text-lg font-semibold">موجات</span> */}
          </Link>
          <div className="">

            <div className="flex gap-2 justify-end">
              <IconContext.Provider value={{ size: '25', className: "text-primary" }}>

                  {links.map(link=>(
                    <Link key={link.id} href={link.href as Route} target="_blank" rel="noopener noreferrer">
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