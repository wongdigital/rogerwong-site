import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const linklogDirectory = path.join(process.cwd(), '_linklog');  // Updated path

export type LinklogEntry = {
  title: string;
  url: string;
  source: string;
  date: string;
}

export function getSortedLinklogData(): LinklogEntry[] {
  // Get file names under /_linklog
  const fileNames = fs.readdirSync(linklogDirectory);
  const allLinksData = fileNames.map((fileName) => {
    // Read markdown file
    const fullPath = path.join(linklogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the metadata section
    const matterResult = matter(fileContents);

    // Combine the data
    return {
      title: matterResult.data.title,
      url: matterResult.data.url,
      source: matterResult.data.source,
      date: matterResult.data.date
    } as LinklogEntry;
  });

  // Sort links by date
  return allLinksData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}