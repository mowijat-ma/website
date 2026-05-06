
import { WpPost } from "@/types";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { getTranslations } from "next-intl/server";
import SectionTitle from "../font/section-title";
import { getCinemaArabeWpPosts } from "@/api/posts";


export default async function HomeCinemaArabeSection() {

  const [t, data] = await Promise.all([
    getTranslations("sections.cinemaarabe"),
    getCinemaArabeWpPosts()
  ])
  return (
    <>


      <div className="mx-auto sm:py-10- py-8- border" dir="rtl">
        <section>
          <section
            className=""
            aria-labelledby="blog-section-heading"
          >
            <div className="">
              <div className="bg-background z-50 flex justify-between items-center">
                <SectionTitle value={t('title')} />
                <Link href={""}>المزيد</Link>
              </div>
              <div className="flex flex-co gap-10 md:gap-12">

                {/* Blog Grid */}
                <div
                  className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
                  role="list"
                >
                  {data.map((post: WpPost, i) => (
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

                          <h3 dangerouslySetInnerHTML={{ __html: post.title }} className="text-base leading-normal font-semibold group-hover:underline" />
                          <p className="text-muted-foreground text-sm leading-normal line-clamp-2">
                            {post.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
