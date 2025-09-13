import Navigation from "@/components/Navigation";
import ArtworkModal from "@/components/ArtworkModal";
import { works } from "@/data/works";
import { useState } from "react";

interface ArtworkForModal {
  id: number;
  title: string;
  image: string;
  year: string;
  medium: string;
  dimensions: string;
}

const Works = () => {
  const [selected, setSelected] = useState<ArtworkForModal | null>(null);
  const [open, setOpen] = useState(false);

  const onOpen = (item: ArtworkForModal) => {
    setSelected(item);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="container mx-auto px-6 pt-28 pb-16 max-w-7xl">
        <h1 className="text-3xl font-semibold tracking-wide mb-8">Works</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w) => (
            <button
              key={w.id}
              onClick={() => onOpen(w)}
              className="group text-left"
              aria-label={`Open ${w.title}`}
            >
              <div className="relative overflow-hidden rounded-lg bg-card">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-3 text-sm">
                <div className="font-medium text-foreground">{w.title}</div>
                <div className="text-muted-foreground">{w.year} · {w.medium}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <ArtworkModal artwork={selected} isOpen={open} onClose={onClose} />
    </main>
  );
};

export default Works;


