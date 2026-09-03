'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiShare } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { PiPrinter } from "react-icons/pi";

export default function ArticleContentCtrl({ article }: { article: any }) {
    const router = useRouter();
    const [isSaved, setIsSaved] = useState(false);

    // Load the initial saved state safely on the client
    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]");
        setIsSaved(savedPosts.some((post: any) => post.id === article.id));
    }, [article.id]);
    const OnBackClick = () => {
        router.back();
    };

    const OnShareClick = async () => {
        console.log('Share button clicked', article?.title);

        // 1. Build basic layout for text sharing
        const shareData: ShareData = {
            title: article?.title || document.title,
            text: article?.title ? `*${article.title}*:\n${article.description || ''}` : 'تحقق من هذا المقال!',
            url: "https://reprimandingly-nonsegregated-kandice.ngrok-free.dev/articles/121/content",
        };

        // 2. Try fetching the file and attach it safely
        try {
            const imageUrl = "https://mowijat.wordpress.com/wp-content/uploads/2026/07/661429068_122116382343239332_7827532131443429542_n.jpg?w=768&allow_lossy=1";

            // Note: If you hit a CORS block, make sure this image comes from your own local public/ folder or proxy
            const res = await fetch(imageUrl);
            const blob = await res.blob();

            const file = new File([blob], "article-image.jpg", { type: blob.type });
            const dataWithFiles = { ...shareData, files: [file] };

            // Check if both the browser AND the user's OS support sharing this type of file
            await navigator.share(dataWithFiles);
            console.log('Article shared successfully with image');
            return; // Exit function successfully
            // if (navigator.canShare && navigator.canShare(dataWithFiles) || true) {
            // }
        } catch (fileError) {
            // Log file error, but don't crash. Fall back smoothly to sharing just text/links
            console.warn("Failed to process image attachment due to CORS or network:", fileError);
        }

        // 3. Fallback path if files aren't supported or failed to fetch
        if (navigator.share) {
            try {
                await navigator.share(shareData);
                console.log('Article shared successfully (Text only)');
            } catch (error: any) {
                if (error.name !== 'AbortError') {
                    console.error('Error sharing article text:', error);
                }
            }
        } else {
            // 4. Desktop / No WebShare support fallback: Copy to Clipboard
            try {
                await navigator.clipboard.writeText(shareData.url || window.location.href);
                alert("تم نسخ الرابط إلى الحافظة!");
            } catch (err) {
                console.error("Failed to copy link: ", err);
            }
        }
    };

    const OnPrintClick = () => {
        window.print();
    };

    const OnSaveClick = () => {
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
        <>
            <div className="border-mesure bg-background rounded-lg flex w-full h-fit">
                <button
                    onClick={OnBackClick}
                    className="grow text-center flex flex-col justify-center items-center gap-2 font-semibold py-4"
                >
                    <GoArrowRight size={22} />
                    <span className="hidden sm:block">رجوع</span>
                </button>
                <button
                    onClick={OnSaveClick}
                    className="grow text-center flex flex-col justify-center items-center gap-2 font-semibold py-4"
                >
                    <FiHeart size={22} fill={isSaved ? "currentColor" : "none"} />
                    <span className="hidden sm:block">حفظ</span>
                </button>
                <button
                    onClick={OnPrintClick}
                    className="grow text-center flex flex-col justify-center items-center gap-2 font-semibold py-4"
                >
                    <PiPrinter size={22} />
                    <span className="hidden sm:block">طباعة</span>
                </button>
                <button
                    onClick={OnShareClick}
                    className="grow text-center flex flex-col justify-center items-center gap-2 font-semibold py-4"
                >
                    <BiShare size={22} />
                    <span className="hidden sm:block">ارسال</span>
                </button>
            </div>
        </>
    );
}