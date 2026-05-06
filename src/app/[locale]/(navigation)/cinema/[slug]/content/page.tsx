// import { getWpPosts } from "@/app/api/posts";
// import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Separator } from "@/components/ui/separator";
import { BsArrowRight, BsShare } from "react-icons/bs";
import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";
import './style.css'
// import RelatedArticlesAside from "@/components/sections/RelatedArticlesAside";
import { GoArrowRight } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { PiPrinter } from "react-icons/pi";
import { BiShare } from "react-icons/bi";
import Link from "next/link";

// Ensure you are destructuring params from the component props
export default async function PostContentPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    // 1. Await params in Next.js 15+ 
    const { slug } = await params;

    // 2. Fetch all posts
    // const res = await getWpPosts();

    // 3. Filter by slug (or ID)
    // Use .find() instead of .filter() if you only want one object
    // const postData = res.find((item: any) => item.id === slug || item.id.toString() === slug);
    // console.log(postData)
    // // 4. Handle case where post isn't found
    // if (!postData) {
    //     return <div>Post not found {slug}</div>;
    // }

    // const post = {
    //     id: postData.id,
    //     title: postData.title.rendered,
    //     description: postData.excerpt.rendered.replace(/<[^>]*>?/gm, ''),
    //     date: new Date(postData.date).toLocaleDateString('ar-EG', {
    //         day: 'numeric',
    //         month: 'long',
    //         year: 'numeric'
    //     }),
    //     category: postData.context || "Cinema",
    //     image: postData.jetpack_featured_media_url
    // };
    const post = {
        id: "",
        title: "عنوان المقال",
        description: "وصف مختصر للمقال يشرح محتواه بشكل جذاب ويشجع القارئ على قراءة المزيد.",
        date: new Date().toLocaleDateString('ar-EG', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        category:  "سينما",
        image: "https://source.unsplash.com/random/800x600?cinema",
        content: `
        <p>هذا هو المحتوى الكامل للمقال. يمكن أن يحتوي على نصوص، صور، فيديوهات، وروابط. يتم عرض هذا المحتوى عندما يضغط المستخدم على عنوان المقال لقراءة المزيد.</p>
        <p>يمكنك إضافة أي نوع من المحتوى هنا، مثل قوائم، جداول، أو حتى تضمين مقاطع فيديو من YouTube. الهدف هو تقديم تجربة قراءة غنية وممتعة للقارئ.</p>
        <p>تأكد من تنسيق المحتوى بشكل جيد باستخدام HTML، واستخدم CSS لتحسين العرض إذا لزم الأمر. يمكنك أيضًا تضمين روابط داخل المقال لتوجيه القراء إلى مصادر أخرى أو مقالات ذات صلة.</p> 

        `
    };

    return (
        <div className="max-w-x5l px-4 md:px-0 sm:grid grid-cols-3 gap-8 mt-20 relative" dir="rtl">
            <div className="col-span-2">
                <div className="flex justify-between mb-4 items-center hidden">
                    <div className="">

                        {/* <BackButton /> */}
                    </div>
                    <ButtonGroup dir="ltr">
                        <Button variant={'ghost'} size={"lg"} className="flex items-center ">
                            <IoShareSocialOutline />
                            <span>نشر</span>


                        </Button>
                        {/* <Button variant={'ghost'} size={"lg"} className="flex items-center ">
                        <IoBookmarkOutline />
                    </Button> */}
                    </ButtonGroup>
                </div>
                <div className="">
                    <img src={post.image} alt="" className="aspect-video object-cover rounded-lg sm:rounded-2xl border w-full" />
                </div>
                <div className="flex flex-col gap-2 sm:gap-4 my-4 sm:my-8">
                    <div className="flex items-center gap-2 text-left">
                        <span className="text-muted-foreground text-sm">
                            {post.date}
                        </span>
                        <span className="text-muted-foreground text-sm">·</span>
                        <span className="text-muted-foreground text-sm">
                            {post.category}
                        </span>
                    </div>
                    <h3
                        dangerouslySetInnerHTML={{ __html: post.title }}
                        className="text-xl sm:text-3xl leading-normal font-semibold text-primary"
                    />
                </div>
                {/* <Separator className="my-4 sm:my-8 max-w-[95%] mx-auto" /> */}
                <article
                    className="content-area text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
            <div className="col-span-1 hidden md:block sticky top-24 h-fit">
                <div className="rounded-lg flex mb-8 bg-slate-50 overflow-hidden">
                    <button
                        className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4 ">
                        <GoArrowRight size={22}/>

                        رجوع
                    </button>
                    <button
                        className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
                        <FiHeart size={22}/>

                        حفظ
                    </button>
                    <button
                        className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
                        <PiPrinter size={22}/>
                        طباعة

                    </button>
                    <button
                        className="grow text-center flex justify-center items-center gap-2 font-semibold hover:bg-slate-100  py-4">
                        <BiShare size={22}/>
                        ارسال

                    </button>
                </div>
                {/* <RelatedArticlesAside /> */}
            </div>
        </div>
    );
}