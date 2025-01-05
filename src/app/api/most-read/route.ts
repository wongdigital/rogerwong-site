import { BetaAnalyticsDataClient, protos } from '@google-analytics/data';
import { NextResponse } from 'next/server';
import { getSortedPostsData } from '@/lib/posts';
import { Category } from '@/lib/categories';

// Validate required environment variables
const requiredEnvVars = {
  GOOGLE_ANALYTICS_CLIENT_EMAIL: process.env.GOOGLE_ANALYTICS_CLIENT_EMAIL,
  GOOGLE_ANALYTICS_PRIVATE_KEY: process.env.GOOGLE_ANALYTICS_PRIVATE_KEY,
  GOOGLE_ANALYTICS_PROPERTY_ID: process.env.GOOGLE_ANALYTICS_PROPERTY_ID,
} as const;

// Check for missing environment variables
const missingEnvVars = Object.entries(requiredEnvVars)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingEnvVars.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingEnvVars.join(', ')}`
  );
}

// After validation, we can safely assert these values exist
const clientEmail = requiredEnvVars.GOOGLE_ANALYTICS_CLIENT_EMAIL as string;
const privateKey = (requiredEnvVars.GOOGLE_ANALYTICS_PRIVATE_KEY as string).replace(/\\n/g, '\n');
const propertyId = requiredEnvVars.GOOGLE_ANALYTICS_PROPERTY_ID as string;

// Initialize the GA4 client
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: clientEmail,
    private_key: privateKey,
  },
});

// Define types for our data structures
type Row = protos.google.analytics.data.v1beta.IRow;
type PostWithViews = {
  id: string;
  title: string;
  date: string;
  category: Category;
  excerpt: string;
  imageSrc?: string;
  imageAlt?: string;
  content?: string;
  contentHtml?: string;
  tags?: string[];
  views: number;
};

// Cache the results
let cachedData: PostWithViews[] | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function GET() {
  try {
    // Check if we have cached data that's still valid
    const now = Date.now();
    if (cachedData && (now - lastFetchTime < CACHE_DURATION)) {
      return NextResponse.json(cachedData);
    }

    // Get all posts to match against URLs
    const allPosts = await getSortedPostsData();
    const postSlugs = new Set(allPosts.map(post => post.id));

    // Fetch data from GA4
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '7daysAgo',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'pagePath',
        },
      ],
      metrics: [
        {
          name: 'screenPageViews',
        },
      ],
    });

    if (!response || !response.rows) {
      throw new Error('No data received from Google Analytics');
    }

    // Process the response
    const pageViews = response.rows
      .filter((row: Row) => {
        const path = row.dimensionValues?.[0].value;
        // Only include paths that match our post URLs
        return path && path.startsWith('/posts/') && 
               postSlugs.has(path.replace('/posts/', ''));
      })
      .map((row: Row) => ({
        slug: row.dimensionValues?.[0].value?.replace('/posts/', '') || '',
        views: parseInt(row.metricValues?.[0].value || '0', 10),
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5); // Get top 5

    // Match with full post data
    const mostReadPosts = pageViews
      .map(view => {
        const post = allPosts.find(p => p.id === view.slug);
        if (!post) return null;
        return {
          ...post,
          views: view.views,
        } as PostWithViews;
      })
      .filter((post): post is PostWithViews => post !== null);

    // Cache the results
    cachedData = mostReadPosts;
    lastFetchTime = now;

    return NextResponse.json(mostReadPosts);
  } catch (error) {
    console.error('Error fetching most read posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch most read posts' },
      { status: 500 }
    );
  }
} 