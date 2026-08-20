"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <header className="sticky top-3 sm:top-4 z-50 mb-8 sm:mb-12 rounded-full border border-cyan-400/25 bg-slate-950/85 px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-xl transition-all duration-300">
      <nav className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-bold text-cyan-300 transition-all group-hover:bg-cyan-500/20 group-hover:border-cyan-400/60">
              M
            </span>
            <span className="text-sm font-semibold tracking-[0.25em] text-cyan-300 transition group-hover:text-cyan-200">
              MANOJ
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1.5 lg:gap-2 text-xs xl:text-sm text-slate-300 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`rounded-full px-3 py-1.5 transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-400/15 font-medium text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] border border-cyan-400/30"
                      : "text-slate-300 hover:text-cyan-300 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-3.5 py-1.5 text-xs font-medium text-cyan-200 transition hover:bg-cyan-500/25 hover:border-cyan-400/70"
            >
              Hire Me <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 p-2 text-cyan-300 transition hover:bg-cyan-400/10 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="flex flex-col gap-1 border-t border-cyan-400/15 pt-3 pb-1 md:hidden">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`rounded-xl px-3.5 py-2 text-sm transition ${
                    isActive
                      ? "bg-cyan-400/15 font-medium text-cyan-300 border border-cyan-400/30"
                      : "text-slate-200 hover:bg-cyan-400/10 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}

