import Link from 'next/link';

export default function Footer() {
  return (
    <div className="py-4 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
      <div>
        © {new Date().getFullYear()} Roger Wong. All rights reserved.
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <Link 
          href="/rss.xml"
          className="hover:text-slate-600 dark:hover:text-slate-300"
          aria-label="RSS feed for blog posts"
        >
          Posts RSS
        </Link>
        <Link 
          href="/linklog.xml"
          className="hover:text-slate-600 dark:hover:text-slate-300"
          aria-label="RSS feed for linklog"
        >
          Links RSS
        </Link>
      </div>
    </div>
  );
}
