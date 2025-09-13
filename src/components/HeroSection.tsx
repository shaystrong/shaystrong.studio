import React, { useEffect, useRef, useState } from "react";
import RainArtwork from "@/assets/Shay_Strong_Rain.png";
import Logo from "@/assets/ss_logo_blue.png";

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
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="relative min-h-screen flex items-center justify-center bg-background overflow-visible">
      {/* Background Artwork Layer */}
      <img
        src={RainArtwork}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
        style={{ opacity: 0.65 * opacity, transform: `translateY(${translateY * -1}px)` }}
      />

      {/* Stronger gradient/veil for readability */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/20"
        style={{ opacity }}
      />

      {/* Hero Logo - Base Layer */}
      <div className="relative z-10 text-center flex items-center justify-center">
        <img
          src={Logo}
          alt="Shay Strong logo"
          className="mx-auto w-[70vw] md:w-[55vw] lg:w-[40vw] max-w-[900px] h-auto drop-shadow-md"
        />
      </div>

      {/* Creative Director & Artist Labels */}
      <div className="absolute bottom-8 left-8 text-left"></div>
    </section>
  );
};

export default HeroSection;