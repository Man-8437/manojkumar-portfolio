"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Briefcase,
  Award,
  GraduationCap,
  Sparkles,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import PageHeader from "./PageHeader";
import { skills, projects, experience, certifications } from "./data";

const typingText = "Python Developer | Prompt Engineer | OpenCV Enthusiast";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const formData = new FormData(formRef.current);
    const fromName = String(formData.get("from_name") || "").trim();
    const replyTo = String(formData.get("reply_to") || "").trim();
    const subject = String(formData.get("subject") || `New message from ${fromName}`).trim();
    const message = String(formData.get("message") || "").trim();

    if (!fromName || !replyTo || !message) {
      setStatus("error");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      const mailtoLink = `mailto:patilmanojkumar35@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`Name: ${fromName}\nEmail: ${replyTo}\n\n${message}`)}`;

      window.location.href = mailtoLink;
      formRef.current.reset();
      setStatus("fallback_mailto");
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <PageHeader />

        {/* 1. HERO SECTION */}
        <section
          id="hero"
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 shadow-2xl shadow-cyan-500/10 sm:p-12 lg:p-16 mb-16 sm:mb-24"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.1),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),_transparent_35%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 mb-5">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-300 font-semibold">
                  Computer Science & Business Systems Student
                </span>
              </div>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
                Manojkumar <span className="text-cyan-300">Patil</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl min-h-[3rem]">
                {displayText}
                <span className="ml-1 text-cyan-300 animate-pulse">{typingCursor}</span>
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="rounded-full border border-cyan-400/40 bg-cyan-500/15 px-6 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/25 hover:border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                >
                  Let&apos;s Connect
                </a>
                <a
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, "#projects")}
                  className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200 hover:bg-white/5"
                >
                  Explore Projects
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Man-8437"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/60 px-4 py-2 text-sm text-slate-100 transition hover:bg-cyan-500/20 hover:border-cyan-400/60"
                >
                  <FaGithub className="mr-2 h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/manoj-kumar-patil-a0a314284"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/60 px-4 py-2 text-sm text-slate-100 transition hover:bg-cyan-500/20 hover:border-cyan-400/60"
                >
                  <FaLinkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mx-auto w-full max-w-sm"
            >
              <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-4 shadow-[0_0_60px_rgba(34,211,238,0.15)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.2),_transparent_60%)] transform-gpu hover:scale-105 transition-all duration-500">
                  <Image
                    src="/profile.jpg"
                    alt="Manojkumar Patil"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-xl shadow-cyan-500/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-6 rounded-full bg-cyan-400" />
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">
                About Me
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-2 text-slate-100">
              Passionate developer turning code into impactful systems.
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6 sm:p-8 backdrop-blur-xl"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-100">
                  Building intelligent solutions with code and curiosity.
                </h3>
                <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
                  I am passionate about solving real-world problems through software development,
                  Prompt Engineering, Computer Vision, Python, and OpenCV. I enjoy turning ideas into
                  practical systems that create measurable impact.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Problem Solver", "Continuous Learner", "System Builder", "AI Integrator"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-6 sm:p-8 backdrop-blur-xl"
              >
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">
                  Quick Focus
                </p>
                <div className="mt-5 space-y-3.5 text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-cyan-400/30">
                    <span className="font-medium text-slate-100 block mb-1">Computer Vision</span>
                    Python and OpenCV-driven computer vision systems & anomaly detection
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-cyan-400/30">
                    <span className="font-medium text-slate-100 block mb-1">Generative AI</span>
                    Prompt engineering, LLM pipeline tuning, and AI-assisted workflows
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-cyan-400/30">
                    <span className="font-medium text-slate-100 block mb-1">System Engineering</span>
                    Practical desktop software engineering for real-world manufacturing and automation
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 3. SKILLS SECTION */}
        <section id="skills" className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-xl shadow-cyan-500/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-6 rounded-full bg-cyan-400" />
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">
                Skills & Technologies
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-2 text-slate-100">
              Tools & frameworks I work with
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              A comprehensive toolkit spanning system programming, AI integration, and computer vision.
            </p>

            <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                  >
                    <Icon className="mx-auto mb-3 h-8 w-8 text-cyan-300 transition-transform group-hover:scale-110" />
                    <div className="text-sm font-medium text-slate-200 group-hover:text-cyan-200">
                      {skill.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* 4. EXPERIENCE SECTION */}
        <section id="experience" className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-xl shadow-cyan-500/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-6 rounded-full bg-cyan-400" />
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">
                Experience
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-2 text-slate-100">
              Technical Experience & Development Journey
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Hands-on engineering across computer vision pipelines, automation utilities, and AI workflows.
            </p>

            <div className="mt-8 space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={item.role + index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 sm:p-7 transition hover:border-cyan-400/30 hover:bg-slate-900/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <Briefcase className="h-4 w-4 text-cyan-400" />
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                          {item.role}
                        </h3>
                      </div>
                      <p className="text-sm text-cyan-300/80 mt-1">{item.company}</p>
                    </div>
                    <span className="self-start sm:self-auto rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm sm:text-base leading-7 text-slate-300">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 5. PROJECTS SECTION */}
        <section id="projects" className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-xl shadow-cyan-500/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-6 rounded-full bg-cyan-400" />
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">
                Featured Projects
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-2 text-slate-100">
              Engineered Applications & Systems
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              A selection of practical applications spanning manufacturing automation, crowd monitoring, and game engineering.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group flex flex-col justify-between rounded-[1.25rem] border border-white/10 bg-slate-950/40 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900/60"
                >
                  <div>
                    <div
                      className={`mb-4 h-48 overflow-hidden rounded-2xl border border-cyan-400/20 ${
                        project.image ? "bg-slate-900" : "bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
                      }`}
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
                    <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-200 transition">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                  </div>

                  <div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
                      >
                        <FaGithub className="h-4 w-4" /> GitHub
                      </a>
                      <a
                        href={project.demo || "#contact"}
                        onClick={
                          project.demo ? undefined : (e) => handleSmoothScroll(e, "#contact")
                        }
                        target={project.demo ? "_blank" : undefined}
                        rel={project.demo ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20 hover:border-cyan-400/60"
                      >
                        <ArrowUpRight className="h-4 w-4" /> {project.demo ? "Live Demo" : "Request Demo"}
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 6. CERTIFICATIONS SECTION */}
        <section id="certifications" className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-xl shadow-cyan-500/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-6 rounded-full bg-cyan-400" />
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">
                Certifications & Achievements
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-2 text-slate-100">
              Verified Credentials & Academic Recognition
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Milestones validating core software engineering, computer vision, and AI proficiency.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title + index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 transition hover:border-cyan-400/35 hover:bg-slate-900/50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                        <Award className="h-4 w-4" />
                      </div>
                      <span className="text-xs uppercase tracking-wider text-cyan-300 font-medium">
                        {cert.category}
                      </span>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-300">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-100">{cert.title}</h3>
                  <p className="mt-1 text-xs text-slate-400 font-medium">{cert.issuer}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 7. EDUCATION SECTION */}
        <section id="education" className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-xl shadow-cyan-500/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-6 rounded-full bg-cyan-400" />
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">
                Education
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-2 text-slate-100">
              Academic Background
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Formal training in computer science, business systems, and software engineering.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-between rounded-2xl border border-cyan-400/20 bg-slate-950/40 p-6 sm:p-7 transition hover:border-cyan-400/40"
              >
                <div>
                  <div className="flex items-center gap-2 text-cyan-300 mb-3">
                    <GraduationCap className="h-5 w-5" />
                    <span className="text-xs uppercase tracking-wider font-semibold">Undergraduate Degree</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    Bachelor of Engineering in Computer Science & Business Systems
                  </h3>
                  <p className="mt-2 text-cyan-300/90 font-medium">
                    Visvesvaraya Technological University (VTU)
                  </p>
                  <div className="mt-3 inline-block rounded-full bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-200">
                    Current CGPA: 7.9 | Expected Graduation: 2027
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    VTU is a well-regarded technical university focusing on engineering and technology education,
                    offering strong industry-aligned curricula and practical exposure.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="https://share.google/jrP6Du9vOPn8LbOXa"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20 hover:border-cyan-400/60"
                  >
                    Visit College Website <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col justify-between rounded-2xl border border-cyan-400/20 bg-slate-950/40 p-6 sm:p-7 transition hover:border-cyan-400/40"
              >
                <div>
                  <div className="flex items-center gap-2 text-cyan-300 mb-3">
                    <GraduationCap className="h-5 w-5" />
                    <span className="text-xs uppercase tracking-wider font-semibold">Diploma</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    Diploma in Computer Science
                  </h3>
                  <p className="mt-2 text-cyan-300/90 font-medium">
                    M.L.B.P Polytechnic
                  </p>
                  <div className="mt-3 inline-block rounded-full bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-200">
                    CGPA: 8.16 (Distinction)
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    M.L.B.P Polytechnic provides practical and foundational technical education that prepares
                    students for both industry roles and higher education in engineering.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="https://share.google/2HQAGAOn6I7eP8vU5"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20 hover:border-cyan-400/60"
                  >
                    Visit College Website <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 8. CONTACT SECTION */}
        <section id="contact" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-xl shadow-cyan-500/5"
          >
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-6 rounded-full bg-cyan-400" />
                  <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">
                    Contact
                  </p>
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-100">
                  Let&apos;s build something impactful.
                </h2>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-7">
                  Whether you have an internship opportunity, a project collaboration, or simply want to
                  discuss Python, OpenCV, or Prompt Engineering, I&apos;d love to connect.
                </p>

                <div className="mt-8 space-y-4 text-slate-300">
                  <a
                    href="mailto:patilmanojkumar35@gmail.com"
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-950/40 p-3.5 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email</div>
                      <div className="text-sm font-medium text-slate-200">patilmanojkumar35@gmail.com</div>
                    </div>
                  </a>
                  <a
                    href="tel:+918867363609"
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-950/40 p-3.5 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Phone</div>
                      <div className="text-sm font-medium text-slate-200">+91 8867363609</div>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Man-8437"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-950/40 p-3.5 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                      <FaGithub className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">GitHub</div>
                      <div className="text-sm font-medium text-slate-200">github.com/Man-8437</div>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manoj-kumar-patil-a0a314284"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-950/40 p-3.5 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                      <FaLinkedin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">LinkedIn</div>
                      <div className="text-sm font-medium text-slate-200">manoj-kumar-patil-a0a314284</div>
                    </div>
                  </a>
                </div>
              </div>

              <form
                ref={formRef}
                onSubmit={handleContactSubmit}
                className="rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-6 sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Name</label>
                    <input
                      name="from_name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      placeholder="e.g. Alex Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Email</label>
                    <input
                      name="reply_to"
                      required
                      type="email"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      placeholder="e.g. alex@example.com"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Subject</label>
                  <input
                    name="subject"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    placeholder="Project Inquiry / Opportunity"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    placeholder="Hi Manoj, I wanted to reach out regarding..."
                  />
                </div>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/15 px-6 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/25 hover:border-cyan-400/80 disabled:opacity-50 cursor-pointer shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  {status === "success" && (
                    <div className="text-sm text-green-400">Message sent successfully — thank you!</div>
                  )}
                  {status === "fallback_mailto" && (
                    <div className="text-sm text-cyan-300">
                      Your email app has been opened with your message ready to send.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="text-sm text-red-400">Please fill all fields and try again.</div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </section>

        {/* 9. FOOTER */}
        <footer className="border-t border-white/10 pt-8 pb-12 text-center text-sm text-slate-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-bold text-cyan-300">
                M
              </span>
              <span className="text-slate-300 font-medium">Manojkumar Patil</span>
            </div>
            <div>
              &copy; {new Date().getFullYear()} Manojkumar Patil. All rights reserved.
            </div>
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, "#hero")}
              className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-200 transition rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5"
            >
              Back to top <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

