import Image from "next/image";
import Link from "next/link";
import Title from "@/components/Title";

const StoryDetailsPage = async ({ params }) => {
  const { id } = await params;

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

  const singleStory = devStories.find((story) => story.id == id);

  if (!singleStory) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <Title>Story Not Found</Title>
        <p className="text-slate-400 mt-2 mb-6">The developer story you are looking for does not exist.</p>
        <Link 
          href="/about/stories" 
          className="inline-block px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition"
        >
          ← Back to Stories
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6">
      {/* Back Link */}
      <div className="mb-6">
        <Link 
          href="/about/stories" 
          className="text-xs font-medium text-amber-400 hover:text-amber-800 hover:font-semibold transition inline-flex items-center gap-1"
        >
          ← Back to all stories
        </Link>
      </div>

      {/* Main Container Card */}
      <div className="relative overflow-hidden bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
        {/* Yellow Accent Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-[0_0_12px_rgba(245,158,11,0.5)]"></div>

        {/* Profile Header Header */}
        <div className="flex flex-row items-center gap-6 lg:gap-12 pb-8 border-b border-slate-800">
          <div className="relative w-28 h-28 md:h-32 md:w-32 lg:h-50 lg:w-50 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-xl shrink-0">
            <Image 
              src={singleStory.img} 
              alt={singleStory.name} 
              fill 
              sizes="150px"
              className="object-cover" 
            />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-4xl font-extrabold text-white mb-3">{singleStory.name}</h2>
            <p className="text-sm font-mono text-amber-400/90 mb-1">{singleStory.designation}</p>
            <p className="text-xs text-slate-400 mt-1">
              Company: <span className="text-slate-200 font-medium">{singleStory.company}</span> • Experience: <span className="text-slate-200 font-medium">{singleStory.experience}</span>
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
              {singleStory.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-8 bg-slate-950/50 p-6 rounded-2xl border border-slate-800/80">
          <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">Philosophy & Focus</h4>
          <p className="text-slate-300 text-sm italic">&ldquo;{singleStory.about}&rdquo;</p>
        </div>

        {/* Full Story Section */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">The Journey</h3>
          <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80 italic">
            <p>{singleStory.story}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailsPage;
