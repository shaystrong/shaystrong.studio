import React, { useEffect, useRef, useState } from "react";
import RainArtwork from "@/assets/Shay_Strong_Rain.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    let rafId = 0;
    let topOffset = sectionEl.offsetTop;
    let sectionHeight = sectionEl.offsetHeight;

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const updateMetrics = () => {
      topOffset = sectionEl.offsetTop;
      sectionHeight = sectionEl.offsetHeight;
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const scrolled = Math.max(scrollY - topOffset, 0);
        const progress = clamp(scrolled / (sectionHeight * 0.6), 0, 1); // fade out by 60% of hero height
        setOpacity(1 - progress);
        setTranslateY(scrolled * 0.1); // subtle parallax
      });
    };

    const onResize = () => {
      updateMetrics();
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Artwork Layer */}
      <img
        src={RainArtwork}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
        style={{ opacity: 0.35 * opacity, transform: `translateY(${translateY * -1}px)` }}
      />

      {/* Stronger gradient/veil for readability */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/40"
        style={{ opacity }}
      />

      {/* Hero Text - Base Layer */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-wider">SHAY</h1>
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-wider">STRONG</h2>
      </div>

      {/* Creative Director & Artist Labels */}
      <div className="absolute bottom-8 left-8 text-left"></div>
    </section>
  );
};

export default HeroSection;