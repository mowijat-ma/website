import { apiClient } from "@/lib/apiclient"
import { Post, WpCategory } from "@/types"

export const getWpCategories = async (): Promise<WpCategory[]> => {
  try {
    const { res } = await apiClient<WpCategory[]>('categories', {
      method: 'GET',
    })
    return await res
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}