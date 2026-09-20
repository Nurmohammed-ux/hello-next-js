import Link from "next/link";
import Title from "@/components/Title";

const CommunityImpactCTA = () => {
  const stats = [
    { label: "Developer Stories", value: "500+" },
    { label: "Global Tech Companies", value: "120+" },
    { label: "Community Members", value: "15k+" },
    { label: "Engineering Insights", value: "1,200+" },
  ];

  return (
    <section className="py-12">
      <div className="relative overflow-hidden bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
        {/* Yellow Accent Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-[0_0_12px_rgba(245,158,11,0.5)]"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Title>Empowering the Engineering Mind</Title>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Behind every clean architecture and flawless deployment is a human story of trial, error, and breakthrough. Our platform connects you directly with seasoned architects, cloud gurus, and builders who share their unvarnished real-world experiences.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="/about/stories"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-lg cursor-pointer"
              >
                Explore All Stories →
              </Link>
              <Link
                href="/about/stories"
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition cursor-pointer"
              >
                Share Your Journey
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-950/60 border border-slate-800/80 p-6 rounded-2xl text-center shadow-inner flex flex-col justify-center"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpactCTA;