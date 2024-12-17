import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['rogerwong-site.vercel.app', 'images.unsplash.com', 'vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        "source": "/links",
        "destination": "/linklog",
        "permanent": true
      },
      {
        "source": "/sell-the-horseshit",
        "destination": "/posts/sell-the-horseshit",
        "permanent": true
      },
      {
        "source": "/for-the-rest-of-us",
        "destination": "/posts/for-the-rest-of-us",
        "permanent": true
      },
      {
        "source": "/thank-you-steve",
        "destination": "/posts/thank-you-steve",
        "permanent": true
      },
      {
        "source": "/putting-a-dent-in-the-universe",
        "destination": "/posts/putting-a-dent-in-the-universe",
        "permanent": true
      },
      {
        "source": "/designing-a-data-first-infographic",
        "destination": "/posts/designing-a-data-first-infographic",
        "permanent": true
      },
      {
        "source": "/smart-data-needs-smart-design",
        "destination": "/posts/smart-data-needs-smart-design",
        "permanent": true
      },
      {
        "source": "/adapt-or-die",
        "destination": "/posts/adapt-or-die",
        "permanent": true
      },
      {
        "source": "/where-is-the-craftsmanship",
        "destination": "/posts/where-is-the-craftsmanship",
        "permanent": true
      },
      {
        "source": "/creation-with-a-crowd",
        "destination": "/posts/creation-with-a-crowd",
        "permanent": true
      },
      {
        "source": "/you-had-me-at-first-tab",
        "destination": "/posts/you-had-me-at-first-tab",
        "permanent": true
      },
      {
        "source": "/concept-does-not-equal-layout",
        "destination": "/posts/concept-does-not-equal-layout",
        "permanent": true
      },
      {
        "source": "/do-big-ideas-still-matter-yes",
        "destination": "/posts/do-big-ideas-still-matter-yes",
        "permanent": true
      },
      {
        "source": "/designing-feed-2009",
        "destination": "/posts/designing-feed-2009",
        "permanent": true
      },
      {
        "source": "/the-benefits-of-having-one-agency",
        "destination": "/posts/the-benefits-of-having-one-agency",
        "permanent": true
      },
      {
        "source": "/re-typesetting-the-star-wars-crawl",
        "destination": "/posts/re-typesetting-the-star-wars-crawl",
        "permanent": true
      },
      {
        "source": "/the-need-to-breathe",
        "destination": "/posts/the-need-to-breathe",
        "permanent": true
      },
      {
        "source": "/introducing-designscene-app-for-ipad",
        "destination": "/posts/introducing-designscene-app-for-ipad",
        "permanent": true
      },
      {
        "source": "/using-the-ipad-to-reshape-content",
        "destination": "/posts/using-the-ipad-to-reshape-content",
        "permanent": true
      },
      {
        "source": "/designscene-2-launches",
        "destination": "/posts/designscene-2-launches",
        "permanent": true
      },
      {
        "source": "/walking-over-the-same-ground",
        "destination": "/posts/walking-over-the-same-ground",
        "permanent": true
      },
      {
        "source": "/30-years-of-mac",
        "destination": "/posts/30-years-of-mac",
        "permanent": true
      },
      {
        "source": "/working-through-my-own-confusion",
        "destination": "/posts/working-through-my-own-confusion",
        "permanent": true
      },
      {
        "source": "/art-for-biden",
        "destination": "/posts/art-for-biden",
        "permanent": true
      },
      {
        "source": "/agitprop-in-times-of-uncertainty",
        "destination": "/posts/agitprop-in-times-of-uncertainty",
        "permanent": true
      },
      {
        "source": "/we-make-the-world-we-want-to-live-in",
        "destination": "/posts/we-make-the-world-we-want-to-live-in",
        "permanent": true
      },
      {
        "source": "/representation-is-powerful",
        "destination": "/posts/representation-is-powerful",
        "permanent": true
      },
      {
        "source": "/mainstream-media-just-dont-understand",
        "destination": "/posts/mainstream-media-just-dont-understand",
        "permanent": true
      },
      {
        "source": "/what-comic-con-teaches-us-about-design-and-branding",
        "destination": "/posts/what-comic-con-teaches-us-about-design-and-branding",
        "permanent": true
      },
      {
        "source": "/a-year-of-learning",
        "destination": "/posts/a-year-of-learning",
        "permanent": true
      },
      {
        "source": "/my-backup-plan",
        "destination": "/posts/my-backup-plan",
        "permanent": true
      },
      {
        "source": "/bully",
        "destination": "/posts/bully",
        "permanent": true
      },
      {
        "source": "/how-to-buy-a-tesla",
        "destination": "/posts/how-to-buy-a-tesla",
        "permanent": true
      },
      {
        "source": "/how-to-put-your-stuff-together-and-get-a-job-as-a-product-designer-part-1",
        "destination": "/posts/how-to-put-your-stuff-together-and-get-a-job-as-a-product-designer-part-1",
        "permanent": true
      },
      {
        "source": "/how-to-put-your-stuff-together-and-get-a-job-as-a-product-designer-part-2",
        "destination": "/posts/how-to-put-your-stuff-together-and-get-a-job-as-a-product-designer-part-2",
        "permanent": true
      },
      {
        "source": "/how-to-put-your-stuff-together-and-get-a-job-as-a-product-designer-part-3",
        "destination": "/posts/how-to-put-your-stuff-together-and-get-a-job-as-a-product-designer-part-3",
        "permanent": true
      },
      {
        "source": "/the-apple-design-process",
        "destination": "/posts/the-apple-design-process",
        "permanent": true
      },
      {
        "source": "/i-read-the-newspaper-today-oh-boy",
        "destination": "/posts/i-read-the-newspaper-today-oh-boy",
        "permanent": true
      },
      {
        "source": "/visualizing-minority-rule-in-the-united-states",
        "destination": "/posts/visualizing-minority-rule-in-the-united-states",
        "permanent": true
      },
      {
        "source": "/putin-false",
        "destination": "/posts/putin-false",
        "permanent": true
      },
      {
        "source": "/trump-false-god",
        "destination": "/posts/trump-false-god",
        "permanent": true
      },
      {
        "source": "/transported-into-spatial-computing",
        "destination": "/posts/transported-into-spatial-computing",
        "permanent": true
      },
      {
        "source": "/thoughts-on-apple-vision-pro",
        "destination": "/posts/thoughts-on-apple-vision-pro",
        "permanent": true
      },
      {
        "source": "/design",
        "destination": "/posts/categories/Design",
        "permanent": true
      },
      {
        "source": "/apple",
        "destination": "/posts/tags/Apple",
        "permanent": true
      },
      {
        "source": "/projects",
        "destination": "/posts/categories/Case%20Studies",
        "permanent": true
      },
      {
        "source": "/politics",
        "destination": "/posts/tags/Politics",
        "permanent": true
      },
      {
        "source": "/technology",
        "destination": "/posts/tags/Technology%20Industry",
        "permanent": true
      },
      {
        "source": "/how-to",
        "destination": "/posts/categories/Guides",
        "permanent": true
      },
      {
        "source": "/life",
        "destination": "/posts/tags/Personal%20Stories",
        "permanent": true
      },
      {
        "source": "/announcements",
        "destination": "/posts/categories/Updates",
        "permanent": true
      },
      {
        "source": "/business",
        "destination": "/posts/tags/Industry%20Insights",
        "permanent": true
      },
      {
        "source": "/design-ethics",
        "destination": "/posts/tags/Design%20Ethics",
        "permanent": true
      },
      // {
      //   "source": "/posts?category=Design",
      //   "destination": "/posts/categories/Design",
      //   "permanent": true
      // },
      // {
      //   "source": "/posts?tag=Design",
      //   "destination": "/posts/tags/Design",
      //   "permanent": true
      // },
      // {
      //   "source": "/posts?category=Projects",
      //   "destination": "/posts?category=Case%20Studies",
      //   "permanent": true
      // },
      // {
      //   "source": "/posts?category=Apple",
      //   "destination": "/posts?tag=Apple",
      //   "permanent": true
      // },
      // {
      //   "source": "/posts?category=Politics",
      //   "destination": "/posts?tag=Politics",
      //   "permanent": true
      // },
      // {
      //   "source": "/posts?category=How-to",
      //   "destination": "/posts?category=Guides",
      //   "permanent": true
      // },
      // {
      //   "source": "/posts?category=Technology",
      //   "destination": "/posts?tag=Technology%20Industry",
      //   "permanent": true
      // },
      // {
      //   "source": "/posts?category=Life",
      //   "destination": "/posts?tag=Personal%20Stories",
      //   "permanent": true
      // },
      // {
      //   "source": "/posts?category=Announcements",
      //   "destination": "/posts?category=Updates",
      //   "permanent": true
      // },
      // {
      //   "source": "/posts?category=Business",
      //   "destination": "/posts?tag=Industry%20Insights",
      //   "permanent": true
      // },
      {
        source: "/posts/page/:page(\\d+)",
        destination: "/posts?page=:page",
        permanent: true,
      },
      {
        source: "/links/page/:page(\\d+)",
        destination: "/linklog?page=:page",
        permanent: true,
      }
    ]
  }
};

export default nextConfig;