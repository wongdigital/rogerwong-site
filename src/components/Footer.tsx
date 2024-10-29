export default function Footer() {
  return (
    <footer className="text-slate-400 !text-xs py-4 mt-8">
      <div className="container mx-auto px-4 sm:px-0 lg:px-20 text-left">
        <p>&copy; 1995–{new Date().getFullYear()} Roger Wong. All rights reserved.</p>
      </div>
    </footer>
  );
}
