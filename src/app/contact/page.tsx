"use client";

import { useRef, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import PageHeader from "../PageHeader";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("missing_env");
      return;
    }

    try {
      const res = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      console.log(res);
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <PageHeader />
        <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold">Let&apos;s build something impactful.</h2>
              <div className="mt-6 space-y-3 text-slate-300">
                <a href="mailto:patilmanojkumar35@gmail.com" className="flex items-center gap-3 transition hover:text-cyan-300"><Mail className="h-5 w-5" /> patilmanojkumar35@gmail.com</a>
                <a href="tel:+918867363609" className="flex items-center gap-3 transition hover:text-cyan-300"><Phone className="h-5 w-5" /> +91 8867363609</a>
                <a href="https://github.com/Man-8437" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-cyan-300"><FaGithub className="h-5 w-5" /> GitHub</a>
                <a href="https://www.linkedin.com/in/manoj-kumar-patil-a0a314284" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-cyan-300"><FaLinkedin className="h-5 w-5" /> LinkedIn</a>
              </div>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="rounded-[1.25rem] border border-white/10 bg-slate-950/40 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="from_name" required className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3" placeholder="Name" />
                <input name="reply_to" required type="email" className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3" placeholder="Email" />
              </div>
              <input name="subject" className="mt-4 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3" placeholder="Subject" />
              <textarea name="message" className="mt-4 min-h-32 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3" placeholder="Message" />
              <div className="mt-5 flex items-center gap-4">
                <button type="submit" className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20">Send Message</button>
                {status === 'success' && <div className="text-green-400">Message sent — thank you!</div>}
                {status === 'error' && <div className="text-red-400">Error sending message. Try again later.</div>}
                {status === 'missing_env' && (
                  <div className="text-yellow-300">Email service not configured. Provide EmailJS env vars.</div>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
