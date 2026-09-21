import { MetadataRoute } from 'next';

interface SitemapPost {
  slug: string;
  updatedAt: string | number | Date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const posts: SitemapPost[] = [];

  const blogEntries = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    ...blogEntries,
  ];
}