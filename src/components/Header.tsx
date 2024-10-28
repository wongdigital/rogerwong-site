import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-lg text-slate-500 font-medium py-4">
      <nav className="container mx-auto px-4 lg:px-20 md:px-0 flex justify-between items-center">
        <Link href="/" className="hover:underline hover:text-slate-600">Roger Wong</Link>
        <ul className="flex space-x-8">
          <li><Link href="/about" className="hover:underline hover:text-slate-600">About</Link></li>
          <li><Link href="/posts" className="hover:underline hover:text-slate-600">Posts</Link></li>
          <li><Link href="/linklog" className="hover:underline hover:text-slate-600">Links</Link></li>
        </ul>
      </nav>
    </header>
  );
}
