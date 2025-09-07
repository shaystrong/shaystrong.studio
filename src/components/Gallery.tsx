import { useState } from "react";
import ArtworkModal from "./ArtworkModal";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

interface Artwork {
  id: number;
  title: string;
  image: string;
  description: string;
  year: string;
  medium: string;
  dimensions: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Digital Abstraction #1",
    image: artwork1,
    description: "A modern interpretation of geometric forms exploring the relationship between digital and physical space. This piece represents the intersection of technology and human emotion through bold compositional elements.",
    year: "2024",
    medium: "Digital Art",
    dimensions: "800 × 1000 px"
  },
  {
    id: 2,
    title: "Organic Flow",
    image: artwork2,
    description: "An expressive piece that captures the fluidity of natural forms through warm earth tones and organic brushwork. The composition invites viewers to explore the tactile quality of traditional media.",
    year: "2024",
    medium: "Mixed Media on Canvas",
    dimensions: "1000 × 800 mm"
  },
  {
    id: 3,
    title: "Urban Narrative",
    image: artwork3,
    description: "A contemporary exploration of street art culture blended with digital techniques. This work examines the dialogue between urban environments and artistic expression in the modern age.",
    year: "2024",
    medium: "Photography & Digital Manipulation",
    dimensions: "900 × 1200 mm"
  }
];

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          FEATURED WORKS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group cursor-pointer"
              onClick={() => handleArtworkClick(artwork)}
            >
              <div className="relative overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                  <p className="text-sm opacity-90">{artwork.year} • {artwork.medium}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Gallery;