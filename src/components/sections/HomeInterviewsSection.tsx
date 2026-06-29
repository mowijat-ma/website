
// import SectionTitle from "../typoghraphy/title-with-bar"
import { getHomeInterviews } from "@/api-services/interviews"
import InterviewsHomeCarousel from "../interviews/InterviewsCarousel";


export async function HomeInterviewsSection({ }) {
    const [interviews] = await Promise.all([
        getHomeInterviews()
    ]);

    // return 
    return (<>    
    <div className="bg-background p-8 rounded-lg">
        <InterviewsHomeCarousel interviews={interviews} />
    </div>
    </>)

}


