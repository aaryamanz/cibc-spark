"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CIBCLogo from "@/components/CIBCLogo";

function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref}>{typeof end === "number" && end % 1 !== 0 ? count.toFixed(1) : count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-enterprise-bg">
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
          <div className="absolute top-1/4 right-0 w-[min(520px,90vw)] h-[min(520px,90vw)] rounded-full bg-cibc-red/[0.03] blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6 animate-fade-up opacity-0" style={{ animationDelay: "80ms", animationFillMode: "forwards" }}>
              Internal — CIBC employees
            </p>
            {/* Logo + product name */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              <CIBCLogo
                className="h-12 md:h-14 w-auto max-w-[min(85vw,300px)]"
                aria-label="CIBC"
                priority
              />
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-cibc-red sm:border-l sm:border-gray-200 sm:pl-5">
                AI Hub
              </h1>
            </div>

            {/* Tagline */}
            <h2 className="text-2xl md:text-4xl font-bold text-cibc-dark leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "250ms", animationFillMode: "forwards" }}>
              Your Personalized AI Adoption Platform
            </h2>

            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              Empowering every CIBC employee — from new graduates to executives — to harness the power of Generative AI
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "550ms", animationFillMode: "forwards" }}>
              <Link
                href="/onboarding"
                className="bg-cibc-red text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-cibc-red/20 hover:bg-cibc-red-dark transition-all duration-300"
              >
                Get Started →
              </Link>
              <Link
                href="/manager"
                className="text-gray-600 hover:text-cibc-dark px-6 py-4 rounded-xl font-medium transition-colors border border-transparent hover:border-gray-200"
              >
                Manager / Exec access →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#141414] py-10 border-t border-gray-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="animate-count-up">
              <div className="text-3xl md:text-4xl font-bold text-white">
                <AnimatedCounter end={45000} suffix="+" />
              </div>
              <div className="text-sm text-gray-400 mt-1">Employees</div>
            </div>
            <div className="animate-count-up" style={{ animationDelay: "200ms" }}>
              <div className="text-3xl md:text-4xl font-bold text-white">
                <AnimatedCounter end={10} />
              </div>
              <div className="text-sm text-gray-400 mt-1">AI Tools Available</div>
            </div>
            <div className="animate-count-up" style={{ animationDelay: "400ms" }}>
              <div className="text-3xl md:text-4xl font-bold text-cibc-red-light">
                <AnimatedCounter end={2.1} suffix="M" />
              </div>
              <div className="text-sm text-gray-400 mt-1">Hours Saved Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold text-cibc-dark mb-4">How AI Hub Works</h3>
            <p className="text-gray-500 max-w-xl mx-auto">Three simple steps to transform how you work with AI</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Personalized Journey", desc: "AI matches you to the right tools based on your role, department, and goals. No more one-size-fits-all training.", color: "bg-blue-50 border-blue-100" },
              { icon: "📊", title: "Track Your Impact", desc: "See hours saved in real time. Every prompt generated, every tool mastered contributes to measurable productivity gains.", color: "bg-emerald-50 border-emerald-100" },
              { icon: "🏆", title: "Earn Recognition", desc: "Collect points, unlock badges, and get spotlighted at town halls. Your AI journey is your competitive advantage.", color: "bg-amber-50 border-amber-100" },
            ].map((feature, i) => (
              <div
                key={i}
                className={`${feature.color} rounded-2xl p-8 border card-hover`}
              >
                <div className="text-4xl mb-5">{feature.icon}</div>
                <h4 className="text-xl font-bold text-cibc-dark mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#141414] py-10 border-t border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            <CIBCLogo className="h-9 w-auto max-w-[220px]" aria-label="CIBC" />
            <span className="font-bold text-cibc-red-light text-lg sm:border-l sm:border-gray-600 sm:pl-4">AI Hub</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 CIBC. Internal use only. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
