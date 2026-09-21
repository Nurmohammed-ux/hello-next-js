import Link from "next/link";
import Title from "@/components/Title";

const TutorialsPage = async ({ params }) => {
  // 1. Await params in Next.js App Router
  const resolvedParams = await params;
  
  // 2. Extract slug array safely (defaults to empty array if visiting /tutorials)
  const slugArray = resolvedParams?.slug || [];

  // 3. Map slug segments to specific variables
  // Example URL: /tutorials/react/useEffect()/pages/22/cleanup-function
  const technology = slugArray[0] ? decodeURIComponent(slugArray[0]) : "General";
  const subject = slugArray[1] ? decodeURIComponent(slugArray[1]) : "Fundamentals";
  const pageNo = slugArray[3] || "1";
  const topic = slugArray[4] || slugArray[2] || "Introduction";

  // Debug log to check what values you are receiving in your terminal
  console.log("Tutorial Slug Parameters:", slugArray);

  return (
    <div className="px-4 py-8 space-y-8 text-slate-300">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
        <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
        <span>/</span>
        <Link href="/tutorials" className="hover:text-indigo-700 transition">Tutorials</Link>
        {slugArray.length > 0 && (
          <>
            <span>/</span>
            <span className="text-indigo-700 uppercase">{technology}</span>
          </>
        )}
        {subject && (
          <>
            <span>/</span>
            <span className="text-slate-400">{subject}</span>
          </>
        )}
      </div>

      {/* Hero Banner Header */}
      <div className="bg-linear-to-r from-indigo-950/60 via-black to-slate-950 border border-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Tech: {technology}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Subject: {subject}
            </span>
            <span className="text-xs font-mono text-slate-400 bg-black px-3 py-1 rounded-full border border-slate-900">
              Page {pageNo}
            </span>
          </div>

          <Title>{topic.replace(/-/g, " ").toUpperCase()}</Title>
          
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Master architectural patterns, code examples, and best practices for <span className="text-indigo-400 font-semibold">{technology}</span> under the <span className="text-cyan-400 font-semibold">{subject}</span> module.
          </p>
        </div>
      </div>

      {/* Main Content & Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Article / Tutorial Body */}
        <div className="lg:col-span-8 bg-black/80 border border-slate-900 rounded-3xl p-8 md:p-10 shadow-xl space-y-6 text-slate-300">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">
              1. Overview & Core Concepts
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              When building modern applications with <span className="font-mono text-indigo-400">{technology}</span>, understanding the underlying lifecycle and state flow is critical for performance and maintainability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">
              2. Code Implementation
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Below is an example snippet illustrating how to structure your code for optimal output:
            </p>
            
            <div className="bg-black border border-slate-900 rounded-2xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto shadow-inner">
              <pre>{`// Active Route: /tutorials/${slugArray.join("/")}
export async function loadTutorialData() {
  const data = await fetch('/api/tutorials/${technology}/${subject}');
  return data.json();
}`}</pre>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">
              3. Summary & Next Steps
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              You are currently viewing page <span className="text-indigo-400 font-bold">{pageNo}</span> of this module under topic <span className="text-cyan-400 font-semibold">{topic}</span>.
            </p>
          </section>

        </div>

        {/* Sidebar Navigation */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-black/80 border border-slate-900 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-white border-b border-slate-900 pb-3">
              Module Navigation
            </h3>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <span className="block px-3 py-2 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/30">
                  ▶ Current Topic: {topic}
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};

export default TutorialsPage;