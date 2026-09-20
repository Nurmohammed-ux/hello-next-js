"use client";

import Title from "@/components/Title";

export default function Dashboard() {
  return (
    <div className="px-6 pt-8 w-full">
      
      {/* Header Row with Action Button */}
      <div className="flex flex-row justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div className="flex flex-col gap-3">
          <Title>Welcome back, Developer 🚀</Title>
          <p className="text-sm text-slate-400">
            Here is what is happening with your repositories and dev logs today.
          </p>
        </div>

        <button className="text-xs px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/20 cursor-pointer">
          + New Story
        </button>
      </div>

      {/* Dev Stats Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-3xl">📖</div>
          <p className="text-xs text-slate-400 font-mono uppercase">Stories Published</p>
          <h3 className="text-2xl font-bold text-white mt-1">12</h3>
          <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">↑ +2 this week</p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-3xl">💻</div>
          <p className="text-xs text-slate-400 font-mono uppercase">Code Commits</p>
          <h3 className="text-2xl font-bold text-white mt-1">348</h3>
          <p className="text-xs text-indigo-400 mt-2">Main branch active</p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-3xl">🐛</div>
          <p className="text-xs text-slate-400 font-mono uppercase">Bugs Squashed</p>
          <h3 className="text-2xl font-bold text-white mt-1">1,024</h3>
          <p className="text-xs text-amber-400 mt-2">Zero critical bugs</p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-3xl">☕</div>
          <p className="text-xs text-slate-400 font-mono uppercase">Coffee Consumed</p>
          <h3 className="text-2xl font-bold text-white mt-1">42 L</h3>
          <p className="text-xs text-cyan-400 mt-2">Fuel level optimal</p>
        </div>
      </div>

      {/* Recent Activity / Content Box */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 shadow-xl">
        <h3 className="text-base font-bold text-white mb-4">Recent Dev Logs</h3>
        <div className="space-y-3">
          {[
            { title: "Refactoring legacy code at 3 AM", date: "Yesterday", status: "Published" },
            { title: "Why I switched from Webpack to Turbopack", date: "3 days ago", status: "Draft" },
            { title: "Building a fullstack SaaS in 48 hours", date: "5 days ago", status: "Published" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800/60 hover:border-slate-700 transition">
              <div>
                <h4 className="text-sm font-medium text-slate-200">{item.title}</h4>
                <span className="text-xs text-slate-500">{item.date}</span>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-mono ${item.status === 'Published' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-slate-800 text-slate-400'}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}