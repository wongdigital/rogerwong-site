import PostPreview from '../components/PostPreview';
import LinklogPreview from '../components/LinklogPreview';
import { getSortedPostsData } from '../lib/posts';
import { calculateReadTime } from '../lib/readTime';
import { getSortedLinklogData } from '../lib/linklog';
import HomeHero from '../components/HomeHero';

export default async function Home() {
  const allPostsData = await getSortedPostsData();
  const latestPost = allPostsData[0]; // Get the most recent post
  const sortedLinks = getSortedLinklogData();
  
  return (
    <>
      <HomeHero />
      <div className="h-[1px] bg-slate-300 w-full"></div>
      <section className="my-8 lg:p-20 md:px-4 md:py-8">
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
            <a className="text-blue-600 hover:underline hover:text-blue-800" href="/posts">More Posts…</a>
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
                  date={link.date}
                />
              ))}
            </div>
            <a className="text-blue-600 hover:underline hover:text-blue-800" href="/linklog">More Links…</a>
          </div>
        </div>
      </section>
    </>
  );
}
