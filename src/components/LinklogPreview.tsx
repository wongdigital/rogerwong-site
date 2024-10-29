type LinklogPreviewProps = {
    title: string;
    date: string;
    url: string;
    source: string;
  };
  
  export default function LinklogPreview({ title, date, url, source }: LinklogPreviewProps) {
    return (
      <div className="mb-4">
        <a 
          className="mb-2 text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-500 dark:hover:text-blue-400" 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} (opens in new tab)`}
        >
          <p>{title}</p>
        </a>
        <span className="text-sm text-slate-500 dark:text-slate-200">{source}</span>
      </div>
    );
  }
