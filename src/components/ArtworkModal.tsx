import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface Artwork {
  id: number;
  title: string;
  image: string;
  description: string;
  year: string;
  medium: string;
  dimensions: string;
}

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArtworkModal = ({ artwork, isOpen, onClose }: ArtworkModalProps) => {
  if (!artwork) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full max-h-[90vh] bg-card overflow-y-auto">
        <DialogTitle className="sr-only">{artwork.title}</DialogTitle>
        
        <div className="flex flex-col lg:flex-row h-full min-h-0">
          {/* Image Section */}
          <div className="flex-1 relative p-4 md:p-6 flex items-center justify-center min-h-0">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-auto max-h-[60vh] lg:max-h-[80vh] object-contain bg-muted rounded-md"
            />
          </div>
          
          {/* Details Section */}
          <div className="lg:w-80 p-8 bg-card flex flex-col justify-center flex-shrink-0">
            <h2 className="text-3xl font-bold text-foreground">
              {artwork.title} ({artwork.year})
            </h2>
            <p className="text-foreground mt-1">{artwork.medium.toLowerCase()}</p>
            <p className="text-muted-foreground italic mt-1">{artwork.dimensions}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtworkModal;