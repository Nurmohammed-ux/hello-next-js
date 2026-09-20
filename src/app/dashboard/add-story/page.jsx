"use client";

import { useState } from "react";
import Link from "next/link";

const AddStory = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Fullstack",
    tags: "",
    summary: "",
    content: "",
    status: "Draft",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting story:", formData);
    // Add your save/publish logic here
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Top Header & Navigation Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <Link href="/dashboard" className="hover:text-indigo-400 transition">Dashboard</Link>
            <span>/</span>
            <Link href="/dashboard/stories" className="hover:text-indigo-400 transition">Stories</Link>
            <span>/</span>
            <span className="text-slate-200">New Story</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            Create Developer Story ✍️
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium transition cursor-pointer"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            form="story-form"
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200 shadow-md shadow-indigo-600/25 hover:shadow-indigo-500/40 active:scale-95 cursor-pointer shrink-0"
          >
            Publish Story 🚀
          </button>
        </div>
      </div>

      {/* Form Content Layout */}
      <form id="story-form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Main Input Fields */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Title Input */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Story Title <span className="text-indigo-400">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Why we migrated our backend from Node.js to Go"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition text-sm font-medium"
                required
              />
            </div>

            {/* Summary / Excerpt */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Short Summary / Excerpt
              </label>
              <textarea
                name="summary"
                rows={2}
                value={formData.summary}
                onChange={handleChange}
                placeholder="Briefly describe what this story is about..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition text-sm resize-none"
              ></textarea>
            </div>
          </div>

          {/* Main Content Markdown / Editor block */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                Story Content (Markdown supported) <span className="text-indigo-400">*</span>
              </label>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                Markdown Enabled
              </span>
            </div>
            <textarea
              name="content"
              rows={12}
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your developer journey, code breakdowns, performance metrics, or lessons learned..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition text-sm font-mono leading-relaxed"
              required
            ></textarea>
          </div>

        </div>

        {/* Right 1 Column: Metadata & Settings Sidebar */}
        <div className="space-y-6">
          
          {/* Category & Tags Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-5">
            <h3 className="text-sm font-bold text-white border-b border-slate-800 pb-3">
              Organization & Taxonomy
            </h3>

            {/* Category Select */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-indigo-500 transition text-sm cursor-pointer"
              >
                <option value="Fullstack">Fullstack Development</option>
                <option value="Frontend">Frontend Engineering</option>
                <option value="Backend">Backend Architecture</option>
                <option value="DevOps">DevOps & Cloud</option>
                <option value="Career">Developer Career</option>
              </select>
            </div>

            {/* Tags Input */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Tags (comma separated)
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="react, nextjs, typescript, performance"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition text-sm"
              />
            </div>
          </div>

          {/* Tips Card */}
          <div className="bg-linear-to-br from-indigo-950/30 to-slate-950 border border-indigo-500/20 rounded-2xl p-6 shadow-xl space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-2">
              💡 Quick Writing Tip
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Great dev stories include concrete code blocks, why you chose a specific technology stack, and benchmarks or bottlenecks you solved along the way.
            </p>
          </div>

        </div>

      </form>
    </div>
  );
};

export default AddStory;