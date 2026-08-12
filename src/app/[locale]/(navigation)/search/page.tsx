import { searchWpPosts } from "@/api-services/posts";
import { Description } from "@/components/font/description";
import Heading4 from "@/components/font/h4";
import { getTranslations } from "next-intl/server";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { SearchInput } from "@/components/ux/search-input";
import BreadcrumbGenerator from "@/components/ux/breadcrumb-generator";
import HomeTopReadsAside from "@/components/asides/HomeTopReadsAside";
import RelatedArticlesAside, { RelatedArticlesAsideLoader } from "@/components/asides/RelatedArticlesAside";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SearchPageProps = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
};

interface SearchResult {
    id: string;
    title: string;
    description?: string;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {

    const resolvedParams = await searchParams;
    const searchQuery = (resolvedParams.query as string) || '';


    const [t, tNavigation, data] = await Promise.all([
        getTranslations("pages.search"),
        getTranslations("navigation.links"),
        searchWpPosts(searchQuery),
    ])

    const breadcrumbLinks: [{ title: string; href: string }] = [
        {
            title: tNavigation("home"),
            href: "/"
        }
    ]
    // const response = await fetch('/fr/api/posts');
    // const data1 = await response.json();
    // console.log('data1', data1)
    return (
        <>
            <BreadcrumbGenerator currentPage={tNavigation("search")} links={breadcrumbLinks} />

            <div className="grid grid-cols-12 gap-8">
                <div className="md:col-span-8 col-span-12 gap-8 bg-background rounded mx-auto p-8 w-full">
                    <div className="">

                        <div className="flex flex-col gap-4 w-full">
                            <Description>{`${t('subtitle')} : ${searchQuery}`}</Description>
                            <SearchInput />

                            {data.map((post, i) => (

                                // <AccordionItem value={item.title} key={item.id}>
                                //     <AccordionTrigger >
                                //     </AccordionTrigger>
                                //     <AccordionContent className="">
                                //         <Link href={`/articles/${item.id}/content`} className="">
                                //         </Link>
                                //     </AccordionContent>
                                // </AccordionItem>
                                <Link 
                                href="#"
                                // href={{ pathname: "/articles/[id]/content", query: { id: post.id } }} 
                                className={cn("py-2 group", 
                                    i == data.length -1 ? "" : "border-b")}
                                    key={i}>
                                            <Heading4 className="group-hover:text-primary grow text-start">{post.title}</Heading4>
                                            <Description dangerouslySetInnerHTML={{ __html: post.description }} className="no-underline! line-clamp-3"></Description>

                                </Link>
                            ))}


                            {/* <Accordion type="single" collapsible defaultValue={data[0]?.title || ""} className="w-full">
                            </Accordion> */}
                            { }
                        </div>

                    </div>
                </div>
                <div className="col-span-4 hidden md:block sticky top-24 h-fit border-mesure">
                    <RelatedArticlesAside />

                </div>
            </div>

        </>

    );
}