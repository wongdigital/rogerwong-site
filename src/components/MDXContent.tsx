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

  return parse(content, options);
}
