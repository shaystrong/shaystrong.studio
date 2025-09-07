const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">      
      {/* Hero Text - Base Layer */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-wider">
          Shay
        </h1>
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-wider">
          Strong
        </h2>
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