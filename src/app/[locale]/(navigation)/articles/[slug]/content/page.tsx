import './style.css'
import { getWpPostById } from "@/api/posts";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import Article from "@/components/font/body";
import SameAuthorSection from "@/components/sections/SameAuthorSection";
import Heading2 from "@/components/font/h2";
import Heading4 from "@/components/font/h4";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ArticleContentCtrl from '@/components/asides/ArticleContentCtrl';
import BreadcrumbGenerator from '@/components/ux/breadcrumb-generator';
import { title } from 'process';
import { BreadCrumbLinksType } from '@/types';

// Ensure you are destructuring params from the component props
export default async function PostContentPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    // 1. Await params in Next.js 15+ 
    const { slug } = await params;

    const [t, tNavigation, data] = await Promise.all([
        getTranslations("pages.articles"),
        getTranslations("navigation.links"),
        getWpPostById(slug)
    ]);
    const post = {
        id: "",
        title: "عنوان المقال",
        description: "وصف مختصر للمقال يشرح محتواه بشكل جذاب ويشجع القارئ على قراءة المزيد.",
        date: new Date().toLocaleDateString('ar-EG', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        category: "سينما",
        image: "https://source.unsplash.com/random/800x600?cinema",
        content: data.content
    };

    const breadcrumbLinks : BreadCrumbLinksType[] = [
        {
            title: tNavigation("home"),
            href: "/"
        }, 
        {
            title: tNavigation("articles"),
            href: "/articles"
        },
        {
            title: data.category,
            href: "/articles"
        }, 
    ]
    return (<>
        <BreadcrumbGenerator currentPage={data.title} links={breadcrumbLinks} />
        
        <div className="grid grid-cols-12 gap-8 direction-reverse" >

            <div className="sm:col-span-8 col-span-12">
                {/* <div className="sm:hidden">
                    <ArticleContentCtrl />
                </div> */}
                <div className="rounded-lg bg-background px-8 py-4 sm:px-8 sm:py-8">

                    <div className=" ">
                        {/* {slug} */}
                        <img src={data.image} alt="" className={cn("aspect-square object-cover rounded w-full")} />
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-4 my-4 sm:my-8">
                        <Heading2

                            className="font-semibold"
                        >{data.title}</Heading2>
                        <div className="flex items-center gap-2 text-left">
                            <span className="text-muted-foreground text-sm">
                                {data.date}
                            </span>
                            <span className="text-muted-foreground text-sm">·</span>
                            <span className="text-muted-foreground text-sm">
                                {data.category}
                            </span>
                        </div>
                    </div>
                    {/* <Separator className="my-4 sm:my-8 max-w-[95%] mx-auto" /> */}
                    <Article className='text-justify'>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </Article>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4 hidden sm:block">
                <div className="sticky top-24 h-fit flex flex-col gap-8">
                    <ArticleContentCtrl />
                    <div className="bg-background rounded-lg px-8 py-8 min-h-[50vh] hidden sm:block">
                        <aside className="w-full 0">
                            <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-2 font-sans">
                                إعلان ممول
                            </span>

                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="group block space-y-3">
                                <div className=" w-full bg-slate-200 rounded-xl overflow-hidden relative">
                                    <img
                                        // src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500"
                                        src={"https://hips.hearstapps.com/hmg-prod/images/lead-square-v3-1631889822-6877ed0eacb2d-update-6881279f28e10.jpg?crop=1.00xw:1.00xh;0,0&resize=1120:*"}
                                        alt="إعلان سينمائي"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                                        اكتشف أحدث العروض السينمائية والورش الثقافية هذا الشهر
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-1">احجز تذكرتك الآن عبر المنصة</p>
                                </div>
                            </a>
                        </aside>
                    </div>
                </div>
            </div>
            <div className="col-span-12">
                <SameAuthorSection />
            </div>
        </div>
    </>)
}