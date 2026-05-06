import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio"
import { cn } from "@/lib/utils"
import { InterviewPost } from "@/types"

 const InterviewPostContainer = ({ post }: { post: InterviewPost }) => {
    return (
        <Link href={`/interviews/${post.id}`} className="group block h-full relative ">
            <div className="flex flex-col gap-4 rounded-xl transition-all duration-200 overflow-hidden">
                {/* Image Wrapper */}
                <AspectRatio
                    ratio={3 / 4}
                    className="overflow-hidden rounded-xl bg-muted "
                >
                    <img
                        src={post.with?.image || "https://ui.shadcn.com/placeholder.svg"}
                        alt={post.title}
                        style={{ boxShadow: "inset 0px -29px 48px 0px #696969" }}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 "
                    />
                </AspectRatio>

                {/* Post Content */}
                {/* <div className="font-ui px-4 p-4 absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-gradient-to-t from-black/80 to-transparent text-white"> */}

                <div className={cn("flex flex-col gap-2 absolute bottom-4 right-4 bg-background-",
                    // "translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-gradient-to-t from-black/80 to-transparent",
                    "px-4 p-4 absolute bottom-0 left-0 right-0",
                    "bg-gradient-to-t from-black/80 to-transparent",
                    "rounded-lg"
                )}>

                    <h3
                        className="text-2xl leading-tight font-bold text-white"
                    >
                        {post.title}
                    </h3>
                    <p className="text-muted-foreground text-lg line-clamp-2">
                        {post.with?.name_ar}
                    </p>
                </div>
            </div>
            {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" /> */}
        </Link>
    )
}

export default InterviewPostContainer