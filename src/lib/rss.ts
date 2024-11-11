import { Feed } from 'feed';

export function generateFeed(title: string, description: string) {
  const baseUrl = 'https://rogerwong.me';
  const author = {
    name: 'Roger Wong',
    email: 'roger@rogerwong.me',
    link: baseUrl,
  };

  const feed = new Feed({
    title: title,
    description: description,
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: `${baseUrl}/images/og-image.jpg`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Roger Wong`,
    author: author,
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
      json: `${baseUrl}/feed.json`,
      atom: `${baseUrl}/atom.xml`,
    },
  });

  return feed;
}