---
title: "Re-Platforming with a Lot of Help From AI"
date: "2024-11-03"
category: "Side Projects"
tags:
  - "AI"
  - "Personal Projects"
  - "Product Reviews"
  - "Process"
  - "Technical Workflows"
  - "Tools"
imageSrc: "/images/Replatform-AI-Featured.jpg"
imageAlt: "Closeup of MU/TH/UR 9000 computer screen from the movie Alien:Romulus"
excerpt: "Re-platforming my website from WordPress to React seemed daunting for a non-developer like me. Yet, with AI tools like Cursor, I managed to navigate the complexities of modern web development. This article shares my journey and insights for others venturing into AI-assisted coding."
---

I decided to re-platform my personal website, moving it from WordPress to React. It was spurred by a curiosity to learn a more modern tech stack like React and the [drama in the WordPress community](https://techcrunch.com/2024/10/29/wordpress-vs-wp-engine-drama-explained/) that erupted last month. While I [doubt WordPress is going away](https://www.wpbeginner.com/news/wordpress-drama-explained-and-how-it-may-affect-your-website/) anytime soon, I do think this rift opens the door for designers, developers, and clients to consider alternatives. 

First off, I'm not a developer by any means. I'm a designer and understand technical things well, but I can't code. When I was young, I wrote programs in BASIC and HyperCard. In the early days of content management systems, I built a version of my personal site using ExpressionEngine. I was always able to tweak CSS to style themes in WordPress. When Elementor came on the scene, I could finally build WP sites from scratch. Eventually, I graduated to other page builders like Oxygen and Bricks. 

So, rebuilding my site in React wouldn't be easy. I went through the [React foundations tutorial](https://nextjs.org/learn/react-foundations) by Next.js and their [beginner full-stack course](https://nextjs.org/learn/dashboard-app). But honestly, I just followed the steps and copied the code, barely understanding what was being done and not remembering any syntax. Then I stumbled upon Cursor, and a whole new world opened up. 

![Screenshot of Cursor website](/images/Cursor-Website-Screenshot.jpg)

[Cursor is an AI-powered code editor](https://www.cursor.com/) (IDE) like VS Code. In fact, it's a fork of VS Code with AI chat bolted onto the side panel. You can ask it to generate and debug code for you. And it works! I was delighted when I asked it to create a light/dark mode toggle for my website. In seconds, it outputted code in the chat for three files. I would have to go into each code example and apply it to the correct file, but even that's mostly automatic. I simply have to accept or reject the changes as the diff showed up in the editor. And I had dark mode on my site in less than a minute. I was giddy!

To be clear, it still took about two weekends of work and a lot of trial and error to finish the project. But a non-coder like me, who still can't understand JavaScript, would not have been able to re-platform their site to a modern stack without the help of AI. 

Here are some tips I learned along the way.

## Plan the Project and Write a PRD
While watching some React and Next.js tutorials on YouTube, this video about [10xing your Cursor workflow](https://youtu.be/2PjmPU07KNs?si=G3KCaTRO7WxXBrZP) by [Jason Zhou](https://youtube.com/@aijasonz?si=Z5Bwvf7MsVwXMNIY) came up. I didn't watch the whole thing, but his first suggestion was to write a product requirements document, or PRD, which made a lot of sense. So that's what I did. I wrote a document that spelled out the background (why), what I wanted the user experience to be, what the functionality should be, and which technologies to use. Not only did this help Cursor understand what it was building, but it also helped me define the functionality I wanted to achieve.

![Details from a PRD](/images/Replatform-PRD.png)
_A screenshot of my PRD_

My personal website is a straightforward product when compared to the Reddit sentiment analysis tool Jason was building, but having this document that I could refer back to as I was making the website was helpful and kept things organized.

## Create the UI First
I've been designing websites since the 1990s, so I'm pretty old school. I knew I wanted to keep the same design as my WordPress site, but I still needed to _design_ it in Figma. I put together a quick mockup of the homepage, which was good enough to jump into the code editor.
 
I know enough CSS to style elements however I want, but I don't know any best practices. Thankfully, [Tailwind CSS exists](https://tailwindcss.com/). I had heard about it from my engineering coworkers but never used it. I watched a [quick tutorial](https://youtu.be/DenUCuq4G04?si=cZrQd8OUgv0X6Ldn) from [Lukas](https://youtu.be/DenUCuq4G04?si=cZrQd8OUgv0X6Ldn), who made it very easy to understand, and I was able to code the design pretty quickly.

## Prime the AI
Once the design was in HTML and Tailwind, I felt ready to get Cursor started. In the editor, there's a chat interface on the right side. You can include the current file, additional files, or the entire codebase for context for each chat. I fed it the PRD and told it to wait for further instructions. This gave Cursor an idea of what we were building.

## Make It Dynamic
Then, I included the homepage file and told Cursor to make it dynamic according to the PRD. It generated the necessary code and, more importantly, its thought process and instructions on implementing the code, such as which files to create and which Next.js and React modules to add. 

![Cursor code generation](/images/Cursor-Chat.png)
_A closeup of the Cursor chat showing code generation_

The UI is well-considered. For each code generation box, Cursor shows the file it should be applied to and an Apply button. Clicking the Apply button will insert the code in the right place in the file, showing the new code in green and the code to be deleted in red. You can either reject or accept the new code.

## Be Specific in Your Prompts
The more specific you can be, the better Cursor will work. As I built the functionality piece by piece, I found that the generated code would work better—less error-prone—when I was specific in what I wanted.

When errors did occur, I would simply copy the error and paste it into the chat. Cursor would do its best to troubleshoot. Sometimes, it solved the problem on its first try. Other times, it would take several attempts. I would say Cursor generated perfect code the first time 80% of the time. The remainder took at least another attempt to catch the errors. 

## Know Best Practices

![Screenshot of the Cursor code editor](/images/Cursor-Editor.png)

Large language models today can't quite plan. So, it's essential to understand the big picture and keep that plan in mind. I had to specify the type of static site generator I wanted to build. In my case, just simple Markdown files for blog posts. However, additional best practices include SEO and accessibility. I had to have Cursor modify the working code to incorporate best practices for both, as they weren't included automatically.

## Build Utility Scripts
Since I was migrating my posts and links from WordPress, a fair bit of conversion had to be done to get it into the new format, Markdown. I thought I would have to write my own WordPress plugin or something, but when I asked Cursor how to transfer my posts, it proposed the [existing `wordpress-export-to-markdown` script](https://github.com/lonekorean/wordpress-export-to-markdown). That was 90% of the work! 

I ended up using Cursor to write additional small scripts to add alt text to all the images and to ensure no broken images. These utility scripts came in handy to process 42 posts and 45 links in the linklog.

## The Takeaway: Developers' Jobs Are Still Safe
I don't believe AI-powered coding tools like Cursor, GitHub Copilot, and Replit will replace developers in the near future. However, I do think these tools have a place in three prominent use cases: learning, hobbying, and acceleration. 

For students and those learning how to code, Cursor's plain language summary explaining its code generation is illuminating. For hobbyists who need a little utilitarian script every once in a while, it's also great.  It's similar to 3D printing, where you can print out a part to fix the occasional broken something. 

![Screenshot of GitHub's Copilot website](/images/Github-Copilot.png)

For professional engineers, I believe this technology can help them do more faster. In fact, that's how GitHub positions Copilot: "code 55% faster" by using their product. Imagine planning out an app, having the AI draft code for you, and then you can fine-tune it. Or have it debug for you. This reduces a lot of the busy work. 

I'm not sure how great the resulting code is. All I know is that it's working and creating the functionality I want. It might be similar to early versions of Macromedia (now Adobe) Dreamweaver, where the webpage _looked_ good, but when you examined the HTML more closely, it was bloated and inefficient. Eventually, Dreamweaver's code got better. Similarly, WordPress page builders like Elementor and Bricks Builder generated cleaner code in the end. 

Tools like Cursor, Midjourney, and ChatGPT are enablers of ideas. When wielded well, they can help you do some pretty cool things. As a fun add-on to my site, I designed some dingbats—mainly because of my love for 1960s op art and '70s corporate logos—at the bottom of every blog post. See what happens if you click them. Enjoy. 