import Image from "next/image";
import Link from "next/link";
import Title from "@/components/Title";

const FeaturedStories = () => {
  // Pulling top 3 stories for the homepage showcase
  const featuredDevStories = [
    {
      id: 1,
      name: "Sarah Jenkins",
      designation: "Senior Frontend Architect",
      company: "Vercel",
      experience: "8 years",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      story:
        "My journey into tech started unexpectedly when I was tasked with updating a basic WordPress site for a local charity. What began as a mild curiosity quickly morphed into an absolute obsession with how code could transform raw ideas into interactive, beautiful digital experiences...",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 2,
      name: "Alex Rivera",
      designation: "Backend & Cloud Engineer",
      company: "AWS",
      experience: "6 years",
      skills: ["Node.js", "Go", "Docker", "Kubernetes", "PostgreSQL"],
      story:
        "Every backend developer has a horror story, and mine happened on a rainy Friday evening just before I planned to log off for the weekend. I accidentally ran a destructive migration script against our staging database that somehow slipped through environment checks...",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 3,
      name: "Priya Sharma",
      designation: "Full Stack Developer",
      company: "Stripe",
      experience: "5 years",
      skills: ["TypeScript", "React", "GraphQL", "Ruby on Rails"],
      story:
        "I spent the first few years of my professional life buried in corporate spreadsheets and financial balance sheets, feeling entirely disconnected from creative problem-solving. Late one night, I stumbled across a free online coding tutorial...",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
    },
  ];

  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <Title>Featured Developer Stories</Title>
          <p className="text-slate-400 text-sm mt-2">
            Real struggles, midnight breakthroughs, and inspiring journeys from
            top engineers.
          </p>
        </div>
        <Link
          href="/about/stories"
          className="text-xs font-semibold text-amber-400 hover:text-amber-800 hover:font-semibold transition inline-flex items-center gap-1 shrink-0"
        >
          View All Stories →
        </Link>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredDevStories.map((dev) => (
          <div
            key={dev.id}
            className="relative overflow-hidden bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition duration-300 shadow-xl"
          >
            {/* Yellow Accent Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-[0_0_12px_rgba(245,158,11,0.5)]"></div>

            <div>
              {/* Author Info */}
              <div className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-4 mb-5 pt-2">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-lg shrink-0">
                  <Image
                    src={dev.img}
                    alt={dev.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-lg font-bold text-white truncate">
                    {dev.name}
                  </h3>
                  <p className="text-xs font-mono text-amber-400/90 truncate">
                    {dev.designation}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {dev.company} •{" "}
                    <span className="text-slate-200 font-medium">
                      {dev.experience}
                    </span>
                  </p>
                </div>
              </div>

              {/* Story Excerpt */}
              <p className="text-slate-300 text-sm mb-5 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                &ldquo;{dev.story}&rdquo;
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-6">
                {dev.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Link Button */}
            <Link
              href={`/about/stories/${dev.id}`}
              className="w-full text-center block py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 font-semibold text-xs border border-amber-500/30 transition shadow-sm cursor-pointer"
            >
              Read Full Story →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedStories;
