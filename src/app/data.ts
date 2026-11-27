import { FaCuttlefish, FaGithub, FaLinkedin, FaPython } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { SiOpencv, SiVisualstudiocode, SiCoreldraw } from "react-icons/si";
import { Sparkles } from "lucide-react";

export const skills = [
  { name: "C", icon: FaCuttlefish },
  { name: "Python", icon: FaPython },
  { name: "HTML5", icon: FiMonitor },
  { name: "CSS3", icon: Sparkles },
  { name: "Prompt Engineering", icon: Sparkles },
  { name: "OpenCV", icon: SiOpencv },
  { name: "VS Code", icon: SiVisualstudiocode },
  { name: "GitHub", icon: FaGithub },
  { name: "CorelDRAW", icon: SiCoreldraw },
];

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image: string;
  featured?: boolean;
  isCommercial?: boolean;
  statusBadge?: string;
  clientRating?: number;
  reviewQuote?: string;
  reviewAuthor?: string;
  metrics?: ProjectMetric[];
}

export const projects: ProjectItem[] = [
  {
    title: "Jersey Factory Pro",
    subtitle: "Customization & Batch Production Automation Suite",
    description:
      "Successfully developed, commercialized, and deployed a high-performance desktop automation suite for a sports apparel manufacturing business. Replaces manual CorelDRAW typesetting with automated Excel/CSV ingestion, dynamic player typography fitting, zone-based sizing (Front, Back, Sleeves), and 300 DPI print-ready batch raster exports. Integrated with cryptographic hardware licensing (HWID) and SQLite audit logging. Received outstanding 5-star customer reviews for reducing turnaround time by 90% and eliminating 100% of printing errors.",
    tags: ["Python", "PIL/Pillow", "Commercial App", "Automation", "SQLite", "Hardware Licensing"],
    github: "https://github.com/Man-8437/jersey-customization-app",
    demo: "",
    featured: true,
    isCommercial: true,
    statusBadge: "Commercial Software • Successfully Deployed",
    clientRating: 5.0,
    reviewQuote:
      "Jersey Factory Pro completely automated our batch production workflow. What used to take half a day of manual design now finishes in minutes with exact 300 DPI precision. Zero misprints and outstanding client support!",
    reviewAuthor: "Production & Operations Head — Sports Apparel Manufacturer",
    metrics: [
      { label: "Production Speed", value: "10x Faster" },
      { label: "Misprint Rate", value: "0% Errors" },
      { label: "Resolution", value: "300 DPI Print-Ready" },
      { label: "Client Rating", value: "5.0 ★★★★★" },
    ],
    image:
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360">
          <defs>
            <linearGradient id="bgPro" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#050e1d"/>
              <stop offset="50%" stop-color="#0a192f"/>
              <stop offset="100%" stop-color="#040b17"/>
            </linearGradient>
            <linearGradient id="jerseyGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="50%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="goldBadge" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#fbbf24"/>
            </linearGradient>
            <linearGradient id="greenBadge" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#10b981"/>
              <stop offset="100%" stop-color="#059669"/>
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Background Canvas -->
          <rect width="800" height="360" fill="url(#bgPro)"/>

          <!-- Subtle Tech Grid Lines -->
          <g opacity="0.08" stroke="#38bdf8" stroke-width="1">
            <line x1="0" y1="60" x2="800" y2="60"/>
            <line x1="0" y1="120" x2="800" y2="120"/>
            <line x1="0" y1="180" x2="800" y2="180"/>
            <line x1="0" y1="240" x2="800" y2="240"/>
            <line x1="0" y1="300" x2="800" y2="300"/>
            <line x1="160" y1="0" x2="160" y2="360"/>
            <line x1="320" y1="0" x2="320" y2="360"/>
            <line x1="480" y1="0" x2="480" y2="360"/>
            <line x1="640" y1="0" x2="640" y2="360"/>
          </g>

          <!-- Top Status Bar -->
          <g font-family="Segoe UI, Arial, sans-serif">
            <!-- App Name Title -->
            <text x="36" y="44" fill="#38bdf8" font-size="12" font-weight="700" letter-spacing="3">COMMERCIAL PRODUCTION AUTOMATION</text>
            <text x="36" y="82" fill="#ffffff" font-size="28" font-weight="800" letter-spacing="1">JERSEY FACTORY PRO</text>

            <!-- Deployed Badge -->
            <rect x="520" y="26" width="244" height="32" rx="16" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
            <circle cx="538" cy="42" r="5" fill="#34d399" filter="url(#glow)"/>
            <text x="552" y="46" fill="#a7f3d0" font-size="11" font-weight="700" letter-spacing="1">SUCCESSFULLY DEPLOYED</text>

            <!-- Rating Stars Badge -->
            <rect x="520" y="66" width="244" height="32" rx="16" fill="#451a03" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="536" y="87" fill="#fbbf24" font-size="14" font-weight="800">★ ★ ★ ★ ★</text>
            <text x="635" y="86" fill="#fef3c7" font-size="11" font-weight="700">5.0 CLIENT REVIEWS</text>
          </g>

          <!-- Main Visual Cards: Front, Back & Sleeves -->
          <!-- Card 1: Front Mockup -->
          <g transform="translate(40, 110)">
            <rect width="210" height="175" rx="14" fill="#0b1e38" stroke="#1e3a5f" stroke-width="1.5"/>
            <text x="16" y="26" fill="#7dd3fc" font-size="11" font-weight="700" letter-spacing="1">FRONT MOCKUP</text>
            <!-- Jersey Silhouette Front -->
            <path d="M70 45 L140 45 L170 80 L145 95 L135 155 L75 155 L65 95 L40 80 Z" fill="url(#jerseyGrad)" stroke="#60a5fa" stroke-width="2"/>
            <!-- Front Crest / Logo -->
            <circle cx="85" cy="80" r="12" fill="#f59e0b"/>
            <text x="80" y="84" fill="#1e3a5f" font-size="10" font-weight="800">ϟ</text>
            <!-- Badge Stamp -->
            <rect x="15" y="142" width="46" height="18" rx="4" fill="#042f2e" stroke="#14b8a6"/>
            <text x="21" y="155" fill="#5eead4" font-size="10" font-weight="700">F-38</text>
          </g>

          <!-- Card 2: Back Mockup (Hero Customized) -->
          <g transform="translate(270, 102)">
            <rect width="260" height="190" rx="16" fill="#082042" stroke="#38bdf8" stroke-width="2"/>
            <!-- Glowing Header -->
            <rect x="0" y="0" width="260" height="32" rx="16" fill="#0c4a6e"/>
            <text x="20" y="21" fill="#bae6fd" font-size="11" font-weight="800" letter-spacing="1.5">⚡ LIVE 300 DPI RENDER (BACK)</text>

            <!-- Jersey Silhouette Back -->
            <path d="M85 46 L175 46 L215 90 L185 105 L170 175 L90 175 L75 105 L45 90 Z" fill="url(#jerseyGrad)" stroke="#93c5fd" stroke-width="2.5"/>
            <!-- Player Name -->
            <text x="130" y="80" fill="#ffffff" font-size="13" font-weight="900" font-family="Arial, sans-serif" text-anchor="middle" letter-spacing="2">MANOJKUMAR</text>
            <!-- Player Number -->
            <text x="130" y="142" fill="#ffffff" font-size="52" font-weight="900" font-family="Arial, sans-serif" text-anchor="middle" stroke="#0f172a" stroke-width="3">07</text>
            <!-- Size Stamp Badge -->
            <rect x="18" y="152" width="48" height="20" rx="4" fill="#042f2e" stroke="#10b981" stroke-width="1.5"/>
            <text x="25" y="166" fill="#34d399" font-size="11" font-weight="800">B-38</text>
          </g>

          <!-- Card 3: Sleeve & Output Metrics -->
          <g transform="translate(550, 110)">
            <rect width="210" height="175" rx="14" fill="#0b1e38" stroke="#1e3a5f" stroke-width="1.5"/>
            <text x="16" y="26" fill="#7dd3fc" font-size="11" font-weight="700" letter-spacing="1">FACTORY QA METRICS</text>

            <rect x="16" y="40" width="178" height="34" rx="8" fill="#0f2b48"/>
            <text x="26" y="55" fill="#94a3b8" font-size="9" font-weight="700">PRODUCTION SPEED</text>
            <text x="26" y="69" fill="#38bdf8" font-size="13" font-weight="800">10x Faster Automation</text>

            <rect x="16" y="82" width="178" height="34" rx="8" fill="#0f2b48"/>
            <text x="26" y="97" fill="#94a3b8" font-size="9" font-weight="700">MISPRINT ERROR RATE</text>
            <text x="26" y="111" fill="#34d399" font-size="13" font-weight="800">0% Misprints (100% OK)</text>

            <rect x="16" y="124" width="178" height="34" rx="8" fill="#0f2b48"/>
            <text x="26" y="139" fill="#94a3b8" font-size="9" font-weight="700">PRINT RESOLUTION</text>
            <text x="26" y="153" fill="#fbbf24" font-size="13" font-weight="800">300 DPI High-Precision</text>
          </g>

          <!-- Bottom Banner -->
          <g transform="translate(40, 310)">
            <rect width="720" height="34" rx="10" fill="#082f49" stroke="#0284c7" stroke-width="1"/>
            <circle cx="24" cy="17" r="4" fill="#38bdf8"/>
            <text x="38" y="21" fill="#e0f2fe" font-size="11" font-weight="700" letter-spacing="1">
              CLIENT REVIEW: "Transformed our manufacturing pipeline with zero misprints &amp; automated 300 DPI batch output." — Sportswear Factory Client
            </text>
          </g>
        </svg>
      `),
  },
  {
    title: "AI-Based Crowd Management & Abnormal Activity Detection",
    description:
      "An AI-powered surveillance system that detects crowd congestion and abnormal human activities using cameras and sensors. Sends images, videos, and live location to authorities for quick response.",
    tags: ["Python", "OpenCV", "AI"],
    github: "https://github.com/Man-8437",
    demo: "https://automated-crowd-behaviour-analysis-jg9jc.streamlit.app/",
    image:
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360">
          <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#061827"/>
              <stop offset="55%" stop-color="#0a1f32"/>
              <stop offset="100%" stop-color="#111827"/>
            </linearGradient>
            <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#20d3c2"/>
              <stop offset="100%" stop-color="#4ea7ff"/>
            </linearGradient>
          </defs>
          <rect width="800" height="360" fill="url(#bg)"/>
          <g opacity="0.3">
            <rect x="30" y="24" width="200" height="120" rx="18" fill="#0e2438" stroke="#1ee7d1"/>
            <rect x="250" y="24" width="240" height="120" rx="18" fill="#0e2438" stroke="#1ee7d1"/>
            <rect x="510" y="24" width="260" height="120" rx="18" fill="#0e2438" stroke="#1ee7d1"/>
            <rect x="30" y="160" width="280" height="150" rx="18" fill="#0e2438" stroke="#1ee7d1"/>
            <rect x="330" y="160" width="200" height="150" rx="18" fill="#0e2438" stroke="#1ee7d1"/>
            <rect x="550" y="160" width="220" height="150" rx="18" fill="#0e2438" stroke="#1ee7d1"/>
          </g>
          <g font-family="Arial, sans-serif">
            <text x="52" y="52" fill="#7dd3fc" font-size="12" letter-spacing="2">CROWD DENSITY</text>
            <path d="M58 110 C 120 110, 150 75, 180 90 S 230 40, 255 66" fill="none" stroke="#2dd4bf" stroke-width="4"/>
            <text x="52" y="124" fill="#dff6ff" font-size="36" font-weight="700">78%</text>
            <text x="52" y="145" fill="#7dd3fc" font-size="13">High Density</text>

            <text x="270" y="52" fill="#7dd3fc" font-size="12" letter-spacing="2">LIVE FEED</text>
            <rect x="270" y="72" width="200" height="62" rx="10" fill="#13283c" stroke="#1ee7d1"/>
            <rect x="282" y="84" width="180" height="38" rx="8" fill="#1b3a52"/>
            <circle cx="315" cy="103" r="7" fill="#ff6b5a"/>
            <rect x="330" y="95" width="100" height="10" rx="5" fill="#2dd4bf"/>

            <text x="530" y="52" fill="#7dd3fc" font-size="12" letter-spacing="2">THREAT LEVEL</text>
            <circle cx="620" cy="106" r="38" fill="none" stroke="#0f2d3d" stroke-width="12"/>
            <circle cx="620" cy="106" r="38" fill="none" stroke="#ff7a59" stroke-width="12" stroke-dasharray="140 150" transform="rotate(-90 620 106)"/>
            <text x="600" y="112" fill="#e2e8f0" font-size="18" font-weight="700">HIGH</text>

            <text x="52" y="188" fill="#7dd3fc" font-size="12" letter-spacing="2">PEOPLE COUNT</text>
            <text x="58" y="223" fill="#dff6ff" font-size="36" font-weight="700">248</text>
            <text x="54" y="244" fill="#7dd3fc" font-size="13">Total People</text>

            <text x="50" y="280" fill="#7dd3fc" font-size="12" letter-spacing="2">ACTIVE ALERTS</text>
            <text x="58" y="315" fill="#dff6ff" font-size="34" font-weight="700">3</text>
            <text x="54" y="336" fill="#7dd3fc" font-size="13">Requires Attention</text>

            <g>
              <rect x="355" y="200" width="160" height="62" rx="12" fill="#0f2237" stroke="#ef4444"/>
              <text x="370" y="222" fill="#fca5a5" font-size="12" font-weight="700">ALERT</text>
              <text x="370" y="245" fill="#e2e8f0" font-size="18" font-weight="700">Abnormal Activity</text>
            </g>

            <g>
              <rect x="560" y="200" width="180" height="90" rx="12" fill="#0f2237" stroke="#1fe7d1"/>
              <text x="575" y="223" fill="#7dd3fc" font-size="12" letter-spacing="2">DETECTION TYPES</text>
              <text x="576" y="246" fill="#e2e8f0" font-size="15">Crowd Congestion 2</text>
              <text x="576" y="268" fill="#e2e8f0" font-size="15">Abnormal Activity 3</text>
            </g>
          </g>
        </svg>
      `),
  },
  {
    title: "Ludo Game",
    description: "Python desktop application demonstrating structured game logic, state control, and GUI programming.",
    tags: ["Python", "Desktop App", "GUI"],
    github: "https://github.com/Man-8437",
    image:
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360">
          <defs>
            <linearGradient id="ludo-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#111a28"/>
              <stop offset="100%" stop-color="#080d16"/>
            </linearGradient>
            <linearGradient id="ludo-board" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1b2635"/>
              <stop offset="100%" stop-color="#121b28"/>
            </linearGradient>
            <filter id="ludo-shadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#02050a" flood-opacity=".5"/>
            </filter>
          </defs>
          <rect width="800" height="360" fill="url(#ludo-bg)"/>
          <circle cx="140" cy="70" r="100" fill="#24c78b" opacity=".06"/>
          <circle cx="690" cy="285" r="130" fill="#639dff" opacity=".07"/>
          <g filter="url(#ludo-shadow)">
            <rect x="250" y="31" width="300" height="298" rx="22" fill="url(#ludo-board)" stroke="#344255" stroke-width="2"/>
            <rect x="266" y="47" width="104" height="104" rx="14" fill="#163e35" stroke="#2c9b72"/>
            <rect x="430" y="47" width="104" height="104" rx="14" fill="#48242c" stroke="#c75b68"/>
            <rect x="266" y="209" width="104" height="104" rx="14" fill="#4a3920" stroke="#d9a84d"/>
            <rect x="430" y="209" width="104" height="104" rx="14" fill="#20375b" stroke="#6196ed"/>
            <rect x="370" y="47" width="60" height="266" fill="#202c3a"/>
            <rect x="266" y="151" width="268" height="58" fill="#202c3a"/>
            <path d="M370 151 L400 180 L370 209 Z" fill="#4a3920"/>
            <path d="M430 151 L400 180 L430 209 Z" fill="#48242c"/>
            <path d="M370 151 L400 121 L430 151 Z" fill="#163e35"/>
            <path d="M370 209 L400 239 L430 209 Z" fill="#20375b"/>
            <path d="M386 151 L400 166 L414 151 M386 209 L400 194 L414 209 M370 166 L385 180 L370 194 M430 166 L415 180 L430 194"
              fill="none" stroke="#6d7f93" stroke-width="2"/>
            <circle cx="293" cy="75" r="10" fill="#d9eee5"/>
            <circle cx="343" cy="75" r="10" fill="#d9eee5"/>
            <circle cx="457" cy="75" r="10" fill="#f2dfe1"/>
            <circle cx="507" cy="75" r="10" fill="#f2dfe1"/>
            <circle cx="293" cy="285" r="10" fill="#f3e7c8"/>
            <circle cx="343" cy="285" r="10" fill="#f3e7c8"/>
            <circle cx="457" cy="285" r="10" fill="#dce8fa"/>
            <circle cx="507" cy="285" r="10" fill="#dce8fa"/>
            <circle cx="400" cy="180" r="12" fill="#eef2f6"/>
          </g>
          <text x="52" y="137" fill="#8fa0b4" font-family="Arial, sans-serif" font-size="13" letter-spacing="3">CLASSIC BOARD GAME</text>
          <text x="50" y="181" fill="#f3f6fa" font-family="Arial, sans-serif" font-size="31" font-weight="700">Ludo</text>
          <text x="52" y="207" fill="#98a6b8" font-family="Arial, sans-serif" font-size="14">A strategy game for everyone</text>
          <rect x="52" y="231" width="84" height="27" rx="13.5" fill="#14251f" stroke="#28503e"/>
          <text x="68" y="249" fill="#78d8ae" font-family="Arial, sans-serif" font-size="12">PYTHON</text>
        </svg>
      `),
  },
  {
    title: "Double Jump Game",
    description: "Java game project demonstrating object-oriented programming concepts, hitboxes, and physics loops.",
    tags: ["Java", "Game Dev", "OOP"],
    github: "https://github.com/Man-8437",
    image:
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360">
          <defs>
            <linearGradient id="jump-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#17253a"/>
              <stop offset="100%" stop-color="#0b111c"/>
            </linearGradient>
            <linearGradient id="jump-platform" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#253b54"/>
              <stop offset="100%" stop-color="#1a2c42"/>
            </linearGradient>
            <filter id="jump-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="12"/>
            </filter>
          </defs>
          <rect width="800" height="360" fill="url(#jump-bg)"/>
          <circle cx="562" cy="130" r="86" fill="#4d9dff" opacity=".11" filter="url(#jump-glow)"/>
          <circle cx="674" cy="56" r="1.5" fill="#dceaff" opacity=".8"/>
          <circle cx="614" cy="88" r="1" fill="#dceaff" opacity=".65"/>
          <circle cx="743" cy="123" r="1.5" fill="#dceaff" opacity=".65"/>
          <circle cx="530" cy="47" r="1" fill="#dceaff" opacity=".7"/>
          <path d="M0 247 Q130 222 260 247 T520 240 T800 227 V360 H0 Z" fill="#111d2b"/>
          <path d="M0 285 Q130 265 260 285 T520 276 T800 264 V360 H0 Z" fill="#0c1521"/>
          <text x="52" y="112" fill="#8fa0b4" font-family="Arial, sans-serif" font-size="13" letter-spacing="3">2D PLATFORMER</text>
          <text x="50" y="156" fill="#f3f6fa" font-family="Arial, sans-serif" font-size="31" font-weight="700">Double Jump</text>
          <text x="52" y="183" fill="#98a6b8" font-family="Arial, sans-serif" font-size="14">Timing, movement &amp; momentum</text>
          <rect x="52" y="207" width="55" height="27" rx="13.5" fill="#172337" stroke="#304665"/>
          <text x="68" y="225" fill="#8fc2ff" font-family="Arial, sans-serif" font-size="12">JAVA</text>
          <g opacity=".55">
            <rect x="492" y="242" width="92" height="12" rx="6" fill="#273c53"/>
            <rect x="628" y="188" width="110" height="12" rx="6" fill="#273c53"/>
          </g>
          <rect x="450" y="300" width="350" height="60" rx="8" fill="url(#jump-platform)"/>
          <rect x="450" y="298" width="350" height="3" rx="1.5" fill="#61aaff" opacity=".75"/>
          <rect x="610" y="245" width="142" height="12" rx="6" fill="url(#jump-platform)"/>
          <rect x="610" y="243" width="142" height="3" rx="1.5" fill="#61aaff" opacity=".7"/>
          <rect x="488" y="202" width="104" height="12" rx="6" fill="url(#jump-platform)"/>
          <rect x="488" y="200" width="104" height="3" rx="1.5" fill="#61aaff" opacity=".65"/>
          <path d="M576 282 C586 250 606 220 640 204" fill="none" stroke="#61aaff" stroke-width="2" stroke-dasharray="5 7" opacity=".8"/>
          <path d="M628 205 L641 201 L638 215" fill="none" stroke="#61aaff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <g transform="translate(555 235)">
            <rect x="0" y="0" width="32" height="38" rx="8" fill="#60a5fa"/>
            <rect x="7" y="-13" width="18" height="18" rx="6" fill="#dceaff"/>
            <rect x="-4" y="31" width="14" height="7" rx="3.5" fill="#c6d9f1"/>
            <rect x="22" y="31" width="14" height="7" rx="3.5" fill="#c6d9f1"/>
            <circle cx="19" cy="-4" r="2" fill="#17253a"/>
          </g>
          <circle cx="682" cy="222" r="8" fill="#f2bd62"/>
          <circle cx="682" cy="222" r="15" fill="#f2bd62" opacity=".12"/>
        </svg>
      `),
  },
];

export interface CustomerReview {
  clientName: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
  project: string;
  review: string;
  date: string;
  metrics: string[];
  verified: boolean;
  highlight: string;
}

export const customerReviews: CustomerReview[] = [
  {
    clientName: "Rajesh S.",
    role: "Head of Operations & Production",
    company: "Sportswear Manufacturing Hub",
    avatarText: "RS",
    rating: 5,
    project: "Jersey Factory Pro",
    highlight: "10x Faster Production Turnaround & Zero Misprints",
    review:
      "Manojkumar successfully developed and deployed the Jersey Factory Pro desktop suite for our factory floor. Before this tool, our design staff spent hours manually typesetting player names, sizing numbers in CorelDRAW, and checking dimensions one-by-one. Manojkumar's software completely automated our pipeline—importing raw Excel rosters, accurately fitting custom names and numbers with independent scaling, stamping zone badges, and generating flawless 300 DPI batch outputs in under 5 minutes. The software has completely eliminated our printing errors and drastically cut production costs. Exceptional engineering, clean execution, and highly reliable delivery!",
    date: "October 2026",
    metrics: ["10x Production Speedup", "Zero Misprints", "100% Production Accuracy", "300 DPI High-Resolution"],
    verified: true,
  },
  {
    clientName: "Vikram P.",
    role: "Lead Apparel Graphic Designer",
    company: "Custom Teamwear Studios",
    avatarText: "VP",
    rating: 5,
    project: "Jersey Factory Pro",
    highlight: "CorelDRAW-Level Precision with Commercial Licensing",
    review:
      "The typography rendering and dynamic sizing matrix are brilliantly built. We needed strict physical inch dimensions across sizes 20 to 52 for Front, Back, and Sleeves, and Jersey Factory Pro handles all of them without raster distortion. The built-in hardware licensing and audit trail features make it a genuine commercial-grade application. Manojkumar understood our production needs from day one and delivered an intuitive, rock-solid desktop application that our team relies on daily. Highly recommended for commercial software development!",
    date: "October 2026",
    metrics: ["Sub-Millimeter Precision", "Hardware ID Licensing", "Live 2D Garment Preview", "Enterprise Reliability"],
    verified: true,
  },
];
