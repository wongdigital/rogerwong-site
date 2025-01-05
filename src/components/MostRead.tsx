'use client';

import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { calculateReadTime } from '@/lib/readTime'
import { categories, type Category } from '@/lib/categories'
import { useEffect, useState, useRef, useCallback, use } from 'react'
import type { ReactElement } from 'react'

const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY = 1000; // 1 second
const ERROR_RETRY_INTERVAL = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

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

// Create a promise cache
let mostReadPromise: Promise<Post[]> | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

async function fetchMostReadData(): Promise<Post[]> {
  const now = Date.now();
  
  // Return cached promise if it exists and is still valid
  if (mostReadPromise && (now - lastFetchTime < CACHE_DURATION)) {
    return mostReadPromise;
  }

  // Create new promise and cache it
  const url = new URL('/api/most-read', 'http://localhost:3000');
  if (typeof window !== 'undefined') {
    url.protocol = window.location.protocol;
    url.host = window.location.host;
  }

  mostReadPromise = fetchWithRetry(url.toString())
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .catch(error => {
      mostReadPromise = null; // Clear cache on error
      console.error('Error fetching most read data:', error);
      throw error;
    });
  
  lastFetchTime = now;
  return mostReadPromise;
}

export default function MostRead(): ReactElement {
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Use the promise directly - this will suspend if the promise is not resolved
  const posts = use(fetchMostReadData());

  useEffect(() => {
    // Schedule next refresh for 1 AM
    const refreshAtOneAM = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        mostReadPromise = null; // Clear cache to force refresh
        // Set up daily refresh after first 1 AM refresh
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
          mostReadPromise = null; // Clear cache to force refresh
        }, 24 * 60 * 60 * 1000);
      }, getMillisecondsUntil1AM());
    };

    refreshAtOneAM();

    // Clean up intervals and timeouts on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (error) {
    return <></>;
  }

  if (posts.length === 0) {
    return <></>;
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