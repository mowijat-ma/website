import Heading2 from "@/components/font/h2";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { getHomeInterviews } from "@/api-services/interviews";
import { BreadCrumbLinksType } from "@/types";
import { Description } from "@/components/font/description";
import BreadcrumbGenerator from "@/components/ux/breadcrumb-generator";

export default async function CinemaArabePage() {
    const [t, ui, tNavigation, data] = await Promise.all([
        getTranslations("pages.interviews"),
        getTranslations("ui"),
        getTranslations("navigation.links"),
        getHomeInterviews()
    ])
    const mainArticle = data[0]
    const sideArticle = data[1]
    const wideAricles = data.slice(0, data.length)

    const breadcrumbLinks: BreadCrumbLinksType[] = [
        {
            title: tNavigation("home"),
            href: "/"
        },


    ]
    return (<>
        <BreadcrumbGenerator currentPage={tNavigation("interviews")} links={breadcrumbLinks} />

        {/* <div className="col-span-12 sm:col-span-8  px-4 text-center sm:text-right">
                    <Heading2 className="text-primary">{t("title")}</Heading2>
                    <Heading4 className="text-primary">
                        {t("subtitle")}
                    </Heading4>
                </div> */}

        <div className="bg-background px-8 py-8">
            <Heading2 className="mb-4 text-primary">{t('title')}</Heading2>
            <Description>{t('subtitle')}</Description>

            <div
                className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-3 mt-10"
                role="list"
            >

                {wideAricles.map((interview: any, i: number) => (
                    <Link key={i}

                        href={`/interviews/${interview.id}/content` || ''}
                        //  href={{pathname: '/intevriew/[id]/content', query: {id, interview.id}}}
                        // href={{ pathname: "/interviews/[id]", query: { id: interview.id } }}

                        className="group block h-full relative ">
                        <div className="flex flex-col gap-4 rounded-xl transition-all duration-200 overflow-hidden">
                            {/* Image Wrapper */}
                            <AspectRatio
                                ratio={3 / 4}
                                className="overflow-hidden rounded-xl bg-muted "
                            >
                                <img
                                    src={interview.image || "https://ui.shadcn.com/placeholder.svg"}
                                    alt={interview.title}
                                    style={{ boxShadow: "inset 0px -29px 48px 0px #696969" }}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 "
                                />
                            </AspectRatio>

                            {/* Post Content */}
                            {/* <div className="font-ui px-4 p-4 absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-gradient-to-t from-black/80 to-transparent text-white"> */}

                            <div className={cn("flex flex-col gap-2 absolute bottom-4 right-4 bg-background-",
                                // "translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-gradient-to-t from-black/80 to-transparent",
                                "px-4 p-4 absolute bottom-0 left-0 right-0",
                                "bg-gradient-to-t from-black/80 to-transparent",
                                "rounded-lg"
                            )}>

                                <h3
                                    className="text-2xl leading-tight font-bold text-white"
                                >
                                    {interview.title}
                                </h3>
                                <p className="text-muted-foreground text-lg line-clamp-2">
                                    {interview.with?.name_ar}
                                </p>
                            </div>
                        </div>
                        {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" /> */}
                    </Link>
                ))}
            </div>
        </div>
    </>)


    // return (<>
    //     <Breadcrumb dir="rtl" className="mb-8 px-4">
    //         <BreadcrumbList>
    //             <BreadcrumbItem>
    //                 <BreadcrumbLink href="/">{tNavigation("home")}</BreadcrumbLink>
    //             </BreadcrumbItem>
    //             <BreadcrumbSeparator />
    //             <BreadcrumbItem>
    //                 <BreadcrumbPage>{tNavigation("cinema.morrocan")}</BreadcrumbPage>
    //             </BreadcrumbItem>
    //         </BreadcrumbList>
    //     </Breadcrumb>

    //     <div className="grid grid-cols-12 gap-8">
    //         <div className="col-span-12 bg-background p-8 grid grid-cols-12 gap-8">
    //             {/* <h1 className="text-4xl font-bold mb-4"></h1> */}
    //             <div className="col-span-12">
    //                 <Heading2 className="text-primary">{t("title")}</Heading2>
    //                 <Heading4 className="text-primary">
    //                     {t("subtitle")}
    //                 </Heading4>
    //             </div>
    //             {/* <Heading2 className="mb-4"></Heading2> */}
    //             {data.map((interview: any) => (
    //                 <Link key={interview.id} href={`/interviews/${interview.id}`} className="group block h-full relative col-span-3">
    //                     <AspectRatio ratio={16 / 12} className="rounded-lg overflow-hidden">
    //                         <img
    //                             src={interview?.with?.image}
    //                             alt={interview.title}
    //                             className={cn("object-cover w-full h-full group-hover:scale-105 transition-transform duration-300", interview.id === mainArticle.id ? "col-span-8" : "col-span-4")}
    //                         />
    //                     </AspectRatio>
    //                     <div className="p-4">
    //                         <p className="text-sm">{interview?.with?.name_ar}</p>
    //                         <h3 className="text-lg font-bold">{interview.title}</h3>
    //                     </div>
    //                     {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" /> */}
    //                 </Link>
    //             ))}
    //             {data.map((interview: any) => (
    //                 <Link key={interview.id} href={`/interviews/${interview.id}`} className="group block h-full relative col-span-3">
    //                     <AspectRatio ratio={16 / 12} className="rounded-lg overflow-hidden">
    //                         <img
    //                             src={interview?.with?.image}
    //                             alt={interview.title}
    //                             className={cn("object-cover w-full h-full group-hover:scale-105 transition-transform duration-300", interview.id === mainArticle.id ? "col-span-8" : "col-span-4")}
    //                         />
    //                     </AspectRatio>
    //                     <div className="p-4">
    //                         <p className="text-sm">{interview?.with?.name_ar}</p>
    //                         <h3 className="text-lg font-bold">{interview.title}</h3>
    //                     </div>
    //                     {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" /> */}
    //                 </Link>
    //             ))}
    //         </div>
    //     </div>

    // </>)
}