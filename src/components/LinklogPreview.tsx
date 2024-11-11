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
                className="block mb-1 link-primary" 
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} (opens in new tab)`}
            >
                <p>{title}</p>
                <p className="sr-only">(opens in new tab)</p>
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-200" aria-label={`Source: ${linkSource}`}>
                {linkSource}
            </p>
        </div>
    );
}
