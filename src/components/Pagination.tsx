import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@/lib/icons';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
  queryParams?: Record<string, string>;
};

export default function Pagination({ currentPage, totalPages, basePath, queryParams = {} }: PaginationProps) {
  // Don't render anything if there's only one page or less
  if (totalPages <= 1) {
    return null;
  }

  // Calculate which page numbers to show
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPages = 5;
    let start = Math.max(1, currentPage - Math.floor(maxPages / 2));
    const end = Math.min(totalPages, start + maxPages - 1);

    // Adjust start if we're near the end
    if (end - start + 1 < maxPages) {
      start = Math.max(1, end - maxPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  // Helper function to build the URL with all query parameters
  const buildPageUrl = (pageNum: number) => {
    const params = new URLSearchParams({ ...queryParams, page: pageNum.toString() });
    return `${basePath}?${params.toString()}`;
  };

  return (
    <>
      <div 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
      >
        {`Page ${currentPage} of ${totalPages}`}
      </div>
      
      <nav aria-label="Pagination" className="flex items-center justify-start space-x-4">
        {currentPage > 1 ? (
          <Link
            href={buildPageUrl(currentPage - 1)}
            className="button-outline !p-2"
            aria-label="Previous page"
          >
            <ArrowLeftIcon className="w-4 h-4" />
          </Link>
        ) : (
          <div className="px-2 py-2 text-slate-600 border border-slate-600 opacity-40 rounded">
            <ArrowLeftIcon className="w-4 h-4" />
          </div>
        )}
        
        <div className="flex space-x-2">
          {getPageNumbers().map((pageNum) => (
            <Link
              key={pageNum}
              href={buildPageUrl(pageNum)}
              className={`px-3 py-1 rounded border ${
                pageNum === currentPage
                  ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500'
                  : 'button-outline'
              }`}
            >
              {pageNum}
            </Link>
          ))}
        </div>

        {currentPage < totalPages ? (
          <Link
            href={buildPageUrl(currentPage + 1)}
            className="button-outline !p-2"
            aria-label="Next page"
          >
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        ) : (
          <div className="px-2 py-2 text-slate-600 border border-slate-600 opacity-40 rounded">
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        )}
      </nav>
    </>
  );
}
