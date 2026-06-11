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
import { getInterviewBySlug } from "@/api/interviews";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    

    return (<>
       <Breadcrumb dir="rtl" className="mb-8 px-4">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">{tNavigation("home")}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{tNavigation("cinema.morrocan")}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        <div className="grid grid-cols-12 gap-8  " >
            
            <div className="col-span-8 bg-background px-8 py-8">
                
                <div className="px-4 text-center sm:text-right">
                    <Heading2 className="text-primary">{t("title")}</Heading2>
                    <Heading4 className="text-muted-foreground">
                        {t("subtitle")}
                    </Heading4>
                </div>      
                <div className="">
                    <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
                        <img
                            src={data?.with?.image || "https://ui.shadcn.com/placeholder.svg"}
                            alt={data.title}
                            className="object-cover w-full h-full"
                        />
                    </AspectRatio>
                </div>
                <div className="">
                    <Article className="mt-8">
                        {data.content}
                    </Article>
                </div>
            </div>
            <div className="col-span-4 bg-background px-8 py-8">
                
            </div>
            
        </div>
    </>)
}

export async function renderInterviewLine({line}: {line: any}) {
    if(line.type == "question") {
        return <div className="mb-6">
            <Heading3 className="text-primary mb-2">{line.content}</Heading3>
        </div>
    }
    else if(line.type == "answer") {
        return <div className="mb-6">
            <Article>{line.content}</Article>
        </div>
    }
}