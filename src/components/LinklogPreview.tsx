// Define the full type for data that can be passed
type LinklogData = {
    title: string;
    linkUrl: string;
    linkSource: string;
    date: string;
};

// Define the specific props the component actually uses
type LinklogPreviewProps = Pick<LinklogData, 'title' | 'linkUrl' | 'linkSource'>;

export default function LinklogPreview({ title, linkUrl, linkSource }: LinklogPreviewProps) {
    return (
        <div className="mb-4">
            <a 
                className="mb-2 text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-500 dark:hover:text-blue-400" 
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} (opens in new tab)`}
            >
                <p>{title}</p>
            </a>
            <span className="text-sm text-slate-500 dark:text-slate-200">{linkSource}</span>
        </div>
    );
}
