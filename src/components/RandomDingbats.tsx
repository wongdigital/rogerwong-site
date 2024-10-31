'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const DINGBATS = [
  { src: '/images/Dingbat-Bits.svg', alt: 'Dingbat Bits' },
  { src: '/images/Dingbat-Clover.svg', alt: 'Dingbat Clover' },
  { src: '/images/Dingbat-Diagonal.svg', alt: 'Dingbat Diagonal' },
  { src: '/images/Dingbat-Flower.svg', alt: 'Dingbat Flower' },
  { src: '/images/Dingbat-Star.svg', alt: 'Dingbat Star' },
  { src: '/images/Dingbat-Stones.svg', alt: 'Dingbat Stones' },
  { src: '/images/Dingbat-Target.svg', alt: 'Dingbat Target' },
  { src: '/images/Dingbat-Triangles.svg', alt: 'Dingbat Triangles' },
  // Add any additional dingbats here
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function RandomDingbats() {
  const [randomDingbats, setRandomDingbats] = useState(DINGBATS.slice(0, 3));
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setRandomDingbats(shuffleArray(DINGBATS).slice(0, 3));
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isHovering) {
      intervalId = setInterval(() => {
        setRandomDingbats(shuffleArray(DINGBATS).slice(0, 3));
      }, 150); // Adjust this value to control animation speed
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovering]);

  return (
    <div className="mt-20 flex justify-center">
      <div 
        className="flex flex-row gap-4 w-fit"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {randomDingbats.map((dingbat) => (
          <Image
            key={dingbat.src}
            src={dingbat.src}
            alt={dingbat.alt}
            width={64}
            height={64}
          />
        ))}
      </div>
    </div>
  );
}
