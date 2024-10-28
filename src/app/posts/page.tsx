export const dynamic = 'force-dynamic';

import PostPreview from '@/components/PostPreview';
import { getSortedPostsData } from '@/lib/posts';
import { calculateReadTime } from '@/lib/readTime';
import Pagination from '@/components/Pagination';
import { FolderOpenIcon } from '@heroicons/react/24/outline';

const POSTS_PER_PAGE = 10;

export default async function PostsIndex({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined }
}) {
  const resolvedParams = await Promise.resolve(searchParams);
  const allPosts = await getSortedPostsData();
  
  const currentPage = typeof resolvedParams.page === 'string' 
    ? Number(resolvedParams.page) 
    : 1;

  // Filter posts by category if one is specified
  const filteredPosts = typeof resolvedParams.category === 'string'
    ? allPosts.filter(post => post.categories?.includes(resolvedParams.category as string))
    : allPosts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col md:flex-row gap-8 lg:px-20 md:px-0">
      <main className="lg:w-7/12 lg:py-20 md:py-10 sm:py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-600">
            {resolvedParams.category ? `Posts in ${resolvedParams.category}` : 'Posts'}
          </h1>
        </header>
        <section className="space-y-8">
          {currentPosts.map((post) => (
            <article key={post.id}>
              <PostPreview
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                readTime={calculateReadTime(post.content)}
                slug={post.id}
                imageSrc={post.imageSrc}
                imageAlt={post.imageAlt}
                categories={post.categories}
              />
            </article>
          ))}
        </section>
        <nav className="mt-8">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            basePath="/posts" 
          />
        </nav>
      </main>
      <aside className="lg:w-5/12" aria-hidden="true" />
    </div>
  );
}
