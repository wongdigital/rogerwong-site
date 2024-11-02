'use client';

import Image from 'next/image';
import parse, { Element, HTMLReactParserOptions, domToReact, DOMNode } from 'html-react-parser';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

type Props = {
  content: string;
};

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void;
      };
    };
  }
}

const ClientOnlyDiv = dynamic(() => Promise.resolve(({ children, ...props }: Partial<React.HTMLProps<HTMLDivElement>>) => (
  <div suppressHydrationWarning {...props}>{children}</div>
)), { ssr: false });

const InstagramEmbed = dynamic(() => Promise.resolve(({ html }: { html: string }) => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [html]);
  
  return <ClientOnlyDiv dangerouslySetInnerHTML={{ __html: html }} />;
}), { ssr: false });

function convertStyleStringToObject(styleString: string): Record<string, string> {
  if (!styleString) return {};
  
  return styleString.split(';')
    .filter(style => style.trim())
    .reduce((acc: Record<string, string>, current) => {
      const [property, value] = current.split(':').map(str => str.trim());
      if (property && value) {
        // Convert kebab-case to camelCase
        const camelProperty = property.replace(/-([a-z])/g, g => g[1].toUpperCase());
        acc[camelProperty] = value;
      }
      return acc;
    }, {});
}

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
        
        // Pass through blockquotes with converted styles
        if (domNode.name === 'blockquote') {
          const { style, ...otherAttribs } = domNode.attribs;
          const styleObject = style ? convertStyleStringToObject(style) : {};
          
          return (
            <blockquote 
              {...otherAttribs} 
              style={styleObject}
            >
              {domToReact(domNode.children as DOMNode[], options)}
            </blockquote>
          );
        }
        
        // Wrap Instagram embeds in client-only component
        if (domNode.name === 'blockquote' && domNode.attribs?.class?.includes('instagram-media')) {
          const html = domNode.toString().replace(/class=/g, 'className=');
          return <InstagramEmbed html={html} />;
        }
      }
    }
  };

  return parse(content, options);
}
