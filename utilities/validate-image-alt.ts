import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import chalk from 'chalk';
import path from 'path';

const POSTS_DIRECTORY = join(process.cwd(), '../_content/posts');

interface ImageMatch {
  fullMatch: string;
  altText: string;
  imagePath: string;
  lineNumber: number;
}

function extractFileName(imagePath: string): string {
  // Remove file extension and convert dashes/underscores to spaces
  const fileName = path.basename(imagePath, path.extname(imagePath))
    .replace(/[-_]/g, ' ')
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .trim();
  
  // Capitalize first letter of each word
  return fileName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function findImagesInMarkdown(content: string): ImageMatch[] {
  const images: ImageMatch[] = [];
  const lines = content.split('\n');
  
  // Regular expression to match Markdown images
  const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
  
  lines.forEach((line, index) => {
    let match;
    while ((match = imageRegex.exec(line)) !== null) {
      images.push({
        fullMatch: match[0],
        altText: match[1],
        imagePath: match[2],
        lineNumber: index + 1
      });
    }
  });

  return images;
}

function validateAndFixImages(filePath: string): void {
  try {
    const content = readFileSync(filePath, 'utf8');
    const images = findImagesInMarkdown(content);
    let updatedContent = content;
    let hasChanges = false;

    images.forEach(image => {
      if (!image.altText) {
        const newAltText = extractFileName(image.imagePath);
        const newImageMarkdown = `![${newAltText}](${image.imagePath})`;
        
        updatedContent = updatedContent.replace(image.fullMatch, newImageMarkdown);
        hasChanges = true;
        
        console.log(chalk.yellow(`File: ${path.basename(filePath)}`));
        console.log(chalk.yellow(`Line ${image.lineNumber}: Missing alt text`));
        console.log(chalk.green(`Added alt text: "${newAltText}"`));
        console.log('---');
      }
    });

    if (hasChanges) {
      writeFileSync(filePath, updatedContent);
      console.log(chalk.green(`Updated ${path.basename(filePath)}`));
    }

    // Report statistics
    const totalImages = images.length;
    const missingAlt = images.filter(img => !img.altText).length;
    
    if (totalImages > 0) {
      console.log(chalk.blue(`File: ${path.basename(filePath)}`));
      console.log(`Total images: ${totalImages}`);
      console.log(`Images missing alt text: ${missingAlt}`);
      console.log('---');
    }

  } catch (error) {
    console.error(chalk.red(`Error processing ${filePath}:`));
    console.error(error);
  }
}

function processAllPosts(): void {
  console.log(chalk.blue('Scanning posts for images without alt text...'));
  console.log('---');

  const files = readdirSync(POSTS_DIRECTORY);
  const markdownFiles = files.filter(file => file.endsWith('.md'));

  markdownFiles.forEach(file => {
    validateAndFixImages(join(POSTS_DIRECTORY, file));
  });
}

// Run the script
processAllPosts();
