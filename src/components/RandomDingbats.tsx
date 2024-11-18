'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getRandomPostId } from '@/lib/actions';

const DINGBATS = [
  { src: '/images/Dingbat-Bits.svg', alt: 'Dingbat Bits' },
  { src: '/images/Dingbat-Clover.svg', alt: 'Dingbat Clover' },
  { src: '/images/Dingbat-Diagonal.svg', alt: 'Dingbat Diagonal' },
  { src: '/images/Dingbat-Flower.svg', alt: 'Dingbat Flower' },
  { src: '/images/Dingbat-Star.svg', alt: 'Dingbat Star' },
  { src: '/images/Dingbat-Stones.svg', alt: 'Dingbat Stones' },
  { src: '/images/Dingbat-Target.svg', alt: 'Dingbat Target' },
  { src: '/images/Dingbat-Triangles.svg', alt: 'Dingbat Triangles' },
];

// Preload component to handle image preloading
function PreloadDingbats() {
  return (
    <div className="hidden">
      {DINGBATS.map((dingbat) => (
        <Image
          key={dingbat.src}
          src={dingbat.src}
          alt={dingbat.alt}
          width={64}
          height={64}
          priority
        />
      ))}
    </div>
  );
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function RandomDingbats({ currentPostId }: { currentPostId?: string }) {
  const router = useRouter();
  const [randomDingbats, setRandomDingbats] = useState(DINGBATS.slice(0, 3));
  const [isHovering, setIsHovering] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setRandomDingbats(shuffleArray(DINGBATS).slice(0, 3));
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isHovering && !isNavigating) {
      intervalId = setInterval(() => {
        setRandomDingbats(shuffleArray(DINGBATS).slice(0, 3));
      }, 150);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovering, isNavigating]);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isNavigating) {
      console.log('Already navigating, ignoring click');
      return;
    }
    
    try {
      console.log('Starting navigation');
      setIsNavigating(true);
      setIsHovering(false); // Stop the animation immediately
      
      const randomId = await getRandomPostId(currentPostId);
      console.log('Got random ID:', randomId);
      
      router.push(`/posts/${randomId}`);
    } catch (error) {
      console.error('Navigation failed:', error);
      setIsNavigating(false); // Reset if there's an error
    }
  };

  return (
    <>
      <PreloadDingbats />
      <div className="mt-20 flex justify-center">
        <div 
          className="flex flex-row gap-4 w-fit cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClick(e as unknown as React.MouseEvent);
            }
          }}
        >
          {randomDingbats.map((dingbat) => (
            <Image
              key={dingbat.src}
              src={dingbat.src}
              alt={dingbat.alt}
              width={64}
              height={64}
              style={{ pointerEvents: 'none' }} // Prevent image from capturing clicks
            />
          ))}
        </div>
      </div>
    </>
  );
}
