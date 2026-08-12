const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://public-api.wordpress.com/wp/v2/sites/mowijat.wordpress.com";

interface ApiResponse<T = unknown> {
  res: Promise<T>
  url: string
}

export async function LocalApiClient<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${BASE_URL}/api/${endpoint}`
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    console.log('LocalApiClient response:', url, response)
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
