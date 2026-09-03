// import { getWpPosts } from "@/app/api/posts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BlogPost, Post } from "@/types";
import { useTranslations } from "next-intl"
import CinemaWorldPage from "./world/page";
import { getHomeTopTrendingPosts } from "@/api-services/posts";

export default async function CinemaPage() {
    // const t = useTranslations()
    const res = await getHomeTopTrendingPosts()    
    const posts = res.map((item: Post) => {
    return {
      id: item.id,
      title: item.title,
      // WP excerpts come wrapped in <p> tags; item.excerpt.rendered is the correct path
      description: item.description,
      date: new Date(item.date).toLocaleDateString('ar-EG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      category: item.category || "Cinema",
      image: item.image || "/images/placeholder.png"
    };
  });
    return (<>
        <div className="">
            <TabsContainer posts={posts}/>
        </div>
    </>)
}


export const TabsContainer = ({posts}: {
    posts?: BlogPost[]
})=>{
    const t = useTranslations()
    return (
        <>
        <Tabs defaultValue="world" className="">
            <TabsList className="w-full bg-muted rounded-none">
                <TabsTrigger className="rounded-none [" value="world">{("سينما عالمية")}</TabsTrigger>
                <TabsTrigger className="rounded-none [" value="arabe">{("سينما عربية")}</TabsTrigger>
                <TabsTrigger className="rounded-none [" value="morrocan">{("سينما مغربية")}</TabsTrigger>
            </TabsList>
            <TabsContent value="world">
                <CinemaWorldPage />
            </TabsContent>
            <TabsContent value="arabe">
                {/* <CinemaWorldPage /> */}

            </TabsContent>
            <TabsContent value="morrocan">
                <CinemaWorldPage />

            </TabsContent>
        </Tabs>
        </>
    )
}