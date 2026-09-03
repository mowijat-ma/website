// import { getWpPosts } from "@/app/api/posts";
// import BackButton from "@/components/BackButton";
// import RelatedArticlesAside from "@/components/sections/RelatedArticlesAside";
import { getTranslations } from "next-intl/server";
import Article from "@/components/font/body";
import Heading3 from "@/components/font/h3";
import { getInterviewBySlug, getOtherInterviews } from "@/api-services/interviews";
import BreadcrumbGenerator from "@/components/ux/breadcrumb-generator";
import { BreadCrumbLinksType } from "@/types";
import './style.css'
import Image from "next/image";
import { Description } from "@/components/font/description";
import OthersInterviewsCarousel from "@/components/interviews/OthersInterviewsCarousel";
import Heading2 from "@/components/font/h2";
import { Separator } from "@/components/ui/separator";
// Ensure you are destructuring params from the component props
export default async function PostContentPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    // 1. Await params in Next.js 15+ 
    const { slug } = await params;

    const [t, tNavigation, data, otherInterviews] = await Promise.all([
        getTranslations("pages.interviews.pages.details"),
        getTranslations("navigation.links"),
        getInterviewBySlug(slug),
        getOtherInterviews()
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


    // return 
    return (<>
        <BreadcrumbGenerator currentPage={data.title} links={breadcrumbLinks} />

        <div className="grid grid-cols-12 gap-8  " >

            <div className="col-span-4 bg-background rounded-lg px-8 py-8 hidden md:block sticky top-38 h-fit">
                <div className="">
                    {/* <Heading4>{data.with.name_ar}</Heading4> */}
                </div>
                <Image src={data?.image} width={100} height={100} alt="" className="w-full rounded-lg aspect-square object-cover object-top">
                </Image>
                <div className="flex">
                    {/* <Heading3 className="mt-3">{data.title}</Heading3> */}
                    {/* <span>{data.title}</span> */}
                </div>
                <Description  className="text-justify mt-3">
                    {data.description}
                </Description>
                {/* <AspectRatio ratio={16 / 9}>
                </AspectRatio> */}
            </div>
            <div className="col-span-8 bg-background rounded-lg px-8 py-8">
                    <Heading2 className="mt-3">{data.title}</Heading2>
                    <Separator className="my-4" />


                <Article className='text-justify'>
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                </Article>

            </div>

        </div>
        <div className="bg-background p-8 rounded-lg mt-8">
            <OthersInterviewsCarousel interviews={otherInterviews} />
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