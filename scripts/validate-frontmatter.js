import chalk from 'chalk';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const REQUIRED_FIELDS = {
  default: ['title', 'date'],
  linklog: ['title', 'date', 'linkUrl', 'linkSource']
};

function validateFile(filePath) {
  try {
    const fileContent = readFileSync(filePath, 'utf8');
    const { data: frontmatter } = matter(fileContent);
    const isLinklog = filePath.includes('_linklog/');
    const requiredFields = isLinklog ? REQUIRED_FIELDS.linklog : REQUIRED_FIELDS.default;
    
    // Check for required fields
    const missingFields = requiredFields.filter(field => !frontmatter[field]);
    
    if (missingFields.length > 0) {
      console.error(chalk.red(`Error in ${filePath}:`));
      console.error(chalk.red(`Missing required fields: ${missingFields.join(', ')}`));
      return false;
    }

    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(frontmatter.date)) {
      console.error(chalk.red(`Error in ${filePath}:`));
      console.error(chalk.red(`Invalid date format. Expected YYYY-MM-DD, got: ${frontmatter.date}`));
      return false;
    }

    // Validate linkUrl format for linklog posts
    if (isLinklog) {
      try {
        new URL(frontmatter.linkUrl);
      } catch (e) {
        console.error(chalk.red(`Error in ${filePath}:`));
        console.error(chalk.red(`Invalid linkUrl: ${frontmatter.linkUrl}`));
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error(chalk.red(`Error processing ${filePath}:`));
    console.error(chalk.red(error.message));
    return false;
  }
}

// Process all markdown and MDX files
const contentDirs = ['_content/posts', '_content/linklog'].map(dir => join(process.cwd(), dir));
let hasErrors = false;

contentDirs.forEach(dir => {
  try {
    const files = readdirSync(dir);
    const markdownFiles = files.filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
    
    if (markdownFiles.length > 0) {
      console.log(chalk.blue(`Validating files in ${dir}...`));
      markdownFiles.forEach(file => {
        const filePath = join(dir, file);
        const isValid = validateFile(filePath);
        if (!isValid) {
          hasErrors = true;
        } else {
          console.log(chalk.green(`✓ ${file} is valid`));
        }
      });
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {  // Only log error if directory exists but has other issues
      console.error(chalk.red(`Error reading directory ${dir}:`));
      console.error(chalk.red(error.message));
      hasErrors = true;
    }
  }
});

if (hasErrors) {
  process.exit(1);
} else {
  console.log(chalk.green('\n✓ All files validated successfully'));
}
