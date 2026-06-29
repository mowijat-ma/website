
import { Post, WpPost } from "@/types";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { getTranslations } from "next-intl/server";
import SectionTitle from "../font/section-title";
import { getCinemaMorrocanWpPosts } from "@/api-services/posts";
import PostTitle from "../font/title";
import PostDescription from "../font/description";



export default async function ArticlesInterviews() {


  const [t, data] = await Promise.all([
    getTranslations("sections.cinemamorrocan"),
    getCinemaMorrocanWpPosts()
  ])
  return (
    <section className="mx-auto sm:py-10- py-8- border-mesure" dir="rtl">
      <div className="bg-background flex justify-between items-center">
        <SectionTitle value={t('title')} />
        {/* <Link href={""}>المزيد</Link> */}
      </div>
      <div className="flex flex-col gap-10 md:gap-8">

        {/* Blog Grid */}
        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
          role="list"
        >
          {data.map((post: Post, i: number) => (
            <Link href={{ pathname: "/articles/[id]/content", query: { id: post.id } }}  key={i} className="group block">
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

                  <PostTitle>{post.title}</PostTitle>
                  {/* <PostDescription>{post.description}</PostDescription> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
