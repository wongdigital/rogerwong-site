import fs from 'fs/promises';
import path from 'path';
import glob from 'glob-promise';

async function validateLocalImages() {
    // Assuming blog posts are in _posts directory
    const blogFiles = await glob('_posts/**/*.{md,mdx}');
    const errors: string[] = [];

    // Updated regex to catch:
    // 1. Standard markdown images: ![alt](/images/path)
    // 2. HTML images: <img src="/images/path" />
    // 3. Nested markdown images: [![alt](/images/path)](/images/path)
    const imageRegex = /!\[.*?\]\((\/images\/[^)]+)\)|<img[^>]*src=["'](\/images\/[^"']+)["']|\[\![^]]*\]\((\/images\/[^)]+)\)\]\((\/images\/[^)]+)\)/g;

    for (const blogFile of blogFiles) {
        const content = await fs.readFile(blogFile, 'utf-8');
        const matches = content.matchAll(imageRegex);

        for (const match of matches) {
            // Get all captured image paths (regular image path or both nested paths)
            const imagePaths = [match[1], match[2], match[3], match[4]].filter(Boolean);
            
            for (const imagePath of imagePaths) {
                const localImagePath = path.join(process.cwd(), 'public', imagePath);

                try {
                    await fs.access(localImagePath);
                } catch (error) {
                    errors.push(`Missing image in ${blogFile}: ${imagePath}`);
                }
            }
        }
    }

    if (errors.length > 0) {
        console.error('❌ Found broken image references:');
        errors.forEach(error => console.error(`  ${error}`));
        process.exit(1);
    } else {
        console.log('✅ All local image references are valid');
    }
}

validateLocalImages().catch(error => {
    console.error('Error validating images:', error);
    process.exit(1);
});
