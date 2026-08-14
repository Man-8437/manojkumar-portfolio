"use client";

import { motion } from "framer-motion";
import PageHeader from "../PageHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader />
        <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About Me</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-8 backdrop-blur-xl"
            >
              <h2 className="text-3xl font-semibold">Building intelligent solutions with code and curiosity.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                I am passionate about solving real-world problems through software development, Prompt Engineering, Computer Vision, Python, and OpenCV. I enjoy turning ideas into practical systems that create measurable impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Quick Focus</p>
              <div className="mt-5 space-y-4 text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">Python and OpenCV-driven computer vision systems</div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">Prompt engineering and AI-assisted workflows</div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">Practical software engineering for real-world impact</div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

