'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { categories, type Category } from '@/lib/categories';
import MDXContent from './MDXContent';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import { remarkVideo } from '@/lib/remarkVideo';

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
  const [processedExcerpt, setProcessedExcerpt] = React.useState(excerpt);

  React.useEffect(() => {
    async function processMarkdown() {
      const processed = await remark()
        .use(html, { sanitize: false })
        .use(remarkGfm)
        .use(remarkSmartypants)
        .use(remarkVideo)
        .process(excerpt);
      setProcessedExcerpt(processed.toString());
    }
    processMarkdown();
  }, [excerpt]);

  return (
    <div className="mb-4 space-y-2">
      <div className="text-sm">
        <CategoryIcon className="w-4 h-4 inline-block mr-2 -mt-0.5 text-slate-400 dark:text-slate-400" />
        <Link 
          href={`/posts/categories/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'))}`} 
          className="link-primary"
        >
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
      <div className="prose prose-slate dark:prose-dark">
        <MDXContent content={processedExcerpt} />
      </div>
    </div>
  );
};

export default PostPreview;
