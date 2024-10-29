export const dynamic = 'force-dynamic';

import LinklogPreview from '@/components/LinklogPreview';
import { getSortedLinklogData } from '@/lib/linklog';
import Pagination from '@/components/Pagination';

const ITEMS_PER_PAGE = 20;

export default async function LinklogIndex({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const params = await searchParams;
  const allLinks = await getSortedLinklogData();
  const currentPage = Number(params.page) || 1;
  const totalPages = Math.ceil(allLinks.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentLinks = allLinks.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 sm:px-0 lg:px-20">
      <main className="lg:w-7/12 lg:py-20 md:py-10 sm:py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-600">Links</h1>
        </header>
        <section className="space-y-8">
          {currentLinks.map((link) => (
            <article key={link.url}>
              <LinklogPreview
                title={link.title}
                url={link.url}
                source={link.source}
              />
            </article>
          ))}
        </section>
        <nav className="mt-8">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            basePath="/linklog" 
          />
        </nav>
      </main>
      <aside className="lg:w-5/12" aria-hidden="true" />
    </div>
  );
}
