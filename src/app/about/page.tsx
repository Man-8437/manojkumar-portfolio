"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, CheckCircle2, Zap } from "lucide-react";
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
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-8 backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-semibold text-white">
                  Building intelligent, commercial-grade solutions with code and curiosity.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  I am passionate about solving real-world production and engineering problems through desktop application engineering, Prompt Engineering, Computer Vision, Python, and OpenCV.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Most recently, I designed, developed, and deployed <strong className="text-cyan-300 font-semibold">Jersey Factory Pro</strong>—a commercial Windows application for sportswear manufacturers that automated their customized jersey batch printing pipeline. The software achieved a <span className="text-amber-300 font-semibold">5-star client review</span> by slashing turnaround times by 90% and completely eliminating factory misprints.
                </p>
              </div>

              {/* Commercial Track Record Pill */}
              <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-950/30 p-4">
                <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Commercial Software Track Record
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  Delivered production-ready software directly to apparel manufacturing clients with hardware licensing, offline activation, and zero-defect guarantee.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Quick Focus</p>
                <div className="mt-5 space-y-3.5 text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 flex items-start gap-3">
                    <Zap className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Commercial Desktop Systems</strong>
                      <span className="text-xs text-slate-400">High-performance Tkinter/PyQt &amp; PIL raster engines with cryptographic licensing (Jersey Factory Pro).</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Computer Vision &amp; OpenCV</strong>
                      <span className="text-xs text-slate-400">Real-time crowd anomaly detection, security surveillance, and camera telemetry.</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 flex items-start gap-3">
                    <Star className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Client Satisfaction &amp; Results</strong>
                      <span className="text-xs text-slate-400">100% on-time project delivery with verified 5.0 ★★★★★ client endorsements.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Looking for custom software?</span>
                <a href="/contact" className="text-cyan-300 font-semibold hover:underline">
                  Get in touch →
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
