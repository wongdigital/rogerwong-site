import { visit } from 'unist-util-visit';

const remarkVideo = () => {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      // Only process paragraphs that contain a single text node
      if (node.children?.length === 1 && node.children[0].type === 'text') {
        const textNode = node.children[0];
        const youtubeRegex = /https?:\/\/(?:(?:www\.)?youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(?:[?&][^<\s]*)*/;
        const vimeoRegex = /https?:\/\/(?:www\.)?vimeo\.com\/([0-9]+)/;
        
        const youtubeMatch = textNode.value.match(youtubeRegex);
        const vimeoMatch = textNode.value.match(vimeoRegex);
        
        if (youtubeMatch || vimeoMatch) {
          console.log('Found video URL:', textNode.value);
          // Replace the entire paragraph node with our video component
          parent.children[index] = {
            type: 'mdxJsxFlowElement',
            name: 'VideoEmbed',
            attributes: [
              {
                type: 'mdxJsxAttribute',
                name: 'src',
                value: textNode.value.trim()
              }
            ],
          };
          return index; // Skip processing children
        }
      }
    });
  };
};

export default remarkVideo; 