const Loading = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-sm w-full text-center space-y-6 relative">
        {/* Background Glowing Ambient Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Status Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-slate-900 text-indigo-400 font-mono text-xs shadow-inner">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
          SYSTEM_STATUS: FETCHING
        </div>

        {/* Loading Spinner & Text */}
        <div className="relative z-10 space-y-3">
          <div className="w-12 h-12 border-4 border-slate-900 border-t-indigo-500 rounded-full animate-spin mx-auto"></div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            Loading data...
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Please wait while we resolve your request.
          </p>
        </div>

        {/* Code Terminal Aesthetic Bar */}
        <div className="relative z-10 bg-black border border-slate-900 rounded-2xl p-4 text-left font-mono text-[11px] text-cyan-300 shadow-xl max-w-xs mx-auto overflow-hidden">
          <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-slate-900 text-slate-500">
            <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
            <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
            <span className="ml-1 text-[9px]">async-resolver.js</span>
          </div>
          <div className="space-y-1 text-slate-400">
            <p className="text-indigo-400">&gt; awaiting response...</p>
            <p className="animate-pulse">&gt; rendering server components...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
