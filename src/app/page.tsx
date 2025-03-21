import PostPreview from '../components/PostPreview';
import LinklogPreview from '../components/LinklogPreview';
import { getSortedPostsData } from '../lib/posts';
import { calculateReadTime } from '../lib/readTime';
import { getSortedLinklogData } from '../lib/linklog';
import HomeHero from '../components/HomeHero';
import Link from 'next/link'
import { ArrowRightIcon } from '@/lib/icons'
import MostRead, { MostReadSkeleton } from '../components/MostRead';
import { Suspense } from 'react';

export default async function Home() {
  const allPostsData = await getSortedPostsData();
  const latestPosts = allPostsData.slice(0, 5); // Get the 5 most recent posts
  const sortedLinks = getSortedLinklogData();
  
  return (
    <div className="max-w-[1280px] mx-auto">
      <HomeHero />
      <div className="h-[1px] bg-slate-300 dark:bg-slate-700 w-full"></div>
      <section className="my-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-8">
          <div className="w-full lg:w-7/12 max-w-[746px] lg:mx-auto">
            <h3 className="section-heading">Latest Posts</h3>
            <div className="space-y-8 mb-4">
              {latestPosts.map((post) => (
                <PostPreview
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  readTime={calculateReadTime(post.content || '')}
                  imageSrc={post.imageSrc}
                  imageAlt={post.imageAlt}
                  excerpt={post.excerpt}
                  slug={post.id}
                  category={post.category}
                />
              ))}
            </div>
            <div className="mt-8">
              <Link 
                className="button-outline" 
                href="/posts"
              >
                More Posts
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="mt-4 md:mt-0">
              <h3 className="section-heading">Latest Links</h3>
              <div className="mb-8">
                {sortedLinks.slice(0, 6).map((link, index) => (
                  <LinklogPreview
                    key={index}
                    title={link.title}
                    linkUrl={link.linkUrl}
                    linkSource={link.linkSource}
                  />
                ))}
              </div>
              <Link 
                className="button-outline" 
                href="/linklog"
              >
                More Links 
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-12">
              <Suspense fallback={<MostReadSkeleton />}>
                <MostRead />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
