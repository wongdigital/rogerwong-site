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
          className="text-blue-600 mb-2 hover:underline hover:text-blue-800" 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{title}</p>
        </a>
        <span className="text-sm text-slate-500">{source}</span>
      </div>
    );
  }