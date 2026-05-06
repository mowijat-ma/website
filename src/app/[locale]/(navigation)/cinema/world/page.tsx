// import { getCinemaWorldWpPosts } from "@/app/api/posts";
// import { BlogSection1 } from "@/components/blog-section-1";
import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { Post } from "@/types";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import './style.css'
import { getCinemaWorldWpPosts } from "@/api/posts";
import { Post } from "@/types";
// Optional: Define a type for better DX
// interface Post {
//   id: number;
//   title: { rendered: string };
//   excerpt: { rendered: string };
//   date: string;
//   context: string;
//   jetpack_featured_media_url: string;
//   content?: string
// }

export default async function CinemaWorldPage() {
  const [t, data] = await Promise.all([
    getTranslations("pages.cinema.world"),
    getCinemaWorldWpPosts()
  ])
  // const res: Post[] = await getWpPosts();
  // const data = res.map((item) => {
  //   return {
  //     id: item.id,
  //     title: item.title.rendered,
  //     // WP excerpts come wrapped in <p> tags; item.excerpt.rendered is the correct path
  //     description: item.excerpt.rendered.replace(/<[^>]*>?/gm, ''), 
  //     date: new Date(item.date).toLocaleDateString('ar-EG', {
  //       day: 'numeric',
  //       month: 'long',
  //       year: 'numeric'
  //     }),
  //     category: item.context || "Cinema",
  //     image: item.jetpack_featured_media_url
  //   };
  // });

  return (
    <>
      {/* <pre dir="ltr" className="text-wrap bg-slate-100 p-4 rounded text-xs">
        {JSON.stringify(data, null, 2)}
      </pre> */}

      <div className="mx-auto py-10" dir="rtl">
        <section
          className="bg-background- px-8 md:px-0"
          aria-labelledby="blog-section-heading"
        >
          <div className="">
            <div className="flex flex-col items-center gap-10 md:gap-12">
              {/* Section Title */}
              <div className="w-full">
                {/* Tagline */}
                {/* <Tagline>Blog Section</Tagline> */}
                {/* Main Heading */}
                <h1 id="blog-section-heading" className="heading-lg ">
                  {t('title')}
                </h1>
                {/* الوصف */}
                <p className="text-muted-foreground">
                  {t('description')}

                </p>
              </div>

              {/* Blog Grid */}
              <div
                className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4"
                role="list"
              >
                {data.map((post: Post , i: number) => 
                {
                  if(i == 0) return (
                    <div key={post.id} className="group block col-span-4 ">
                    {/* Blog Card */}
                    <div className="grid grid-cols-2 flex-row gap-8 rounded-xl transition-all duration-200">
                      {/* Image Wrapper */}
                      <div className="col-span-1 w-full overflow-hidden rounded-xl aspect-square"
                        >
                        <img
                          src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                          alt={`${post.title} thumbnail`}
                          // fill
                          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105 h-full"
                          />
                      </div>

                      <div className="col-span-1 h-full max-h-[100%] border overflow-y-scroll custom-scrollbar">
                        {/* Post Meta */}
                        <div className="flex items-center gap-2 text-left">
                          <span className="text-muted-foreground text-sm">
                            {post.date}
                          </span>
                          <span className="text-muted-foreground text-sm">·</span>
                          <span className="text-muted-foreground text-sm">
                            {post.category}
                          </span>
                        </div>
                        <h3 dangerouslySetInnerHTML={{ __html: post.title }} className="text-base leading-normal font-semibold group-hover:underline" />

                        {/* Post Title */}
                        {/* <h3  /> */}
                        {/* Post Summary */}
                        <p className="text-muted-foreground text-sm leading-normal" dangerouslySetInnerHTML={{ __html: post.content || "" }}>
                          
                        </p>
                      </div>
                      
                    </div>
                  </div>
                  )
                  return (

                    <Link href="#" key={post.id} className="group block">
                    {/* Blog Card */}
                    <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                      {/* Image Wrapper */}
                      <AspectRatio
                        ratio={4 / 3}
                        className="overflow-hidden rounded-xl"
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
                        {/* Post Meta */}
                        <div className="flex items-center gap-2 text-left">
                          <span className="text-muted-foreground text-sm">
                            {post.date}
                          </span>
                          <span className="text-muted-foreground text-sm">·</span>
                          <span className="text-muted-foreground text-sm">
                            {post.category}
                          </span>
                        </div>
                        <h3 dangerouslySetInnerHTML={{ __html: post.title }} className="text-base leading-normal font-semibold group-hover:underline" />

                        {/* Post Title */}
                        {/* <h3  /> */}
                        {/* Post Summary */}
                        <p className="text-muted-foreground text-sm leading-normal line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                        )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const MainArticle = ()=>{
  
}