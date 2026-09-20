"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex w-full">
      {/* SIDEBAR NAVIGATION */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900/95 backdrop-blur-md border-r border-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Sidebar Header / Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <Link
            href="/"
            className="text-lg font-extrabold tracking-tight bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Dev Story ⚡
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white cursor-pointer p-1"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 font-medium text-sm">
          <Link
            href="/dashboard"
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition ${
              pathname === "/dashboard"
                ? "bg-indigo-600/10 border border-indigo-500/30 text-indigo-400"
                : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
            }`}
          >
            📊 My Profile
          </Link>

          <Link
            href="/dashboard/add-story"
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition ${
              pathname === "/dashboard/add-story"
                ? "bg-indigo-600/10 border border-indigo-500/30 text-indigo-400"
                : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
            }`}
          >
            📖 Add Story
          </Link>

          <Link
            href="/dashboard/settings"
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition ${
              pathname === "/dashboard/settings"
                ? "bg-indigo-600/10 border border-indigo-500/30 text-indigo-400"
                : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
            }`}
          >
            ⚙️ Settings
          </Link>
        </nav>

        {/* Sidebar Footer / User Profile snippet */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-linear-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white text-xs">
              U
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-medium text-slate-200 truncate">
                Developer
              </p>
              <p className="text-[10px] text-slate-500 truncate">
                dev@story.io
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile/tablet sidebar */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
        ></div>
      )}

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col lg:pl-24 min-w-0">
        {/* Top Header Bar (visible up to lg screens) */}
        <div className="lg:hidden sticky top-0 z-30 h-16 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-6 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-2 cursor-pointer hover:bg-slate-800 transition"
          >
            <span>☰</span> Menu
          </button>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            ● Active
          </span>
        </div>

        {/* Page Content Rendering */}
        <main className="flex-1 p-6 md:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
