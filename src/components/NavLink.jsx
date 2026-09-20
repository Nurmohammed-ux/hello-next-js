"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className = "" }) => {
  const pathname = usePathname();
  
  // Check if the current route matches this NavLink's href
  const isActive = pathname === href;

  // Define active vs inactive styles
  const activeStyles = isActive
    ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-500/20"
    : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-900/50";

  return (
    <Link href={href} className={`${className} ${activeStyles}`}>
      {children}
    </Link>
  );
};

export default NavLink;