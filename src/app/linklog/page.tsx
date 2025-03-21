export const dynamic = 'force-dynamic';

import LinklogPreview from '@/components/LinklogPreview';
import { getSortedLinklogData } from '@/lib/linklog';
import Pagination from '@/components/Pagination';

const ITEMS_PER_PAGE = 20;

export default async function LinklogIndex({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const allLinks = await getSortedLinklogData();
  const currentPage = Number(params.page) || 1;
  const totalPages = Math.ceil(allLinks.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentLinks = allLinks.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <section className="lg:w-7/12 py-8 lg:py-20 md:py-10">
        <header className="mb-8">
          <h1 className="page-title">Links</h1>
        </header>
        <section className="space-y-8">
          {currentLinks.map((link, index) => (
            <article key={`${link.linkUrl}-${index}`}>
              <LinklogPreview
                title={link.title}
                linkUrl={link.linkUrl}
                linkSource={link.linkSource}
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
      </section>
      <aside className="lg:w-5/12" aria-hidden="true" />
    </div>
  );
}
