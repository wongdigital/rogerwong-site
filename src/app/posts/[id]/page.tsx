'use server';

import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { calculateReadTime } from '@/lib/readTime';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FolderOpenIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import RandomDingbats from '@/components/RandomDingbats';
import RelatedPosts from '@/components/RelatedPosts';
import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/MDXContent';

type Props = {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostData(id);
  
  if (!post) {
    return {
      title: 'Post Not Found'
    };
  }

  const canonical = `https://rogerwong.me/posts/${id}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Roger Wong'],
      images: post.imageSrc ? [post.imageSrc] : [],
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.imageSrc ? [post.imageSrc] : [],
      creator: '@lunarboy',
      site: '@lunarboy',
    }
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const postData = await getPostData(id);
  const allPosts = await getSortedPostsData();
  
  if (!postData) {
    notFound();
  }

  const readTime = calculateReadTime(postData.contentHtml);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postData.title,
    "datePublished": postData.date,
    "author": {
      "@type": "Person",
      "name": "Roger Wong"
    },
    "image": postData.imageSrc,
    "description": postData.excerpt
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-8 md:px-12 lg:px-20">
      <article>
        <h1 className="page-title">{postData.title}</h1>
        <div className="text-sm text-slate-500 mb-8">
          {formatDate(postData.date)}&nbsp;&nbsp;•&nbsp;&nbsp;{readTime} read
        </div>
        {postData.imageSrc && (
          <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-8">
            <div className="md:aspect-auto aspect-[4/3] w-full overflow-hidden">
              <Image 
                src={postData.imageSrc} 
                alt={postData.imageAlt}
                className="w-full h-full object-cover"
                width={1920}
                height={722}
                priority
              />
            </div>
          </div>
        )}
        <div className="prose prose-slate dark:prose-dark">
          <MDXContent content={postData.contentHtml} />
        </div>
        {postData.categories && postData.categories.length > 0 && (
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="text-sm text-slate-500">
              <FolderOpenIcon className="w-4 h-4 inline-block mr-2 -mt-1" />
              Filed under {postData.categories?.map((category, index) => (
                <span key={category}>
                  <Link 
                    href={`/posts?category=${encodeURIComponent(category)}`}
                    className="text-blue-600 hover:underline hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    {category}
                  </Link>
                  {index < (postData.categories?.length ?? 0) - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
      <RandomDingbats />
      <RelatedPosts 
        currentPostId={id}
        currentPostCategories={postData.categories}
        allPosts={allPosts}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
