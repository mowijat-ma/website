import { Post } from "@/types"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { getHomeTopNewsPosts } from "@/api/posts"
import { Description } from "../font/description"
import SectionTitle from "../font/section-title"
import Heading4 from "../font/h4"

export default async function NewsSection() {
    const [t, news] = await Promise.all([
        getTranslations("sections.news"),
        getHomeTopNewsPosts()
    ])
    return (
        <section className="mx-auto max-w-7xl bg-background p-8 rounded" dir="rtl">
            {/* Header */}
            <div className="flex justify-between items-center">
                <SectionTitle value={t("title")} />


            </div>

            <div className="flex flex-col gap-8">
                {news.map((post: Post) => (
                    <Link key={post.id} href={`/news/${post.id}`}>
                        <article className="group relative grid grid-cols-3 gap-8 items-start border">

                            <div className="w-full shrink-0 bg-muted h-full rounded-lg overflow-hidden border">
                                <img
                                    src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                                    className=" object-cover h-full border border-slate-100 group-hover:scale-105  transition-transform duration-200 aspect-video"
                                />
                            </div>

                            <div className="col-span-2 flex flex-col h-full pt-2 border">
                                <div className="flex items-center gap-4 mb-4 text-sm">
                                    <time className="text-slate-500">{post.date}</time>
                                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium text-xs">
                                        {post.category || "تسويق"}
                                    </span>
                                </div>

                                <Heading4 className="line-clamp-2 mb-4">{post.title}</Heading4>
                                <Description className="line-clamp-3">{post.description}</Description>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    )
}