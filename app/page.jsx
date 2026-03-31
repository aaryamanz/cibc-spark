"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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

  return <span ref={ref}>{typeof end === 'number' && end % 1 !== 0 ? count.toFixed(1) : count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cibc-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cibc-red/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-cibc-red flex items-center justify-center shadow-xl shadow-cibc-red/25">
                <span className="text-3xl">💡</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-cibc-dark">CIBC</span>{" "}
                <span className="gradient-text">SPARK</span>
              </h1>
            </div>

            {/* Tagline */}
            <h2 className="text-3xl md:text-5xl font-bold text-cibc-dark leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "250ms", animationFillMode: "forwards" }}>
              Your personalized AI learning{" "}
              <span className="gradient-text">journey starts here</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              Empowering every CIBC employee — from new graduates to executives — to harness the power of Generative AI
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "550ms", animationFillMode: "forwards" }}>
              <Link
                href="/onboarding"
                className="bg-cibc-red text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-cibc-red/25 hover:shadow-2xl hover:shadow-cibc-red/35 hover:bg-cibc-red-dark transition-all duration-300 animate-pulse-ring"
              >
                Get Started →
              </Link>
              <Link
                href="/manager"
                className="text-gray-500 hover:text-cibc-dark px-6 py-4 rounded-2xl font-medium transition-colors"
              >
                Manager/Exec Login →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-cibc-dark py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
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
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold text-cibc-dark mb-4">How SPARK Works</h3>
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
                className={`${feature.color} rounded-3xl p-8 border card-hover`}
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
      <footer className="bg-cibc-dark py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">💡</span>
            <span className="font-bold text-white text-lg">CIBC <span className="text-cibc-red-light">SPARK</span></span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 CIBC. Internal use only. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
