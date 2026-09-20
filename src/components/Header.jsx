"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import NavLink from "./NavLink";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Hide the global header if the route is part of the dashboard
  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  const handleMobileMenuClick = () => {
    setIsOpen(false);
  };

  // Reusable common navigation links fragment
  const navLinks = (
    <>
      <NavLink
        href="/about"
        className="text-sm font-medium px-3.5 py-2.5 rounded-xl transition block lg:inline-block w-full"
      >
        About
      </NavLink>
      <NavLink
        href="/about/stories"
        className="text-sm font-medium px-3.5 py-2.5 rounded-xl transition block lg:inline-block w-full"
      >
        Stories
      </NavLink>
      <NavLink
        href="/about/contact"
        className="text-sm font-medium px-3.5 py-2.5 rounded-xl transition block lg:inline-block w-full"
      >
        Contact
      </NavLink>
      <NavLink
        href="/about/teams"
        className="text-sm font-medium px-3.5 py-2.5 rounded-xl transition block lg:inline-block w-full"
      >
        Teams
      </NavLink>
      <NavLink
        href="/tutorials"
        className="text-sm font-medium px-3.5 py-2.5 rounded-xl transition block lg:inline-block w-full"
      >
        Tutorials
      </NavLink>
    </>
  );

  return (
    <header className="container mx-auto sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-gray-100 dark:border-slate-800 transition-colors">
      <div className="px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent hover:opacity-95 transition"
        >
          Dev Story
        </Link>

        {/* Navigation Links for Large Screens (lg and up) */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks}
        </nav>

        {/* Auth Actions & Mobile Menu Container */}
        <div className="flex items-center gap-2.5 relative">
          <Link
            href="/login"
            className="text-sm font-medium bg-gray-100 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-800 transition shadow-xs"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl shadow-md shadow-indigo-600/20 transition"
          >
            Register
          </Link>

          {/* Hamburger Menu Toggle Button (Visible on sm and md screens) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-900 transition ml-1 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          {/* Mobile Dropdown Menu Positioned Right Below the Header/Menubar */}
          {isOpen && (
            <nav 
              onClick={handleMobileMenuClick}
              className="lg:hidden absolute top-14 right-0 w-64 max-w-xs px-4 pt-3 pb-5 space-y-2 bg-white dark:bg-slate-950 border border-gray-100 dark:border-slate-800 backdrop-blur-md shadow-2xl rounded-2xl z-50 animate-in fade-in slide-in-from-top-2"
            >
              {navLinks}
            </nav>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;