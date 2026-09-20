"use client";

import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  const handleBtn = () => {
    const password = prompt("Enter your password");
    if (password == "1234") {
      router.push("/dashboard")
    }
  };
  return (
    <div className="relative overflow-hidden bg-slate-950 px-6 md:px-8 py-8 rounded-2xl shadow-2xl border border-slate-800 my-8">
      {/* Background Glow Effect */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="space-y-4 md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            v1.0.0 released
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Every line of code tells a{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Dev Story
            </span>
            .
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            From the first <code>console.log(&quot;Hello World&quot;)</code> to
            deploying scalable microservices at 2 AM. Turn your debugging
            struggles into engineering triumphs.
          </p>

          <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-4">
            <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition shadow-lg shadow-indigo-600/30 cursor-pointer">
              Read Latest Stories
            </button>
            <button
              onClick={handleBtn}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-medium text-sm transition cursor-pointer"
            >
              Share Your Story
            </button>
          </div>
        </div>

        {/* Right Code Card Preview */}
        <div className="w-full md:w-auto shrink-0">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-xl font-mono text-xs text-slate-300 w-full max-w-lg">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 text-slate-500 text-[10px]">
                dev-story.ts
              </span>
            </div>
            <p className="text-purple-400">
              const <span className="text-blue-400">story</span> = &#123;
            </p>
            <p className="pl-4 text-slate-300">
              author: <span className="text-emerald-400">&quot;You&quot;</span>,
            </p>
            <p className="pl-4 text-slate-300">
              status:{" "}
              <span className="text-emerald-400">&quot;Compiling...&quot;</span>
              ,
            </p>
            <p className="pl-4 text-slate-300">
              bugsFixed: <span className="text-amber-400">404</span>,
            </p>
            <p className="text-purple-400">&#125;;</p>
            <p className="mt-2 text-indigo-400 animate-pulse">
              {" "}
              Let&apos;s build the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
