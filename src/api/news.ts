import { extractWpPosts, getWpPostsService } from "@/services/post.services"

export const getNewsPagePosts = async () => {
  const res = await getWpPostsService()
  const data = extractWpPosts(res)
  console.log('HomeTopTrendingPosts data:', data)
  return data
  // return data
}