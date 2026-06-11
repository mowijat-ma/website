'use client'

import { useRouter } from "next/navigation";
import { BiShare } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { PiLinkSimpleHorizontal, PiPrinter } from "react-icons/pi";

export default function ArticleContentCtrl(){
    const router = useRouter();
    return (<>
        <div className="border-mesure bg-background rounded-lg flex w-full h-fit">
                    <button
                        className="grow text-center flex flex-col justify-center items-center gap-2 font-semibol  py-4 ">
                        <GoArrowRight size={22} />
                        رجوع
                    </button>
                    <button
                        className="grow text-center flex flex-col justify-center items-center gap-2 font-semibol  py-4">
                        <FiHeart size={22} />
                        حفظ
                    </button>
                    <button
                        className="grow text-center flex flex-col justify-center items-center gap-2 font-semibol  py-4">
                        <PiPrinter size={22} />
                        طباعة
                    </button>
                    <button
                        className="grow text-center flex flex-col justify-center items-center gap-2 font-semibol  py-4">
                        <BiShare size={22} />
                        ارسال
                    </button>
                    <button
                        className="grow text-center flex flex-col justify-center items-center gap-2 font-semibol  py-4">
                        <PiLinkSimpleHorizontal size={22} />
                        ارسال
                    </button>
                </div>
    </>)
}