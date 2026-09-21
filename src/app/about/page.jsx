import Title from "@/components/Title";
import Link from "next/link";
import {
  FiUsers,
  FiCode,
  FiAward,
  FiArrowRight,
  FiShield,
} from "react-icons/fi";

const About = () => {
  return (
    <div className="px-4 py-12 space-y-16 text-slate-300">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-indigo-950/60 via-black to-slate-950 border border-slate-900 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-slate-900 text-indigo-400 font-mono text-xs shadow-inner">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            ABOUT_DEV_STORY
          </div>

          <Title>Welcome to About</Title>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            We are building the definitive ecosystem for developers to share
            insights, collaborate on technical stories, and master modern
            software engineering practices.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <Link
              href="/about/stories"
              className="inline-flex items-center gap-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/25 transition"
            >
              Explore Stories
              <FiArrowRight size={16} />
            </Link>
            <Link
              href="/about/teams"
              className="inline-flex items-center gap-2 text-sm font-medium bg-black hover:bg-slate-900 text-slate-200 px-5 py-2.5 rounded-xl border border-slate-900 transition shadow-xs"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/80 border border-slate-900 rounded-3xl p-6 shadow-xl space-y-2 text-center md:text-left">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 mx-auto md:mx-0 border border-indigo-500/20">
            <FiUsers size={20} />
          </div>
          <h3 className="text-3xl font-black text-white">10K+</h3>
          <p className="text-sm font-medium text-slate-400">
            Active Contributors
          </p>
          <p className="text-xs text-slate-500 pt-1">
            Developers sharing real-world code stories daily.
          </p>
        </div>

        <div className="bg-black/80 border border-slate-900 rounded-3xl p-6 shadow-xl space-y-2 text-center md:text-left">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 mx-auto md:mx-0 border border-cyan-500/20">
            <FiCode size={20} />
          </div>
          <h3 className="text-3xl font-black text-white">500+</h3>
          <p className="text-sm font-medium text-slate-400">
            Technical Tutorials
          </p>
          <p className="text-xs text-slate-500 pt-1">
            Structured modules covering full-stack frameworks.
          </p>
        </div>

        <div className="bg-black/80 border border-slate-900 rounded-3xl p-6 shadow-xl space-y-2 text-center md:text-left">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 mx-auto md:mx-0 border border-indigo-500/20">
            <FiAward size={20} />
          </div>
          <h3 className="text-3xl font-black text-white">99.9%</h3>
          <p className="text-sm font-medium text-slate-400">Community Uptime</p>
          <p className="text-xs text-slate-500 pt-1">
            Reliable, fast, and secure documentation delivery.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/50 border border-slate-900 rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-mono text-xs border border-indigo-500/20">
            OUR_MISSION
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Empowering engineers through transparent knowledge sharing.
          </h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Technology moves fast. Documentation often lags behind. Dev Story
            bridges the gap by letting practitioners document bugs,
            architectures, and lessons learned in real-time.
          </p>
        </div>

        <div className="lg:col-span-6 bg-black border border-slate-900 rounded-2xl p-6 space-y-4 shadow-inner font-mono text-xs text-slate-400">
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-900 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            <span className="ml-2 text-[10px]">core-values.json</span>
          </div>
          <pre className="text-cyan-300 overflow-x-auto">{`{
  "transparency": "Open source principles",
  "collaboration": "Peer-driven code reviews",
  "growth": "Continuous learning loops"
}`}</pre>
        </div>
      </div>
    </div>
  );
};

export default About;
