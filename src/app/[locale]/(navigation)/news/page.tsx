
import { BreadCrumbLinksType, WpPost } from "@/types";
import Link from "next/link";
// import { AspectRatio } from "../ui/aspect-ratio";
import { getTranslations } from "next-intl/server";
// import SectionTitle from "../font/section-title";
import { getCinemaArabeWpPosts } from "@/api/posts";
import SectionTitle from "@/components/font/section-title";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getNewsPagePosts } from "@/api/news";
import Heading1 from "@/components/font/h1";
import Heading2 from "@/components/font/h2";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Heading4 from "@/components/font/h4";
import { Description } from "@/components/font/description";
import Heading3 from "@/components/font/h3";
import { Calendar } from "@/components/ui/calendar";
import CalendarAside from "@/components/asides/CalendarAside";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Heading } from "lucide-react";
import { Metadata } from 'next';
import BreadcrumbGenerator from "@/components/ux/breadcrumb-generator";
type Props = { params: Promise<{ slug: string }> };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;
//   const post = await fetch(`https://api.example.com/posts/${slug}`).then(res => res.json());

//   return {
//     title: `${post.title} | My Blog`,
//     description: post.excerpt,
//     alternates: {
//       canonical: `https://example.com/blog/${slug}`,
//     },
//   };
// }
export default async function NewsPage() {

    const [t, ui, tNavigation, data] = await Promise.all([
        getTranslations("pages.news"),
        getTranslations("ui"),
        getTranslations("navigation.links"),
        getNewsPagePosts()
    ])
    const mainArticle = data[0]
    const sideArticle = data[1]
    const wideAricles = data.slice(1, data.length)
    // return (<>

    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    //         <div className="col-span-2">
    //             <div className="bg-background px-8 py-8 grid- grid-cols-2- gap-8">
    //                 <div className="col-span-12">
    //                     <Heading2 className="text-primary ">{t("title")}</Heading2>
    //                     <Heading3 className="text-primary">{t("subtitle")}</Heading3>
    //                 </div>
    //                 {/* <div className="flex flex-col gap-4 mb-8">
    //                 <Heading1 className="text-primary">{t("title")}</Heading1>
    //                 <Heading2 className="text-primary">{t("subtitle")}</Heading2>
    //             </div> */}
    //                 <div className="col-span-9 bg-background aspect-video- overflow-hidden rounded-lg relative h-full">
    //                     <img src={mainArticle.image} alt="" className="w-full h-full object-cover" />
    //                     <div className="absolute bottom-0 left-0 w-full h-[70%] bg-linear-to-t from-black/80 to-transparent p-4 z- flex flex-col items- justify-end">
    //                         <h1 className="text-2xl font-bold text-white" dangerouslySetInnerHTML={{ __html: mainArticle.title }} />
    //                         <p className="text-white/70 text-sm leading-normal">
    //                             {mainArticle.description}
    //                         </p>
    //                     </div>
    //                 </div>

    //             </div>
    //             <div className="mx-auto px-8 py-8 bg-background border-mesure-" dir="rtl">

    //                 <section>

    //                     <div
    //                         className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
    //                         role="list"
    //                     >
    //                         {wideAricles.map((post: WpPost, i: number) => (
    //                             <Link href="#" key={i} className="group block">
    //                                 {/* Blog Card */}
    //                                 <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
    //                                     {/* Image Wrapper */}
    //                                     <AspectRatio
    //                                         ratio={4 / 3}
    //                                         className="overflow-hidden rounded-lg bg-muted"
    //                                     >
    //                                         <img
    //                                             src={post.image || "https://ui.shadcn.com/placeholder.svg"}
    //                                             alt={`${post.title} thumbnail`}
    //                                             // fill
    //                                             className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
    //                                         />
    //                                     </AspectRatio>

    //                                     {/* Post Content */}
    //                                     <div className="flex flex-col gap-3">

    //                                         <Heading4 className="line-clamp-2">{sideArticle.title}</Heading4>
    //                                         <Description className="line-clamp-2">{sideArticle.description}</Description>
    //                                     </div>
    //                                 </div>
    //                             </Link>
    //                         ))}
    //                     </div>
    //                     <Pagination className="mt-10 justify-center">
    //                         <PaginationContent>
    //                             <PaginationItem>
    //                                 <PaginationPrevious href="#" text={ui("pagination.previous")} />
    //                             </PaginationItem>
    //                             <PaginationItem>
    //                                 <PaginationLink href="#">1</PaginationLink>
    //                             </PaginationItem>
    //                             <PaginationItem>
    //                                 <PaginationLink href="#" isActive>
    //                                     2
    //                                 </PaginationLink>
    //                             </PaginationItem>
    //                             <PaginationItem>
    //                                 <PaginationLink href="#">3</PaginationLink>
    //                             </PaginationItem>
    //                             <PaginationItem>
    //                                 <PaginationEllipsis />
    //                             </PaginationItem>
    //                             <PaginationItem>
    //                                 <PaginationNext href="#" text={ui("pagination.next")} />
    //                             </PaginationItem>
    //                         </PaginationContent>
    //                     </Pagination>
    //                 </section>
    //             </div>
    //         </div>
    //         <div className="col-span-1 hidden md:block sticky top-24 h-full border-mesure">
    //             <CalendarAside />
    //         </div>
    //     </div>
    // </>)
    
    const breadcrumbLinks : BreadCrumbLinksType[] = [
            {
                title: tNavigation("home"),
                href: "/"
            }, 
            {
                title: tNavigation("articles"),
                href: "/articles"
            }, 
            
        ]
    return (
        <>
        <BreadcrumbGenerator currentPage={tNavigation("news")} links={breadcrumbLinks} />
        <div className="grid grid-cols-12 gap-8 items-start">
                
                <div className="md:col-span-8 col-span-12 flex flex-col gap-8 border-mesure">
                    <div className="bg-background px-3 sm:px-8 py-3 sm:py-8">

                        <Heading2 className="mb-4 text-primary">{t('title')}</Heading2>
                        <Description>{t('subtitle')}</Description>
                        
                        <div className="col-span-9 bg-background aspect-video- overflow-hidden rounded-lg relative h-full mt-8">
                            <Link href="#" className="group block">
                                <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                                    <AspectRatio ratio={4 / 2} className="overflow-hidden rounded-lg bg-muted border">
                                        <img
                                            src={mainArticle.image || "https://ui.shadcn.com/placeholder.svg"}
                                            className="h-full w-full object-cover "
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <div className="flex flex-col gap-3">
                                        <Heading3 className="line-clamp-2">{mainArticle.title}</Heading3>
                                        <Description className="line-clamp-3">{mainArticle.description}</Description>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                    <div className="mx-auto px-3 sm:px-8 py-3 sm:py-8 bg-background border-mesure-" dir="rtl">

                        <section>

                            <div
                                className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-3"
                                role="list"
                            >
                                {wideAricles.map((post: WpPost, i: number) => (
                                    <Link href="#" key={i} className="group block">
                                        {/* Blog Card */}
                                        <div className="flex flex-col gap-4 rounded-md transition-all duration-200">
                                            {/* Image Wrapper */}
                                            <AspectRatio
                                                ratio={4 / 3}
                                                className="overflow-hidden rounded-sm bg-muted"
                                            >
                                                <img
                                                    src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                                                    alt={`${post.title} thumbnail`}
                                                    // fill
                                                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                                                />
                                            </AspectRatio>

                                            {/* Post Content */}
                                            <div className="flex flex-col gap-3">

                                                <Heading4 className="line-clamp-2">{sideArticle.title}</Heading4>
                                                <Description className="line-clamp-2">{sideArticle.description}</Description>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            
                        </section>
                    </div>
                </div>
                <div className="col-span-4 bg-background p-4">
                    <CalendarAside />
                </div>
                {/* Sidebar */}
            </div>
        </>
    )
    return (
        <>
            <Breadcrumb dir="rtl" className="mb-8 px-4">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">{tNavigation("home")}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{tNavigation("news")}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="grid grid-cols-12 gap-8 items-start px-4">
                <div className="col-span-12">
                        <Heading2 className="mb-4 text-primary">{t('title')}</Heading2>
                        <Description>{t('subtitle')}</Description>
                </div>
                <div className="col-span-12">
                    <Link href="#" className="group w-full border p-1">
                        <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                            <AspectRatio ratio={4 / 2} className="overflow-hidden rounded-lg bg-muted border">
                                <img
                                    src={mainArticle.image || "https://ui.shadcn.com/placeholder.svg"}
                                    className="h-full w-full object-cover "
                                    alt=""
                                />
                            </AspectRatio>
                            <div className="flex flex-col gap-3">
                                <Heading3 className="line-clamp-2">{mainArticle.title}</Heading3>
                                <Description className="line-clamp-3">{mainArticle.description}</Description>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="md:col-span-8- col-span-12 flex flex-col gap-8 border-mesure ">
                    <div className="bg-background w-full border">

                        <div className="col-span-9 bg-background aspect-video- overflow-hidden rounded-lg relative h-full mt-8">
                            
                        </div>

                    </div>
                    <div className="mx-auto px-3 sm:px-8 py-3 sm:py-8 bg-background border-mesure-" dir="rtl">

                        <section>

                            <div
                                className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-3"
                                role="list"
                            >
                                {wideAricles.map((post: WpPost, i: number) => (
                                    <Link href="#" key={i} className="group block">
                                        {/* Blog Card */}
                                        <div className="flex flex-col gap-4 rounded-md transition-all duration-200">
                                            {/* Image Wrapper */}
                                            <AspectRatio
                                                ratio={4 / 3}
                                                className="overflow-hidden rounded-sm bg-muted"
                                            >
                                                <img
                                                    src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                                                    alt={`${post.title} thumbnail`}
                                                    // fill
                                                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                                                />
                                            </AspectRatio>

                                            {/* Post Content */}
                                            <div className="flex flex-col gap-3">

                                                <Heading4 className="line-clamp-2">{sideArticle.title}</Heading4>
                                                <Description className="line-clamp-2">{sideArticle.description}</Description>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            
                        </section>
                    </div>
                </div>
                {/* Sidebar */}
                <aside className="col-span-4 hidden md:block sticky top-24 h-fit border-mesure">
                    <CalendarAside />
                </aside>
            </div>
        </>
    )
}