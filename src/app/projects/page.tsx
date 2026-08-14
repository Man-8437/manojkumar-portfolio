"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../data";
import PageHeader from "../PageHeader";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader />
        <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Projects</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[1.25rem] border border-white/10 bg-slate-950/40 p-6"
              >
                <div
                  className={`mb-4 h-36 overflow-hidden rounded-2xl border border-cyan-400/20 ${project.image ? "bg-slate-900" : "bg-gradient-to-br from-cyan-500/10 to-purple-500/10"}`}
                  style={
                    project.image
                      ? {
                          backgroundImage: `url("${project.image}")`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                />
                <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">{tag}</span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200">
                    <FaGithub className="h-4 w-4" /> GitHub
                  </a>
                  <a href={project.demo || "/contact"} target={project.demo ? "_blank" : undefined} rel={project.demo ? "noreferrer" : undefined} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20">
                    <ArrowUpRight className="h-4 w-4" /> Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
