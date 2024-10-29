import PostPreview from '../components/PostPreview';
import LinklogPreview from '../components/LinklogPreview';
import { getSortedPostsData } from '../lib/posts';
import { calculateReadTime } from '../lib/readTime';
import { getSortedLinklogData } from '../lib/linklog';
import HomeHero from '../components/HomeHero';
import Link from 'next/link'

export default async function Home() {
  const allPostsData = await getSortedPostsData();
  const latestPost = allPostsData[0]; // Get the most recent post
  const sortedLinks = getSortedLinklogData();
  
  return (
    <>
      <HomeHero />
      <div className="h-[1px] bg-slate-300 dark:bg-slate-700 w-full"></div>
      <section className="my-8 px-4 sm:px-0 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="lg:w-7/12">
            <h3 className="text-sm font-extrabold mb-4 text-slate-400">Latest Post</h3>
            <PostPreview
              title={latestPost.title}
              date={latestPost.date}
              readTime={calculateReadTime(latestPost.content)}
              imageSrc={latestPost.imageSrc}
              imageAlt={latestPost.imageAlt}
              excerpt={latestPost.excerpt}
              slug={latestPost.id}
            />
            <Link className="text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-500 dark:hover:text-blue-400" href="/posts">More Posts…</Link>
          </div>
          <div className="lg:w-5/12">
            <h3 className="text-sm font-extrabold mb-4 text-slate-400">Latest Links</h3>
            <div className="mb-4">
              {sortedLinks.slice(0, 5).map((link, index) => (
                <LinklogPreview
                  key={index}
                  title={link.title}
                  url={link.url}
                  source={link.source}
                />
              ))}
            </div>
            <Link className="text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-500 dark:hover:text-blue-400" href="/linklog">More Links…</Link>
          </div>
        </div>
      </section>
    </>
  );
}
