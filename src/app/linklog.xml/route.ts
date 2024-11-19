import { getSortedLinklogData } from '@/lib/linklog';
import { generateFeed } from '@/lib/rss';
import { NextResponse } from 'next/server';

export async function GET() {
  const links = getSortedLinklogData();
  const baseUrl = 'https://rogerwong.me';
  const feed = generateFeed('Roger Wong Links', 'Linklog of interesting articles and resources', baseUrl);

  links.slice(0, 10).forEach((link) => {
    feed.addItem({
      title: link.title,
      id: link.linkUrl,
      link: link.linkUrl,
      description: `Via ${link.linkSource}`,
      date: new Date(link.date),
    });
  });

  return new NextResponse(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}