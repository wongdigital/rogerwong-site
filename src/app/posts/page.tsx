import { Metadata } from 'next';
import PostPreview from '@/components/PostPreview';
import { getSortedPostsData } from '@/lib/posts';
import { calculateReadTime } from '@/lib/readTime';
import Pagination from '@/components/Pagination';
import CategoriesList from '@/components/CategoriesList';
import TagsList from '@/components/TagsList';
import { type Category } from '@/lib/categories';

export const dynamic = 'force-dynamic';

const POSTS_PER_PAGE = 10;

export default async function PostsIndex({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: Category; tag?: string }>
}) {
  const allPosts = await getSortedPostsData();
  
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  // Filter posts by category if one is specified
  let filteredPosts = allPosts;
  
  if (params.category) {
    filteredPosts = filteredPosts.filter(post => post.category === params.category);
  }
  
  if (params.tag) {
    filteredPosts = filteredPosts.filter(post => post.tags?.includes(params.tag!));
  }

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <section className="lg:w-7/12 py-8 lg:py-20 md:py-10">
        <header className="mb-8">
          <h1 className="page-title">
            {params.category ? `Posts in ${params.category}` : 
             params.tag ? `Posts tagged with “${params.tag}”` : 
             'Posts'}
          </h1>
        </header>
        <section className="space-y-8">
          {currentPosts.map((post) => (
            <article key={post.id}>
              <PostPreview
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                readTime={calculateReadTime(post.content || '')}
                slug={post.id}
                imageSrc={post.imageSrc}
                imageAlt={post.imageAlt}
                category={post.category}
              />
            </article>
          ))}
        </section>
        <nav className="mt-8">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            basePath="/posts" 
            queryParams={params.category ? { category: params.category } : 
                        params.tag ? { tag: params.tag } : 
                        undefined}
          />
        </nav>
      </section>
      <aside className="lg:w-5/12 py-8 lg:py-20 md:py-10">
        <CategoriesList />
        <TagsList />
      </aside>
    </div>
  );
}

export async function generateMetadata({ 
  searchParams 
}: { 
  searchParams: Promise<{ category?: Category; tag?: string }> 
}): Promise<Metadata> {
  const params = await searchParams;
  const title = params.category ? `${params.category} Posts` :
               params.tag ? `Posts tagged with "${params.tag}"` :
               'Posts';

  return {
    title,
    description: 'Read the latest articles about design, technology, and creative direction from Roger Wong.',
    openGraph: {
      title,
      description: 'Read the latest articles about design, technology, and creative direction from Roger Wong.',
      type: 'website',
    }
  };
}
