import Image from 'next/image'

export default async function About() {
  
  return (
    <>
      <section className="my-8 px-4 sm:px-0 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full lg:w-7/12">
            <h1 className="page-title">About Me</h1>
            <div className="prose prose-slate dark:prose-dark">
              <Image 
                src="/images/Roger-Wong-Family.jpg" 
                alt="Roger Wong" 
                width={1280}
                height={854}
                className="w-full h-auto mx-0 my-0 rounded"
              />
              <p>I am a forward-thinking design leader with extensive experience in cultivating brand loyalty and enhancing customer experiences for prominent tech companies like Apple, Microsoft, Cisco, and Intel. My career spans over two decades during which I founded Wong.Digital, led design at Convex as VP, and managed significant creative teams, notably for Samsung Mobile. My passion for innovation is demonstrated through my cofounding of Transported VR, a pioneering venture in virtual reality real estate, and my current work on developing an AI tool aimed at assisting designers in crafting brand strategies. My contributions to the design field have been recognized by <em>Communication Arts</em>, <em>Graphis</em>, One Show, Clio Awards, and Cannes Lions. Holding a BFA in graphic design from the California College of the Arts, I have also contributed to academics as a professor and advisory board member at San Diego City College. I live in San Diego with my family. I do not surf.</p>
              <h3>Follow Me</h3>
              <ul>
                <li><a href="https://www.linkedin.com/in/rogerwong/" target="_blank">LinkedIn</a></li>
                <li><a href="https://www.threads.net/@lunarboy" target="_blank">Threads</a></li>
                <li><a href="https://www.instagram.com/lunarboy/" target="_blank">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-5/12 space-y-8">
            <div>
                <h3 className="text-sm font-extrabold mb-4 text-slate-500">Career Highlights</h3>
                <div className="mb-4 prose prose-slate dark:prose-dark">
                <ul>
                    <li>Head of Design at BuildOps</li>
                    <li>VP of Design at Convex (acquired by ServiceTitan)</li>
                    <li>Cofounded VR real estate startup, Transported</li>
                    <li>Built and managed an in-house creative agency at TrueCar</li>
                    <li>Managed team of over 40 creatives to support Samsung Mobile</li>
                    <li>Created an iPad app that Apple deemed “App of the Week”</li>
                    <li>Redesigned CBS.com, eBay Motors, Visa Signature</li>
                    <li>Created the original Genius Bar video loops and reservation system for Apple retail stores</li>
                    <li>Worked directly with Steve Jobs on the “Welcome” animation for Mac OS X, Pixar.com, and pitch decks</li>
                </ul>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-extrabold mb-4 text-slate-500">Industry Engagement</h3>
                <div className="mb-4 prose prose-slate dark:prose-dark">
                <ul>
                    <li>Former adjunct professor of graphic design at San Diego City College</li>
                    <li>Former Advisory Board Member at San Diego City College Graphic Design Program</li>
                    <li>Panelist at San Diego Startup Week 2018</li>
                    <li>Judge at Adobe Creative Jam in San Diego</li>
                    <li>Judge at AIGA San Diego Portfolio Review 2018–19</li>
                    <li>Former adjunct professor at Miami Ad School</li>
                    <li>Member of AIGA since 1995</li>
                </ul>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-extrabold mb-4 text-slate-500">Contact</h3>
                <div className="mb-4 prose prose-slate dark:prose-dark">
                <p>For inquiries, including requests for my portfolio, send an email to hello[at]rogerwong[dot]me.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
