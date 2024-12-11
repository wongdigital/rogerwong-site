import type { Post } from './posts';

export function calculateReadTime(post: Post): string {
  const wordsPerMinute = 200;
  const content = post.isMDX ? post.content : post.contentHtml;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
}