// import { getWpPosts } from "@/app/api/posts";
// import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { IoShareSocialOutline } from "react-icons/io5";
// import RelatedArticlesAside from "@/components/sections/RelatedArticlesAside";
import { GoArrowRight } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { PiLinkSimpleHorizontal, PiPrinter } from "react-icons/pi";
import { BiShare } from "react-icons/bi";
import { getWpPostById } from "@/api/posts";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import Article from "@/components/font/body";
import HomeTopReadsAside from "@/components/asides/HomeTopReadsAside";
import RelatedArticlesAside from "@/components/asides/RelatedArticlesAside";
import SameAuthorSection from "@/components/sections/SameAuthorSection";
import Heading3 from "@/components/font/h3";
import Heading2 from "@/components/font/h2";
import Heading4 from "@/components/font/h4";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { getHomeInterviews, getInterviewBySlug } from "@/api/interviews";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Description } from "@/components/font/description";
import { Separator } from "@/components/ui/separator";
import BreadcrumbGenerator from "@/components/ux/breadcrumb-generator";
import { BreadCrumbLinksType } from "@/types";
import InterviewsCarousel from "@/components/interviews/InterviewsCarousel";
import OthersInterviewsCarousel from "@/components/interviews/OthersInterviewsCarousel";

// Ensure you are destructuring params from the component props
export default async function PostContentPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    // 1. Await params in Next.js 15+ 
    const { slug } = await params;

    const [t, tNavigation, data] = await Promise.all([
        getTranslations("pages.interviews.pages.details"),
        getTranslations("navigation.links"),
        getInterviewBySlug(slug)
    ]);

    const breadcrumbLinks: BreadCrumbLinksType[] = [
        {
            title: tNavigation("home"),
            href: "/"
        },
        {
            title: tNavigation("interviews"),
            href: "/interviews"
        },

    ]
    const date = new Date()
    const isPair = date.getSeconds() % 2 === 0
    const [interviews] = await Promise.all([
        getHomeInterviews()
    ]);

    // return 
    return (<>
        <BreadcrumbGenerator currentPage={data.title} links={breadcrumbLinks} />

        <div className="grid grid-cols-12 gap-8  " >

            <div className="col-span-8 bg-background rounded-lg px-8 py-8">

                <div className="text-center sm:text-right">
                    {/* <Heading2 className="text-primary">{t("title")}</Heading2>
                    <Heading4 className="text-muted-foreground">
                        {t("subtitle")}
                    </Heading4> */}
                    <div className="flex text-muted-foreground gap-4 mt-6">
                        <span className="">{data.date}</span>
                        <span className="text-primary">{data.category}</span>
                    </div>
                    <Heading2>{data.title}</Heading2>
                    {/* <Description>{data.description}</Description> */}
                    <Separator className="my-6 shadow" />
                </div>
                <div className="mb-10">
                    {isPair && 
                    <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/f91K5NoTsmc?si=vyrKXMVF1R08Okp-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    }
                    {/* <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
                        <img
                            src={data?.with?.image || "https://ui.shadcn.com/placeholder.svg"}
                            alt={data.title}
                            className="object-cover w-full h-full"
                        />
                    </AspectRatio> */}
                </div>
                
                <div className="">
                    {data.lines.map((item, i) => {
                        if (item.type == "question") return (
                            <div className="font-bold text-left-" key={i}>
                                {item.content}
                            </div>
                        )
                        else if (item.type == "answer") return (
                            <div className="text-muted-foreground my-6 border-primary border-r-3 pr-3 text-justify" key={i}>
                                {item.content}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="col-span-4 bg-background rounded-lg px-8 py-8 hidden md:block sticky top-38 h-fit">
                <div className="">
                    {/* <Heading4>{data.with.name_ar}</Heading4> */}
                </div>
                <Image src={data?.with?.image} width={100} height={100} alt="" className="w-full rounded-lg aspect-square object-cover object-top">
                </Image>
                <div className="flex">
                    <Heading3 className="mt-3">{data.with.name_ar}</Heading3>
                    <span>{ }</span>
                </div>
                <Description className="text-justify mt-3">
                    {data.with.about}
                </Description>
                {/* <AspectRatio ratio={16 / 9}>
                </AspectRatio> */}
            </div>

        </div>
        <div className="bg-background p-8 rounded-lg mt-8">
            <OthersInterviewsCarousel interviews={interviews} />
        </div>
    </>)
    
}

export async function renderInterviewLine({ line }: { line: any }) {
    if (line.type == "question") {
        return <div className="mb-6">
            <Heading3 className="text-primary mb-2">{line.content}</Heading3>
        </div>
    }
    else if (line.type == "answer") {
        return <div className="mb-6">
            <Article>{line.content}</Article>
        </div>
    }
}