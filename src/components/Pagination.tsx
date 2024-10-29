import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
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

  return (
    <div className="flex items-center justify-start space-x-4">
      {currentPage > 1 ? (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="px-2 py-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded transition-colors"
          aria-label="Previous page"
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </Link>
      ) : (
        <div className="px-2 py-2 text-slate-300 border border-slate-200 rounded">
          <ArrowLeftIcon className="w-4 h-4" />
        </div>
      )}
      
      <div className="flex space-x-2">
        {getPageNumbers().map((pageNum) => (
          <Link
            key={pageNum}
            href={`${basePath}?page=${pageNum}`}
            className={`px-3 py-1 rounded border ${
              pageNum === currentPage
                ? 'bg-slate-900 text-white border-slate-900'
                : 'text-slate-600 border-slate-200 hover:border-slate-900 transition-colors'
            }`}
          >
            {pageNum}
          </Link>
        ))}
      </div>

      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="px-2 py-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded transition-colors"
          aria-label="Next page"
        >
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      ) : (
        <div className="px-2 py-2 text-slate-300 border border-slate-200 rounded">
          <ArrowRightIcon className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}
