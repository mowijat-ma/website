export const getHomeInterviews = async ()=>{
    const data = [
        {
            id:1,
            title: "حوار مع مسرحی",
            excerpt: "", 
            cover: "./images/hemdi.jpeg",
            with: {
                image: "./images/hemdi.jpeg",
                name_ar: "حمدي عزازي"
            }
            
        },
        {
            id:2,
            title: "حوار مع سينيمائي",
            excerpt: "", 
            cover: "./images/robert.jpeg",
            with: {
                image: "https://classes.stellaadler.com/wp-content/uploads/sites/6/2024/05/10-1.jpg",
                name_ar: "روبرت دي نيرو"
            }
            
        },
        {
            id:3,
            title: "حوار مع سينيمائي",
            excerpt: "", 
            cover: "./images/robert.jpeg",
            with: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbD4lM_99y4LXcDYTJewsq33aETDaDTZ-UZO0u9c039dzV4flJcUQCk3rYI0a3vFr14QYU9kCODtsVLOKKMMJRmndcdvyEQUIGoRO_qM&s=10",
                name_ar: "روبرت دي نيرو"
            }
            
        },
        {
            id:4,
            title: "حوار مع سينيمائي",
            excerpt: "", 
            cover: "./images/martin.jpeg",
            with: {
                image: "https://img.festival-cannes.com/eyJidWNrZXQiOiJtZWRpYSIsImtleSI6InVwbG9hZHNcLzIwMjNcLzA1XC8xNTUxODkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1NTYsImhlaWdodCI6NjgwLCJmaXQiOiJjb3ZlciJ9fX0=",
                name_ar: "مارتن سكورسيزي"
            }
            
        },
    ]
    return data
}

export const getInterviewBySlug = async (slug: string)=>{
    const data = {
        id:1,  
        title: "حوار مع مسرحی",
        content: "<p>هذا نص تجريبي لمحتوى الحوار مع مسرحي. يمكن أن يحتوي هذا النص على معلومات حول حياة المسرحي، أعماله، أفكاره، وأي تفاصيل أخرى ذات صلة. هذا النص هو مجرد مثال ويمكن استبداله بمحتوى حقيقي عند توفره.</p>",
        cover: "./images/hemdi.jpeg",
        with: {
            image: "./images/hemdi.jpeg",
            name_ar: "حمدي عزازي"
        }
    }
    return data
        }