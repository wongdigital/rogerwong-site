import type { Plugin } from 'unified'
import type { Text } from 'mdast'
import { visit } from 'unist-util-visit'

export const remarkVideo: Plugin = () => {
  return (tree) => {
    visit(tree, 'text', (node: Text) => {
      const youtubeRegex = /https?:\/\/(?:(?:www\.)?youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(?:[?&][^<\s]*)*/g
      const vimeoRegex = /https?:\/\/(?:www\.)?vimeo\.com\/([0-9]+)/g
      
      if (youtubeRegex.test(node.value) || vimeoRegex.test(node.value)) {
        const newNode = node as unknown as { type: string; value: string }
        newNode.type = 'html'
        newNode.value = node.value
          .replace(youtubeRegex, (fullUrl, videoId) => {
            const timeMatch = fullUrl.match(/[?&](?:t|start)=(\d+)/)
            const timestamp = timeMatch ? timeMatch[1] : null
            
            return `
              <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px;">
                <iframe 
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                  src="https://www.youtube.com/embed/${videoId}${timestamp ? `?start=${timestamp}` : ''}"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            `
          })
          .replace(vimeoRegex, (_, videoId) => `
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px;">
              <iframe 
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                src="https://player.vimeo.com/video/${videoId}"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          `)
      }
    })
  }
}
