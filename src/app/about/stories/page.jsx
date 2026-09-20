import Image from "next/image";
import Title from "@/components/Title";
import Link from "next/link";

const Stories = () => {
  const devStories = [
    {
      id: 1,
      name: "Sarah Jenkins",
      designation: "Senior Frontend Architect",
      company: "Vercel",
      experience: "8 years",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      story:
        "My journey into tech started unexpectedly when I was tasked with updating a basic WordPress site for a local charity. What began as a mild curiosity quickly morphed into an absolute obsession with how code could transform raw ideas into interactive, beautiful digital experiences. Over the years, I transitioned from simple HTML templates to complex single-page applications, and eventually specialized in modern React ecosystems. Surviving massive traffic spikes, countless midnight bug fixes, and continuous refactoring cycles taught me that resilience is just as important as syntax. Today, I lead frontend performance initiatives, helping optimize server components for millions of users worldwide while still remembering the thrill of writing my very first styled button.",
      about:
        "Passionate about web performance, design systems, and mentoring junior developers in the open-source ecosystem.",
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
        "Every backend developer has a horror story, and mine happened on a rainy Friday evening just before I planned to log off for the weekend. I accidentally ran a destructive migration script against our staging database that somehow slipped through environment checks and hit production instead. Panic set in immediately as critical services went down, and I spent the next six intense hours leading a recovery effort under immense pressure. That terrifying night transformed my career. It drove me to master automated disaster recovery, rigorous CI/CD pipeline validation, and robust infrastructure as code principles. Looking back, that single catastrophic mistake resulted in the most valuable engineering lessons and resilient backup architectures of my professional life.",
      about:
        "Cloud enthusiast who loves building resilient microservices and breaking monoliths into clean, maintainable systems.",
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
        "I spent the first few years of my professional life buried in corporate spreadsheets and financial balance sheets, feeling entirely disconnected from creative problem-solving. Late one night, I stumbled across a free online coding tutorial, and writing my first functional loop felt like unlocking a superpower. I enrolled in an intensive bootcamp shortly after, balancing grueling 14-hour study days with my day job until I landed my first junior developer role. The transition was terrifying; imposter syndrome whispered constantly in my ear, and architectural concepts felt like an alien language. Through relentless determination, late-night documentation reading, and supportive mentors, I crossed the chasm. Now, I build seamless payment workflows that empower global commerce, proving it is never too late to rewrite your professional story.",
      about:
        "Believes that clean code is a form of empathy towards your future self and teammates.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 4,
      name: "Marcus Chen",
      designation: "DevOps Lead",
      company: "GitHub",
      experience: "10 years",
      skills: ["Python", "CI/CD", "Terraform", "AWS", "Security"],
      story:
        "Early in my career, I watched development teams suffer through exhausting, manual deployment days where a single human error could crash the entire application stack. Developers spent more time fighting brittle server configurations and deployment scripts than actually writing innovative features. That frustration sparked my deep passion for automation and developer tooling. I dedicated my career to building invisible, friction-free pipelines that handle deployments safely while everyone else sleeps soundly. Over a decade, I have seen infrastructure evolve from physical server racks gathering dust in closets to serverless, cloud-native global architectures. My mission has always been simple: empower engineers to ship with supreme confidence by removing manual toil from the software lifecycle completely.",
      about:
        "Advocate for infrastructure as code, zero-trust security architecture, and clean git history.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 5,
      name: "Elena Rostova",
      designation: "Mobile Engineer",
      company: "Spotify",
      experience: "4 years",
      skills: ["React Native", "Swift", "Kotlin", "Redux"],
      story:
        "Mobile development taught me humility the hard way. Unlike web development where you can push an instant hotfix to a server, releasing a mobile app means dealing with app store review queues and users running outdated versions on legacy hardware. I learned mobile lifecycle management through trial by fire when a subtle memory leak caused our flagship app to crash repeatedly for thousands of users during peak morning commute hours. Debugging native bridge communication across different operating systems felt like walking through a labyrinth blindfolded. That grueling week forced me to master memory profiling, native module debugging, and performance optimization. Today, I channel those lessons into crafting buttery-smooth 60fps animations and resilient mobile apps that feel magical to use.",
      about:
        "Obsessed with buttery-smooth 60fps animations and accessible mobile user experiences.",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 6,
      name: "David O'Connor",
      designation: "AI/ML Engineer",
      company: "OpenAI Partner",
      experience: "7 years",
      skills: ["Python", "PyTorch", "LangChain", "FastAPI", "Docker"],
      story:
        "For years, I built traditional full-stack web applications, thinking standard CRUD operations and relational databases were the absolute ceiling of software engineering. Then the generative AI revolution arrived, shifting the paradigm of what code could achieve overnight. Fascinated and slightly intimidated, I dove headfirst into neural networks, vector databases, and large language model fine-tuning. Transitioning from deterministic programming to probabilistic AI systems completely rewired how I approach problem-solving. I spent months wrestling with context windows, latency optimization, and hallucination guardrails. Today, I build intelligent systems that bridge the gap between human intent and machine execution, proving that the tech industry rewards those who remain eternal students willing to unlearn old habits.",
      about:
        "Exploring the intersection of generative AI and developer productivity tools.",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop&crop=faces",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="mb-10 text-center sm:text-left">
        <Title>Developer Stories</Title>
        <p className="text-slate-400 text-sm mt-2">
          Real struggles, midnight breakthroughs, and inspiring journeys from
          the engineering community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {devStories.map((dev) => {
          const truncatedStory =
            dev.story.split(" ").slice(0, 20).join(" ") + "...";

          return (
            <div
              key={dev.id}
              className="relative overflow-hidden bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition duration-300 shadow-xl"
            >
              {/* Yellow Accent Line Indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-[0_0_12px_rgba(245,158,11,0.5)]"></div>

              <div>
                {/* Author Info with Next.js Image component */}
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

                {/* Truncated Story Snippet */}
                <p className="text-slate-300 text-sm mb-5 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                  &quot;{truncatedStory}&quot;
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

              {/* Action Button */}
              <Link
                href={`/about/stories/${dev.id}`}
                className="w-full text-center block py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 font-semibold text-xs border border-amber-500/30 transition shadow-sm cursor-pointer"
              >
                Read Full Story →
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
