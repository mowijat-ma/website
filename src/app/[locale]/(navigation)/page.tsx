import HomeTopReadsAside from "@/components/asides/HomeTopReadsAside";
import HomeTopTrendingPosts from "@/components/sections/HomeTopTrendingPosts";
import NewsSection from "@/components/sections/HomeNewsSection";
import { HomeInterviewsSection } from "@/components/sections/HomeInterviewsSection";
import HomeCinemaMorrocanSection from "@/components/sections/HomeCinemaMorrocanSection";
import HomeCinemaArabeSection from "@/components/sections/HomeCinemaArabeSection";
import HomeCinemaWorldSection from "@/components/sections/HomeCinemaWorldSection";
import HomeCalendarSection from "@/components/sections/HomeCalendarSection";


export default function Home() {
  
  return (
    <>
    {/* {JSON.stringify(links)} */}
    <div className="flex flex-col gap-8">
    
    <div className="grid grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8 col-span-12 flex flex-col gap-8 border-mesure">
          <HomeTopTrendingPosts />
          <NewsSection />
        </div>
        {/* Sidebar */}
        <aside className="col-span-4 hidden md:block sticky top-24 h-fit border-mesure">
          <HomeTopReadsAside />
          
        </aside>
      </div>
      <HomeInterviewsSection />
      <div className="bg-background p-8 rounded-lg flex flex-col gap-16">
          <HomeCinemaMorrocanSection />
          <HomeCinemaArabeSection />
          <HomeCinemaWorldSection />
      </div>
      <HomeCalendarSection />
    </div>
    </>
  );
}
