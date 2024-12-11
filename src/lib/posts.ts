import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import { getTimezoneOffset } from 'date-fns-tz'
import { parseISO } from 'date-fns'
import remarkVideo from './remarkVideo'

const postsDirectory = path.join(process.cwd(), '_content/posts')

// Common post metadata type
type PostMetadata = {
  date: string
  title: string
  excerpt: string
  imageSrc: string
  imageAlt: string
  categories?: string[]
}

// Type for MDX posts
type MDXPost = PostMetadata & {
  id: string
  content: string
  contentHtml?: string
  isMDX: true
}

// Type for MD posts
type MDPost = PostMetadata & {
  id: string
  content: string
  contentHtml: string
  isMDX: false
}

// Combined post type
export type Post = MDXPost | MDPost

function normalizeCategories(categories: string[] | undefined): string[] | undefined {
  if (!categories) return undefined;
  
  return categories
    .map((category: string) => 
      category
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    )
    .filter(Boolean);
}

export async function getPostData(id: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const mdxPath = path.join(postsDirectory, `${id}.mdx`);
  
  let isMDX = false;
  let fullFilePath = fullPath;

  // Check if MDX version exists
  if (fs.existsSync(mdxPath)) {
    fullFilePath = mdxPath;
    isMDX = true;
  }

  const fileContents = fs.readFileSync(fullFilePath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  let contentHtml = '';
  
  if (!isMDX) {
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(remarkVideo)
      .use(remarkGfm)
      .use(remarkSmartypants)
      .process(matterResult.content);
      
    contentHtml = processedContent.toString();
  }

  // Combine the data with the id
  return {
    id,
    isMDX,
    contentHtml,
    content: matterResult.content,
    ...(matterResult.data as { date: string; title: string; description: string; image?: string })
  };
}

export function getSortedPostsData(): Post[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" or ".mdx" from file name to get id
    const id = fileName.replace(/\.(md|mdx)$/, '');
    const isMDX = fileName.endsWith('.mdx');
  
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const categories = normalizeCategories(matterResult.data.categories);
  
    // Return appropriate type based on file extension
    if (isMDX) {
      return {
        id,
        content: matterResult.content,
        isMDX: true,
        ...(matterResult.data as PostMetadata),
        categories
      } as MDXPost;
    }
    
    // For MD files, use the raw content for read time calculation
    return {
      id,
      contentHtml: matterResult.content,
      isMDX: false,
      ...(matterResult.data as PostMetadata),
      categories
    } as MDPost;
  });
  
  // Get current time in US Eastern
  const timeZone = 'America/New_York'
  const today = new Date()
  const offset = getTimezoneOffset(timeZone)
  const todayWithOffset = new Date(today.getTime() + offset)

  return allPostsData
    .filter((post) => {
      // Convert post date to midnight Eastern time
      const postDate = parseISO(`${post.date}T00:00:00`)
      return todayWithOffset >= postDate; // Compare with the actual post date
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
}
