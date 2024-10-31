export function formatDate(dateString: string) {
    const date = new Date(dateString + 'T00:00:00Z');
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    }).format(date);
}
  