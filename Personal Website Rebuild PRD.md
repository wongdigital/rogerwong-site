# Personal Website Rebuild

# Background

The current rogerwong.me website is running on WordPress and built using the Oxygen Builder page builder. Because of all the current drama and uncertainty in the WordPress ecosystem, I’ve decided to rebuild the site on a modern software stack: React, Next.js, and Tailwind CSS.

# Requirements

## User Experience

The site is a simple personal site with the following pages:

- Home
- About
- Posts index
- Links index
- Single post (template)
- Category index
- Search results page

The site must be responsive, using the default Tailwind CSS device breakpoints.

The main navigation consists of:

- Roger Wong (i.e., home)
- About
- Posts
- Links
- Search (shown only as an icon)
- Dark mode toggle (shown only as an icon)

### Home Page

The content on the homepage shall be:

- A short, single statement headline
- Single paragraph short bio
- Social media link icons (Threads, Instagram, LinkedIn)
- Title, featured image, date, time to read, and excerpt for the latest blog post
- The five latest links (for each, title and source)

### About Page

The content for the about page shall be:

- Title
- Body copy
- Photo
- Social media links

### Posts Index

The posts index page should display the title “Posts” and then the last ten posts. Each post is on a card that displays the title, featured image, date, time to read, and excerpt. Additional posts can be fetched via pagination.

### Links Index

The links index page should display the title “Links” and then the last 20 links. Each links is on a card that display the title (which is linked to the external url), the source, and date. Additional links can be fetched via pagination.

### Category Index

The layout should be the same as the Posts Index page, except the page title will be the category name.

### Search Results Page

The layout should be the same as the Posts Index page, except the title will be `Search results for “search term”:`

### Single Post Template

For each post, the layout is as follows:

- Categories list inline, each separated by a comma (e.g., Apple, Technology)
- Post title
- Date and time to read, separated by a bullet (e.g., March 18, 2024 • 13 min read)
- Feature image
- Post content
- Three related posts as cards

## Functionality and Technology

We will use Next.js's [Static Generation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Styling

Use the default Tailwind CSS styling for everything, but change the font family to [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans?categoryFilters=Sans+Serif:/Sans/Neo+Grotesque).

# Design

The site’s design will be simple but should incorporate some personality. My roots are from the early days of the Mac, with one of my first design projects creating an icon for my high school friend’s program, LSBBS or Lightning BBS. This meant drawing the icon pixel-by-pixel in ResEdit. Back then, icons were drawn on a 32x32 pixel grid, using only the 256 colors available from the Mac system color palette. There’s something here in terms of decorative design elements.

This also overlaps with my love for geometric logos from the 1960s and 1970s and pop art from the ’60s. I adore bold, graphic forms.

Typographically, the site will be in the classic Swiss style, but using modern typefaces.

