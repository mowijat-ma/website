import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio";
import { Separator } from "../ui/separator";
import { WpPost } from "@/types";
// import { getWpMoreReads } from "@/app/api/posts";
import { getTranslations } from "next-intl/server";
import { getWpMoreReads } from "@/api/posts";

export default async function HomeTopReadsAside({}: any) {
    // const t= useTranslations("sections.more_reads")
    // const data =await getWpMoreReads()
    const [t, data] = await Promise.all([
      getTranslations("sections.more_reads"),
      getWpMoreReads()
    ])
    return (
        <aside className=""> {/* هنا السحر: sticky + top-24 */}
            <div className="bg-background border-primary border-none rounded p-8">
              <div className="mb-6">
                <h3 className="text-primary text-xl font-bold border-r-4 border-primary pr-3">
                  {t('title')}
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                {data?.slice(0, 5)?.map((item: any, i:number) => (
                  
                  <Link href={""} className="group py-2 grid grid-cols-3 gap-8" key={i}>
                    <img src={item.image} className="object-cover rounded aspect-square w-full col-span-1" />
                    {/* <AspectRatio className="max-w-20">
                    </AspectRatio> */}
                    <div className="col-span-2">

                    <h3 
                      dangerouslySetInnerHTML={{ __html: item.title }} 
                      className="text-base leading-snug font-semibold group-hover:text-primary transition-colors line-clamp-2" 
                      />
                    <span className="text-muted-foreground text-md mt-1 block">
                      {item.date}
                    </span>
                    <span className="text-primary text-md mt-1 block">
                      {item.category}
                    </span>
                      </div>
                  </Link>
                  // {i !== data.length - 1 && <Separator className="my-2 opacity-50"/>}
                  
                ))}
              </div>
            </div>
          </aside>
    )
}