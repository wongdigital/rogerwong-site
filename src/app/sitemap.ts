import { getSortedPostsData } from '@/lib/posts';

export default async function sitemap() {
  const baseUrl = 'https://rogerwong.me';
  const posts = await getSortedPostsData();

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.id}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}

