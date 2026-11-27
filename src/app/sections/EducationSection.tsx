"use client";

import ScrollReveal from "../ScrollReveal";

export default function EducationSection() {
  return (
        <section id="education" className="scroll-mt-28 rounded-[1.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Education</p>
          </ScrollReveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ScrollReveal className="h-full">
            <div className="h-full rounded-2xl border border-cyan-400/20 bg-slate-950/40 p-6">
              <h3 className="text-xl font-semibold">Bachelor of Engineering in Computer Science & Business Systems</h3>
              <p className="mt-2 text-slate-400">Visvesvaraya Technological University (VTU)</p>
              <p className="mt-3 text-slate-300">Current CGPA: 7.9 | Expected Graduation: 2027</p>
              <p className="mt-3 text-slate-300">VTU is a well-regarded technical university focusing on engineering and technology education, offering strong industry-aligned curricula and practical exposure.</p>
              <a href="https://share.google/jrP6Du9vOPn8LbOXa" target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-500/20">Visit College Website</a>
            </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="h-full">
            <div className="h-full rounded-2xl border border-cyan-400/20 bg-slate-950/40 p-6">
              <h3 className="text-xl font-semibold">Diploma in Computer Science</h3>
              <p className="mt-2 text-slate-400">M.L.B.P Polytechnic</p>
              <p className="mt-3 text-slate-300">CGPA: 8.16</p>
              <p className="mt-3 text-slate-300">M.L.B.P Polytechnic provides practical and foundational technical education that prepares students for both industry roles and higher education in engineering.</p>
              <a href="https://share.google/2HQAGAOn6I7eP8vU5" target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-500/20">Visit College Website</a>
            </div>
            </ScrollReveal>
          </div>
        </section>
  );
}
