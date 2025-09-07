import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Gallery />
    </main>
  );
};

export default Index;
