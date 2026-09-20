import Link from "next/link";
import { FiHome, FiArrowLeft, FiCompass } from "react-icons/fi";

const NotFound404 = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full text-center space-y-8 relative">
        
        {/* Background Glowing Ambient Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* 404 Status Code Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-slate-900 text-indigo-400 font-mono text-xs shadow-inner">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          ERROR_CODE: 404_PAGE_NOT_FOUND
        </div>

        {/* Main Header & Message */}
        <div className="relative z-10 space-y-3">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-linear-to-r from-indigo-500 via-cyan-400 to-indigo-600 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Looks like you&apos;ve wandered into unmapped code.
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Code Snippet Box for Flavor */}
        <div className="relative z-10 bg-black border border-slate-900 rounded-2xl p-4 text-left font-mono text-xs text-cyan-300 shadow-xl max-w-md mx-auto overflow-x-auto">
          <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-slate-900/80 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            <span className="ml-2 text-[10px]">route-guard.js</span>
          </div>
          <pre>{`try {
  await fetchPage(window.location.pathname);
} catch (error) {
  throw new Error("Route not found in App Router");
}`}</pre>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/25 transition"
          >
            <FiHome size={16} />
            Back to Home
          </Link>
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 text-sm font-medium bg-black hover:bg-slate-900 text-slate-200 px-5 py-2.5 rounded-xl border border-slate-900 transition shadow-xs"
          >
            <FiCompass size={16} />
            Browse Tutorials
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound404;