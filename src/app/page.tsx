"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PageHeader from "./PageHeader";

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
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader />

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 shadow-2xl shadow-cyan-500/10 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.1),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),_transparent_35%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300">Computer Science & Business Systems Student</p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
                Manojkumar <span className="text-cyan-300">Patil</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl">
                {displayText}
                <span className="ml-1 text-cyan-300">{typingCursor}</span>
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20">Let&apos;s Connect</Link>
                <Link href="/projects" className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200">Explore Projects</Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://github.com/Man-8437" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/60 px-4 py-2 text-sm text-slate-100 transition hover:bg-cyan-500/20">
                  <FaGithub className="mr-2 h-4 w-4" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/manoj-kumar-patil-a0a314284" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/60 px-4 py-2 text-sm text-slate-100 transition hover:bg-cyan-500/20">
                  <FaLinkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="mx-auto w-full max-w-sm">
              <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-4 shadow-[0_0_60px_rgba(34,211,238,0.15)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.2),_transparent_60%)] transform-gpu hover:scale-105 transition-shadow duration-500">
                  <Image src="/profile.jpg" alt="Profile photo" width={600} height={600} className="h-full w-full object-cover" priority />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
