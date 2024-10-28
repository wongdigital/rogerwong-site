'use server';

import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { calculateReadTime } from '@/lib/readTime';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FolderOpenIcon } from '@heroicons/react/24/outline';

type Params = {
  params: {
    id: string
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString + 'T00:00:00Z');
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(date);
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostData(id);
  
  if (!post) {
    return {
      title: 'Post Not Found'
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: post.imageSrc ? [post.imageSrc] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.imageSrc ? [post.imageSrc] : [],
    }
  };
}

export default async function Post({ params }: Params) {
  const { id } = await params;
  const postData = await getPostData(id);
  
  if (!postData) {
    notFound();
  }

  const readTime = calculateReadTime(postData.contentHtml);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 lg:px-20 md:px-0 md:py-20">
      <article>
        <h1 className="text-3xl text-slate-600 font-bold mb-2">{postData.title}</h1>
        <div className="text-sm text-slate-500 mb-8">
          {formatDate(postData.date)}&nbsp;&nbsp;•&nbsp;&nbsp;{readTime} read
        </div>
        <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen mb-8">
          <div className="md:aspect-auto aspect-[4/3] w-full overflow-hidden">
            <img 
              src={postData.imageSrc} 
              alt={postData.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div 
          className="prose"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
        {postData.categories && postData.categories.length > 0 && (
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="text-sm text-slate-500">
              <FolderOpenIcon className="w-4 h-4 inline-block mr-2 -mt-1" />
              Filed under {postData.categories?.map((category, index) => (
                <span key={category}>
                  <Link 
                    href={`/posts?category=${encodeURIComponent(category)}`}
                    className="text-blue-600 hover:underline"
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
    </div>
  );
}
