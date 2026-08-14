import { FaCuttlefish, FaGithub, FaLinkedin, FaPython } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { SiOpencv, SiVisualstudiocode } from "react-icons/si";
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
];

export const projects = [
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
    description: "Python desktop application.",
    tags: ["Python", "Desktop App"],
    github: "https://github.com/Man-8437",
    image:
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360">
          <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#362115"/>
              <stop offset="100%" stop-color="#20130f"/>
            </linearGradient>
          </defs>
          <rect width="800" height="360" fill="url(#bg)"/>
          <rect x="110" y="30" width="580" height="300" rx="24" fill="#2c1d12" stroke="#d9a441" stroke-width="5"/>
          <rect x="110" y="30" width="220" height="110" rx="16" fill="#1a6a38"/>
          <rect x="470" y="30" width="220" height="110" rx="16" fill="#9d1d20"/>
          <rect x="110" y="220" width="220" height="110" rx="16" fill="#f2b93d"/>
          <rect x="470" y="220" width="220" height="110" rx="16" fill="#2d5cb8"/>
          <rect x="240" y="140" width="120" height="80" rx="10" fill="#b8732d"/>
          <rect x="440" y="140" width="120" height="80" rx="10" fill="#b8732d"/>
          <rect x="330" y="60" width="140" height="120" rx="10" fill="#1b1b1b" opacity="0.25"/>
          <rect x="330" y="180" width="140" height="120" rx="10" fill="#1b1b1b" opacity="0.25"/>
          <path d="M110 140 H690 M400 30 V330" stroke="#d9a441" stroke-width="6"/>
          <path d="M110 180 H690 M240 30 V330 M560 30 V330" stroke="#d9a441" stroke-width="4" opacity="0.8"/>
          <path d="M330 30 V330 M470 30 V330" stroke="#d9a441" stroke-width="4" opacity="0.8"/>
          <circle cx="185" cy="95" r="26" fill="#d6f1d5" stroke="#7ca86f" stroke-width="4"/>
          <circle cx="615" cy="95" r="26" fill="#fbd4d4" stroke="#d36b61" stroke-width="4"/>
          <circle cx="185" cy="265" r="26" fill="#f9ddb0" stroke="#d9a441" stroke-width="4"/>
          <circle cx="615" cy="265" r="26" fill="#d8e4ff" stroke="#6d8edf" stroke-width="4"/>
          <text x="350" y="200" fill="#f5d67f" font-size="36" font-weight="700" font-family="Arial, sans-serif">LUDO</text>
          <circle cx="240" cy="90" r="18" fill="#e1f2e5"/>
          <circle cx="560" cy="90" r="18" fill="#f7dede"/>
          <circle cx="240" cy="270" r="18" fill="#f7e7c2"/>
          <circle cx="560" cy="270" r="18" fill="#ddedff"/>
          <circle cx="400" cy="180" r="16" fill="#f4d572"/>
        </svg>
      `),
  },
  {
    title: "Double Jump Game",
    description: "Java game project demonstrating object-oriented programming concepts.",
    tags: ["Java", "Game Dev"],
    github: "https://github.com/Man-8437",
    image:
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#78d7ff"/>
              <stop offset="100%" stop-color="#dff7ff"/>
            </linearGradient>
            <linearGradient id="ground" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#4e8b39"/>
              <stop offset="100%" stop-color="#2d5b27"/>
            </linearGradient>
          </defs>
          <rect width="800" height="360" fill="url(#sky)"/>
          <circle cx="650" cy="55" r="32" fill="#fffdf1" opacity="0.8"/>
          <path d="M0 210 Q200 170 380 220 T800 210 V360 H0 Z" fill="#8fc1a2"/>
          <path d="M0 240 Q180 210 320 230 T800 250 V360 H0 Z" fill="#5d9b53"/>
          <path d="M110 250 L200 150 L260 250 Z" fill="#3d6d3d"/>
          <path d="M530 250 L640 120 L730 250 Z" fill="#3d6d3d"/>
          <rect x="60" y="255" width="680" height="70" fill="url(#ground)"/>
          <g>
            <path d="M110 250 L155 170 L175 250 Z" fill="#2e4d25"/>
            <path d="M135 170 L160 145 L175 170 Z" fill="#2e4d25"/>
            <path d="M95 250 L130 270 L140 250 Z" fill="#3d6d3d"/>
          </g>
          <g>
            <path d="M585 250 L630 170 L650 250 Z" fill="#2e4d25"/>
            <path d="M610 170 L635 145 L650 170 Z" fill="#2e4d25"/>
            <path d="M570 250 L605 270 L615 250 Z" fill="#3d6d3d"/>
          </g>
          <g transform="translate(340 150)">
            <circle cx="25" cy="0" r="20" fill="#ecb96f"/>
            <path d="M10 18 L30 18 L35 48 L4 48 Z" fill="#1d3b5a"/>
            <path d="M25 18 L55 18 L60 62 L28 62 Z" fill="#0f2d46"/>
            <path d="M-8 30 L8 14 L10 46 L-10 50 Z" fill="#0f2d46"/>
            <path d="M55 35 L72 20 L72 52 L54 58 Z" fill="#0f2d46"/>
            <path d="M16 52 L32 52 L40 90 L12 90 Z" fill="#f0b351"/>
            <circle cx="38" cy="0" r="8" fill="#ffd17a"/>
            <path d="M40 10 L47 18 L38 20 Z" fill="#2a5b2a"/>
          </g>
          <g>
            <circle cx="110" cy="320" r="18" fill="#f0d34b"/>
            <text x="100" y="325" fill="#fff" font-size="14" font-family="Arial" font-weight="700">1</text>
            <circle cx="690" cy="320" r="18" fill="#f0d34b"/>
            <text x="680" y="325" fill="#fff" font-size="14" font-family="Arial" font-weight="700">1</text>
          </g>
          <g>
            <path d="M565 198 L590 170 L615 198" stroke="#ffdd75" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M640 230 L670 170" stroke="#ffdd75" stroke-width="8" fill="none" stroke-linecap="round"/>
          </g>
        </svg>
      `),
  },
];

// certificates list removed per request
