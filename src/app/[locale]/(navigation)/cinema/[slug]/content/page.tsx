// import { getWpPosts } from "@/app/api/posts";
// import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { IoShareSocialOutline } from "react-icons/io5";
import './style.css'
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

// Ensure you are destructuring params from the component props
export default async function PostContentPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    // 1. Await params in Next.js 15+ 
    const { slug } = await params;

    const [t, tNavigation, data] = await Promise.all([
        getTranslations("pages.cinema.post"),
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
                <div className="col-span-12 sm:col-span-8  px-4 text-center sm:text-right">
                    <Heading2 className="text-primary">{t("title")}</Heading2>
                    <Heading4 className="text-primary">
                        {t("subtitle")}
                    </Heading4>
                </div>      
        <div className="grid grid-cols-12 gap-8 bg-background  px-8 py-8" >
            {/* <div className="col-span-1 ">
                <div className="rounded flex flex-col w-full bg-background sticky top-24 h-fit">
                    <button
                        className="grow text-center flex flex-col justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4 ">
                        <GoArrowRight size={22} />
                        رجوع
                    </button>
                    <button
                        className="grow text-center flex flex-col justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
                        <FiHeart size={22} />
                        حفظ
                    </button>
                    <button
                        className="grow text-center flex flex-col justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
                        <PiPrinter size={22} />
                        طباعة
                    </button>
                    <button
                        className="grow text-center flex flex-col justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
                        <BiShare size={22} />
                        ارسال
                    </button>
                    <button
                        className="grow text-center flex flex-col justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
                        <PiLinkSimpleHorizontal size={22} />
                        ارسال
                    </button>
                </div>
            </div> */}
            <div className="col-span-8 ">
                <div className="rounded ">

                    <div className=" ">
                        {/* {slug} */}
                        <img src={data.image} alt="" className={cn("aspect-video object-cover rounded-lg sm:rounded-2xl  w-full")} />
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
                    <Article>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </Article>
                </div>
            </div>
            <div className="col-span-4 ">
                {/* <HomeTopReadsAside /> */}
                {/* <div className="sticky top-24 h-fit ">
                <RelatedArticlesAside />
                </div> */}
            </div>
            <div className="col-span-12 bg-background rounded">
                <SameAuthorSection />
            </div>
        </div>
    </>)

    // return (
    //     <div className="max-w-x5l px-4 md:px-0 sm:grid grid-cols-3 gap-8 mt-20 relative" dir="rtl">
    //         <div className="col-span-2">
    //             <div className="flex justify-between mb-4 items-center bg-background">
    //                 <div className="">
    //                     {/* <BackButton /> */}
    //                 </div>
    //                 <ButtonGroup dir="ltr">
    //                     <Button variant={'ghost'} size={"lg"} className="flex items-center ">
    //                         <IoShareSocialOutline />
    //                         <span>نشر</span>


    //                     </Button>
    //                 </ButtonGroup>
    //             </div>
    // <div className="">
    //     {slug}
    //     <img src={post.image} alt="" className="aspect-video object-cover rounded-lg sm:rounded-2xl  w-full" />
    // </div>
    // <div className="flex flex-col gap-2 sm:gap-4 my-4 sm:my-8">
    //     <div className="flex items-center gap-2 text-left">
    //         <span className="text-muted-foreground text-sm">
    //             {post.date}
    //         </span>
    //         <span className="text-muted-foreground text-sm">·</span>
    //         <span className="text-muted-foreground text-sm">
    //             {post.category}
    //         </span>
    //     </div>
    //     <h3
    //         dangerouslySetInnerHTML={{ __html: post.title }}
    //         className="text-xl sm:text-3xl leading-normal font-semibold text-primary"
    //     />
    // </div>
    // {/* <Separator className="my-4 sm:my-8 max-w-[95%] mx-auto" /> */}
    // <article
    //     className="content-area text-muted-foreground"
    //     dangerouslySetInnerHTML={{ __html: post.content }}
    // />
    //             {/* {JSON.stringify(post.content)}
    //             <p dangerouslySetInnerHTML={{__html: post.content}}></p> */}
    //         </div>
    // <div className="col-span-1 hidden md:block sticky top-24 h-fit">
    //     <div className="rounded-lg flex mb-8 bg-slate-50 overflow-hidden">
    //         <button
    //             className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4 ">
    //             <GoArrowRight size={22}/>
    //             رجوع
    //         </button>
    //         <button
    //             className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
    //             <FiHeart size={22}/>
    //             حفظ
    //         </button>
    //         <button
    //             className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
    //             <PiPrinter size={22}/>
    //             طباعة
    //         </button>
    //         <button
    //             className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
    //             <BiShare size={22}/>
    //             ارسال
    //         </button>
    //     </div>
    //     {/* <RelatedArticlesAside /> */}
    // </div>
    //     </div>
    // );
}






// <div className="col-span-3 hidden md:block ">
//     {/* <div className="rounded flex mb-8 overflow-hidden sticky top-24 h-fit bg-background">
//         <button
//             className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4 ">
//             <GoArrowRight size={22}/>
//             رجوع
//         </button>
//         <button
//             className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
//             <FiHeart size={22}/>
//             حفظ
//         </button>
//         <button
//             className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
//             <PiPrinter size={22}/>
//             طباعة
//         </button>
//         <button
//             className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
//             <BiShare size={22}/>
//             ارسال
//         </button>
//     </div> */}
//     {/* <RelatedArticlesAside /> */}
// </div>