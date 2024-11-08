import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

type CategoryCount = {
  name: string;
  count: number;
};

async function getAllCategories(): Promise<CategoryCount[]> {
  const posts = await getSortedPostsData();
  const categoryMap = new Map<string, number>();

  posts.forEach(post => {
    if (post.categories) {
      post.categories.forEach(category => {
        const count = categoryMap.get(category) || 0;
        categoryMap.set(category, count + 1);
      });
    }
  });

  // Convert map to array and sort
  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => {
      // Sort by count first (descending)
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      // If counts are equal, sort alphabetically
      return a.name.localeCompare(b.name);
    });
}

export default async function CategoriesList() {
  const categories = await getAllCategories();

  return (
    <div className="mb-8">
      <h3 className="text-sm font-extrabold mb-4 text-slate-500">Categories</h3>
      <ul className="space-y-2">
        {categories.map(({ name, count }) => (
          <li key={name}>
            <Link 
              href={`/posts?category=${encodeURIComponent(name)}`}
              className="text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-500 dark:hover:text-blue-400"
            >
              {name} <span className="ml-1 px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-full text-xs/[0.6rem]">{count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
