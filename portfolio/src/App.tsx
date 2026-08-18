import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "./App.css";

import { Starfield } from "./components/portfolio/Starfield";
import { CustomCursor } from "./components/portfolio/CustomCursor";
import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { Projects } from "./components/portfolio/Projects";
import { Marquee } from "./components/portfolio/Marquee";
import { About } from "./components/portfolio/About";
import { Stack } from "./components/portfolio/Stack";
import { Contact } from "./components/portfolio/Contact";
import { Timeline } from "./components/portfolio/Timeline";

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let raf = 0;

    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (id: string) => {
    if (id === "top") {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      return;
    }

    const el = document.getElementById(id);

    if (!el) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, {
        offset: -80,
      });
    } else {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App scanlines grain relative bg-[#030305]">
      <CustomCursor />
      <Starfield />

      <Navbar onNavigate={scrollTo} />

      <main className="relative z-10">
        <Hero onNavigate={scrollTo} />
        <Timeline />
        <Projects />
        <Marquee />
        <About />
        <Stack />
        <Contact onNavigate={scrollTo} />
      </main>
    </div>
  );
}

export default App;
