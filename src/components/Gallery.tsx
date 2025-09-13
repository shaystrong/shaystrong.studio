import { useState } from "react";
import ArtworkModal from "./ArtworkModal";
import { works as worksData, type WorkItem } from "@/data/works";

type Artwork = WorkItem;

// Use the first few works as "featured" on the homepage gallery.
const artworks: Artwork[] = worksData.slice(0, 6);

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