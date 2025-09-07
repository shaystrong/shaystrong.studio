const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">      
      {/* Hero Text - Base Layer */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-wider">
          SHAY
        </h1>
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-wider">
          STRONG
        </h2>
      </div>
      
      
      {/* Creative Director & Artist Labels */}
      <div className="absolute bottom-8 left-8 text-left">
      </div>
    </section>
  );
};

export default HeroSection;