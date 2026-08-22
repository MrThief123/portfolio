import { motion } from "framer-motion";
import { PROFILE, SKILL_GROUPS } from "../../data/portfolio";

export const Stack = () => {
  return (
    <section
      id="stack"
      data-testid="stack-section"
      className="relative z-10 py-24 md:py-40 max-w-[1600px] mx-auto px-6 md:px-12"
    >
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <span className="text-xs tracking-[0.3em] font-bold text-cyan-400">
            [ 03 — CAPABILITIES ]
          </span>

          <h2 className="mt-6 font-display font-black text-4xl md:text-5xl tracking-tighter uppercase leading-none text-white">
            The <span className="text-stroke">Toolkit</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {PROFILE.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.7,
                }}
                data-testid={`stat-${i}`}
              >
                <p className="font-display font-black text-4xl md:text-5xl text-cyan-400 glow-cyan tabular-nums">
                  {s.value}
                </p>

                <p className="mt-2 text-[11px] tracking-[0.15em] text-slate-500 uppercase font-bold">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col gap-8 md:pt-10">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: groupIndex * 0.08,
                duration: 0.5,
              }}
              className="flex flex-col gap-3"
            >
              {/* Group title */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.2em] text-fuchsia-400">
                  {group.title}
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: groupIndex * 0.08 + i * 0.03,
                      duration: 0.4,
                    }}
                    data-testid={`skill-${groupIndex}-${i}`}
                    data-cursor="hover"
                    className="
                      font-display
                      font-bold
                      text-sm
                      md:text-base
                      tracking-tight
                      uppercase
                      text-slate-300
                      border
                      border-white/10
                      px-5
                      py-3
                      hover:border-fuchsia-500/50
                      hover:text-fuchsia-400
                      hover:glow-magenta
                      transition-all
                      duration-300
                      cursor-none
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
