"use client";

import { motion } from "framer-motion";
import { skills } from "../data";
import PageHeader from "../PageHeader";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader />
        <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Skills</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                >
                  <Icon className="mx-auto mb-3 h-7 w-7 text-cyan-300" />
                  <div className="text-sm font-medium text-slate-200">{skill.name}</div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
