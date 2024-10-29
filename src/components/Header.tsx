'use client'

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function Header() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log('Mounted, current theme:', theme);
    console.log('Resolved theme:', resolvedTheme);
  }, [theme, resolvedTheme]);

  if (!mounted) {
    return null; // Return null on server-side and first render
  }

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    console.log('Toggling theme from', resolvedTheme, 'to', newTheme);
    setTheme(newTheme);
  };

  return (
    <header className="text-lg text-slate-500 dark:text-slate-400 font-medium py-4 px-4 sm:px-0 lg:px-20">
      <nav role="navigation" className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          aria-label="Home"
          className="hover:underline hover:text-slate-600 dark:hover:text-slate-300"
        >
          Roger Wong
        </Link>
        <ul className="flex space-x-8 items-center">
          <li><Link href="/about" className="hover:underline hover:text-slate-600 dark:hover:text-slate-300">About</Link></li>
          <li><Link href="/posts" className="hover:underline hover:text-slate-600 dark:hover:text-slate-300">Posts</Link></li>
          <li><Link href="/linklog" className="hover:underline hover:text-slate-600 dark:hover:text-slate-300">Links</Link></li>
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
