'use client';

import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { calculateReadTime } from '@/lib/readTime'
import { categories, type Category } from '@/lib/categories'
import { useEffect, useState, useRef } from 'react'
import type { ReactElement } from 'react'

const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY = 1000; // 1 second

function getMillisecondsUntil1AM(): number {
  const now = new Date();
  const next1AM = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getHours() >= 1 ? now.getDate() + 1 : now.getDate(),
    1, // 1 AM
    0, // 0 minutes
    0, // 0 seconds
    0  // 0 milliseconds
  );
  return next1AM.getTime() - now.getTime();
}

type Post = {
  id: string;
  title: string;
  date: string;
  category: Category;
  excerpt: string;
  imageSrc?: string;
  content?: string;
  views: number;
};

async function fetchWithRetry(
  url: string, 
  retries: number = MAX_RETRIES, 
  delay: number = INITIAL_RETRY_DELAY
): Promise<Response> {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying fetch... ${MAX_RETRIES - retries + 1} of ${MAX_RETRIES}`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchWithRetry(url, retries - 1, delay * 2);
    }
    throw error;
  }
}

export function MostReadSkeleton(): ReactElement {
  return (
    <div>
      <h3 className="section-heading">Most Read</h3>
      <div className="space-y-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-4 animate-pulse">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="flex-1">
              <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2" />
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MostRead(): ReactElement {
  const [posts, setPosts] = useState<Post[]>([]);
  const intervalRef = useRef<NodeJS.Timeout>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetchWithRetry('/api/most-read');
        const data = await response.json();
        
        if (isMounted) {
          setPosts(data);
        }
      } catch (error) {
        console.error('Error fetching most read data:', error);
      }
    }

    // Initial fetch
    fetchData();

    // Schedule next refresh for 1 AM
    const refreshAtOneAM = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        fetchData();
        // Set up daily refresh after first 1 AM refresh
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(fetchData, 24 * 60 * 60 * 1000);
      }, getMillisecondsUntil1AM());
    };

    refreshAtOneAM();

    // Clean up
    return () => {
      isMounted = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (posts.length === 0) {
    return <MostReadSkeleton />;
  }

  return (
    <div>
      <h3 className="section-heading">Most Read</h3>
      <div className="space-y-6">
        {posts.map((post) => {
          const CategoryIcon = categories[post.category].icon;
          
          return (
            <article key={post.id} className="flex gap-4">
              <Link href={`/posts/${post.id}`} className="flex-shrink-0">
                <div className="most-read-thumbnail relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded">
                  {post.imageSrc ? (
                    <Image
                      src={post.imageSrc}
                      alt=""
                      fill
                      className="object-cover hover:opacity-90 transition-opacity"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-400 flex items-center justify-center hover:opacity-90 transition-opacity">
                      <CategoryIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  )}
                </div>
              </Link>
              <div className="min-w-0">
                <Link 
                  href={`/posts/${post.id}`}
                  className="link-primary block text-base hover:underline line-clamp-2"
                >
                  {post.title}
                </Link>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  <span>{formatDate(post.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{calculateReadTime(post.content || '')} read</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
} 