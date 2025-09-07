const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Hero Text */}
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-wider">
          YOUR
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-muted-foreground tracking-widest mt-2">
          ARTISTIC
        </h2>
        <h3 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-wider mt-2">
          PORTFOLIO
        </h3>
      </div>
      
      {/* Creative Director & Artist Labels */}
      <div className="absolute bottom-8 left-8 text-left">
        <p className="text-lg font-medium text-foreground">+ CREATIVE DIRECTOR</p>
        <p className="text-lg font-medium text-foreground mt-2">ARTIST</p>
      </div>
    </section>
  );
};

export default HeroSection;