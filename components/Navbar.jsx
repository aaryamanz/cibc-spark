"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPoints, getLevel } from "@/lib/pointsSystem";

export default function Navbar() {
  const pathname = usePathname();
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState({ icon: "🔍", name: "Explorer" });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const p = getPoints();
    setPoints(p);
    setLevel(getLevel(p));
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "My Journey" },
    { href: "/prompt-generator", label: "Prompts" },
    { href: "/leaderboard", label: "Leaderboard" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 glass border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-cibc-red flex items-center justify-center shadow-md shadow-cibc-red/20 group-hover:shadow-lg group-hover:shadow-cibc-red/30 transition-shadow">
              <span className="text-white text-lg">💡</span>
            </div>
            <span className="font-bold text-xl tracking-tight">
              <span className="text-cibc-dark">CIBC</span>{" "}
              <span className="text-cibc-red">SPARK</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-cibc-red/10 text-cibc-red"
                    : "text-gray-600 hover:text-cibc-dark hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Points + Avatar */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-1.5 border border-gray-200">
              <span className="text-sm">⭐</span>
              <span className="text-sm font-semibold text-cibc-dark">{points}</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-cibc-red/10 flex items-center justify-center text-sm font-bold text-cibc-red border-2 border-cibc-red/20">
              {level.icon}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1">
              <span className={`block h-0.5 bg-cibc-dark transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`block h-0.5 bg-cibc-dark transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-cibc-dark transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                  isActive(link.href)
                    ? "bg-cibc-red/10 text-cibc-red"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-4 pt-3 mt-2 border-t border-gray-100">
              <span className="text-sm">⭐ {points} points</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm">{level.icon} {level.name}</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
