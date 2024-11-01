export default function Footer() {
  return (
    <div className="text-slate-400 !text-xs py-4 mt-8 px-4 sm:px-0 lg:px-20">
      <div className="text-left">
        <p>&copy; 1995–{new Date().getFullYear()} Roger Wong. All rights reserved.</p>
      </div>
    </div>
  );
}
