import Image from 'next/image'
import Link from 'next/link'
import { BlueSkyIcon, InstagramIcon, ThreadsIcon, LinkedInIcon } from '@/lib/icons'

export default async function About() {
  
  return (
    <>
      <section className="my-8 py-8 lg:py-20 md:py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <main>
            <h1 className="page-title">About Me</h1>
            <div className="prose prose-slate dark:prose-dark">
              <Image 
                src="/images/Roger-Wong-Family.jpg" 
                alt="Roger Wong" 
                width={702}
                height={468}
                className="!w-full h-auto !mx-0 rounded"
              />
              <p>I am a forward-thinking design leader with extensive experience in cultivating brand loyalty and enhancing customer experiences for prominent tech companies like <Link href="/posts/the-apple-design-process">Apple</Link>, Microsoft, Cisco, and Intel. My career spans over two decades during which I founded <a href="https://wong.digital" target="_blank">Wong.Digital</a>, led design at Convex as VP, and managed significant creative teams, notably for Samsung Mobile. My passion for innovation is demonstrated through my cofounding of Transported VR, a pioneering venture in virtual reality real estate, and my side project of developing an AI tool to assist designers in <Link href="/posts/how-i-built-and-launched-an-ai-powered-app">crafting brand strategies</Link>. My contributions to the design field have been recognized by <em>Communication Arts</em>, <em>Graphis</em>, One Show, Clio Awards, and Cannes Lions. Holding a BFA in graphic design from the California College of the Arts, I have also contributed to academics as a professor and advisory board member at San Diego City College. I live in San Diego with my family. I do not surf.</p>
              <h3>Follow Me</h3>
              <div className="flex flex-col space-y-4 !mt-4">
                <a href="https://bsky.app/profile/lunarboy.com" target="_blank" className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                  <BlueSkyIcon className="w-5 h-5" />
                  <span>Bluesky</span>
                </a>
                <a href="https://www.threads.net/@lunarboy" target="_blank" className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                  <ThreadsIcon className="w-5 h-5" />
                  <span>Threads</span>
                </a>
                <a href="https://www.instagram.com/lunarboy/" target="_blank" className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                  <InstagramIcon className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/rogerwong/" target="_blank" className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                  <LinkedInIcon className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </main>
          <aside className="w-full md:w-5/12 space-y-8">
            <div>
                <h3 className="section-heading">Career Highlights</h3>
                <div className="mb-4 prose prose-slate dark:prose-dark !text-sm">
                <ul>
                    <li>Head of Design at <a href="https://www.buildops.com/" target="_blank">BuildOps</a></li>
                    <li>VP of Design at <a href="https://www.convex.com/" target="_blank">Convex</a> (acquired by ServiceTitan)</li>
                    <li>Cofounded VR real estate startup, Transported</li>
                    <li>Built and managed an in-house creative agency at TrueCar</li>
                    <li>Managed team of over 40 creatives to support Samsung Mobile</li>
                    <li>Created DesignScene, an iPad app that Apple deemed “App of the Week”</li>
                    <li>Redesigned CBS.com, eBay Motors, Visa Signature</li>
                    <li>Created the original <Link href="/posts/the-soul-of-the-apple-store-genius-bar">Genius Bar video loops</Link> and reservation system for Apple retail stores</li>
                    <li>Worked directly with Steve Jobs on the <Link href="/posts/thank-you-steve">“Welcome” animation for Mac OS X</Link>, Pixar.com, and pitch decks</li>
                </ul>
                </div>
            </div>
            <div>
                <h3 className="section-heading">Industry Engagement</h3>
                <div className="mb-4 prose prose-slate dark:prose-dark !text-sm">
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
                <h3 className="section-heading">Contact</h3>
                <div className="mb-4 prose prose-slate dark:prose-dark !text-sm">
                <p>For inquiries, including requests for my portfolio, send an email to hello[at]rogerwong[dot]me.</p>
                </div>
            </div>
            <div>
                <h3 className="section-heading">Colophon</h3>
                <div className="mb-4 prose prose-slate dark:prose-dark !text-sm">
                  <p>This site is built with <a href="https://nextjs.org/" target="_blank">Next.js</a> and hosted on <a href="https://vercel.com/" target="_blank">Vercel</a>. The typeface is <a href="https://fonts.google.com/specimen/IBM+Plex+Sans/about" target="_blank">IBM Plex Sans</a>, designed by Mike Abbink for IBM. The code is edited with <a href="https://www.cursor.com/" target="_blank">Cursor</a>. Repository (not the content) is <a href="https://github.com/wongdigital/rogerwong-site" target="_blank">open source</a>.</p>
                </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
