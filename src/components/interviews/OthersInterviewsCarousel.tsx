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
import InterviewPostContainer from "./interviewsContainerItem"
import { InterviewPost } from "@/types"


const OthersInterviewsCarousel = ({ interviews }: { interviews: InterviewPost[] }) => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const t = useTranslations('sections.interviews')



    React.useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
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
                <CarouselContent className="-ml-4">
                    {interviews.map((interview, i) => (
                        <CarouselItem key={interview.id} className="pl-8 md:basis-1/2 lg:basis-1/3">
                            <div className="h-full">
                                <InterviewPostContainer post={interview} />
                                {/* <InterviewPostContainer post={interviews[i]} /> */}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}


export default OthersInterviewsCarousel