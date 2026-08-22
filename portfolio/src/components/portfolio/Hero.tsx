import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

interface HeroProps {
  onNavigate: (section: string) => void;
}

interface MaskLineProps {
  children: ReactNode;
  i: number;
}

const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.15,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const MaskLine = ({ children, i }: MaskLineProps) => (
  <span className="block overflow-hidden">
    <motion.span
      variants={line}
      custom={i}
      initial="hidden"
      animate="show"
      className="block"
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = ({ onNavigate }: HeroProps) => {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Cosmic glow blobs */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-fuchsia-500/10 blur-[120px] pointer-events-none" />

      {/* Floating orbital element */}
      <motion.div
        style={{ y: orbY }}
        className="absolute right-[6%] top-[22%] hidden lg:block pointer-events-none"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative w-[340px] h-[340px]"
        >
          <div className="absolute inset-0 rounded-full border border-cyan-500/30" />
          <div className="absolute inset-8 rounded-full border border-fuchsia-500/20" />
          <div className="absolute inset-16 rounded-full border border-white/10" />

          <div className="absolute top-1/2 left-0 w-3 h-3 -mt-1.5 rounded-full bg-cyan-400 drop-glow-cyan" />

          <div className="absolute top-8 right-10 w-2 h-2 rounded-full bg-fuchsia-400" />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute inset-[38%] rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 blur-md"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 pt-24"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="text-xs tracking-[0.3em] font-bold text-cyan-400 mb-8 flex items-center gap-3"
          data-testid="hero-eyebrow"
        >
          <span className="w-8 h-px bg-cyan-400" />

          {PROFILE.role.toUpperCase()}
        </motion.p>

        <h1
          className="font-display font-black tracking-tighter leading-[0.9] text-[15vw] md:text-[11vw] lg:text-[6vw] text-white uppercase"
          data-testid="hero-title"
        >
          <MaskLine i={0}>Ishan</MaskLine>
        </h1>

        <h1
          className="font-display font-black tracking-tighter leading-[0.9] text-[5vw] md:text-[5vw] lg:text-[3.5vw] text-white "
          data-testid="hero-title"
        >
          <MaskLine i={2}>
             <span className="glow-magenta text-fuchsia-400">Deshpande</span>
          </MaskLine>
        </h1>

        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.8,
            }}
            className="max-w-md text-slate-400 text-base leading-relaxed"
            data-testid="hero-tagline"
          >
            Hi, welcome to my portfolio — a collection of software, data, 
            and creative work exploring the possibilities with technology
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.25,
              duration: 0.8,
            }}
            onClick={() => onNavigate("work")}
            data-testid="hero-cta"
            className="group flex items-center gap-4 self-start"
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-full border border-cyan-500/40 group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-all duration-300">
              <ArrowDown className="w-5 h-5 text-cyan-400 group-hover:text-[#030305] transition-colors duration-300" />
            </span>

            <span className="text-xs tracking-[0.25em] font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">
              LEARN MORE ABOUT ME
            </span>
          </motion.button>
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-0 right-0 z-10 max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between text-[10px] tracking-[0.2em] text-slate-600 font-bold">
        <span>{PROFILE.location.toUpperCase()}</span>
        <span>SCROLL ↓</span>
      </div>
    </section>
  );
};
