'use client'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function ModalWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
    const  [open, setOpen]= useState(true)
    const router = useRouter()
    const handleChange = ()=>{
        if(open){
            setOpen(false)
            router.back()

        }
    }
    return (
        // <dialog className="fixed bottom-0 sm:bottom-auto sm:top-1/2 left-0 right-0 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:max-w-2xl h-[85vh] sm:h-auto rounded-t-3xl sm:rounded-2xl ...">
        //     {children}
        // </dialog>.

        // <div className="w-screen h-screen z-100 fixed top-0 right-0">
        //     {children}
        // </div>
        <Drawer open={open} onOpenChange={handleChange}>
            {/* <DrawerTrigger>Open</DrawerTrigger> */}
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle></DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                {children}
                <DrawerFooter>
                    {/* <DrawerClose>
                        <Button variant="outline">Back</Button>
                    </DrawerClose> */}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}