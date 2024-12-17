'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { categories, type Category } from '@/lib/categories';
interface PostPreviewProps {
  title: string;
  date: string;
  readTime: string;
  imageSrc?: string;
  imageAlt?: string;
  excerpt: string;
  slug: string;
  category: Category;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  date,
  readTime,
  imageSrc,
  imageAlt,
  excerpt,
  slug,
  category,
}) => {
  const CategoryIcon = categories[category].icon;

  return (
    <div className="mb-4 space-y-2">
      <div className="text-sm">
        <CategoryIcon className="w-4 h-4 inline-block mr-2 -mt-0.5 text-slate-400 dark:text-slate-400" />
        <Link href={`/posts?category=${encodeURIComponent(category)}`} className="link-primary">
          {category}
        </Link>
      </div>
      <h2 className="md:text-3xl text-2xl font-bold">
        <Link href={`/posts/${slug}`} className="link-primary">
          {title}
        </Link>
      </h2>
      <span className="text-sm text-slate-500 dark:text-slate-200">
        {formatDate(date)}&nbsp;&nbsp;•&nbsp;&nbsp;{readTime} read
      </span>
      {imageSrc && (
        <Link href={`/posts/${slug}`}>
          <Image 
            src={imageSrc} 
            alt={imageAlt || ''} 
            width={800} 
            height={400} 
            className="mt-2 w-full h-auto rounded hover:opacity-90 transition-opacity cursor-pointer"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 800px"
            priority={false}
            quality={75}
          />
        </Link>
      )}
      <p className="text-slate-600 dark:text-slate-200">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
