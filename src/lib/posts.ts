import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import { remarkVideo } from './remarkVideo';
import { getTimezoneOffset } from 'date-fns-tz'
import { parseISO } from 'date-fns'
import remarkSmartypants from 'remark-smartypants';
import { categories, type Category } from './categories';
import { toTitleCase } from '@/lib/text-utils';

const postsDirectory = path.join(process.cwd(), '_content/posts')

// Add type for post data
type PostData = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  imageSrc?: string;
  imageAlt?: string;
  category: Category;  // Required single category
  tags?: string[];   // Optional array of tags
  content?: string;
  contentHtml?: string;
}

function normalizeCategory(category: string | undefined): string {
  if (!category) return 'Uncategorized';
  
  const normalizedCategory = category
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  
  return categories[normalizedCategory as Category] ? normalizedCategory : 'Uncategorized';
}

function normalizeTags(tags: string[] | undefined): string[] | undefined {
  if (!tags) return undefined;
  
  return tags
    .map(tag => toTitleCase(tag))
    .filter(Boolean);
}

export async function getPostData(id: string): Promise<PostData | null> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  // Normalize category and tags
  const category = normalizeCategory(matterResult.data.category);
  const tags = normalizeTags(matterResult.data.tags);

  // Process markdown content
  const processedContent = await remark()
    .use(html, { 
      sanitize: false,
      allowDangerousHtml: true 
    })
    .use(remarkGfm)
    .use(remarkSmartypants)
    .use(remarkVideo)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as Omit<PostData, 'id' | 'contentHtml' | 'category' | 'tags'>),
    category,
    tags
  };
}

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // Normalize category and tags
    const category = normalizeCategory(matterResult.data.category);
    const tags = normalizeTags(matterResult.data.tags);

    return {
      id,
      ...(matterResult.data as Omit<PostData, 'id' | 'category' | 'tags'>),
      category,
      tags,
      content: matterResult.content
    };
  });

  // Get current time in US Eastern
  const timeZone = 'America/New_York'
  const today = new Date()
  const offset = getTimezoneOffset(timeZone)
  const todayWithOffset = new Date(today.getTime() + offset)

  return allPostsData
    .filter((post) => {
      const postDate = parseISO(`${post.date}T00:00:00`)
      return todayWithOffset >= postDate;
    })
    .map(post => ({
      ...post,
      content: typeof post.content === 'string' ? post.content : '',
      excerpt: typeof post.excerpt === 'string' ? post.excerpt : ''
    }))
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
}
