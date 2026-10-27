"use client";

import { ArrowUpRight, Star, CheckCircle2, Quote, ShieldCheck, Award, Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects, customerReviews } from "../data";
import PageHeader from "../PageHeader";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader />

        {/* Header Hero Banner */}
        <section className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 shadow-2xl shadow-cyan-500/10 sm:p-10 mb-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_40%)]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Commercial Projects &amp; Software Portfolio
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Featured Work &amp; <span className="text-cyan-300">Client Solutions</span>
              </h1>
              <p className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">
                High-performance desktop applications, computer vision pipelines, and production-tested automation systems built for real-world impact.
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="flex flex-wrap gap-3 sm:flex-nowrap">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center backdrop-blur-md min-w-[120px]">
                <div className="flex items-center justify-center gap-1 text-amber-400 text-lg font-bold">
                  <span>5.0</span>
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs text-slate-400 mt-1">Client Rating</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center backdrop-blur-md min-w-[120px]">
                <div className="text-emerald-400 text-lg font-bold">100%</div>
                <div className="text-xs text-slate-400 mt-1">Success Rate</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center backdrop-blur-md min-w-[120px]">
                <div className="text-cyan-300 text-lg font-bold">10x</div>
                <div className="text-xs text-slate-400 mt-1">Speedup Delivered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Engineered Software</p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl mt-1">All Projects</h2>
            </div>
            <span className="text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              {projects.length} Systems Built
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl ${
                  project.isCommercial
                    ? "border-cyan-400/40 bg-gradient-to-b from-slate-900/90 via-slate-950/80 to-slate-950/90 shadow-[0_0_50px_rgba(34,211,238,0.12)] hover:border-cyan-300"
                    : "border-white/10 bg-slate-950/40 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    {project.statusBadge ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        {project.statusBadge}
                      </span>
                    ) : (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        Desktop Application
                      </span>
                    )}

                    {project.clientRating && (
                      <div className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-300">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="ml-1 text-amber-200">5.0</span>
                      </div>
                    )}
                  </div>

                  {/* Project Image / Mockup Preview */}
                  <div
                    className="mb-5 h-48 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-inner sm:h-56"
                    style={{
                      backgroundImage: `url("${project.image}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                      {project.title}
                      {project.isCommercial && (
                        <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-medium">
                          PRO
                        </span>
                      )}
                    </h3>
                    {project.subtitle && (
                      <p className="mt-1 text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  {/* Metrics if available */}
                  {project.metrics && (
                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="rounded-xl border border-cyan-500/20 bg-cyan-950/30 p-2.5 text-center">
                          <div className="text-xs font-bold text-cyan-200">{m.value}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Client Review Quote if attached */}
                  {project.reviewQuote && (
                    <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-950/20 p-3.5 backdrop-blur-sm">
                      <div className="flex gap-2.5">
                        <Quote className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs italic text-amber-100 leading-relaxed">
                            &quot;{project.reviewQuote}&quot;
                          </p>
                          {project.reviewAuthor && (
                            <p className="mt-1.5 text-[11px] font-semibold text-amber-300">
                              — {project.reviewAuthor}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                  >
                    <FaGithub className="h-4 w-4" /> View Codebase
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-200 transition hover:bg-cyan-500/20"
                    >
                      <ArrowUpRight className="h-4 w-4" /> Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      Client Verified
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Customer Reviews & Client Testimonials Section */}
        <section className="relative overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 p-8 shadow-2xl backdrop-blur-xl sm:p-10 mb-12">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-3">
              <Award className="h-3.5 w-3.5 text-amber-400" />
              Client Endorsements &amp; Verified Reviews
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Customer <span className="text-amber-400">Reviews</span>
            </h2>
            <p className="mt-2 max-w-2xl text-slate-300 text-sm sm:text-base">
              Direct feedback from commercial clients and manufacturing partners who run software developed by Manojkumar.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="relative grid gap-6 md:grid-cols-2">
            {customerReviews.map((item, idx) => (
              <motion.div
                key={item.clientName}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col justify-between rounded-2xl border border-amber-400/20 bg-slate-950/70 p-6 sm:p-7 shadow-xl shadow-amber-500/5 backdrop-blur-md"
              >
                <div>
                  {/* Rating Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-1 text-xs font-bold text-amber-200">5.0 / 5.0</span>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      Verified Client
                    </span>
                  </div>

                  {/* Highlight Tagline */}
                  <div className="mb-3 text-sm font-bold text-cyan-200 flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-cyan-300 flex-shrink-0" />
                    {item.highlight}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm leading-relaxed text-slate-300 italic">
                    &quot;{item.review}&quot;
                  </p>

                  {/* Metric Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-lg border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                      >
                        ✓ {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Profile Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-sm font-bold text-cyan-200">
                      {item.avatarText}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{item.clientName}</div>
                      <div className="text-xs text-slate-400">{item.role}</div>
                      <div className="text-[11px] text-cyan-300/90">{item.company}</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-400 text-right">
                    <div className="font-medium text-slate-300">{item.project}</div>
                    <div>{item.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Trust Guarantee */}
          <div className="relative mt-8 rounded-xl border border-white/10 bg-slate-950/40 p-4 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs text-slate-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>All client reviews are from live commercial deployments and production environments.</span>
            </div>
            <a
              href="/contact"
              className="mt-3 inline-block rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/20 sm:mt-0"
            >
              Request Custom Software →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
