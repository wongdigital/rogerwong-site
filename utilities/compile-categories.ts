import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIRECTORY = path.join(process.cwd(), '_posts');

interface CategoryCount {
  name: string;
  count: number;
}

function getAllCategories(): CategoryCount[] {
  // Get all markdown files from the posts directory
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  
  // Create a map to store category counts
  const categoryMap = new Map<string, number>();

  fileNames.forEach(fileName => {
    if (!fileName.endsWith('.md')) return;

    const fullPath = path.join(POSTS_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse frontmatter
    const { data } = matter(fileContents);
    
    // Get categories array from frontmatter
    const categories = data.categories as string[] | undefined;
    
    if (categories && Array.isArray(categories)) {
      categories.forEach(category => {
        const count = categoryMap.get(category) || 0;
        categoryMap.set(category, count + 1);
      });
    }
  });

  // Convert map to array of objects and sort by count (descending)
  const sortedCategories = Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => {
      // Sort by count first (descending)
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      // If counts are equal, sort alphabetically
      return a.name.localeCompare(b.name);
    });

  return sortedCategories;
}

function printCategories() {
  const categories = getAllCategories();
  
  console.log('\nPost Categories Summary:');
  console.log('======================\n');
  
  categories.forEach(({ name, count }) => {
    console.log(`${name}: ${count} post${count === 1 ? '' : 's'}`);
  });
  
  console.log(`\nTotal unique categories: ${categories.length}`);
}

// Run the script
printCategories();
