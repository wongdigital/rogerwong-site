import Link from 'next/link';
import { RssIcon } from '@/lib/icons';

export default function Footer() {
  return (
    <div className="py-4 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
      <div>
        © 1995&ndash;{new Date().getFullYear()} Roger Wong. All rights reserved.
      </div>
      <div className="flex gap-6 mt-4 md:mt-0">
        <Link 
          href="/rss.xml"
          className="hover:text-slate-600 dark:hover:text-slate-300 hover:underline flex items-center gap-1"
          aria-label="RSS feed for blog posts"
        >
          <RssIcon className="w-4 h-4" />Posts RSS
        </Link>
        <Link 
          href="/linklog.xml"
          className="hover:text-slate-600 dark:hover:text-slate-300 hover:underline flex items-center gap-1"
          aria-label="RSS feed for linklog"
        >
          <RssIcon className="w-4 h-4" />Links RSS
        </Link>
      </div>
    </div>
  );
}
