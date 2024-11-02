import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), '_posts')

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
  
    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }
