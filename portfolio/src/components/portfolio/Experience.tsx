import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCE } from "../../data/portfolio";

interface Experience {
  period: string;
  location: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  accent: string;
}

interface ItemProps {
  e: Experience;
  i: number;
}

const Item = ({ e, i }: ItemProps) => {
  const last = i === EXPERIENCE.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: i * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      data-testid={`experience-${i}`}
      className="relative grid md:grid-cols-12 gap-4 md:gap-8 group"
    >
      {/* node + connecting line */}
      <div className="absolute left-0 top-2 flex flex-col items-center">
        <span
          className="w-4 h-4 rounded-full border-2 z-10 transition-all duration-500 group-hover:scale-125"
          style={{
            borderColor: e.accent,
            boxShadow: `0 0 16px ${e.accent}88`,
            background: "#030305",
          }}
        />
      </div>

      {!last && (
        <span className="absolute left-[7px] top-6 bottom-[-3rem] w-px bg-gradient-to-b from-white/25 to-white/5" />
      )}

      {/* period */}
      <div className="md:col-span-3 pl-10 md:pl-12">
        <span
          className="text-xs tracking-[0.2em] font-bold"
          style={{ color: e.accent }}
        >
          {e.period}
        </span>

        <p className="mt-2 text-[11px] tracking-[0.15em] text-slate-500 uppercase">
          {e.location}
        </p>
      </div>

      {/* content */}
      <div className="md:col-span-9 pl-10 md:pl-0 pb-14">
        <div className="flex flex-col gap-1">
          <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight text-white group-hover:glow-cyan transition-all duration-500">
            {e.role}
          </h3>

          <span className="text-slate-400 font-bold text-base md:text-lg">
            @ {e.company}
          </span>
        </div>
        <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-2xl">
          {e.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {e.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] tracking-widest font-bold text-slate-400 border border-white/10 px-3 py-1.5 group-hover:border-cyan-500/30 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Timeline = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative z-10 py-24 md:py-40 max-w-[1600px] mx-auto px-6 md:px-12"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
        <div>
          <h2 className="mt-6 font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none text-white">
            Experience
          </h2>
        </div>
      </div>

      <div ref={ref} className="relative">
        {/* animated progress spine */}
        <motion.span
          style={{ scaleY }}
          className="absolute left-[7px] top-2 bottom-0 w-px origin-top bg-gradient-to-b from-cyan-400 via-fuchsia-400 to-yellow-300 hidden md:block"
        />

        <div className="space-y-2">
          {EXPERIENCE.map((e, i) => (
            <Item key={e.period} e={e} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
