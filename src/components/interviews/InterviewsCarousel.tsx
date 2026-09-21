"use client"

import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CustomCarouselNext,
    CustomCarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { useTranslations } from "next-intl"
// import SectionTitle from "../typoghraphy/title-with-bar"
import SectionTitle from "../font/section-title"
import { InterviewPost, Post, WpPost } from "@/types"
import { Link } from "@/i18n/routing"
import { AspectRatio } from "../ui/aspect-ratio"
import { cn } from "@/lib/utils"
import { Route } from "next"


const InterviewsHomeCarousel = ({ interviews }: { interviews: Post[] }) => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const t = useTranslations('sections.interviews')
    const count = interviews.length

    React.useEffect(() => {
        if (!api) return

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap() + 1)
        }

        api.on("select", onSelect)
        return () => {
            api.off("select", onSelect)
        }
    }, [api])

    // RTL configuration
    const dir = 'rtl'

    return (
        <section className="mx-auto">
            <Carousel
                setApi={setApi}
                className="w-full"
                dir={dir}
                opts={{
                    direction: dir,
                    align: "start",
                    // loop: true,
                }}
            >
                <div className="flex justify-between items-center">
                    <SectionTitle value={t('title')} />
                    <div className="flex gap-2">
                        <CustomCarouselPrevious />
                        <CustomCarouselNext />
                    </div>
                </div>

                {/* Fixed: Use CarouselContent and CarouselItem for logic to work */}
                <CarouselContent className="-ml-4 mt-4">
                    {interviews.map((interview, i) => (
                        <CarouselItem key={interview.id} className="pl-8 md:basis-1/2 lg:basis-1/3">
                            <div className="h-full">
                                <Link 
                                href= "/"
                                // href={`/interviews/${String(interview.id)}/content` as Route}
                                className="group block h-full relative">
                                    <div className="flex flex-col gap-4 rounded-xl transition-all duration-200 overflow-hidden">
                                        {/* Image Wrapper */}
                                        <AspectRatio
                                            ratio={3 / 4}
                                            className="overflow-hidden rounded-xl bg-muted "
                                        >
                                            <img
                                                src={interview.image || "https://ui.shadcn.com/placeholder.svg"}
                                                alt={interview.title}
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
                                            "rounded-lg",
                                            "hidden group-hover:flex flex-col gap-2 transition-all duration-300 z-20 text-white"
                                        )}>

                                            <h3
                                                className="text-2xl leading-tight font-bold text-white"
                                            >
                                                {interview.title}
                                            </h3>
                                            <p className="text-muted-foreground text-lg line-clamp-2">
                                                {interview?.description || ""}
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" /> */}
                                </Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}


export default InterviewsHomeCarousel