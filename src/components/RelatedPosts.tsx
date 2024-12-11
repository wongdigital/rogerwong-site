'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { calculateReadTime } from '@/lib/readTime';
import { Post } from '@/lib/posts';

type RelatedPostsProps = {
  currentPostId: string;
  currentPostCategories?: string[];
  allPosts: Post[];
};

export default function RelatedPosts({ currentPostId, currentPostCategories, allPosts }: RelatedPostsProps) {
  // Filter out the current post and find related posts
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPostId)
    .filter(post => {
      if (!currentPostCategories?.length) return true;
      return post.categories?.some(category => 
        currentPostCategories.includes(category)
      );
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-20 flex sm:flex-row flex-col gap-8 justify-center">
      {relatedPosts.map((post) => (
        <Link 
          key={post.id}
          href={`/posts/${post.id}`}
          className="w-full sm:w-1/2 rounded-lg border border-slate-200 hover:border-blue-400 dark:border-slate-700 dark:hover:border-blue-400 overflow-hidden block group transition-colors"
        >
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            width={2560}
            height={962}
            className="w-full h-auto"
          />
          <div className="p-4 space-y-1">
            <h2 className="link-primary text-xl font-bold">
              {post.title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-200">
              {formatDate(post.date)}&nbsp;&nbsp;•&nbsp;&nbsp;{calculateReadTime(post)} read
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
