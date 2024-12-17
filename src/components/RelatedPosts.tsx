'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { calculateReadTime } from '@/lib/readTime';
import { categories, type Category } from '@/lib/categories';

interface RelatedPostsProps {
  currentPostId: string;
  currentPostCategory: Category;
  currentPostTags?: string[];
  allPosts: {
    id: string;
    title: string;
    date: string;
    category: Category;
    tags?: string[];
    imageSrc?: string;
    content?: string;
  }[];
}

export default function RelatedPosts({ currentPostId, currentPostCategory, currentPostTags = [], allPosts }: RelatedPostsProps) {
  // First try to find posts in the same category
  let relatedPosts = allPosts
    .filter(post => post.id !== currentPostId)
    .filter(post => post.category === currentPostCategory)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // If we don't have enough posts from the same category, find posts with matching tags
  if (relatedPosts.length < 2 && currentPostTags.length > 0) {
    const remainingCount = 2 - relatedPosts.length;
    const postsWithMatchingTags = allPosts
      .filter(post => post.id !== currentPostId)
      .filter(post => post.category !== currentPostCategory) // Exclude posts we already have
      .filter(post => post.tags?.some(tag => currentPostTags.includes(tag)))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, remainingCount);

    relatedPosts = [...relatedPosts, ...postsWithMatchingTags];
  }

  // Limit to 2 posts total
  relatedPosts = relatedPosts.slice(0, 2);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-20 flex sm:flex-row flex-col gap-8 justify-center">
      {relatedPosts.map((post) => (
        <Link 
          key={post.id}
          href={`/posts/${post.id}`}
          className="w-full sm:w-1/2 rounded-lg border border-slate-200 hover:border-blue-400 dark:border-slate-700 dark:hover:border-blue-400 overflow-hidden block group transition-colors"
        >
          {post.imageSrc && (
            <Image
              src={post.imageSrc}
              alt={post.title}
              width={2560}
              height={962}
              className="w-full h-auto"
            />
          )}
          <div className="p-4 space-y-1">
            <h2 className="link-primary text-xl font-bold">
              {post.title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-200">
              {formatDate(post.date)}&nbsp;&nbsp;•&nbsp;&nbsp;{calculateReadTime(post.content || '')} read
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
