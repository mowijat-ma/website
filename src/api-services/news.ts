import { NEWS_CATEGORY } from "@/data/constant"
import { apiClient } from "@/lib/apiclient"
import { LocalApiClient } from "@/lib/local_apiclient"
import { extractWpPosts, getWpPostsService } from "@/services/post.services"
import { WordPressPost } from "@/types/wp.types"

// export const getNewsPagePosts = async () => {
//   const res = await getWpPostsService()
//   const data = extractWpPosts(res)
//   console.log('HomeTopTrendingPosts data:', data)
//   return data
//   // return data
// }


export interface LocalApiResponse<T = unknown> {
  message:String
  data: WordPressPost[]
  res: Promise<T>
  url: string
}
export const getNewsPagePosts = async () => {
  // try {
  //   const { res }: { res: any } = await LocalApiClient(`/posts?categories=${NEWS_CATEGORY.id}`, {
  //     method: 'GET',
  //   })
  //   // console.log('NewsPagePosts res:', await res)
  //   console.log('NewsPagePosts data:',await res.data)
  //   // const data = extractWpPosts( await res)
  //   return []
  // } catch (error) {
  //   console.error('Error fetching news page posts:', error)
  //   throw new Error(
  //     error instanceof Error ? error.message : "Failed to fetch posts"
  //   )
  // }
  try {
    const { res } = await apiClient(`posts?categories=${NEWS_CATEGORY.id}`)
    const data = extractWpPosts(await res)
    console.log('NewsPagePosts data:', data)
    return data
  } catch (error) {
    console.error('Error fetching news page posts:', error)
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
