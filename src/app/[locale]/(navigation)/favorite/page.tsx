import { getTranslations } from "next-intl/server";
import { SearchInput } from "@/components/ux/search-input";
import BreadcrumbGenerator from "@/components/ux/breadcrumb-generator";
import RelatedArticlesAside from "@/components/asides/RelatedArticlesAside";
import FavoritePageComponent from "./component";

// type FavoritePageProps = {
//     searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// };

// interface SearchResult {
//     id: string;
//     title: string;
//     description?: string;
// }

export default async function FavoritePage() {

    // const resolvedParams = await searchParams;
    // const searchQuery = (resolvedParams.query as string) || '';


    const [t, tNavigation] = await Promise.all([
        getTranslations("pages.search"),
        getTranslations("navigation.links"),
        // getWpPosts(),
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
            <BreadcrumbGenerator currentPage={tNavigation("favorite")} links={breadcrumbLinks} />

            <div className="grid grid-cols-12 gap-8">
                <div className="md:col-span-8 col-span-12 gap-8 bg-background rounded mx-auto p-8 w-full">
                    <div className="">

                        <div className="flex flex-col gap-4 w-full">
                            {/* <Description>{`${t('subtitle')} : ${searchQuery}`}</Description> */}
                            {/* <SearchInput /> */}
                            
                            {/* {data.map((post, i) => (

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
                                className="py-2 border-b group" key={i}>
                                            <Heading4 className="group-hover:text-primary grow text-start">{post.title}</Heading4>
                                            <Description dangerouslySetInnerHTML={{ __html: post.description }} className="no-underline! line-clamp-3"></Description>

                                </Link>
                            ))} */}


                            {/* <Accordion type="single" collapsible defaultValue={data[0]?.title || ""} className="w-full">
                            </Accordion>
                            { } */}
                            <FavoritePageComponent />
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