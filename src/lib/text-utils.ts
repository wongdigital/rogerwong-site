const specialCaseWords = new Map([
    ['ux', 'UX'],
    // Add more special cases as needed
]);
  
export function toTitleCase(text: string): string {
    return text
      .split(' ')
      .map(word => {
        const lowerWord = word.toLowerCase();
        if (specialCaseWords.has(lowerWord)) {
          return specialCaseWords.get(lowerWord);
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
}