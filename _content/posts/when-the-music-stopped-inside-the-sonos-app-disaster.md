---
title: "When the Music Stopped: Inside the Sonos App Disaster"
date: "2025-02-20"
category: "Essays"
tags:
  - "design"
  - "Technology Industry"
  - "Industry Insights"
imageSrc: "/images/sonos-featured.jpg"
imageAlt: "A cut-up Sonos speaker against a backdrop of cassette tapes"
excerpt: |
  In January 2025, Sonos CEO Patrick Spence was fired after a disastrous app redesign wiped nearly $500 million from the company's market value. But calling it just a "redesign" misses the deeper story of how a beloved audio company lost its way. Through conversations with multiple former employees who worked directly on the project, I discovered that what happened at Sonos wasn't simply a botched app update—it was the culmination of strategic missteps, organizational dysfunction, and forgotten values that had been building for years.
---
The fall of Sonos isn’t as simple as a botched app redesign. Instead, it is the cumulative result of poor strategy, hubris, and forgetting the company’s core value proposition. To recap, Sonos rolled out a new mobile app in May 2024, promising “[an unprecedented streaming experience](https://investors.sonos.com/news-and-events/investor-news/latest-news/2024/Sonos-Unveils-Completely-Reimagined-Sonos-App-Bringing-Services-Content-and-System-Controls-to-One-Customizable-Home-Screen/default.aspx).” Instead, it was a severely handicapped app, missing core features and broke users’ systems. By January 2025, that failed launch [wiped nearly $500 million](https://www.wsj.com/tech/sonos-speakers-app-ceo-24250f2c?st=5gpXZk&reflink=desktopwebshare_permalink) from the company’s market value and cost CEO Patrick Spence his job.

What happened? Why did Sonos go backwards on accessibility? Why did the company remove features like sleep timers and queue management? Immediately after the rollout, the [backlash](https://www.theverge.com/2024/5/8/24151704/sonos-new-app-bad-reviews-missing-features) began to snowball into a major crisis. 

![A collage of torn newspaper-style headlines from Bloomberg, Wired, and The Verge, all criticizing the new Sonos app. Bloomberg’s headline states, “The Volume of Sonos Complaints Is Deafening,” mentioning customer frustration and stock decline. Wired’s headline reads, “Many People Do Not Like the New Sonos App.” The Verge’s article, titled “The new Sonos app is missing a lot of features, and people aren’t happy,” highlights missing features despite increased speed and customization.](/images/sonos-headlines.jpg)

As a designer and longtime Sonos customer who was also affected by the terrible new app, a little piece of me died inside each time I read the word “redesign.” It was hard not to take it personally, knowing that my profession could have anything to do with how things turned out. Was it really Design’s fault?

Even after devouring dozens of news articles, social media posts, and company statements, I couldn’t get a clear picture of why the company made the decisions it did. I cast a net on LinkedIn, reaching out to current and former designers who worked at Sonos. This story is based on hours of conversations between several employees and me. They only agreed to talk on the condition of anonymity. I’ve also added context from public reporting.

The shape of the story isn’t much different than what’s been reported publicly. However, the inner mechanics of how those missteps happened are educational. The Sonos tale illustrates the broader challenges that most companies face as they grow and evolve. How do you modernize aging technology without breaking what works? How do public company pressures affect product decisions? And most importantly, how do organizations maintain their core values and user focus as they scale? 

## It Just Works  

Whenever I moved into a new home, I used to always set up the audio system first. Speaker cable had to be routed under the carpet, along the baseboard, or through walls and floors. To get speakers in the right place, cable management was always a challenge, especially with a surround setup. Then Sonos came along and said, “Wires? We don’t need no stinking wires.” (OK, so they didn’t really say that. Their first wireless speaker, the [PLAY:5](https://en.wikipedia.org/wiki/Sonos_Five), was launched in late 2009.)

I purchased my first pair of Sonos speakers over ten years ago. I had recently moved into a modest one-bedroom apartment in Venice, and I liked the idea of hearing my music throughout the place. Instead of running cables, setting up the two PLAY:1 speakers was simple. At the time, you had to plug into Ethernet for the setup and keep at least one component hardwired in. But once that was done, adding the other speaker was easy.

The best technology is often invisible. It turns out that making it work this well wasn’t easy. According to their own [history page](https://www.sonos.com/en-us/how-it-started), in its early days, the company made the difficult decision to build a distributed system where speakers could communicate directly with each other, rather than relying on central control. It was a more complex technical path, but one that delivered a far better user experience. The founding team spent months perfecting their mesh networking technology, writing custom Linux drivers, and ensuring their speakers would stay perfectly synced when playing music.

![A network architecture diagram for a Sonos audio system, showing Zone Players, speakers, a home network, and various audio sources like a computer, MP3 store, CD player, and internet connectivity. The diagram includes wired and wireless connections, a WiFi handheld controller, and a legend explaining connection types. Handwritten notes describe the Zone Player’s ability to play, fetch, and store MP3 files for playback across multiple zones. Some elements, such as source converters, are crossed out.](/images/sonos-architecture.png)

As a new Sonos owner, a concept that was a little challenging to wrap my head around was that the _speaker is the player_. Instead of casting music from my phone or computer to the speaker, the speaker itself streamed the music from my network-attached storage (NAS, aka a server) or streaming services like Pandora or Spotify.

One of my sources told me about the “beer test” they had at Sonos. If you’re having a house party and run out of beer, you could leave the house without stopping the music. This is a core Sonos value proposition.

## A Rat’s Nest: The Weight of Tech Debt

The original Sonos technology stack, built carefully and methodically in the early 2000s, had served the company well. Its products always passed the beer test. However, two decades later, the company’s software infrastructure became increasingly difficult to maintain and update. According to one of my sources, who worked extensively on the platform, the codebase had become a “rat’s nest,” making even simple changes hugely challenging.

The tech debt had been accumulating for years. While Sonos continued adding features like Bluetooth playback and expanding its product line, the underlying architecture remained largely unchanged. The breaking point came with the development of the Sonos Ace headphones. This major new product category required significant changes to how the Sonos app handled device control and audio streaming.

Rather than tackle this technical debt incrementally, Sonos chose to completely rewrite its mobile app. This [“clean slate” approach](https://www.linkedin.com/pulse/what-happened-sonos-app-technical-analysis-andy-pennell-wigwc/) was seen as the fastest way to modernize the platform. But as many developers know, complete refactors are notoriously risky. And unlike in its early days, when the company would delay launches to get things right—famously once [stopping production lines over a glue issue](https://www.sonos.com/en-us/how-it-started#:~:text=%E2%80%9CI%20had%20to%20make%20a%20call%2C%E2%80%9D%20he%20said.%20%E2%80%9CBut%20I%20already%20knew%20the%20Sonos%20thing%20to%20do%20was%20stop%20the%20line%2C%20scrap%20the%20products%2C%20be%20late%2C%20and%20go%20find%20a%20glue%20that%20worked.%20John%20and%20the%20leadership%20team%20let%20me%20make%20the%20right%20decision.%E2%80%9D)—this time Sonos seemed determined to push forward regardless of quality concerns.

## Set Up for Failure

The rewrite project began around 2022 and would span approximately two years. The team did many things right initially—spending a year and a half conducting rigorous user testing and building functional prototypes using SwiftUI. According to my sources, these prototypes and tests validated their direction—the new design was a clear improvement over the current experience. The problem wasn't the vision. It was execution.

A wave of new product managers, brought in around this time, were eager to make their mark but lacked deep knowledge of Sonos's ecosystem. One designer noted it was "the opposite of normal feature creep"—while product designers typically push for more features, in this case they were the ones advocating for focusing on the basics.

As a product designer, this role reversal is particularly telling. Typically in a product org, designers advocate for new features and enhancements, while PMs act as a check on scope creep, ensuring we stay focused on shipping. When this dynamic inverts—when designers become the conservative voice arguing for stability and basic functionality—it's a major red flag. It's like architects pleading to fix the foundation while the clients want to add a third story. The fact that Sonos's designers were raising these alarms, only to be overruled, speaks volumes about the company's shifting priorities.

The situation became more complicated when the app refactor project, [codenamed Passport](https://www.bloomberg.com/news/articles/2024-02-27/sonos-headphones-delayed-until-june-party-speaker-and-tv-box-also-in-the-works?leadSource=uverify%20wall#:~:text=revamped%20mobile%20app-,codenamed%20Passport,-.%20That%20will%20allow), was coupled to the hardware launch schedule for the Ace headphones. One of my sources described this coupling of hardware and software releases as “the Achilles heel” of the entire project. With the Ace’s launch date set in stone, the software team faced immovable deadlines for what should have been a more flexible development timeline. This decision and many others, according to another source, were made behind closed doors, with individual contributors being told what to do without room for discussion. This left experienced team members feeling voiceless in crucial technical and product decisions. All that careful research and testing began to unravel as teams rushed to meet the hardware schedule.

This misalignment between product management and design was further complicated by organizational changes in the months leading up to launch. First, Sonos laid off many members of its forward-thinking teams. Then, closer to launch, another round of cuts significantly impacted QA and user research staff. The remaining teams were stretched thin, simultaneously maintaining the existing S2 app while building its replacement. The combination of a growing backlog from years prior and diminished testing resources created a perfect storm.

## Feeding Wall Street 

![A data-driven slide showing Sonos’ customer base growth and revenue opportunities. It highlights increasing product registrations, growth in multi-product households, and a potential >$6 billion revenue opportunity by converting single-product households to multi-product ones.](/images/sonos-investor-metrics-february-2025.jpg)

_Page 14 of [Sonos Q1 2025 Report](https://investors.sonos.com/news-and-events/investor-news/latest-news/2025/Sonos-Reports-First-Quarter-Fiscal-2025-Results/default.aspx) showing how the company reported on product registrations and Sonos households as key metrics._

[Measurement myopia](https://nesslabs.com/what-gets-measured-gets-managed) can lead to unintended consequences. When Sonos became public in 2018, three metrics the company reported to Wall Street were products registered, Sonos households, and products per household. Requiring customers to register their products is easy enough for a stationary WiFi-connected speaker. But it’s a different issue when it’s a portable one like the Sonos Roam when it’ll be used primarily as a Bluetooth speaker. When my daughter moved into the dorms at UCLA two years ago, I bought her a Roam. But because of Sonos’ quarterly financial reporting and the necessity to tabulate product registrations and new households, her Bluetooth speaker was a paperweight until she came home for Christmas. The speaker required WiFi connectivity and account creation for initial setup, but the university’s network security prevented the required initial WiFi connection.

### The Content Distraction

![A promotional image for Sonos Radio, featuring bold white text over a red, semi-transparent square with a bubbly texture. The background shows a tattooed woman wearing a translucent green top, holding a patterned ceramic mug. Below the main text, a caption reads “Now Playing – Indie Gold”, with a play button icon beneath it. The Sonos logo is positioned vertically on the right side.](/images/sonos-radio.jpg)

Perhaps the most egregious example of misplaced priorities, driven by the need to show revenue growth, was Sonos’ investment into content features. [Sonos Radio launched in April 2020](https://investors.sonos.com/news-and-events/investor-news/latest-news/2020/Introducing-Sonos-Radio-the-streaming-radio-service-only-on-Sonos/default.aspx) as a complimentary service for owners. An HD, ad-free paid tier [launched later](https://investors.sonos.com/news-and-events/investor-news/latest-news/2020/Sonos-Brings-High-Definition-Sound-to-Streaming-Radio-at-Home-with-Sonos-Radio-HD/default.aspx) in the same year. Clearly, the thirst to generate another revenue stream, especially a monthly recurring one, was the impetus behind Sonos Radio. Customers thought of Sonos as a hardware company, not a content one.

At the time of the Sonos Radio HD launch, “Beagle” a user in Sonos’ community forums, [wrote](https://en.community.sonos.com/controllers-and-music-services-228995/sonos-radio-hd-thoughts-6850681?sort=likes.desc#:~:text=43%20replies-,4%20years%20ago,-November%2013%2C%202020) (emphasis mine):

> I predicted a subscription service in a post a few months back. **I think it’s the inevitable outcome of floating the company - they now have to demonstrate ways of increasing revenue streams for their shareholders.** In the U.K  the U.S ads from the free version seem bizarre and irrelevant.
> If Sonos wish to commoditise streaming music that’s their business but **I see nothing new or even as good as other available services.** What really concerns me is if Sonos were to start “encouraging” (forcing) users to access their streams by removing Tunein etc from the app. I’m not trying to demonise Sonos, heaven knows I own enough of their products but I have a healthy scepticism when companies join an already crowded marketplace with less than stellar offerings. Currently I have a choice between Sonos Radio and Tunein versions of all the stations I wish to use. I’ve tried both and am now going to switch everything to Tunein. **Should Sonos choose to “encourage” me to use their service that would be the end of my use of their products.** That may sound dramatic and hopefully will prove unnecessary but corporate arm twisting is not for me. 

My sources said the company started growing its content team, reflecting the belief that Sonos would become users’ primary way to discover and consume music. However, this strategy ignored a fundamental reality: Sonos would never be able to do Spotify better than Spotify or Apple Music better than Apple.

This split focus had real consequences. As the content team expanded, the small controls team struggled with a significant backlog of UX and tech debt, often diverted to other mandatory projects. For example, one employee mentioned that a common user fear was playing music in the wrong room. I can imagine the grief I’d get from my wife if I accidentally played my emo Death Cab For Cutie while she was listening to her Eckhart Tolle podcast in the other room. Dozens, if not hundreds of paper cuts like this remained unaddressed as resources went to building content discovery features that many users would never use. It’s evident that when buying a speaker, as a user, you want to be able to control it to play your music. It’s much less evident that you want to replace your Spotify with Sonos Radio.

But while old time customers like Beagle didn’t appreciate the addition of Sonos content, it’s not conclusive that it was a complete waste of time and effort. The last mention of Sonos Radio performance was in the [Q4 2022 earnings call](https://investors.sonos.com/%0Ahttps://s22.q4cdn.com/672173472/files/doc_financials/2022/q4/FINAL-SONO-4Q22-Earnings-Transcript.pdf):

> Sonos Radio has become the #1 most listened to service on Sonos, and accounted for nearly 30% of all listening.

The company has said it will break out the revenue from Sonos Radio when it [becomes material](https://investors.sonos.com/%0Ahttps://s22.q4cdn.com/672173472/files/doc_financials/2022/q1/FINAL-SONO-1Q22-Earnings-Transcript-Final.pdf). It has yet to do so in the four years since its release.

## The Release Decision

![Four screenshots of the Sonos app interface on a mobile device, displaying music playback, browsing, and system controls. The first screen shows the home screen with recently played albums, music services, and a playback bar. The second screen presents a search interface with Apple Music and Spotify options. The third screen displays the now-playing view with album art and playback controls. The fourth screen shows multi-room speaker controls with volume levels and playback status for different rooms.](/images/sonos-app-screenshots.jpg)

As the launch date approached, concerns about readiness grew. According to my sources, experienced engineers and designers warned that the app wasn’t ready. Basic features were missing or unstable. The new cloud-based architecture was causing latency issues. But with the Ace launch looming and business pressures mounting, these warnings fell on deaf ears.

The aftermath was swift and severe. [Like countless other users](https://en.community.sonos.com/controllers-and-music-services-229131/new-app-sucks-6892691), I found myself struggling with an app that had suddenly become frustratingly sluggish. Basic features that had worked reliably for years became unpredictable. Speaker groups would randomly disconnect. Simple actions like adjusting volume now had noticeable delays. The UX was confusing. The elegant simplicity that had made Sonos special was gone.

Making matters worse, the company [couldn’t simply roll back](https://www.theverge.com/2024/8/20/24224754/sonos-ceo-old-s2-app-re-release-cant-be) to the previous version. The new app’s architecture was fundamentally incompatible with the old one, and the cloud services had been updated to support the new system. Sonos was stuck trying to fix issues on the fly while customers grew increasingly frustrated.

## Looking Forward

Since the PR disaster, the company has steadily improved the app. It even published a public Trello board to keep customers apprised of its progress, though progress seemed to stall at some point, and it has since been retired.

![A Trello board titled “Sonos App Improvement & Bug Tracker” displaying various columns with updates on issues, roadmap items, upcoming features, recent fixes, and implemented solutions. Categories include system issues, volume responsiveness, music library performance, and accessibility improvements for the Sonos app.](/images/sonos-trello-board.jpg)

Tom Conrad, cofounder of Pandora and a director on Sonos’s board, became the company’s interim CEO after [Patrick Spence was discharged](https://www.reuters.com/business/retail-consumer/sonos-ceo-patrick-spence-steps-down-after-app-update-debacle-2025-01-13/#:~:text=Sonos%20CEO%20Patrick%20Spence%20steps%20down%20after%20app%20update%20debacle,-By%20Reuters&text=Jan%2013%20(Reuters)%20%2D%20Speaker,and%20release%20of%20other%20products.). Conrad addressed these issues head-on in his [first letter to employees](https://www.theverge.com/2025/1/13/24342354/sonos-interim-ceo-tom-conrad-employee-letter):

> I think we'll all agree that this year we've let far too many people down. As we've seen, getting some important things right (Arc Ultra and Ace are remarkable products!) is just not enough when our customers' alarms don't go off, their kids can't hear their playlist during breakfast, their surrounds don't fire, or they can't pause the music in time to answer the buzzing doorbell.

Conrad signals that the company has already begun shifting resources back to core functionality, promising to “get back to the innovation that is at the heart of Sonos's incredible history.” But rebuilding trust with customers will take time.

Since Conrad’s takeover, more top brass from Sonos left the company, including the chief product officer, the chief commercial officer, and the chief marketing officer.

## Lessons for Product Teams

I admit that my original hypothesis in writing this piece was that B2C tech companies are less customer-oriented in their product management decisions than B2B firms. I think about the likes of Meta making product decisions to juice engagement. But in more conversations with PM friends and lurking in [r/ProductManagement](https://www.reddit.com/r/ProductManagement/), that hypothesis is debunked. Sonos just ended making a bunch of poor decisions.

One designer noted that what happened at Sonos isn’t necessarily unique. Incentives, organizational structures, and inertia can all color decision-making at any company. As designers, product managers, and members of product teams, what can we learn from Sonos’s series of unfortunate events?

1. **Don’t let tech debt get out of control.** Companies should not let technical debt accumulate until a complete rewrite becomes necessary. Instead, they need processes to modernize their code constantly.
2. **Protect core functionality.** Maintaining core functionality must be prioritized over new features when modernizing platforms. After all, users care more about reliability than new fancy new capabilities. You simply can’t mess up what’s already working.
3. **Organizational memory matters.** New leaders must understand and respect institutional knowledge about technology, products, and customers. Quick changes without deep understanding can be dangerous.
4. **Listen to the OG.** When experienced team members raise concerns, those warnings deserve serious consideration.
5. **Align incentives with user needs.** Organizations need to create systems and incentives that reward user-centric decision making. When the broader system prioritizes other metrics, even well-intentioned teams can drift away from user needs.

As a designer, I’m glad I now understand it wasn’t Design’s fault. In fact, the design team at Sonos tried to warn the powers-that-be about the impending disaster.

As a Sonos customer, I’m hopeful that Sonos will recover. I love their products—when they work. The company faces months of hard work to rebuild customer trust. For the broader tech industry, it is a reminder that even well-resourced companies can stumble when they lose sight of their core value proposition in pursuit of new initiatives.

As one of my sources reflected, the magic of Sonos was always in making complex technology invisible—you just wanted to play music, and it worked. Somewhere along the way, that simple truth got lost in the noise.

<div style="display: flex; justify-content: center; margin: 2rem 0; font-size: 1.5rem; letter-spacing: 0.5rem;">. . .</div>

P.S. I wanted to acknowledge [Michael Tsai’s excellent post](https://mjtsai.com/blog/2024/07/26/sonos-apologizes-for-app-redesign/) on his blog about this fiasco. He’s been constantly updating it with new links from across the web. I read all of those sources when writing this post.