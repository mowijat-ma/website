import { getFirstWpPost, getHomeTopTrendingPosts } from "@/api/posts";
import { Post, WpPost } from "@/types";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import PostDescription, { Description } from "../font/description";
import PostTitle from "../font/title";
import SectionTitle from "../font/section-title";
import Heading3 from "../font/h3";
import Heading4 from "../font/h4";
// import Heading4 from "../font/h4";


export default async function HomeTopTrendingPosts() {
  const [t, data] = await Promise.all([
    getTranslations("sections.hero"),
    getHomeTopTrendingPosts(),
  ])

  const mainArticle = data[0]
  const wideAricles = data.slice(1, 4)

  return (
    <>
      <section className="flex flex-col gap-8 rounded bg-background p-8">
        {/* الحاوية الرئيسية للشبكة */}
        <div className=""> {/* أضفنا items-start لضمان عمل sticky */}
          <SectionTitle value={t("title")} />
          {/* الجهة اليسرى: المقال الرئيسي ومقالات الـ topPosts */}
          <div className="">
            <Link href={`/articles/${mainArticle.id}/content`} key={mainArticle.id} className="group block">
              {/* Blog Card */}
              <div className="flex flex-col gap-4 rounded-xl- transition-all duration-200">
                {/* Image Wrapper */}
                <AspectRatio
                  ratio={5 / 3}
                  className="overflow-hidden rounded"
                >
                  <img
                    src={
                      mainArticle.image ||
                      "https://ui.shadcn.com/placeholder.svg"}
                    alt={`${mainArticle.title} thumbnail`}
                    // fill
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                  {mainArticle.image}
                </AspectRatio>

                {/* mainArticle Content */}
                <div className="flex flex-col gap-3">
                  {/* mainArticle Meta */}
                  <div className="flex items-center gap-2 text-left">
                    <span className="text-muted-foreground text-sm">
                      {mainArticle.date}
                    </span>
                    <span className="text-muted-foreground text-sm">·</span>
                    <span className="text-muted-foreground text-sm">
                      {mainArticle.category}
                    </span>
                  </div>
                  <Heading3 className="line-clamp-2">{mainArticle.title}</Heading3>
                  <Description className="line-clamp-2">{mainArticle.description}</Description>
                  
                </div>
              </div>
            </Link>

            {/* نقلنا الـ topPosts إلى هنا لتكون بجانب القائمة الجانبية الثابتة */}
            <div className="mt-6 flex flex-col gap-8 md:grid md:grid-cols-3 gap-y-12 sm:gap-8">
              {wideAricles?.map((post: Post, index: number) => (
                <div key={index} className="h-fit">
                  <Link href={`/articles/${post.id}/content`} className="group block">
                    <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                      <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg bg-muted">
                        <img
                          src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                          alt=""
                        />
                      </AspectRatio>
                      <div className="flex flex-col gap-3">
                          <Heading4 className="line-clamp-2">{post.title}</Heading4>
                          <Description className="line-clamp-2">{post.description}</Description>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* الجهة اليمنى: القائمة الجانبية الثابتة */}

        </div>
      </section>
    </>
  )
}






export const BlogPostContainer = ({ post }: {
  post: Post
}) => {
  return (
    <Link href={`/articles/${post.id}/content`} key={post.id} className="group block">
      {/* Blog Card */}
      <div className="flex flex-col gap-4 rounded-xl- transition-all duration-200">
        {/* Image Wrapper */}
        <AspectRatio
          ratio={5 / 3}
          className="overflow-hidden rounded"
        >
          <img
            src={
              post.image ||
              "https://ui.shadcn.com/placeholder.svg"}
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
          <p className="text-muted-foreground text-base leading-normal line-clamp-3" dangerouslySetInnerHTML={{ __html: post.description }}>

          </p>
        </div>
      </div>
    </Link>
  )
}
