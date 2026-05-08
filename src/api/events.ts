import { CalendarEventProps } from "@/types"

export const getEvents = async (): Promise<CalendarEventProps[]> => {
  try {
    const res = [
      {id: 1, title: "مهرجان الفيلم العربي", startDate: "2024-07-01", endDate: "2024-07-10", location: "الدار البيضاء", description: "مهرجان سنوي يعرض أفلامًا عربية من مختلف البلدان.", image: "https://i.pinimg.com/736x/26/94/ca/2694ca65a8623b3a206124bf7c7ea45a.jpg"},
      {id: 2, title: "معرض الفن الحديث", startDate: "2024-07-15", endDate: "2024-07-20", location: "الرباط", description: "معرض يضم أعمالًا فنية حديثة لفنانين مغاربة وعالميين.", image: "https://i.pinimg.com/736x/60/85/87/608587b6515b2bb18360fe00f7f1706f.jpg"},
      {id: 3, title: "مهرجان الموسيقى العالمية", startDate: "2024-08-05", endDate: "2024-08-12", location: "مراكش", description: "مهرجان يجمع موسيقيين من مختلف أنحاء العالم لتقديم عروض موسيقية متنوعة.", image: "https://i.pinimg.com/736x/c0/f3/0d/c0f30dfec4a4022fbc9a99aa54cb0ba1.jpg"},
      {id: 4, title: "معرض الحرف التقليدية", startDate: "2024-08-20", endDate: "2024-08-25", location: "فاس", description: "معرض يسلط الضوء على الحرف التقليدية المغربية ويعرض منتجات حرفيين محليين.", image: "https://m.media-amazon.com/images/I/61d0Hd4Xr5L._UF1000,1000_QL80_.jpg"},
      {id: 5, title: "مهرجان المسرح العربي", startDate: "2024-09-10", endDate: "2024-09-15", location: "طنجة", description: "مهرجان يقدم عروضًا مسرحية عربية معاصرة وكلاسيكية من مختلف البلدان.", image: "https://bloombooks.ma/storage/uploads/fX8x4G6j900Dtj7lZBOoojCcPBgylB0D4VxnFFkW.png"}
    ]
                // [        
                //     "https://i.pinimg.com/736x/26/94/ca/2694ca65a8623b3a206124bf7c7ea45a.jpg",
                //     "https://i.pinimg.com/736x/60/85/87/608587b6515b2bb18360fe00f7f1706f.jpg",
                //     "https://i.pinimg.com/736x/c0/f3/0d/c0f30dfec4a4022fbc9a99aa54cb0ba1.jpg",
                //     "https://m.media-amazon.com/images/I/61d0Hd4Xr5L._UF1000,1000_QL80_.jpg",
                //     "https://bloombooks.ma/storage/uploads/fX8x4G6j900Dtj7lZBOoojCcPBgylB0D4VxnFFkW.png"
                // ]

                return res
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}