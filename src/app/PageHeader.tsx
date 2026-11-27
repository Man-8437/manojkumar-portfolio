"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const activationPoint = 100;
        const isAtPageBottom =
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2;

        if (isAtPageBottom) {
          setActiveSection("contact");
          return;
        }

        let currentSection = "home";
        for (const item of navItems) {
          const section = document.getElementById(item.href.slice(1));
          if (section && section.getBoundingClientRect().top <= activationPoint) {
            currentSection = item.href.slice(1);
          }
        }
        setActiveSection(currentSection);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const getLinkClassName = (isActive: boolean, mobile = false) =>
    `inline-flex items-center gap-1.5 rounded-full transition ${
      mobile ? "px-3 py-2 text-sm" : "px-3 py-1.5 text-sm"
    } ${
      isActive
        ? "border border-cyan-400/20 bg-cyan-500/10 text-cyan-300"
        : "border border-transparent text-slate-300 hover:bg-white/5 hover:text-cyan-300"
    }`;

  return (
    <header className="sticky top-0 z-40 mb-6 border-b border-white/10 bg-slate-950/70 px-4 py-4 backdrop-blur-xl">
      <nav className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-[0.3em] text-cyan-300">MANOJ</a>

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
              <a
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                className={getLinkClassName(activeSection === item.href.slice(1))}
              >
                {activeSection === item.href.slice(1) && (
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                )}
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col gap-2 border-t border-cyan-400/10 pt-3 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                onClick={() => {
                  setActiveSection(item.href.slice(1));
                  setIsMenuOpen(false);
                }}
                className={getLinkClassName(activeSection === item.href.slice(1), true)}
              >
                {activeSection === item.href.slice(1) && (
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                )}
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
