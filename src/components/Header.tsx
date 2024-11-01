'use client'

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeToggle = (onToggleComplete?: () => void) => {
    if (!mounted) return null;

    return (
      <button
        type="button"
        onClick={() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
          onToggleComplete?.();
        }}
        className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
        aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {resolvedTheme === 'dark' ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </button>
    );
  };

  return (
    <div className="text-lg text-slate-500 dark:text-slate-400 py-4 px-4 sm:px-0 lg:px-20">
      <div 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
      >
        {mounted && `${resolvedTheme === 'dark' ? 'Dark' : 'Light'} mode enabled`}
      </div>

      <nav role="navigation" className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          aria-label="Home"
          className="hover:underline hover:text-slate-600 dark:hover:text-slate-300"
        >
          Roger Wong
        </Link>

        <ul className="hidden md:flex space-x-8 items-center">
          <li><Link href="/about" className="hover:underline hover:text-slate-600 dark:hover:text-slate-300">About</Link></li>
          <li><Link href="/posts" className="hover:underline hover:text-slate-600 dark:hover:text-slate-300">Posts</Link></li>
          <li><Link href="/linklog" className="hover:underline hover:text-slate-600 dark:hover:text-slate-300">Links</Link></li>
          <li>{renderThemeToggle()}</li>
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        <div 
          className={`md:hidden fixed inset-0 top-[72px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-50 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <ul className="flex flex-col items-center space-y-8 pt-8">
            {[
              { href: '/about', text: 'About' },
              { href: '/posts', text: 'Posts' },
              { href: '/linklog', text: 'Links' },
            ].map((link, index) => (
              <li 
                key={link.href}
                className={`transform transition-all duration-300 ease-in-out delay-[${index * 100}ms] ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
              >
                <Link 
                  href={link.href} 
                  className="text-xl hover:underline hover:text-slate-600 dark:hover:text-slate-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <li className={`transform transition-all duration-300 ease-in-out delay-[300ms] ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              {renderThemeToggle(() => setIsMenuOpen(false))}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
