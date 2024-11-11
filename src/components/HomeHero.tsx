'use client';

import Image from 'next/image'
import Link from 'next/link'
export default function HomeHero() {
  // Define the paths outside the component for better readability
  const squirclePath = {
    large: "path('M0 144C0 84.0043 0 54.0064 15.2786 32.9772C20.213 26.1856 26.1856 20.213 32.9772 15.2786C54.0064 0 84.0043 0 144 0V0C203.996 0 233.994 0 255.023 15.2786C261.814 20.213 267.787 26.1856 272.721 32.9772C288 54.0064 288 84.0043 288 144V144C288 203.996 288 233.994 272.721 255.023C267.787 261.814 261.814 267.787 255.023 272.721C233.994 288 203.996 288 144 288V288C84.0043 288 54.0064 288 32.9772 272.721C26.1856 267.787 20.213 261.814 15.2786 255.023C0 233.994 0 203.996 0 144V144Z')",
    small: "path('M0 72C0 42.0022 0 27.0032 7.6393 16.4886C10.1065 13.0928 13.0928 10.1065 16.4886 7.6393C27.0032 0 42.0022 0 72 0V0C101.998 0 116.997 0 127.512 7.6393C130.907 10.1065 133.894 13.0928 136.361 16.4886C144 27.0032 144 42.0022 144 72V72C144 101.998 144 116.997 136.361 127.512C133.894 130.907 130.907 133.894 127.512 136.361C116.997 144 101.998 144 72 144V144C42.0022 144 27.0032 144 16.4886 136.361C13.0928 133.894 10.1065 130.907 7.6393 127.512C0 116.997 0 101.998 0 72V72Z')"
  };

  return (
    <>
      <section className="my-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-7/12 content-center order-2 md:order-1">
            <h2 className="page-title">
              I&rsquo;m <Link href="/about" className="link-primary">Roger Wong</Link>, 
              a seasoned design leader and creative director of the brand and software studio Wong.Digital. Currently leading design at <a href="https://www.buildops.com" target="_blank" className="link-primary">BuildOps</a>.
            </h2>
          </div>
          <div className="md:w-5/12 order-1 md:order-2 flex justify-start">
            <div className="relative w-36 h-36 md:w-72 md:h-72">
              <Link href="/about">
                <Image
                  src="/images/Roger-Wong.jpg"
                  alt="Roger Wong"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
                  width={288}
                  height={288}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        .relative img {
          clip-path: ${squirclePath.small};
        }
        
        @media (min-width: 768px) {
          .relative img {
            clip-path: ${squirclePath.large};
          }
        }
      `}</style>
    </>
  );
}