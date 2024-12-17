import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { categories, type Category } from '@/lib/categories';

type CategoryCount = {
  name: Category;
  count: number;
};

async function getAllCategories(): Promise<CategoryCount[]> {
  const posts = await getSortedPostsData();
  const categoryMap = new Map<Category, number>();

  posts.forEach(post => {
    const count = categoryMap.get(post.category as Category) || 0;
    categoryMap.set(post.category as Category, count + 1);
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export default async function CategoriesList() {
  const categoryList = await getAllCategories();

  return (
    <div className="mb-8">
      <h3 className="section-heading">Categories</h3>
      <ul className="space-y-2">
        {categoryList.map(({ name, count }) => (
          <li key={name}>
            {(() => {
              const CategoryIcon = categories[name].icon;
              return (
                <CategoryIcon className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              );
            })()}
            <Link 
              href={`/posts/categories/${encodeURIComponent(name)}`}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
            >
              {name}
            </Link>
            <span className="ml-1 px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded-full text-xs">
              {count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
