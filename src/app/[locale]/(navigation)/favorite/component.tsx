'use client';

import { Description } from "@/components/font/description";
import Heading4 from "@/components/font/h4";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "@/i18n/routing";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
export default function FavoritePageComponent() {
    const [data, setData] = useState<any[]>([]);
    const [isSaved, setIsSaved] = useState(false);
    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]");
        console.log('Saved Posts:', savedPosts);
        setData(savedPosts);
    }, []);
    const OnSaveClick = (article: any) => {
        const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]");

        let updatedPosts;
        if (isSaved) {
            // Remove if already saved
            updatedPosts = savedPosts.filter((post: any) => post.id !== article.id);
            setIsSaved(false);
        } else {
            // Add to saved list
            updatedPosts = [...savedPosts, article];
            console.log("Saving article:", updatedPosts);
            // localStorage.setItem("savedPosts", JSON.stringify(updatedPosts));
            setIsSaved(true);
        }

        localStorage.setItem("savedPosts", JSON.stringify(updatedPosts));
    };
    return (
        <div className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl font-bold">المقالات المحفوظة</h2>
            <p>هنا ستجد جميع المقالات التي قمت بحفظها للرجوع إليها لاحقًا.</p>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-8">
                    {data.map((post: any) => (
                    <div key={post.id}
                        className="group relative">
                        <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                            <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-md bg-muted">
                                <img
                                    src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                                    alt=""
                                />
                            </AspectRatio>
                            <div className="flex flex- gap-3 justify-between items-center ">
                                <Heading4 className="line-clamp-1">{post.title}</Heading4>
                                <button
                                    onClick={() => OnSaveClick(post)}
                                    className="grow text-center flex flex-col justify-center items-center gap-2 font-semibold"
                                >
                                    <FiHeart size={22} fill={isSaved ? "currentColor" : "none"} />
                                    {/* <span className="hidden sm:block">حفظ</span> */}
                                </button>
                                {/* <Description className="line-clamp-2">{post.description}</Description> */}
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}