"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const basePath = "/Raynell-Portfolio"; // Must match next.config.mjs

// FIX: Use string paths relative to the public folder
const Icon = `${basepath}/assets/pictures/crop-photo.jpg`;
const LinkedinLogo = `${basepath}/assets/pictures/linkedin.svg`;
const GithubLogo = `${basepath}/assets/pictures/github.svg`;

const NavLink = ({ href, text, isActive }) => (
  <Link
    href={href}
    className={`relative px-4 py-2 transition-all duration-300 group ${
      isActive
        ? "text-white font-bold" // Active: White & Bold only (no neon)
        : "text-white"           // Inactive: White
    } hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]`}
  >
    <span className="relative z-10 text-lg">{text}</span>
    
    {/* Neon Line Streak Effect - Only visible on Hover (group-hover:w-full) */}
    {/* Changed bottom-0 to bottom-1 to make the line closer to the words */}
    <span className="absolute bottom-1 left-0 h-[2px] w-0 bg-yellow-400 shadow-[0_0_10px_theme('colors.yellow.400')] transition-all duration-300 ease-out group-hover:w-full" />
  </Link>
);

const Navbar = () => {
  const pathname = usePathname();

  return (
    // Navbar container with Neon Glow at the bottom
    // CHANGED: 'sticky' -> 'fixed', added 'w-full' and 'left-0' to ensure full width coverage
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md border-b border-yellow-500/30 shadow-[0_4px_20px_rgba(234,179,8,0.4)]">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-yellow-500/50 group-hover:border-yellow-400 group-hover:shadow-[0_0_15px_theme('colors.yellow.400')] transition-all duration-300">
            <Image
              src={Icon}
              alt="Raynell Lu"
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <span className="font-bold text-2xl text-white tracking-tight group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-colors">
            Raynell Lu Soon Hong
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-2">
          <NavLink href="/" text="Home" isActive={pathname === "/"} />
          <NavLink
            href="/qualification"
            text="Qualification"
            isActive={pathname === "/qualification"}
          />
          <NavLink
            href="/portfolio"
            text="Portfolio"
            isActive={pathname === "/portfolio"}
          />
          <NavLink
            href="/resume"
            text="Resume"
            isActive={pathname === "/resume"}
          />
          <NavLink
            href="/contact"
            text="Contact"
            isActive={pathname === "/contact"}
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/raynellsoonhonglu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Image 
              src={LinkedinLogo} 
              alt="LinkedIn" 
              width={32} 
              height={32} 
              className="invert transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(250,204,21,1)]" 
            />
          </a>
          <a
            href="https://github.com/Raynelllsh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Image 
              src={GithubLogo} 
              alt="GitHub" 
              width={32} 
              height={32} 
              className="invert transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(250,204,21,1)]" 
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
