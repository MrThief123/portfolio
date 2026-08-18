import { SKILLS } from "../../data/portfolio";

// Slow editorial marquee — massive outline text in the background.
export const Marquee = () => {
  const row = [...SKILLS, ...SKILLS];

  return (
    <section
      data-testid="marquee-section"
      className="relative z-10 py-20 md:py-28 overflow-hidden border-y border-white/10"
    >
      <div className="relative">
        <div className="marquee-track">
          {row.map((s, i) => (
            <span
              key={`a-${i}`}
              className="font-display font-black text-6xl md:text-8xl lg:text-[9rem] tracking-tighter uppercase text-stroke px-8 flex items-center gap-8 whitespace-nowrap"
            >
              {s}

              <span className="text-cyan-400 text-3xl md:text-5xl not-italic">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-4 opacity-60">
        <div className="marquee-track reverse">
          {row.map((s, i) => (
            <span
              key={`b-${i}`}
              className="font-display font-light text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase text-fuchsia-400/40 px-8 whitespace-nowrap"
            >
              {s} —
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
