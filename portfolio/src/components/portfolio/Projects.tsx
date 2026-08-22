import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "../../data/portfolio";

interface ProjectCardProps {
  p: Project;
  i: number;
}

const ProjectCard = ({ p, i }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: (i % 2) * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      data-testid={`project-card-${p.id}`}
      data-cursor="hover"
      className={`group relative border border-white/10 bg-[#050508] overflow-hidden hover:border-cyan-500/40 transition-colors duration-500 ${p.span}`}
    >
      <a
        href="#work"
        onClick={(e) => e.preventDefault()}
        className="block"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto md:h-[46vh]">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="w-full h-full object-cover grayscale contrast-125 opacity-60 group-hover:opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[900ms] ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-color"
            style={{
              background: `linear-gradient(120deg, ${p.accent}55, transparent)`,
            }}
          />

          <span className="absolute top-5 left-5 font-display font-black text-sm tracking-widest text-white/70">
            {p.index}
          </span>

          <span className="absolute top-5 right-5 text-[10px] tracking-[0.2em] font-bold text-slate-300 border border-white/20 px-2.5 py-1 backdrop-blur-sm">
            {p.year}
          </span>
        </div>

        {/* Content */}
        <div className="p-7 md:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className="text-[10px] tracking-[0.25em] font-bold mb-3"
                style={{ color: p.accent }}
              >
                {p.category.toUpperCase()}
              </p>

              <h3 className="font-display font-black text-2xl md:text-4xl tracking-tighter uppercase text-white group-hover:glow-cyan transition-all duration-500">
                {p.title}
              </h3>
            </div>

            <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-white/20 group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-all duration-500 -rotate-45 group-hover:rotate-0">
              <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#030305] transition-colors" />
            </span>
          </div>

          <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-xl">
            {p.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] tracking-widest font-bold text-slate-400 border border-white/10 px-3 py-1.5 group-hover:border-cyan-500/30 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.article>
  );
};

export const Projects = () => {
  return (
    <section
      id="work"
      data-testid="projects-section"
      className="relative z-10 py-24 md:py-40 max-w-[1600px] mx-auto px-6 md:px-12"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
        <div>

          <h2 className="mt-6 font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none text-white">
            Projects
          </h2>
        </div>

        <p className="max-w-xs text-sm text-slate-500 leading-relaxed md:text-right">
          A collection of work driven by curiosity and problem-solving 
          — turning ideas into software, data, and creative solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}
      </div>
    </section>
  );
};
