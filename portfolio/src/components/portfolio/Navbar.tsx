import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "../../data/portfolio";

const LINKS = [
  { label: "WORK", id: "work" },
  { label: "ABOUT", id: "about" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "STACK", id: "stack" },
  { label: "CONTACT", id: "contact" },
];

interface NavbarProps {
  onNavigate: (id: string) => void;
}

export const Navbar = ({ onNavigate }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "UTC",
        }) + " UTC"
      );
    tick();
    const iv = setInterval(tick, 1000);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(iv);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-[100] transition-[background-color,border-color] duration-500 ${
        scrolled
          ? "bg-[#030305]/80 backdrop-blur-xl border-b border-cyan-500/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => onNavigate("top")}
          className="font-display font-black text-lg tracking-tighter text-white flex items-center gap-2 group"
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:bg-fuchsia-400 transition-colors duration-300 drop-glow-cyan" />
          Ishan Deshpande<span className="text-cyan-400">/</span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => onNavigate(l.id)}
              className="text-xs tracking-[0.2em] font-bold text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-3 text-[10px] tracking-[0.15em] text-slate-500 font-bold">
          <span className={`w-1.5 h-1.5 rounded-full ${PROFILE.available ? "bg-emerald-400 animate-pulse" : "bg-slate-600"}`} />
          <span className="text-emerald-400/90">{PROFILE.available ? "AVAILABLE" : "BOOKED"}</span>
          <span className="text-slate-700">|</span>
          <span className="tabular-nums">{time}</span>
        </div>
      </nav>
    </motion.header>
  );
};
