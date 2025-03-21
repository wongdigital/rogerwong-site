'use client';

import Image from 'next/image';
import parse, { Element, HTMLReactParserOptions, domToReact, DOMNode } from 'html-react-parser';

type Props = {
  content: string;
};

if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string') {
      if (args[0].includes('Warning: Invalid DOM property')) return;
      if (args[0].includes('Hydration failed')) return;
    }
    originalError.call(console, ...args);
  };
}

export default function MDXContent({ content }: Props) {
  // Add safety check for content
  if (!content || typeof content !== 'string') {
    console.warn('MDXContent received invalid content:', content);
    return null;
  }

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        // Handle external links
        if (domNode.name === 'a') {
          const { href, ...otherAttribs } = domNode.attribs;
          const isExternal = href?.startsWith('http') && !href?.includes('rogerwong.me');
          
          if (isExternal) {
            return (
              <a 
                href={href}
                {...otherAttribs}
                target="_blank"
                rel="noopener noreferrer"
              >
                {domToReact(domNode.children as DOMNode[], options)}
              </a>
            );
          }
        }

        // Handle images
        if (domNode.name === 'img') {
          const { src, alt, width, height } = domNode.attribs;
          
          // Check if image is inside a div with sm:pb-[75%]
          const parentDiv = domNode.parent as Element;
          const isAspectRatioContainer = parentDiv?.attribs?.class?.includes('sm:pb-[75%]');
          
          if (isAspectRatioContainer) {
            return (
              <Image
                src={src}
                alt={alt || ''}
                width={width ? parseInt(width, 10) : 800}
                height={height ? parseInt(height, 10) : 600}
                className="absolute inset-0 w-full h-full object-contain"
                style={{ position: 'absolute' as const }}
              />
            );
          }
          
          // Default image handling
          return (
            <Image
              src={src}
              alt={alt || ''}
              width={width ? parseInt(width, 10) : 800}
              height={height ? parseInt(height, 10) : 600}
              className="w-full h-auto"
            />
          );
        }
      }
    }
  };

  try {
    return parse(content, options);
  } catch (error) {
    console.error('Error parsing content:', error);
    return null;
  }
}
