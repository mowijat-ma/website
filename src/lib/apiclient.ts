const BASE_URL = "https://public-api.wordpress.com/wp/v2/sites/mowijat.wordpress.com";
// const BASE_URL = "https://public-api.wordpress.com/wp/v2/sites/mowijat.wordpress.com";
const BASE_URL2 = "https://www.hespress.com/wp-json/wp/v2";
const BASE_URL3 = "https://cine-philia.com/wp-json/wp/v2";
interface ApiResponse<T = unknown> {
  res: Promise<T>
  url: string
}

export async function apiClient<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${BASE_URL3}/${endpoint}`
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    return { res: response.json() as Promise<T>, url }
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    )
  }
}
