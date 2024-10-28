import { getSortedPostsData } from '@/lib/posts';
import { getSortedLinklogData } from '@/lib/linklog';

export default async function sitemap() {
  const baseUrl = 'https://rogerwong.me';
  const posts = await getSortedPostsData();
  const links = getSortedLinklogData();

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
    {
      url: `${baseUrl}/linklog`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}

