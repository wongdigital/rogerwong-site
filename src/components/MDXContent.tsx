'use client';

import Image from 'next/image';
import { MDXProvider } from '@mdx-js/react';
import { createElement, Suspense } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm';
import remarkVideo from '@/lib/remarkVideo.js';
import type { Post } from '@/lib/posts';
import { useEffect, useState } from 'react';

type Props = {
  post: Post;
};

// Define custom components
const CustomBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-4">
    {children}
  </div>
);

const VideoEmbed = ({ src }: { src: string }) => {
  console.log('VideoEmbed received src:', src);
  const youtubeMatch = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  const vimeoMatch = src.match(/vimeo\.com\/([0-9]+)/);

  console.log('Matches:', { youtubeMatch, vimeoMatch });

  if (youtubeMatch) {
    console.log('Rendering YouTube embed for:', youtubeMatch[1]);
    return (
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }} className="my-8">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (vimeoMatch) {
    console.log('Rendering Vimeo embed for:', vimeoMatch[1]);
    return (
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }} className="my-8">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoMatch[1]}`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  console.log('No video match found for:', src);
  return null;
};

const components = {
  Image,
  CustomBox,
  VideoEmbed,
  img: (props: any) => {
    const { src, alt, width, height, ...rest } = props;
    return (
      <Image
        src={src}
        alt={alt || ''}
        width={width || 800}
        height={height || 600}
        className="w-full h-auto"
        {...rest}
      />
    );
  },
  a: (props: any) => {
    const { href, children, ...rest } = props;
    const isExternal = href?.startsWith('http') && !href?.includes('rogerwong.me');
    
    if (isExternal) {
      return (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return <a href={href} {...rest}>{children}</a>;
  }
};

export default function MDXContent({ post }: Props) {
  const [mdxSource, setMdxSource] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (post.isMDX) {
      console.log('Processing MDX content...');
      
      // Transform video URLs into VideoEmbed components
      const processedContent = post.content.replace(
        /(https?:\/\/(?:(?:www\.)?youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]+(?:[?&][^<\s]*)*|https?:\/\/(?:www\.)?vimeo\.com\/[0-9]+)/g,
        (url) => `<VideoEmbed src="${url}" />`
      );

      serialize(processedContent, {
        parseFrontmatter: false,
        mdxOptions: {
          format: 'mdx',
          remarkPlugins: [remarkGfm],
          rehypePlugins: [],
        },
      })
      .then((result) => {
        console.log('MDX serialization successful');
        setMdxSource(result);
        setError(null);
      })
      .catch((err) => {
        console.error('MDX serialization error:', err);
        setError(err.message);
      });
    }
  }, [post]);

  // For MDX content, use MDXRemote
  if (post.isMDX) {
    if (error) {
      return <div className="text-red-500">Error rendering MDX: {error}</div>;
    }

    if (!mdxSource) {
      return <div>Loading...</div>;
    }

    return (
      <div className="prose dark:prose-dark max-w-none">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    );
  }

  // For MD content, render the HTML
  return (
    <div 
      className="prose dark:prose-dark"
      dangerouslySetInnerHTML={{ __html: post.contentHtml }}
    />
  );
}
