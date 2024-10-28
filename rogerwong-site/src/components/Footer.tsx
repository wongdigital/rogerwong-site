export default function Footer() {
  return (
    <footer className="text-slate-400 !text-xs py-4 mt-8">
      <div className="container mx-auto lg:px-20 md:px-0 text-left">
        <p>&copy; 1995–{new Date().getFullYear()} Roger Wong. All rights reserved.</p>
      </div>
    </footer>
  );
}
