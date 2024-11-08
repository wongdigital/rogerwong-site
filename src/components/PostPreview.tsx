'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FolderOpenIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';

interface PostPreviewProps {
  title: string;
  date: string;
  readTime: string;
  imageSrc?: string;  // Make optional
  imageAlt?: string;  // Make optional
  excerpt: string;
  slug: string;
  categories?: string[];  // Add this line
}

const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  date,
  readTime,
  imageSrc,
  imageAlt,
  excerpt,
  slug,
  categories,
}) => {
  return (
    <div className="mb-4 space-y-2">
      <h2 className="md:text-3xl text-2xl font-bold">
        <Link href={`/posts/${slug}`} className="text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-500 dark:hover:text-blue-400">
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
      {categories && categories.length > 0 && (
        <div className="text-sm text-slate-500 dark:text-slate-200">
          <FolderOpenIcon className="w-4 h-4 inline-block mr-2 -mt-0.5" />
          {categories.map((category, index) => (
            <React.Fragment key={category}>
              {index > 0 && ", "}
              <Link href={`/posts?category=${encodeURIComponent(category)}`} className="text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-500 dark:hover:text-blue-400">
                {category}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostPreview;
