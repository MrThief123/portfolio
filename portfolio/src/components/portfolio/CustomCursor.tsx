import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;

      const el = e.target;

      if (!(el instanceof Element)) return;

      const interactive = el.closest(
        "a, button, [data-cursor='hover']"
      );

      setHovered(!!interactive);
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;

      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;

      raf = requestAnimationFrame(loop);
    };

    loop();

    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovered ? "hovered" : ""}`}
      />
    </>
  );
};
