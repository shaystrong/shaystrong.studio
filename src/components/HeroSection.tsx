const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Tardigrade Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/lovable-uploads/f09abcd2-d621-45bb-9eb7-79d5049802e9.png"
          alt=""
          className="w-96 h-96 opacity-40 transform rotate-12 translate-x-32 translate-y-16"
        />
      </div>
      
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
        <p className="text-lg font-medium text-foreground">+ CREATIVE DIRECTOR</p>
        <p className="text-lg font-medium text-foreground mt-2">ARTIST</p>
      </div>
    </section>
  );
};

export default HeroSection;