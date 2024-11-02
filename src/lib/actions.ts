'use server'

import { getSortedPostsData } from './posts'

export async function getRandomPostId(currentPostId?: string): Promise<string> {
  const posts = await getSortedPostsData()
  
  // Filter out the current post if one is provided
  const availablePosts = currentPostId 
    ? posts.filter(post => post.id !== currentPostId)
    : posts

  const randomPost = availablePosts[Math.floor(Math.random() * availablePosts.length)]
  return randomPost.id
}
