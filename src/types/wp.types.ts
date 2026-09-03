// types/wordpress.ts

export interface RenderedContent {
  rendered: string;
  protected?: boolean;
}

export interface WordPressPost {
  id: number;
  date: string; // ISO format
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: string;
  link: string;
  title: RenderedContent;
  content: RenderedContent;
  excerpt: RenderedContent;
  author: number;
  featured_media: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  sticky: boolean;
  template: string;
  format: "standard" | "aside" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio";
  meta: WordPressMeta;
  categories: number[];
  tags: number[];
  class_list: string[];
  
  // حقول إضافية من Jetpack
  jetpack_featured_media_url: string;
  jetpack_shortlink: string;
  jetpack_sharing_enabled: boolean;
  jetpack_likes_enabled: boolean;
  "jetpack-related-posts": JetpackRelatedPost[];
  
  _links: WordPressLinks;
}

export interface WordPressMeta {
  advanced_seo_description: string;
  jetpack_seo_html_title: string;
  jetpack_seo_noindex: boolean;
  // أضف أي حقول Meta أخرى تستخدمها هنا (مثل ACF)
  // [key: string]: any; 
}

export interface JetpackRelatedPost {
  id: number;
  url: string;
  url_meta: {
    origin: number;
    position: number;
  };
  title: string;
  author: string;
  date: string;
  format: boolean | string;
  excerpt: string;
  rel: string;
  context: string;
  img: {
    alt_text: string;
    src: string;
    width: number;
    height: number;
    srcset: string;
  };
  classes: string[];
}

export interface WordPressLinks {
  self: Array<{ href: string; targetHints?: { allow: string[] } }>;
  collection: Array<{ href: string }>;
  about: Array<{ href: string }>;
  author: Array<{ embeddable: boolean; href: string }>;
  replies: Array<{ embeddable: boolean; href: string }>;
  "version-history": Array<{ count: number; href: string }>;
  "wp:featuredmedia": Array<{ embeddable: boolean; href: string }>;
  "wp:attachment": Array<{ href: string }>;
  "wp:term": Array<{ taxonomy: string; embeddable: boolean; href: string }>;
  curies: Array<{ name: string; href: string; templated: boolean }>;
}