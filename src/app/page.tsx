import PostPreview from '../components/PostPreview';
import LinklogPreview from '../components/LinklogPreview';
import { getSortedPostsData } from '../lib/posts';
import { calculateReadTime } from '../lib/readTime';
import { getSortedLinklogData } from '../lib/linklog';
import HomeHero from '../components/HomeHero';
import Link from 'next/link'

export default async function Home() {
  const allPostsData = await getSortedPostsData();
  const latestPosts = allPostsData.slice(0, 3); // Get the three most recent posts
  const sortedLinks = getSortedLinklogData();
  
  return (
    <>
      <HomeHero />
      <div className="h-[1px] bg-slate-300 dark:bg-slate-700 w-full"></div>
      <section className="my-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full lg:w-7/12">
            <h3 className="text-sm font-extrabold mb-4 text-slate-500">Latest Posts</h3>
            <div className="space-y-8 mb-4">
              {latestPosts.map((post) => (
                <PostPreview
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  readTime={calculateReadTime(post.content)}
                  imageSrc={post.imageSrc}
                  imageAlt={post.imageAlt}
                  excerpt={post.excerpt}
                  slug={post.id}
                />
              ))}
            </div>
            <div className="mt-8">
            <Link className="text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-500 dark:hover:text-blue-400" href="/posts">More Posts…</Link>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h3 className="text-sm font-extrabold mb-4 text-slate-500">Latest Links</h3>
            <div className="mb-4">
              {sortedLinks.slice(0, 6).map((link, index) => (
                <LinklogPreview
                  key={index}
                  title={link.title}
                  linkUrl={link.linkUrl}
                  linkSource={link.linkSource}
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
