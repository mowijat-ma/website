import { INTERVIEWS_CATEGORY, NEWS_CATEGORY } from "@/data/constant"
import { extractWpPost, extractWpPosts } from "@/services/post.services"

// export const getHomeInterviews = async () => {
//     const data = [
//         {
//             id: 1,
//             title: "حوار مع مسرحی",
//             excerpt: "",
//             cover: "./images/hemdi.jpeg",
//             with: {
//                 image: "/images/hemdi.jpeg",
//                 name_ar: "حمدي عزازي"
//             }

//         },
//         {
//             id: 2,
//             title: "حوار مع سينيمائي",
//             excerpt: "",
//             cover: "/images/robert.jpeg",
//             with: {
//                 image: "https://classes.stellaadler.com/wp-content/uploads/sites/6/2024/05/10-1.jpg",
//                 name_ar: "روبرت دي نيرو"
//             }

//         },
//         {
//             id: 3,
//             title: "حوار مع سينيمائي",
//             excerpt: "",
//             cover: "/images/robert.jpeg",
//             with: {
//                 image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbD4lM_99y4LXcDYTJewsq33aETDaDTZ-UZO0u9c039dzV4flJcUQCk3rYI0a3vFr14QYU9kCODtsVLOKKMMJRmndcdvyEQUIGoRO_qM&s=10",
//                 name_ar: "روبرت دي نيرو"
//             }

//         },
//         {
//             id: 4,
//             title: "حوار مع سينيمائي",
//             excerpt: "",
//             cover: "/images/martin.jpeg",
//             with: {
//                 image: "https://img.festival-cannes.com/eyJidWNrZXQiOiJtZWRpYSIsImtleSI6InVwbG9hZHNcLzIwMjNcLzA1XC8xNTUxODkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1NTYsImhlaWdodCI6NjgwLCJmaXQiOiJjb3ZlciJ9fX0=",
//                 name_ar: "مارتن سكورسيزي"
//             }

//         },
//     ]
//     return data
// }
export const getHomeInterviews = async () => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/posts?categories=${INTERVIEWS_CATEGORY.id}&per_page=6`)
        const data = await res.json()
        return data.map((post: any) => extractWpPost(post))
    } catch (error) {
        console.error('Error fetching home interviews:', error)
        throw new Error(
            error instanceof Error ? error.message : "Failed to fetch home interviews"
        )
    }
}

export const getInterviewBySlug = async (slug: string) => {
    try {
    const res = await fetch(`${process.env.BASE_URL}/posts/${slug}`)
    const interview = await res.json()
    const data = extractWpPost(interview)
    console.log(' data:', data)
    return data
  } catch (error) {
console.error('Error fetching interview post:', error)
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch post"
    )
  }
}
export const getOtherInterviews = async () => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/posts?categories=${INTERVIEWS_CATEGORY.id}&per_page=6`)
        const data = extractWpPosts(await res.json())
        return data
    } catch (error) {
        console.error('Error fetching home interviews:', error)
        throw new Error(
            error instanceof Error ? error.message : "Failed to fetch home interviews"
        )
    }
}