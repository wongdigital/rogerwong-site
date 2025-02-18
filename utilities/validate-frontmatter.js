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

function validateDirectory(dir) {
  const files = readdirSync(dir, { withFileTypes: true });
  let hasErrors = false;

  files.forEach(file => {
    if (file.isFile() && file.name.endsWith('.md')) {
      const filePath = join(dir, file.name);
      if (!validateFile(filePath)) {
        hasErrors = true;
      }
    }
  });

  return !hasErrors;
}

// Validate both regular posts and linklog posts
const directories = ['../_content/posts', '../_content/linklog'];
let success = true;

directories.forEach(dir => {
  console.log(chalk.blue(`Validating ${dir}...`));
  if (!validateDirectory(dir)) {
    success = false;
  }
});

if (success) {
  console.log(chalk.green('✓ All files validated successfully'));
  process.exit(0);
} else {
  console.error(chalk.red('✗ Validation failed'));
  process.exit(1);
}
