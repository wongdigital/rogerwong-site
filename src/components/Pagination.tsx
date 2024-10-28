import Link from 'next/link';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  return (
    <div className="flex space-x-4">
      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="text-blue-600 hover:underline"
        >
          Previous
        </Link>
      )}
      
      <span className="py-2">
        Page {currentPage} of {totalPages}
      </span>
      
      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="text-blue-600 hover:underline"
        >
          Next
        </Link>
      )}
    </div>
  );
}
