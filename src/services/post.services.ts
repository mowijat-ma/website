import { apiClient } from "@/lib/apiclient";
import { Post, WpPost } from "@/types";
import { WordPressPost } from "@/types/wp.types";

export const extractWpPosts = (res:any) => {
  const data = res.map((item: any) => {
    return {
      id: item.id,
      title: stripHtml(item.title.rendered.replace(/<[^>]*>?/gm, '')),
      // WP excerpts come wrapped in <p> tags; item.excerpt.rendered is the correct path
      description: stripHtml(item.excerpt.rendered.replace(/<[^>]*>?/gm, '')),
      date: new Date(item.date).toLocaleDateString('ar-EG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      category: item.context || "سينما",
      // image: item.jetpack_featured_media_url ,
      image: item.yoast_head_json?.og_image?.[0]?.url || item.jetpack_featured_media_url || '',
      content: item.content.rendered
    };
  });

  return data
}

export const extractWpPost =  (item: any) => {
    return {
      id: item.id,
      title: stripHtml(item.title.rendered),
      // WP excerpts come wrapped in <p> tags; post.excerpt.rendered is the correct path
      description: stripHtml(item.excerpt.rendered.replace(/<[^>]*>?/gm, '')),
      date: new Date(item.date).toLocaleDateString('ar-EG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      category: item.context || "سينما",
      image: item.yoast_head_json?.og_image?.[0]?.url || item.jetpack_featured_media_url || '',
      content: item.content.rendered
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