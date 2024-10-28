import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PostPreviewProps {
  title: string;
  date: string;
  readTime: string;
  imageSrc?: string;  // Make optional
  imageAlt?: string;  // Make optional
  excerpt: string;
  slug: string;
}

function formatDate(dateString: string) {
  // Force UTC interpretation by appending 'T00:00:00Z'
  const date = new Date(dateString + 'T00:00:00Z');
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'  // Force UTC output
  }).format(date);
}

const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  date,
  readTime,
  imageSrc,
  imageAlt,
  excerpt,
  slug,
}) => {
  return (
    <div className="mb-4 space-y-2">
      <h2 className="text-3xl font-bold">
        <Link href={`/posts/${slug}`} className="text-blue-600 hover:underline hover:text-blue-800">
          {title}
        </Link>
      </h2>
      <span className="text-sm text-slate-500">
        {formatDate(date)}&nbsp;&nbsp;•&nbsp;&nbsp;{readTime} read
      </span>
      {imageSrc && (
        <Image 
          src={imageSrc} 
          alt={imageAlt || ''} 
          width={800} 
          height={400} 
          className="w-full h-auto rounded" 
        />
      )}
      <p className="text-slate-600">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
