import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio";
import { Separator } from "../ui/separator";
import { WpPost } from "@/types";
// import { getWpMoreReads } from "@/app/api/posts";
import { getTranslations } from "next-intl/server";
import { getWpMoreReads } from "@/api-services/posts";
import SectionTitle from "../font/section-title";

export default async function RelatedArticlesAside({}: any) {
    // const t= useTranslations("sections.more_reads")
    // const data =await getWpMoreReads()
    const [t, data] = await Promise.all([
      getTranslations("asides.related_articles"),
      getWpMoreReads()
    ])
    return (
        <aside className="bg-background"> {/* هنا السحر: sticky + top-24 */}
            <div className="border-primary border-none rounded p-8 ">
              <div className="mb-6">
                <SectionTitle >{t("title")}</SectionTitle>
              </div>
              <div className="flex flex-col gap-2">
                {data?.slice(0, 5)?.map((item: any, i:number) => (
                  
                  <Link 
                  // href={{pathname: 'href={`/cinema/[id]/content`}', query: {
                  //   id: item.id
                  // }}}
                  href="#"
                  className="group py-2 grid grid-cols-2 gap-8" key={i}>
                    {/* <img src={item.image} className="object-cover rounded aspect-square w-full col-span-1" /> */}
                    {/* <AspectRatio className="max-w-20">
                    </AspectRatio> */}
                    <div className="col-span-2">

                    <h3 
                      dangerouslySetInnerHTML={{ __html: item.title }} 
                      className="text-base leading-snug font-semibold group-hover:text-primary transition-colors line-clamp-2" 
                      />
                    <span className="text-primary text-md mx-1">
                      {item.category}
                    </span>
                    <span className="text-muted-foreground text-md mx-1">
                      {item.date}
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

export function RelatedArticlesAsideLoader (){
  return (
    <>
    <aside className="bg-background rounded p-8">

    <SectionTitle >Lorme</SectionTitle>
    {[0,2,3,4].map((item, i)=>(
      <div className="group py-2 grid grid-cols-2 gap-8" key={i}>
                    {/* <img src={item.image} className="object-cover rounded aspect-square w-full col-span-1" /> */}
                    {/* <AspectRatio className="max-w-20">
                    </AspectRatio> */}
                    <div className="col-span-2">

                    <h3 
                      // dangerouslySetInnerHTML={{ __html: item.title }} 
                      className="text-base leading-snug font-semibold group-hover:text-primary transition-colors line-clamp-2 p-2 w-full bg-muted" 
                      />
                    </div>
                  </div>
    ))}
    </aside>
    </>
  )
}