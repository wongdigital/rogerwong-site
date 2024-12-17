'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { calculateReadTime } from '@/lib/readTime';
import { categories, type Category } from '@/lib/categories';

interface RelatedPostsProps {
  currentPostId: string;
  currentPostCategory: Category;
  allPosts: {
    id: string;
    title: string;
    date: string;
    category: Category;
    imageSrc?: string;
    content?: string;
  }[];
}

export default function RelatedPosts({ currentPostId, currentPostCategory, allPosts }: RelatedPostsProps) {
  // Filter out the current post and find related posts
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPostId) // Exclude current post
    .filter(post => post.category === currentPostCategory) // Match category exactly
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date
    .slice(0, 2); // Get only 2 posts

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
            <div className="text-sm">
              {(() => {
                const CategoryIcon = categories[post.category].icon;
                return <CategoryIcon className="w-4 h-4 inline-block mr-2 -mt-0.5" />;
              })()}
              <Link 
                href={`/posts?category=${encodeURIComponent(post.category)}`}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
              >
                {post.category}
              </Link>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-200">
              {formatDate(post.date)}&nbsp;&nbsp;•&nbsp;&nbsp;{calculateReadTime(post.content || '')} read
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
