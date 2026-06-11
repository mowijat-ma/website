import { getNewsPagePosts } from "@/api/news"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getTranslations } from "next-intl/server"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Post, WpPost } from "@/types"
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Heading4 from "@/components/font/h4"
import { Description } from "@/components/font/description"
import Heading2 from "@/components/font/h2"
export default async function CulturesArtsPage() {
    const [t, ui, tNavigation, data] = await Promise.all([
        getTranslations("pages.arts_cultures"),
        getTranslations("ui"),
        getTranslations("navigation.links"),
        getNewsPagePosts()
    ])
    const mainArticle = data[0]
    const sideArticle = data[1]
    const wideAricles = data.slice(0, data.length)
    return (<>   
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

                {wideAricles.map((post: Post, i: number) => (
                    <Link href="#" key={i} className="group block">
                        {/* Blog Card */}
                        <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                            {/* Image Wrapper */}
                            <AspectRatio
                                ratio={4 / 3}
                                className="overflow-hidden rounded-lg bg-muted"
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

                                <Heading4 className="line-clamp-2">{post.title}</Heading4>
                                <Description className="line-clamp-2">{post.description}</Description>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    </>)
}