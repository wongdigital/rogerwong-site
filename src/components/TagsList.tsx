import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

type TagCount = {
  name: string;
  count: number;
};

async function getAllTags(): Promise<TagCount[]> {
  const posts = await getSortedPostsData();
  const tagMap = new Map<string, number>();

  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        const count = tagMap.get(tag) || 0;
        tagMap.set(tag, count + 1);
      });
    }
  });

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count); // Sort by count in descending order
}

export default async function TagsList() {
  const tags = await getAllTags();

  if (tags.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="section-heading">Tags</h3>
      <ul className="space-y-2">
        {tags.map(({ name, count }) => (
          <li key={name}>
            <Link 
              href={`/posts/tags/${encodeURIComponent(name)}`}
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