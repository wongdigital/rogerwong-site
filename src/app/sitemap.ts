import { getSortedPostsData } from '@/lib/posts';

export default async function sitemap() {
  const baseUrl = 'https://rogerwong.me';
  const posts = await getSortedPostsData();

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.id}`,
    lastModified: new Date(post.date),
    changefreq: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/linklog`,
      lastModified: new Date(),
      changefreq: 'daily',
      priority: 0.9,
    },
    ...postUrls,
  ];
}

