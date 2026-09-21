'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { useRef, useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import '../../style/calendar.css'

interface EventInfo {
  event: {
    title: string
    extendedProps: {
      type?: string
      time?: string
    }
  }
}

export default function CalendarAside() {
  const calendarRef = useRef<{ getApi: () => { next: () => void; prev: () => void } } | null>(null)
  const [calendarTitle, setCalendarTitle] = useState("");
  const handleDatesSet = (arg: { view: { title: string } }) => {
    setCalendarTitle(arg.view.title);
  };
  function goNext() {
    const calendarApi = calendarRef.current?.getApi()
    calendarApi?.next()
  }
  function goBack() {
    const calendarApi = calendarRef.current?.getApi()
    calendarApi?.prev()
  }
  //   return (
  //     <Calendar
  //   mode="single"
  //   selected={date}
  //   onSelect={setDate}
  //   className="rounded-lg border w-full"
  // />
  //   )
  return (
    <div className="bg-background p-4 rounded ">
      {/* <SectionTitle value="التقويم" /> */}
      <div className="flex gap-4 items-center">
        <Button variant="ghost" onClick={goBack} className="">
          <ChevronLeftIcon data-icon="inline-start" className={cn("rtl:rotate-180 transition-transform")} />
        </Button>
        <Button variant="ghost" className="cursor-default text-lg grow ">
          {calendarTitle}
        </Button>
        <Button variant="ghost" onClick={goNext} className="">
          <ChevronRightIcon data-icon="inline-start" className={cn("rtl:rotate-180 transition-transform")} />
        </Button>

      </div>

      <FullCalendar
        ref={calendarRef}
        datesSet={handleDatesSet}
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: 'عرض "Ciné-Concert" بعنوان', date: '2026-06-16', time: "15:00" },
          { title: '1 مارس: عرض خاص للأطفال لفيلم الأنيميشن Chien pourri, la vie à Paris!.', date: '2026-06-15', time: "14:20" }
        ]}
        direction="rtl"
        locale="ar"

        eventContent={renderEventContent}
        headerToolbar={{
          start: '', // will normally be on the left. if RTL, will be on the right
          center: '',
          end: ''
        }}
        titleFormat={{ year: 'numeric', month: 'long' }}

      />
    </div>
  )
}

function renderEventContent(eventInfo: EventInfo) {
  const { type, time } = eventInfo.event.extendedProps
  console.log(eventInfo)
  return (
    <div className="flex flex-col p-1 overflow-hidden rounded border-r-4 border-primary bg-primary">
      <div className="flex items-center justify-between gap-1">
        {type && <span className="text-[10px] font-bold uppercase text-blue-700">{type}</span>}
        {time && <span className="text-[10px] text-gray-500">{time}</span>}
      </div>
      <div className="truncate font-semibold text-gray-900">
        {eventInfo.event.title}
      </div>
    </div>
  )
}
