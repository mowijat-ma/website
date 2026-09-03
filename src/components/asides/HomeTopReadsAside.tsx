import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio";
import { Separator } from "../ui/separator";
import { WpPost } from "@/types";
// import { getWpMoreReads } from "@/app/api/posts";
import { getTranslations } from "next-intl/server";
import { getHomeTopReadsPosts, getWpMoreReads } from "@/api-services/posts";
import SectionTitle from "../font/section-title";
import Heading3 from "../font/h3";
import Heading4 from "../font/h4";

export default async function HomeTopReadsAside({ }: any) {
  // const t= useTranslations("sections.more_reads")
  // const data =await getWpMoreReads()
  const [t, data] = await Promise.all([
    getTranslations("sections.more_reads"),
    getHomeTopReadsPosts()
  ])
  return (
    <aside className="border-mesure"> {/* هنا السحر: sticky + top-24 */}
      <div className="bg-background border-primary border-none rounded p-8">
        <div className="mb-6">
          <SectionTitle >{t("title")}</SectionTitle>
        </div>
        <div className="flex flex-col gap-2">
          {data?.slice(0, 5)?.map((post: any, i: number) => (

            <Link
              href="#"
              // href={{ pathname: "/articles/[id]/content", query: { id: post.id } }}  
              className="group py-2 grid grid-cols-3 gap-4" key={i}>
              {/* <img src={post.image} className="object-cover rounded aspect-square h-full col-span-1" /> */}
              {/* <AspectRatio className="max-w-20">
                    </AspectRatio> */}
              <div className="col-span-3">

                {/* <h3
                  dangerouslySetInnerHTML={{ __html: post.title }}
                  className="text-base leading-snug font-semibold group-hover:text-primary transition-colors line-clamp-2"
                /> */}
                <Heading4  dangerouslySetInnerHTML={{ __html: post.title }} className="text-justify"/>
                <div className="flex gap-4">
                  <span className="text-primary text-md mt-1 block">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground text-md mt-1 block">
                    {post.date}
                  </span>
                </div>
              </div>
            </Link>
            // {i !== data.length - 1 && <Separator className="my-2 opacity-50"/>}

          ))}
        </div>
      </div>
    </aside>
  )
}