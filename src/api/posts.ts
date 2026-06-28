import { apiClient } from "@/lib/apiclient"
import { extractWpPost, extractWpPosts, getSearchResultsContents, getWpPostByIdService, getWpPostsService } from "@/services/post.services"
// import { extractWpPost, extractWpPosts } from "@/services/post.services"
// import { WpPost } from "@/types"

interface Post {
  id: number
  title: string
  content: string
  [key: string]: unknown
}

export const getWpPosts = async (): Promise<Post[]> => {
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    return await res
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}

export const searchWpPosts = async (query: string, page = 1) => {
  const params = new URLSearchParams({
    search: query,
    page: page.toString(),
    // per_page: '10',
    type: 'post', // Only search blog posts
    subtype: 'post'
  });
  try {
    const { res } = await apiClient<Post[]>(`search?${params}`, {
      method: 'GET',
    })
    // const data = extractWpPosts(await res)
    const data = await getSearchResultsContents(await res)
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getWpPostsByCategory = async (category: string) => {
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })

    // return extractWpPosts(res)
    return res
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getFirstWpPost = async () => {
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    const data = await res
    return extractWpPost(data[0])
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getCinemaWorldWpPosts = async () => {
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getCinemaWorldWpPostsHome = async () => {
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return data?.slice(0, 5);
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getCinemaMorrocanWpPosts = async () => {
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return [data[5], data[2], data[3], data[4]]
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getCinemaArabeWpPosts = async () => {
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return [data[4], data[3], data[2], data[1]]
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getWpNewsPosts = async () => {
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return [data[0], data[5], data[2]]
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}

export const getWpMoreReads = async () => {
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return data.slice(0, 5)
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getWpTopPosts = async () => {
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return [data[0], data[5], data[2]]
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}


// getHomeTopTrendingPosts
export const getHomeTopTrendingPosts = async () => {
  const res = await getWpPostsService()
  const data = extractWpPosts(res)
  console.log('HomeTopTrendingPosts data:', data)
  return data
  // return data
}
// getHomeTopReadsPosts
export const getHomeTopReadsPosts = async () => {
  try {
    const res = await getWpPostsService()
    const data = extractWpPosts(res)
    return data
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
// getHomeTopCinemaWorldPosts
export const getHomeTopCinemaWorldPosts = async () => {
  try {

  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
// getHomeTopCinemaArabePosts
export const getHomeTopCinemaArabePosts = async () => {
  try {

  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
// getHomeTopCinemaMorrocoPosts
export const getHomeTopCinemaMorrocoPosts = async () => {
  try {

  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
// getHomeTopNewsPosts
export const getHomeTopNewsPosts = async () => {
  const res = await getWpPostsService()
  const data = extractWpPosts(res)
  console.log('HomeTopTrendingPosts data:', data)
  return data
}
// getHomeTopInterviews
export const getHomeTopInterviews = async () => {
  try {

  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}


export const getWpPostById = async (id: string) => {
  const res = await getWpPostByIdService(id)
  const data = extractWpPost(res)
  return data
}