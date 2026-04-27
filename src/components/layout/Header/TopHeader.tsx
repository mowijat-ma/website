'use client'
import Link from "next/link"
import { IconContext } from "react-icons"
import { FaFacebook } from "react-icons/fa"
import { FaSquareInstagram, FaThreads } from "react-icons/fa6"

 const TopHeader = ()=>{
    return (
        <>
         <div className="border-b- bg-background py-2 ">
        <div className="lg:max-w-7xl max-w-3xl mx-auto w-full flex items-center justify-between px-4 sm:px-0 py-3">
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

                  <FaThreads />
                  <FaSquareInstagram/>
                  <FaFacebook />


                </IconContext.Provider>
            </div>
            {/* <div className="">mowijat.contact@gmail.com</div> */}
          </div>
        </div>
      </div>
        </>
    )
 }

 export default TopHeader