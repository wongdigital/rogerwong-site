import { getSortedPostsData } from '@/lib/posts';
import { generateFeed } from '@/lib/rss';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await getSortedPostsData();
  const feed = generateFeed('Roger Wong', 'Personal blog of Roger Wong');
  const baseUrl = 'https://rogerwong.me';

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${baseUrl}/posts/${post.id}`,
      link: `${baseUrl}/posts/${post.id}`,
      description: post.excerpt,
      date: new Date(post.date),
      image: post.imageSrc ? `${baseUrl}${post.imageSrc}` : undefined,
    });
  });

  return new NextResponse(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}