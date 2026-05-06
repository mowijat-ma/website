import { WpPost } from "@/types"
import { useTranslations } from "next-intl"
import Link from "next/link"
// import { AspectRatio } from "../../../../frontend/src/components/ui/aspect-ratio"
// import { getWpNewsPosts } from "@/app/api/posts"
import { cn } from "@/lib/utils"
// import TitleWithBar from "../../../../frontend/src/components/typoghraphy/title-with-bar"
import { getTranslations } from "next-intl/server"
import { getHomeTopNewsPosts } from "@/api/posts"
import { AspectRatio } from "../ui/aspect-ratio"
import PostDescription from "../font/description"
import PostTitle from "../font/title"
import SectionTitle from "../font/section-title"

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
                
                {/* <Link href="/news" className="text-sm font-semibold text-primary hover:opacity-70 transition-opacity">
                    تصفح المزيد ←
                </Link> */}
            </div>

            {/* News List - One column layout for the specific image design */}
            <div className="flex flex-col gap-8">
                {news.map((post: WpPost) => (
                                <Link key={post.id} href={`/news/${post.id}`}>
                    <article  className="group relative grid grid-cols-3 gap-8 items-start border">
                        
                        {/* 1. Image Section (Fixed aspect ratio with soft corners) */}
                            <div className="w-full shrink-0 bg-muted h-full rounded-lg overflow-hidden border">
                                <img
                                    src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                                    // alt={post.title}
                                    className=" object-cover- h-full border border-slate-100 group-hover:scale-105  transition-transform duration-200 aspect-video"
                                />
                            </div>

                        {/* 2. Content Section */}
                        <div className="col-span-2 flex flex-col h-full pt-2 border">
                            {/* Meta: Date & Category */}
                            <div className="flex items-center gap-4 mb-4 text-sm">
                                <time className="text-slate-500">{post.date}</time>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium text-xs">
                                    {post.category || "تسويق"}
                                </span>
                            </div>

                            {/* Title */}
                                <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} className="" />

                            {/* Description */}
                            <PostDescription dangerouslySetInnerHTML={{ __html: post.description }} className=""/>

                        </div>
                    </article>
                </Link>
                ))}
            </div>
        </section>
    )
}