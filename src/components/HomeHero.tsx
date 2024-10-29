import Image from 'next/image'

export default function HomeHero() {
    return (
      <>
        <section className="my-8 px-4 sm:px-0 lg:px-20 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-7/12 content-center order-2 md:order-1">
              <p className="text-3xl font-bold mb-2 text-slate-600 dark:text-slate-200">
                I’m Roger Wong, a seasoned design leader and creative director of the brand and software studio Wong.Digital. Previously at Apple, Pixar, Razorfish, and TrueCar.
              </p>
            </div>
            <div className="md:w-5/12 order-1 md:order-2 flex justify-start">
              <div className="relative w-36 h-36 md:w-72 md:h-72">
                <svg
                  width="288"
                  height="288"
                  viewBox="0 0 308 308"
                  className="absolute inset-0 w-full h-full"
                >
                  <defs>
                    <mask id="image-mask">
                      <path
                        d="M0 154C0 84.3939 0 49.5909 20.1993 26.8598C22.2867 24.5108 24.5108 22.2867 26.8598 20.1993C49.5909 0 84.3939 0 154 0V0C223.606 0 258.409 0 281.14 20.1993C283.489 22.2867 285.713 24.5108 287.801 26.8598C308 49.5909 308 84.3939 308 154V154C308 223.606 308 258.409 287.801 281.14C285.713 283.489 283.489 285.713 281.14 287.801C258.409 308 223.606 308 154 308V308C84.3939 308 49.5909 308 26.8598 287.801C24.5108 285.713 22.2867 283.489 20.1993 281.14C0 258.409 0 223.606 0 154V154Z"
                        fill="white"
                      />
                    </mask>
                  </defs>
                  <foreignObject width="100%" height="100%" mask="url(#image-mask)">
                    <Image
                      src="/images/Roger-Wong.jpg"
                      alt="Roger Wong"
                      className="w-full h-full object-cover"
                      width={308}
                      height={308}
                    />
                  </foreignObject>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }