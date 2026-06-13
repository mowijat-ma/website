import { getWpCategories } from "@/api/categories";
import { WpCategory } from "@/types";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import DeviceDetector from "node-device-detector";
import DeviceHelper from "node-device-detector/helper";
export default async function ArticlesPage() {

    //  const detector = new DeviceDetector();
    // const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
    // const result = detector.detect(userAgent);

    const [t, tNavigation, data] = await Promise.all([
        getTranslations("pages.articles"),
        getTranslations("navigation.links"),
        getWpCategories()

    ])
    const links = [
        {
            title: tNavigation("cinema.morrocan"),
            href: "/cinema/morrocan"
        },
        {
            title: tNavigation("cinema.arabe"),
            href: ""
        },
        {
            title: tNavigation("cinema.world"),
            href: ""
        },
        {
            title: tNavigation("critic"),
            href: ""
        },
        {
            title: tNavigation("arts"),
            href: ""
        },
    ]
    return (
        <div>
            <div className="grid grid-cols-4 gap-8 p-8">
                {/* <div className="bg-muted rounded-g p-4 col-span-2 text-center">
                    {tNavigation("cinema.morrocan")}
                </div>
                <div className="bg-muted rounded-g p-4 col-span-2 text-center">
                    {tNavigation("cinema.arabe")}
                </div>
                <div className="bg-muted rounded-g p-4 col-span-2 text-center">
                    {tNavigation("cinema.world")}
                </div>
                <div className="bg-muted rounded-g p-4 col-span-2 text-center">
                    {tNavigation("critic")}
                </div>
                <div className="bg-muted rounded-g p-4 col-span-2 text-center">
                    {tNavigation("arts")}
                </div> */}
                {data.map((link, i)=> <div className="" key={i}>
                    {renderLinkCard({link})}
                </div> )}
            </div>
        </div>
    )
}


const renderLinkCard = ({ link }: {link: WpCategory}) => {
    return (
        <Link href="" className="relative bg-background rounded-lg border p-4 col-span-2 text-center w-full flex flex-col justify-center items-center h-full">
            <div className="">
            {link.name}
            </div>
           <span className="text-xs text-muted-foreground">
            
             {link.description}
           </span>

        <span className="absolute -top-2 -left-2 w-6 h-6 border rounded-full text-xs bg-primary text-white flex items-center justify-center">
            {link.count > 99 ? '+99': link.count}
        </span>
        {/* {JSON.stringify(link.)} */}
        </Link>

    )
}