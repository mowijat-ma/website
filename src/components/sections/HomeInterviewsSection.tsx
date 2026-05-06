
// import SectionTitle from "../typoghraphy/title-with-bar"
import { getHomeInterviews } from "@/api/interviews"
import InterviewsCarousel from "../interviews/InterviewsCarousel"


export async function HomeInterviewsSection({ }) {
    const [interviews] = await Promise.all([
        getHomeInterviews()
    ]);

    // return 
    return (<>    
    <div className="bg-background p-8 rounded-lg">
        <InterviewsCarousel interviews={interviews} />
    </div>
    </>)

}


