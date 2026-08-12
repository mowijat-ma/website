import React from "react";
import { useTranslations } from "next-intl";
import { Calendar } from "../ui/calendar";
import { Card } from "../ui/card";
import { ar } from "date-fns/locale";
import SectionTitle from "../font/section-title";
import CarouselCalendar from "../calendar/carousel.calendar";
import { getEvents, getHomeEvents } from "@/api-services/events";
import { getTranslations } from "next-intl/server";
// import TitleWithBar from "../typoghraphy/title-with-bar";
interface HomeCalendarSectionProps {
    title?: string;
    img?: string;

}
export default async function HomeCalendarSection() {

    // const t = useTranslations('sections.calendar')
    const [t, data, events] = await Promise.all([
        getTranslations('sections.calendar'),
        getEvents(),
        getHomeEvents()

    ])

    return (
        <section className="bg-background relative p-8 ">
            <SectionTitle value={t('title')} />
            <CarouselCalendar events={events} />
            {/* {events.map((event: any) => (
                <div key={event.id}>
                    <img src={event.image} alt={event.title} />
                    <p>{event.title}</p>
                    <p>{event.startDate}</p>
                    <p>{event.location}</p>
                </div>
            ))} */}
            {/* {JSON.stringify(events)} */}
        </section>
    );
}


export function HomeCalendarExtension() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return <>
        <Card className="p-4 shadow-sm border-slate-100">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={ar}
                className="rounded-md border font-ui"
                // تمييز الأيام التي تحتوي على فعاليات
                //   modifiers={{ hasEvent: eventDates }}
                modifiersStyles={{
                    hasEvent: {
                        fontWeight: 'bold',
                        color: '#c2410c', // لون برتقالي/نحاسي للفعاليات
                        textDecoration: 'underline'
                    }
                }}
            />
        </Card>
    </>
}