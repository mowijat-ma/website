'use client';

import Heading4 from "@/components/font/h4";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useMemo, useState } from "react";
import { FiHeart } from "react-icons/fi";

interface SavedArticle {
  id: number | string;
  title: string;
  image?: string;
}

export default function FavoritePageComponent() {
    const getSavedPosts = (): SavedArticle[] => {
        if (typeof window === "undefined") return [];
        try {
            return JSON.parse(localStorage.getItem("savedPosts") || "[]") as SavedArticle[];
        } catch {
            return [];
        }
    };

    const [data, setData] = useState<SavedArticle[]>(getSavedPosts);
    const [savedIds, setSavedIds] = useState<Set<number | string>>(() => new Set(getSavedPosts().map((article) => article.id)));

    const OnSaveClick = (article: SavedArticle) => {
        const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]") as SavedArticle[];
        const nextPosts = savedIds.has(article.id)
            ? savedPosts.filter((post) => post.id !== article.id)
            : [...savedPosts, article];

        setSavedIds(new Set(nextPosts.map((post) => post.id)));
        setData(nextPosts);
        localStorage.setItem("savedPosts", JSON.stringify(nextPosts));
    };

    const isSaved = useMemo(() => (article: SavedArticle) => savedIds.has(article.id), [savedIds]);

    return (
        <div className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl font-bold">المقالات المحفوظة</h2>
            <p>هنا ستجد جميع المقالات التي قمت بحفظها للرجوع إليها لاحقًا.</p>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-8">
                    {data.map((post) => (
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
                                    <FiHeart size={22} fill={isSaved(post) ? "currentColor" : "none"} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}