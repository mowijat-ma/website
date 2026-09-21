import { apiClient } from "@/lib/apiclient";
import { WordPressPost } from "@/types/wp.types";

export const extractWpPosts = (res: Array<Record<string, any>>) => {
  const data = res.map((item: Record<string, any>) => {
    const title = typeof item?.title === "string"
      ? item.title
      : item?.title?.rendered ?? "";
    const excerpt = typeof item?.excerpt === "string"
      ? item.excerpt
      : item?.excerpt?.rendered ?? "";
    const content = typeof item?.content === "string"
      ? item.content
      : item?.content?.rendered ?? "";

    return {
      id: item.id,
      title: stripHtml(title.replace(/<[^>]*>?/gm, '')),
      description: stripHtml(excerpt.replace(/<[^>]*>?/gm, '')),
      date: new Date(item.date).toLocaleDateString('ar-EG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      category: item.context || "سينما",
      image: item.yoast_head_json?.og_image?.[0]?.url || item.jetpack_featured_media_url || '',
      content
    };
  });

  return data
}

export const extractWpPost = (item: Record<string, any>) => {
  const title = typeof item?.title === "string"
    ? item.title
    : item?.title?.rendered ?? "";
  const excerpt = typeof item?.excerpt === "string"
    ? item.excerpt
    : item?.excerpt?.rendered ?? "";
  const content = typeof item?.content === "string"
    ? item.content
    : item?.content?.rendered ?? "";

  return {
    id: item.id,
    title: stripHtml(title.replace(/<[^>]*>?/gm, '')),
    description: stripHtml(excerpt.replace(/<[^>]*>?/gm, '')),
    date: new Date(item.date).toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    category: item.context || "سينما",
    image: item.yoast_head_json?.og_image?.[0]?.url || item.jetpack_featured_media_url || '',
    content
  };
}



export const getWpPostsService = async () => {
  try {
    const { res } = await apiClient<WordPressPost[]>('posts', {
      method: 'GET',
    })
    return res
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}

export const getWpPostByIdService = async (id: string) => {
  try {
    const { res } = await apiClient<WordPressPost>(`posts/${id}`, {})
    return res
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch post"
    )
  }
}

const stripHtml = (html: string) => {
  if (typeof window !== "undefined") {
    // إذا كان الكود يعمل في المتصفح (Client-side)
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
  // إذا كان الكود يعمل في السيرفر (Server-side/Build time)
  // نقوم بإزالة الوسوم وفك تشفير بعض الرموز الشائعة يدوياً أو بمكتبة
  return html
    .replace(/<[^>]*>?/gm, '') // إزالة الوسوم
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8211;/g, '-')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&amp;/g, '&');
};



export const getSearchResultsContents = async (results: any) => {
  const list: any[] = []
  for (let i = 0; i < results.length; i++) {
    const element = results[i];
    const post = await getWpPostByIdService(element.id)
    const item = extractWpPost(post)
    list.push(item)
  }
  return list
}