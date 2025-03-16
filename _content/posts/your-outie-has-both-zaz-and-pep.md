---
title: "Your Outie Has Both Zaz and Pep: Building YourOutie.is with AI"
date: "2025-03-16"
category: "Side Projects"
tags:
  - "AI"
  - "Personal Projects"
  - "Process"
  - "Technical Workflows"
imageSrc: "/images/youroutie-featured.jpg"
imageAlt: |
 A screenshot of the YourOutie.is website showing the Lumon logo at the top with the title "Outie Query System Interface (OQSI)" beneath it. The interface has a minimalist white card on a blue background with small digital patterns. The card contains text that reads "Describe your Innie to learn about your Outie" and a black "Get Started" button. The design mimics the retro-corporate aesthetic of the TV show Severance.
excerpt: "A tall man with curly, graying hair and a bushy mustache sits across from a woman with a very slight smile in a dimly lit room. There's pleasant, calming music playing. He's eager with anticipation to learn about his Outie. This is the premise of the show _Severance_ on Apple TV+, and it inspired me to create YourOutie.is—a wellness fact generator that took me from concept to launch in just four-and-a-half days. With the help of AI tools like Claude and Cursor, I built a nostalgic, HyperCard-esque experience that would make Lumon Industries proud. Here's how it happened."
---
A tall man with curly, graying hair and a bushy mustache sits across from a woman with a very slight smile in a dimly lit room. There’s pleasant, calming music playing.  He’s eager with anticipation to learn about his Outie. He’s an Innie who works on the “severed” floor at Lumon. He’s undergone a surgical procedure that splits his work self from his personal self. This is the premise of the show _Severance_ on Apple TV+.

<div style="position:relative;padding-top:56.25%;"><iframe src="https://iframe.mediadelivery.net/embed/187277/b6b0ffd1-3edb-412d-a291-c676fa5b174a?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe></div>

Ms. Casey, the therapist:
> All right, Irving. What I’d like to do is share with you some facts about your Outie. Because your Outie is an exemplary person, these facts should be very pleasing. Just relax your body and be open to the facts. Try to enjoy each equally. These facts are not to be shared outside this room. But for now, they’re yours to enjoy.
> Your Outie is generous. Your Outie is fond of music and owns many records. Your Outie is a friend to children and to the elderly and the insane. Your Outie is strong and helped someone lift a heavy object. Your Outie attends many dances and is popular among the other attendees. Your Outie likes films and owns a machine that can play them. Your Outie is splendid and can swim gracefully and well.

The scene is from season one, episode two, called “Half Loop.” With season two wrapping up, and with my work colleagues constantly making “my Outie” jokes, I wondered if there was a Your Outie generator. Not really. There’s this [meme generator from imgflip](https://imgflip.com/memegenerator/579009155/Your-outie), but that’s about it.

![Screenshot of the Your Outie meme generator from imgflip.](/images/youroutie-imgflip-meme-generator.png)

So, in the tradition of name generator sites like [Fantasy Name Generators](https://imgflip.com/memegenerator/430282321/Severance-Outie-Affirmation) (you know, for DnD), I decided to make my own using an LLM to generate the wellness facts. 

The resulting website took four-and-a-half days. I started Monday evening and launched it by dinner time Friday. All totaled, it was about 20 hours of work. Apologies to my wife, to whom I barely spoke while I was in the zone with my [creative obsession](https://rogerwong.me/posts/a-complete-obsession).

![Lumon Outie Query System Interface (OQSI)](/images/youroutie-oqsi-outie-query-system-interface.jpg)
[_Lumon Outie Query System Interface (OQSI)_](https://YourOutie.is)

## Your Outie started with a proof-of-concept.

I started with a proof-of-concept using Claude. I gathered information about the show and all the official [Your Outie wellness facts](https://severance.wiki/wellness_facts?s%5B%5D=wellness&s%5B%5D=facts) from the fantastic [Severance Wiki](https://severance.wiki/Start) and attached them to this prompt:

	I would like to create a "Wellness Fact" generator based on the "Your Outie is…" format from the character Ms. Casey. 
	
	Question:
	What questions should we ask the user in order to create responses that are humorous and unique? These need to be very basic questions, potentially from predefined dropdowns.

Claude’s response made me realize that asking about the real person was the wrong way to go. It felt too generic. Then I wondered, what if we just had the user role-play as their Innie? 

The [prototype](https://claude.site/artifacts/6ea493bc-2489-4b9b-aac1-abc87db32d21) was good and showed how fun this little novelty could be. So I decided to put my other side-project on hold for a bit—I’ve been working on redesigning this site—and make a run at creating this.

![Screenshot of Claude with the chat on the left and the prototype on the right. The prototype is a basic form with dropdowns for Innie traits.](/images/youroutie-claude-prototype.png)

## Your Outie developed the API first but never used it.

My first solution was to create a Python API with a Next.js frontend. With my experience [building AI-powered software](https://rogerwong.me/posts/how-i-built-and-launched-an-ai-powered-app), I knew that Python was the preferred method for working with LLMs. I also used [LangChain](https://python.langchain.com/docs/introduction/) so that I could have optionality with foundational models. I took the TypeScript code from Claude and asked Cursor to use Python and LangChain to develop the API. Before long, I had a working backend. 

One interesting problem I ran into was that the facts from GPT often came back very similar to each other. So, I added code to categorize each fact and prevent dupes. Tweaking the prompt also yielded better-written results.

Additionally, I tried all the available models—except for the reasoning ones like o1. OpenAI’s GPT-4o-mini seemed to strike a good balance.

This was Monday evening.

Honestly, this was very trivial to do. [Cursor](https://rogerwong.me/posts/replatforming-with-a-lot-of-help-from-ai) plus Python LangChain made it easy. 172 lines of code. Boom.

I would later regret choosing Python, however.

## Your Outie designed the website in Figma but only the first couple of screens.

Now the fun part was coming up with the design. There were many possibilities. I could riff on the computer terminals on the severed floor like the [macrodata refinement game](https://lumon-industries.com/). I could emulate 1970s and ’80s corporate design like Mr. Milchick’s performance review report.

![Screenshot of an old CRT monitor with a grid of numbers. Some of these numbers are captured into a box on the bottom of the screen.](/images/youroutie-lumon-industries.jpg)
_The official macrodata refinement game from Apple._

![Still from the show of the character Seth Milchick's performance review report.](/images/youroutie-milchick-performance-review-report.jpg)
_Seth Milchick receives his first performance review in this report._

I ended up with the latter, but as I started designing, I realized I could incorporate a little early Macintosh vibe. I began thinking of the website as a [HyperCard](https://hypercard.org/) stack. So I went with it. 

I was anxious to build the frontend. I started a new Next.js project and fired up Cursor. I forwent a formal PRD and started [vibe coding](https://x.com/karpathy/status/1886192184808149383) (ugh, I hate that term, more on this in an upcoming post). Using static mock data, I got the UI to a good place by the end of the evening—well, midnight—but there was still a lot of polishing to do. 

This was Tuesday night.

![Screenshot of the author's Figma canvas showing various screen designs and typographic explorations.](/images/youroutie-figma.png)
_My Figma canvas showing some quick explorations._

## Your Outie struggled bravely with Cursor and won. 

Beyond the basic generator, I wanted to create something that had both zaz and pep. Recalling the eight-hour remix of the _Severance_ theme by ODESZA, “[Music to Refine To](https://youtu.be/JRnDYB28bL8?si=l3tZLJlLxPf3EF2A),” I decided to add a music player to the site. I found a few cool tracks on Epidemic Sound and tried building the player. I thought it would be easy, but Cursor and I struggled mightily for hours. Play/pause wouldn’t work. Autoplaying the next track wouldn’t work. Etc. Eventually, I cut my losses after figuring out at least play/pause and combined the tracks together into a long one. Six minutes should be long enough, right?

[v0](https://v0.dev/) helped with generating the code for the gradient background. 

This is my ode to the [Music Dance Experience](https://severance.wiki/music_dance_experience) (MDE) from season one. That was Wednesday. 

![Still from the show of two characters dancing in the middle of the office.](/images/youroutie-music-dance-experience.jpg)

## Your Outie reintegrated.

Thursday’s activity was integrating the backend with the frontend. Again, with Cursor, this was relatively straightforward. The API took the request from the frontend and provided a response. The frontend displayed it. I spent more time fine-tuning the animations and getting the mobile layout just right. You wouldn’t believe how much Cursor-wrangling I had to do to get the sliding animations and fades dialed in. I think this is where AI struggles—with the nuances.

By the end of the night, I had a nice working app. Now, I had to look for a host. [Vercel](https://vercel.com/) doesn’t support Python. After researching [Digital Ocean](https://www.digitalocean.com/), I realized I would have to pay for two app servers: one for the Node.js frontend and another for the Python backend. That’s not too cost-effective for a silly site like this. Again, it was midnight, so I slept on it.

## Your Outie once refactored code from Python to React in just one hour.

![Still from the show of the main character, Mark S. staring at his computer monitor.](/images/youroutie-locked-in.jpg)

In the morning, I decided to refactor the API from Python to React. LangChain has a JavaScript version, so I asked Cursor to translate the original Python code. The translation wasn’t as smooth as I had hoped. Again, it missed many of the details that I spent time putting into the original prompt and logic. But a few more chats later, the translation was completed, and now the app was all in React.

Between the end of my work day and dinner on Friday, I finished the final touchups on the site: removing debugging console messages, rewriting error messages to be more Severance-like, and making sure there were no layout bugs.

I had to fix a few more build errors and used [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview). It seemed a lot easier than sitting there and going back and forth with Cursor.

Then, I connected my repo to Vercel, and voila! The Lumon [Outie Query System Interface](https://YourOutie.is) (OQSI) was live at YourOutie.is.

I hope you enjoy it as much as I had fun making it. Now, I think I owe my wife some flowers and a date night.