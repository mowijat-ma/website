// import { getCinemaWorldWpPosts, getCinemaWorldWpPostsHome } from "@/app/api/posts";
import { WpPost } from "@/types";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { cn } from "@/lib/utils";
// import TitleWithBar from "../typoghraphy/title-with-bar";
import { getTranslations } from "next-intl/server";
import { getCinemaWorldWpPostsHome } from "@/api/posts";
import SectionTitle from "../font/section-title";

export default async function HomeCinemaWorldSection() {
  // const t = useTranslations("sections.cinemaworld");
  // const data = await getCinemaWorldWpPosts();

  const [t, data] = await Promise.all([
    getTranslations("sections.cinemaworld"),
    getCinemaWorldWpPostsHome()
  ])

  const posts = data || [];
  return (
    <div className="mx-auto sm:py-10- py-8-" dir="rtl">
      <section aria-labelledby="blog-section-heading">
        <div className="bg-background z-50 flex justify-between items-center">
          <SectionTitle value={t('title')} />
          {/* <Link href={"/cinema"} className="text-sm font-medium hover:underline text-muted-foreground transition-colors hover:text-primary">
            المزيد
          </Link> */}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 items-stretch">
          {data.map((post: WpPost, i: number) => {
            const isMain = i === 0;
            const isWide = i === 1;

            return (
              <div
                key={i}
                className={cn(
                  "flex flex-col group h-full", // أضفنا h-full هنا لضمان تمدد العنصر
                  isMain && "md:col-span-2 md:row-span-2",
                  // isWide && "md:col-span-2 md:row-span-1"
                )}
              >
                <Link href={`/cinema/${post.id}`} className="flex flex-col h-full gap-4">

                  {/* Image Container */}
                  <div className={cn(
                    "overflow-hidden rounded-xl bg-muted border relative transition-all duration-300",
                    // جعل الصورة تنمو في كلا النوعين: الرئيسي والعريض
                    (isMain) ? "flex-grow min-h-[220px]" : "shrink-0"
                  )}>
                    {isMain ? (
                      // استخدام التموضع المطلق ليملأ كامل مساحة الـ flex-grow
                      <img
                        src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      // المقالات العادية تحافظ على نسبة ثابتة
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </AspectRatio>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="flex flex-col gap-3 shrink-0 pb-2">
                    <span className="text-muted-foreground text-[11px] mt-1 italic">
                      {post.date}
                    </span>
                    <h3
                      dangerouslySetInnerHTML={{ __html: post.title }}
                      className={cn(
                        "",
                        "font-semibold leading-tight group-hover:underline transition-all",
                        isMain ? "text-xl md:text-2xl" : "text-base md:text-lg line-clamp-1"
                      )}
                    />

                    <p
                      className={cn(
                        "text-muted-foreground text-sm leading-relaxed line-clamp-2",
                        isMain && ""
                      )}
                      dangerouslySetInnerHTML={{ __html: post.description }}
                    />

                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}