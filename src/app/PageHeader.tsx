import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function PageHeader() {
  return (
    <header className="sticky top-4 z-40 mb-6 rounded-full border border-cyan-400/20 bg-slate-950/70 px-4 py-3 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-xl">
      <nav className="flex items-center justify-between">
        <div className="text-sm font-semibold tracking-[0.3em] text-cyan-300">MANOJ</div>
        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-cyan-300">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
