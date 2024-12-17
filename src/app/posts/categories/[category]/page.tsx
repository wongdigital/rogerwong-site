import { getSortedPostsData } from '@/lib/posts';
import PostPreview from '@/components/PostPreview';
import { calculateReadTime } from '@/lib/readTime';
import { Category } from '@/lib/categories';
import CategoriesList from '@/components/CategoriesList';
import TagsList from '@/components/TagsList';
import Pagination from '@/components/Pagination';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const POSTS_PER_PAGE = 10;

type Props = {
  params: { category: Category };
  searchParams: { page?: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedCategory = decodeURIComponent(params.category);
  const title = `Posts in ${decodedCategory}`;
  
  return {
    title,
    description: `Articles in the ${decodedCategory} category`,
    openGraph: {
      title,
      description: `Articles in the ${decodedCategory} category`,
      type: 'website',
    }
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const allPosts = await getSortedPostsData();
  const currentPage = Number(searchParams.page) || 1;
  
  // Decode the category parameter
  const decodedCategory = decodeURIComponent(params.category) as Category;
  
  // Filter posts by category using decoded category
  const filteredPosts = allPosts.filter(post => 
    post.category.toLowerCase() === decodedCategory.toLowerCase()
  );
  
  // If no posts found in this category, return 404
  if (filteredPosts.length === 0) {
    notFound();
  }
  
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <section className="lg:w-7/12 py-8 lg:py-20 md:py-10">
        <header className="mb-8">
          <h1 className="page-title">Posts in {decodedCategory}</h1>
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
            basePath={`/posts/categories/${params.category}`}
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