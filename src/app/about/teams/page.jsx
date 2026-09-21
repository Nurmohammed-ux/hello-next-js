import Title from "@/components/Title";
import { FiUsers, FiGithub, FiLinkedin, FiCode, FiAward } from "react-icons/fi";

const Teams = () => {
  // Mock team members data to represent your 12+ members
  const teamMembers = [
    {
      name: "Alex Rivers",
      role: "Lead Architect",
      tech: "Next.js / TypeScript",
      avatar: "AR",
    },
    {
      name: "Sarah Chen",
      role: "Senior Frontend Engineer",
      tech: "React / Tailwind",
      avatar: "SC",
    },
    {
      name: "Marcus Vance",
      role: "Backend & DevOps Lead",
      tech: "Node.js / Docker",
      avatar: "MV",
    },
    {
      name: "Elena Rostova",
      role: "UI/UX Systems Designer",
      tech: "Figma / Design Tokens",
      avatar: "ER",
    },
    {
      name: "David Kim",
      role: "Full Stack Developer",
      tech: "Python / GraphQL",
      avatar: "DK",
    },
    {
      name: "Jessica Taylor",
      role: "Developer Advocate",
      tech: "Content / React",
      avatar: "JT",
    },
  ];

  return (
    <div className="px-4 py-12 space-y-12 text-slate-300">
      {/* Header Banner */}
      <div className="relative bg-linear-to-r from-indigo-950/60 via-black to-slate-950 border border-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-slate-900 text-indigo-400 font-mono text-xs shadow-inner">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            CORE_ENGINEERING_CREW
          </div>

          <Title>Meet with team members.</Title>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Meet the passionate engineers, designers, and open-source
            contributors building the future of collaborative developer stories.
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-black/80 border border-slate-900 rounded-3xl p-6 shadow-xl space-y-4 hover:border-indigo-500/30 transition group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 text-indigo-400 font-bold text-lg flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition shadow-inner">
                {member.avatar}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-xs text-indigo-400 font-medium">
                  {member.role}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-900 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 bg-black px-2.5 py-1 rounded-lg border border-slate-900">
                {member.tech}
              </span>
              <div className="flex items-center gap-2 text-slate-400">
                <a href="#" className="hover:text-indigo-400 transition p-1">
                  <FiGithub size={16} />
                </a>
                <a href="#" className="hover:text-indigo-400 transition p-1">
                  <FiLinkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Callout for Remaining Members */}
      <div className="bg-black/70 border border-slate-900 rounded-3xl p-8 text-center space-y-3 shadow-xl max-w-xl mx-auto">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-1">
          <FiUsers size={20} />
        </div>
        <h3 className="text-lg font-bold text-white">
          Plus 30+ More Contributors
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Including community moderators, security auditors, and technical
          writers worldwide. Want to join our open-source crew? Check out our
          GitHub repository.
        </p>
      </div>
    </div>
  );
};

export default Teams;
