"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login data:", data);
  };

  return (
    <div className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-900/40 shadow-2xl">
      
      {/* LEFT SIDE: Immersive Brand / Showcase Panel (Hidden on small mobile, spans 5 columns on lg) */}
      <div className="hidden lg:flex lg:col-span-5 relative bg-linear-to-br from-indigo-950/80 via-slate-950 to-slate-900 p-10 flex-col justify-between border-r border-slate-800/80 overflow-hidden">
        
        {/* Decorative Grid Background Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Center Quote / Testimonial */}
        <div className="relative z-10 space-y-4 my-auto py-10 px-6">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Developer Ecosystem
          </span>
          <h2 className="text-2xl xl:text-3xl font-extrabold text-white leading-tight mt-8">
            &quot;Share your journey, code logs, and milestones with developers across the globe&quot;
          </h2>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white text-sm shadow-md">
              DS
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-200">Built by developers</p>
              <p className="text-[10px] text-slate-400 font-mono">Open standard for dev logs</p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 text-xs text-slate-500">
          © 2026 Dev Story. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE: Authentication Form (Spans 7 columns on lg, full width on mobile) */}
      <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-slate-950/60 backdrop-blur-md">
        
        <div className="max-w-md w-full mx-auto space-y-6">

          <div className="space-y-1">
            <h2 className="text-3xl font-bold mb-4 text-white">Welcome Back</h2>
            <p className="text-xs text-slate-300">
              Please enter your details to sign in to your workspace.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="developer@story.io"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition text-sm"
              />
              {errors.email && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field with Toggle Icon */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs text-indigo-400 hover:underline">
                  Forgot?
                </Link>
              </div>
              
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", { 
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                  })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-4 pr-12 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition text-sm"
                />
                
                {/* Show/Hide Password Button using react-icons */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition cursor-pointer p-1"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200 shadow-md shadow-indigo-600/25 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "Signing in..." : "Sign In 🚀"}
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center border-t border-slate-900 pt-4">
            <p className="text-xs text-slate-300">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-indigo-400 font-medium hover:underline">
                Register here
              </Link>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;