"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-40 mb-6 rounded-full border border-cyan-400/20 bg-slate-950/70 px-4 py-3 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-xl">
      <nav className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold tracking-[0.3em] text-cyan-300">MANOJ</div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 p-2 text-cyan-300 transition hover:bg-cyan-400/10 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col gap-2 border-t border-cyan-400/10 pt-3 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full px-3 py-2 text-sm text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
