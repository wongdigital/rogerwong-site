---
title: "How I Built and Launched an AI-Powered App"
date: "2024-11-11"
category: "Case Studies"
tags:
  - "AI"
  - "App Development"
  - "Design"
  - "UX Design"
imageSrc: "/images/Griffin-Hero.jpg"
imageAlt: "Griffin AI logo"
excerpt: "Building an AI-powered brand strategy app taught me valuable lessons about product development, market validation, and the challenges of launching a product. Here's what I learned from my journey with Griffin AI—from ideation to eventual shutdown."
---

I've always been a maker at heart—someone who loves to bring ideas to life. When AI exploded, I saw a chance to create something new and meaningful for solo designers. But making Griffin AI was only half the battle…

## Birth of an Idea
About a year ago, a few months after GPT-4 was released and took the world by storm, I worked on several AI features at Convex. One was a straightforward [email drafting feature](https://www.convex.com/blog/summer-release-2023/) but with a twist. We incorporated details we knew about the sender—such as their role and offering—and the email recipient, as well as their role plus info about their company's industry. To accomplish this, I combined some prompt engineering and data from our data providers, shaping the responses we got from GPT-4.

Playing with this new technology was incredibly fun and eye-opening. And that gave me an idea. Foundational large language models (LLMs) aren't great yet for factual data retrieval and analysis. But they're pretty decent at creativity. No, GPT, Claude, or Gemini couldn't write an Oscar-winning screenplay or win the Pulitzer Prize for poetry, but it's not bad for starter ideas that are good enough for specific use cases. Hold that thought. 

I belong to a Facebook group for WordPress developers and designers. From the posts in the group, I could see most members were solopreneurs, with very few having worked at a large agency. From my time at Razorfish, Organic, Rosetta, and others, branding projects always included brand strategy, usually weeks- or months-long endeavors led by brilliant brand or digital strategists. These brand insights and positioning _always_ led to better work and transformed our relationship with the client into a partnership.

So, I saw an opportunity. Harness the power of gen AI to create brand strategies for this target audience. In my mind, this could allow these solo developers and designers to charge a little more money, give their customers more value, and, most of all, act like true partners.

## Validating the Problem Space
The prevailing wisdom is to leverage Facebook groups and Reddit forums to perform cheap—free—market research. However, the reality is that good online communities ban this sort of activity. So, even though I had a captive audience, I couldn't outright ask. The next best thing for me was paid research. I found Pollfish, an online survey platform that could assemble a panel of 100 web developers who own their own businesses. According to the data, there was overwhelming interest in a tool like this.\*

![Screenshot of two survey questions showing 79% of respondents would "Definitely buy" and "probably buy" Griffin AI, and 58% saying they need the app a lot.](/images/Griffin-Pollfish-Results.png)  

Notice the asterisk. We'll come back to that later on.

I also asked some of my designer and strategist friends who work in branding. They all agreed that there was likely a market for this. 

## Testing the Theory

I had a vague sense of what the application would be. The cool thing about ChatGPT is that you can bounce ideas back and forth with it as almost a co-creation partner. But you had to know what to ask, which is why prompt engineering skills were developed.

I first tested GPT 3.5's general knowledge. Did it know about brand strategy? Yes. What about specific books on brand strategy, like _Designing Brand Identity_  by Alina Wheeler? Yes. OK, so the knowledge is in there. I just needed the right prompts to coax out good answers.

I developed a method whereby the prompt reminded GPT of how to come up with the answer and, of course, contained the input from the user about the specific brand. 

![Screenshot of prompt](/images/Griffin-Prompt-Example.png)

Through trial and error and burning through a lot of OpenAI credits, I figured out a series of questions and prompts to produce a decent brand strategy document.

I tested this flow with a variety of brands, including real ones I knew and fake ones I'd have GPT imagine.

## Designing the MVP

### The Core Product
Now that I had the conceptual flow, I had to develop a UI to solicit the answers from the user and have those answers inform subsequent prompts. Everything builds on itself. 

I first tried an open chat, just like ChatGPT, but with specific questions. Only issue was I couldn't limit what the user wrote in the text box. 

![Early mockup of the chat UI for Griffin AI](/images/Griffin-UI-V1.png)
_Early mockup of the chat UI for Griffin AI_

### AI Prompts as Design
Because the prompts were central to the product design, I decided to add them into my Figma file as part of the flow. In each prompt, I indicated where the user inputs would be injected. Also, most of the answers from the LLM needed to be stored for reuse in later parts of the flow. 

![Screenshot of app flow in Figma](/images/Griffin-Figma-Flow.png)
_AI prompts are indicated directly in the Figma file_

### Living With Imperfect Design
Knowing that I wanted a freelance developer to help me bring my idea to life, I didn't want to fuss too much about the app design. So, I settled on using an off-the-shelf design system called [Flowbite](https://flowbite.com/figma/).  I just tweaked the colors and typography and lived with the components as-is.

## Building the MVP
Building the app would be out of my depths. When GPT 3.5 first came out, I test-drove it for writing simple Python scripts. But it failed, and I couldn't figure out a good workflow to get working code. So I gave up. (Of course, fast-forward until now, and [gen AI for coding](https://rogerwong.me/posts/replatforming-with-a-lot-of-help-from-ai) is much better!)

I posted a job on Upwork and interviewed four developers. I chose [Geeks of Kolachi](https://geeksofkolachi.com/), a development agency out of Pakistan. I picked them because they were an agency—meaning they would be a team rather than an individual. Their process included oversight and QA, which I was familiar with working at a tech company.

### Working Proof-of-Concept in Six Weeks
In just six weeks, I had a working prototype that I could start testing with real users. My first beta testers were friends who graciously gave me feedback on the chat UI. 

Through this early user testing, I found that I needed to change the UI. Users wanted more real estate for the generated content, and the free response feedback text field was simply too open, as users didn't know what to do next. 

So I spent another few weekends redesigning the main chat UI, and then the development team needed another three or four weeks to refactor the interface.

![Mockup of the revised chat UI](/images/Griffin-UI-V2.png)
_The revised UI gives more room for the main content and allows the user to make their own adjustments._

## AI Slop?
As a creative practitioner, I was very sensitive to not developing a tool that would eliminate jobs. The fact is that the brand strategies GPT generated were OK; they were good enough. However, to create a real strategy, a lot more research is required. This would include interviewing prospects, customers, and internal stakeholders, studying the competition, and analyzing market trends.

Griffin AI was a shortcut to producing a brand strategy good enough for a small local or regional business. It was something the WordPress developer could use to inform their website design. However, these businesses would never be able to afford the services of a skilled agency strategist in addition to the logo or website work.

However, the solo designer _could_ charge a little extra for this branding exercise or provide more value in addition to their normal offering. 

I spent a lot of time tweaking the prompts and the flow to produce more than decent brand strategies for the likes of Feline Friends Coffee House (cat cafe), WoofWagon Grooming (mobile pet wash), and Dice & Duels (board game store).

## Beyond the Core Product
While the core product was good enough for an MVP, I wanted to figure out a valuable feature to justify monthly recurring revenue, aka a subscription. LLMs are pretty good at mimicking voice and tone if you give it enough direction. Therefore I decided to include copywriting as a feature, but writing based on a brand voice created after a brand strategy has been developed. ChatGPT isn't primed to write in a consistent voice, but it can with the right prompting and context.

![Screenshots of the Griffin AI marketing site](/images/Griffin-Marketing-Site.jpg)

Beyond those two features, I also had to build ancillary app services like billing, administration, onboarding, tutorials, and help docs. I had to extend the branding and come up with a marketing website. All this ate up weeks more time.

## Failure to Launch
They say the last 20% takes 80% of the time, or something like that. And it's true. The stuff beyond the core features just took a lot to perfect. While the dev team was building and fixing bugs, I was on Reddit, trying to gather leads to check out the app in its beta state.

Griffin AI finally launched in mid-June. I made announcements on my social media accounts. Some friends congratulated me and even checked out the app a little. But my agency and tech company friends weren't the target audience. No, my ideal customer was in that WordPress developers Facebook group where I couldn't do any self-promotion.

![Screenshot of the announcement on LinkedIn](/images/Griffin-LinkedIn.png)

I continued to talk about it on Reddit and everywhere I could. But the app never gained traction. I wasn't savvy enough to build momentum and launch on ProductHunt. The Summer Olympics in Paris happened. Football season started. The Dodgers won the World Series. And I got all but one sale. 

When I told this customer that I was going to shut down the app, he replied, "I enjoyed using the app, and it helped me brief my client on a project I'm working on." Yup, that was the idea! But not enough people knew about it or thought it was worthwhile to keep it going.

## Lessons Learned 
I'm shutting Griffin AI down, but I'm not too broken up about it. For me, I learned a lot and that's all that matters. Call it paying tuition into the school of life.

When I perform a post-mortem on why it didn't take off, I can point to a few things.

### I'm a maker, not a seller.
I absolutely love making and building. And I think I'm not too bad at it. But I hate the actual process of marketing and selling. I believe that had I poured more time and money into getting the word out, I could have attracted more customers. Maybe.

### Don't rely on survey data.
Remember the asterisk? The Pollfish data that showed interest in a product like this? Well, I wonder if this was a good panel at all. In the verbatims, some comments didn't sound like these respondents were US-based, business owners, or taking the survey seriously. Comments like "i extremely love griffin al for many more research" and "this is a much-needed assistant for my work." Instead of survey data with a suspect panel, I need to do more first-hand research before jumping into it.

### AI moves really fast.
AI has been a rocket ship this past year-and-a-half. Keeping up with the changes and new capabilities is brutal as a side hustle and as a non-engineer. While I thought there might be a market for a specialized AI tool like Griffin, I think people are satisfied enough with a horizontal app like ChatGPT. To break through, you'd have to do something very different. I think Cursor and Replit might be onto something.

<div style="text-align: center; margin: 2em 0;">
. . .
</div>

I still like making things, and I'll always be a tinkerer. But maybe next time, I'll be a little more aware of my limitations and either push past them or find collaborators who can augment my skills.
