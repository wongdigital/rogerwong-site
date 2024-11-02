import Image from 'next/image';
import parse, { Element, domToReact } from 'html-react-parser';

type Props = {
  content: string;
};

export default function MDXContent({ content }: Props) {
  const options = {
    replace: (domNode: any) => {
      if (domNode instanceof Element && domNode.name === 'img') {
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
  };

  return <>{parse(content, options)}</>;
}
