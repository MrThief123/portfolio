import { motion } from "framer-motion";
import { MANIFESTO, CAPABILITIES } from "../../data/portfolio";

const reveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative z-10 py-32 md:py-48 max-w-[1600px] mx-auto px-6 md:px-12"
    >
      <div className="flex items-center gap-4 mb-20">
        <span className="text-xs tracking-[0.3em] font-bold text-cyan-400">
          [ 02 — MANIFESTO ]
        </span>

        <span className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-5">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none text-white sticky top-32"
          >
            I build{" "}
            <span className="text-stroke">things</span> that feel{" "}
            <span className="glow-cyan text-cyan-400">alive</span>.
          </motion.h2>
        </div>

        <div className="md:col-span-7 md:col-start-7 space-y-16">
          {MANIFESTO.map((m, i) => (
            <motion.div
              key={m.n}
              variants={reveal}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-80px",
              }}
              data-testid={`manifesto-${m.n}`}
              className="relative pl-16 md:pl-24 border-t border-white/10 pt-8 group"
            >
              <span className="absolute left-0 top-8 font-display font-black text-3xl md:text-4xl text-fuchsia-500/40 group-hover:text-fuchsia-400 transition-colors duration-500">
                {m.n}
              </span>

              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-4">
                {m.title}
              </h3>

              <p className="text-slate-400 leading-relaxed max-w-lg">
                {m.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Capabilities strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mt-32">
        {CAPABILITIES.map((c, i) => (
          <motion.div
            key={c.title}
            variants={reveal}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            data-testid={`capability-${i}`}
            className="bg-[#050508] p-8 hover:bg-cyan-500/5 transition-colors duration-500 group"
          >
            <span className="block text-[10px] tracking-[0.25em] text-cyan-400 font-bold mb-6">
              0{i + 1}
            </span>

            <h4 className="font-display font-bold text-lg text-white mb-3 group-hover:glow-cyan transition-all">
              {c.title}
            </h4>

            <p className="text-sm text-slate-500 leading-relaxed">
              {c.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
