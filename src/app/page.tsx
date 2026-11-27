"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Star, ShieldCheck, Zap } from "lucide-react";
import PageHeader from "./PageHeader";
import CursorGlow from "./CursorGlow";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

const typingText = "Python Developer | Prompt Engineer | OpenCV Enthusiast";

export default function Home() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setDisplayText(typingText.slice(0, index));
      if (index >= typingText.length) {
        window.clearInterval(interval);
      }
    }, 50);
    return () => window.clearInterval(interval);
  }, []);

  const typingCursor = displayText.length < typingText.length ? "|" : "";

  return (
    <main className="portfolio-theme relative isolate min-h-screen bg-transparent text-slate-100">
      <CursorGlow />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader />

        <section id="home" className="scroll-mt-28 relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 shadow-2xl shadow-cyan-500/10 sm:p-10 lg:min-h-[min(680px,calc(100svh-9rem))] lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.1),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),_transparent_35%)]" />
          <div className="relative flex min-h-full min-w-0 flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Looking for internship opportunities
              </div>

              {/* Commercial Success Callout Pill */}
              <Link
                href="#projects"
                className="group mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>⚡ Successfully Developed &amp; Deployed Jersey Factory Pro • 5.0 ★★★★★ Client Reviews</span>
                <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>

              <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-cyan-300 sm:text-sm">Computer Science &amp; Business Systems Student</p>
              <h1 className="text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-8xl">
                Manojkumar <span className="text-cyan-300">Patil</span>
              </h1>
              <p className="mt-6 min-h-8 max-w-3xl text-base leading-7 text-slate-300 sm:text-xl">
                {displayText}
                <span className="ml-1 text-cyan-300">{typingCursor}</span>
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#contact" className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20">
                  Let&apos;s Connect
                </Link>
                <Link href="#projects" className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200">
                  Explore Projects &amp; Reviews
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/40 p-2">
                <a href="https://github.com/Man-8437" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400/30 hover:bg-cyan-500/10">
                  <FaGithub className="h-4 w-4" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/manoj-kumar-patil-a0a314284" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400/30 hover:bg-cyan-500/10">
                  <FaLinkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>

              {/* Commercial Proof Metric Badges */}
              <div className="mt-8 grid max-w-4xl grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3 text-center">
                  <div className="text-lg font-bold text-emerald-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="h-4 w-4" /> 100%
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Delivery Success</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3 text-center">
                  <div className="text-lg font-bold text-amber-400 flex items-center justify-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400" /> 5.0
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Client Rating</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3 text-center">
                  <div className="text-lg font-bold text-cyan-300 flex items-center justify-center gap-1">
                    <Zap className="h-3.5 w-3.5" /> 10x
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Production Speedup</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
