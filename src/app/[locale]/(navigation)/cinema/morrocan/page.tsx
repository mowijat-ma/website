

import { BreadCrumbLinksType, WpPost } from "@/types";
import Link from "next/link";
// import { AspectRatio } from "../ui/aspect-ratio";
import { getTranslations } from "next-intl/server";
// import SectionTitle from "../font/section-title";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getNewsPagePosts } from "@/api/news";
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
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Heading2 from "@/components/font/h2";
import BreadcrumbGenerator from "@/components/ux/breadcrumb-generator";


export default async function CinemaMorrocanPage(){
    const [t, ui, tNavigation, data] = await Promise.all([
        getTranslations("pages.cinema.moroccan"),
        getTranslations("ui"),
        getTranslations("navigation.links"),
        getNewsPagePosts()
    ])
    const mainArticle = data[0]
    const sideArticle = data[1]
    const wideAricles = data.slice(1, data.length)
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
            <BreadcrumbGenerator currentPage={tNavigation("cinema.morrocan")} links={breadcrumbLinks} />
            
            <div className="grid grid-cols-12 gap-8 items-start">
                
                <div className="md:col-span-8 col-span-12 flex flex-col gap-8 border-mesure">
                    <div className="bg-background px-3 sm:px-8 py-3 sm:py-8 grid- grid-cols-2- gap-8">

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
                {/* Sidebar */}
            </div>
        </>
    )
}