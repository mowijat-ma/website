"use client"
import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CustomCarouselNext, CustomCarouselPrevious } from "../ui/carousel";
import { AspectRatio } from "../ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { IoLocationOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { CalendarEventProps } from "@/types";

export default function CarouselCalendar({
    events
}: {
    events: CalendarEventProps[]
}) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false); // حالة الرؤية

    const sectionRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('sections.calendar')

    // مراقب الظهور (Intersection Observer)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // سيصبح true عندما يظهر 30% من القسم في الشاشة
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const handleDotClick = (index: number) => {
        api?.scrollTo(index)
    }
    return (
        <div className="">
            <Carousel
            setApi={setApi}
            className="w-full relative"
            dir="rtl"
            opts={{ direction: "rtl", align: "start" }}
        >
            {/* حاوية الأزرار: تظهر وتختفي بناءً على isVisible */}
            <div className={cn(
                "hidden md:flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-40 px-4 transition-all duration-700 ease-in-out pointer-events-none",
                isVisible ? "opacity-100 translate-y-[-50%]" : "opacity-0 translate-y-[-20%]"
            )}>
                <div className="pointer-events-auto -translate-x-6">
                    <CustomCarouselPrevious className="p-4 border bg-white/90 backdrop-blur-sm rounded-full scale-125 shadow-xl hover:bg-white" />
                </div>
                <div className="pointer-events-auto translate-x-6">
                    <CustomCarouselNext className="p-4 border bg-white/90 backdrop-blur-sm rounded-full scale-125 shadow-xl hover:bg-white" />
                </div>
            </div>

            <CarouselContent className="-ml-4">
                {events.map((item: CalendarEventProps, i: number) => (
                    <CarouselItem key={i} className="pl-4 md:basis-1/3 lg:basis-1/3">
                        <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                            <AspectRatio ratio={3 / 4}>
                                <img className="w-full h-full object-cover bg-muted" src={item.image} alt={item.title} />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                <div className="font-ui px-4 p-4 absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-gradient-to-t from-black/80 to-transparent text-white">
                                    <h3 className="text-3xl font-semibold mb-2">{item.title}</h3>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoLocationOutline size={19} />
                                        <span className="text-sm text-white">{item.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiCalendar size={19} />
                                        <span className="text-sm text-white">{item.startDate}</span>
                                    </div>
                                </div>
                            </AspectRatio>
                        </div>
                    </CarouselItem> 
                ))}
            </CarouselContent>

            {/* النقاط السفلية */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: count }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleDotClick(i)}
                        className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            current === i ? "bg-primary w-8" : "bg-slate-300 w-2 hover:bg-slate-400"
                        )}
                    />
                ))}
            </div>
        </Carousel>
        </div>
    )
}