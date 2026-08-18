import { useEffect, useRef } from "react";

interface StarLayer {
  count: number;
  speed: number;
  size: number;
  color: string;
  depth: number;
}

interface Star {
  x: number;
  y: number;
  l: number;
  tw: number;
}

// Animated starfield with subtle parallax layers on a canvas.
export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let raf: number;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const layers: StarLayer[] = [
      {
        count: 90,
        speed: 0.03,
        size: 0.8,
        color: "rgba(148,163,184,0.7)",
        depth: 8,
      },
      {
        count: 50,
        speed: 0.06,
        size: 1.4,
        color: "rgba(6,182,212,0.8)",
        depth: 18,
      },
      {
        count: 22,
        speed: 0.1,
        size: 2.2,
        color: "rgba(217,70,239,0.7)",
        depth: 34,
      },
    ];

    let stars: Star[] = [];

    const build = () => {
      stars = [];

      layers.forEach((layer, li) => {
        for (let i = 0; i < layer.count; i++) {
          stars.push({
            x: Math.random() * w,
            y: Math.random() * h,
            l: li,
            tw: Math.random() * Math.PI * 2,
          });
        }
      });
    };

    build();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      build();
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / w - 0.5) * 2;
      mouse.current.y = (e.clientY / h - 0.5) * 2;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);

    let t = 0;

    const render = () => {
      t += 0.01;

      ctx.clearRect(0, 0, w, h);

      stars.forEach((s) => {
        const layer = layers[s.l];

        s.y += layer.speed;

        if (s.y > h) s.y = 0;

        const ox = mouse.current.x * layer.depth;
        const oy = mouse.current.y * layer.depth;

        const twinkle = reduce
          ? 1
          : 0.5 + 0.5 * Math.sin(t * 2 + s.tw);

        ctx.beginPath();

        ctx.arc(
          s.x + ox,
          s.y + oy,
          layer.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = layer.color;
        ctx.globalAlpha = twinkle;
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="starfield-canvas"
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};
