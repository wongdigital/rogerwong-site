import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import { remarkVideo } from './remarkVideo';
import { getTimezoneOffset } from 'date-fns-tz'
import { parseISO } from 'date-fns'

const postsDirectory = path.join(process.cwd(), '_content/posts')

function normalizeCategories(categories: string[] | undefined): string[] | undefined {
  if (!categories) return undefined;
  
  return categories
    .map((category: string) => 
      category
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    )
    .filter(Boolean);  // Remove any empty strings
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
  
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const categories = normalizeCategories(matterResult.data.categories);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html, { 
        sanitize: false,
        allowDangerousHtml: true 
      })
      .use(remarkGfm)
      .use(remarkVideo)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...(matterResult.data as { 
        date: string; 
        title: string; 
        excerpt: string; 
        imageSrc: string; 
        imageAlt: string;
        categories?: string[];
      }),
      categories
    };
  }

  export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');
  
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
  
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      const categories = normalizeCategories(matterResult.data.categories);
  
      // Combine the data with the id
      return {
        id,
        content: matterResult.content,
        ...(matterResult.data as { 
          date: string; 
          title: string; 
          excerpt: string; 
          imageSrc: string; 
          imageAlt: string;
          categories?: string[];
        }),
        categories
      };
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
