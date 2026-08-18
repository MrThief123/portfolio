import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

interface ContactProps {
  onNavigate: (section: string) => void;
}

export const Contact = ({ onNavigate }: ContactProps) => {
  return (
    <footer
      id="contact"
      data-testid="contact-section"
      className="relative z-10 pt-32 pb-12 border-t border-white/10 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs tracking-[0.3em] font-bold text-cyan-400">
            [ 04 — TRANSMISSION ]
          </span>

          <span className="flex-1 h-px bg-white/10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
        >
          <p className="text-slate-500 text-sm tracking-[0.15em] mb-6">
            HAVE A MISSION IN MIND?
          </p>

          <a
            href={`mailto:${PROFILE.email}`}
            data-testid="contact-email"
            data-cursor="hover"
            className="group inline-flex items-start gap-4 font-display font-black text-[11vw] md:text-[8vw] leading-none tracking-tighter uppercase text-white hover:text-cyan-400 transition-colors duration-500"
          >
            LET&apos;S TALK

            <ArrowUpRight className="w-8 h-8 md:w-16 md:h-16 mt-2 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
          </a>

          <p className="mt-8 font-mono text-lg md:text-2xl text-slate-300">
            {PROFILE.email}
          </p>
        </motion.div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {PROFILE.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`social-${s.label.split(" ")[0].toLowerCase()}`}
              data-cursor="hover"
              className="group flex items-center justify-between border-t border-white/10 pt-4 text-xs tracking-[0.2em] font-bold text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              {s.label}

              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          ))}
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] tracking-[0.2em] text-slate-600 font-bold">
          <button
            onClick={() => onNavigate("top")}
            data-testid="footer-back-top"
            className="hover:text-cyan-400 transition-colors"
          >
            ↑ BACK TO ORBIT
          </button>

          <p>
            © {new Date().getFullYear()} {PROFILE.name} · ALL SYSTEMS NOMINAL
          </p>

          <p>DESIGNED &amp; BUILT IN THE VOID</p>
        </div>
      </div>
    </footer>
  );
};
