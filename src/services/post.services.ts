import { apiClient } from "@/lib/apiclient";
import { WordPressPost } from "@/types/wp.types";

type ExtractedWpPost = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  content: string;
};

type WpLike = Record<string, unknown>;

const isRecord = (value: unknown): value is WpLike =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const toText = (value: unknown): string => {
  if (typeof value === "string") return value;
  if (!isRecord(value)) return "";
  return typeof value.rendered === "string" ? value.rendered : "";
};

const getImageUrl = (item: WpLike): string => {
  const yoast = isRecord(item.yoast_head_json) ? item.yoast_head_json : undefined;
  const ogImages = Array.isArray(yoast?.og_image) ? yoast.og_image : [];
  const firstOgImage = isRecord(ogImages[0]) ? ogImages[0] : undefined;
  const yoastImage = typeof firstOgImage?.url === "string" ? firstOgImage.url : "";
  const jetpackImage = typeof item.jetpack_featured_media_url === "string"
    ? item.jetpack_featured_media_url
    : "";

  return yoastImage || jetpackImage;
};

const normalizeItem = (value: unknown): ExtractedWpPost => {
  if (!isRecord(value)) {
    throw new TypeError("Expected a WordPress post object");
  }

  const title = toText(value.title);
  const excerpt = toText(value.excerpt);
  const content = toText(value.content);
  const numericId = typeof value.id === "number" ? value.id : Number(value.id);
  const dateValue = typeof value.date === "string" ? value.date : "";

  return {
    id: Number.isFinite(numericId) ? numericId : 0,
    title: stripHtml(title),
    description: stripHtml(excerpt),
    date: dateValue && !Number.isNaN(Date.parse(dateValue))
      ? new Date(dateValue).toLocaleDateString('ar-EG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
      : "",
    category: typeof value.context === "string" ? value.context : "سينما",
    image: getImageUrl(value),
    content
  };
};

export const extractWpPosts = (res: unknown) => {
  console.log("extractWpPosts res:", res);
  if (!Array.isArray(res)) {
    throw new TypeError("Expected a list of WordPress posts");
  }
  return res.map(normalizeItem);
};

export const extractWpPost = (item: unknown): ExtractedWpPost => normalizeItem(item);



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
    const item = extractWpPost(post);
    list.push(item);
  }
  return list;
}