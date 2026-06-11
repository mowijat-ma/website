import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());

  const blogEntries = posts.map((post: any) => ({
    url: `https://example.com/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    { url: 'https://example.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    ...blogEntries,
  ];
}