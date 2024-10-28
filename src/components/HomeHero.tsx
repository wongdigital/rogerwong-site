export default function HomeHero() {
    return (
      <>
        <section className="my-8 lg:p-20 md:px-0 md:py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-7/12">
              <p className="text-3xl font-bold mb-2 text-slate-600">
                I’m Roger Wong, a seasoned design leader and creative director of the brand and software studio Wong.Digital. Previously at Apple, Pixar, Razorfish, and TrueCar.
              </p>
            </div>
            <div className="md:w-5/12">
              <h3 className="text-2xl font-semibold mb-2">Right Column</h3>
              <p>Content for the right column goes here...</p>
            </div>
          </div>
        </section>
        <div className="h-[1px] bg-slate-300 w-full"></div>
      </>
    );
  }