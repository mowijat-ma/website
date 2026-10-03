import { apiClient } from "@/lib/apiclient";
import { WordPressPost } from "@/types/wp.types";

type RenderedField = string | { rendered?: string } | null | undefined;
type WpLike = { [key: string]: unknown };
type ExtractedWpPost = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  content: string;
};

const toText = (value: RenderedField): string => {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "rendered" in value) {
    const rendered = value.rendered;
    return typeof rendered === "string" ? rendered : "";
  }
  return "";
};

const getImageUrl = (item: WpLike): string => {
  const yoast = item.yoast_head_json as { og_image?: Array<{ url?: string }> } | undefined;
  const yoastImage = yoast?.og_image?.[0]?.url ?? "";
  const jetpackImage = typeof item.jetpack_featured_media_url === "string"
    ? item.jetpack_featured_media_url
    : "";

  return yoastImage || jetpackImage;
};

const normalizeItem = (item: WpLike): ExtractedWpPost => {
  const title = toText(item.title as RenderedField);
  const excerpt = toText(item.excerpt as RenderedField);
  const content = toText(item.content as RenderedField);
  const dateValue = typeof item.date === "string" ? item.date : "";

  return {
    id: typeof item.id === "number" ? item.id : Number(item.id ?? 0),
    title: stripHtml(title.replace(/<[^>]*>?/gm, '')),
    description: stripHtml(excerpt.replace(/<[^>]*>?/gm, '')),
    date: dateValue ? new Date(dateValue).toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }) : "",
    category: typeof item.context === "string" ? item.context : "سينما",
    image: getImageUrl(item),
    content
  };
};

export const extractWpPosts = (res: WpLike[]) => {
  return res.map((item) => normalizeItem(item));
};

export const extractWpPost = (item: WpLike): ExtractedWpPost => normalizeItem(item);



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



export const getSearchResultsContents = async (results: Array<{ id: number | string }>) => {
  const list: ExtractedWpPost[] = [];
  for (let i = 0; i < results.length; i++) {
    const element = results[i];
    const post = await getWpPostByIdService(String(element.id));
    const item = extractWpPost(post as unknown as WpLike);
    list.push(item);
  }
  return list;
}