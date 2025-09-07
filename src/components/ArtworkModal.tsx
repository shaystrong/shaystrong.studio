import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <DialogContent className="max-w-5xl w-full h-[90vh] bg-card p-0 overflow-hidden">
        <DialogTitle className="sr-only">{artwork.title}</DialogTitle>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-foreground hover:bg-background/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        
        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section */}
          <div className="flex-1 relative">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-full object-contain bg-muted"
            />
          </div>
          
          {/* Details Section */}
          <div className="lg:w-80 p-8 bg-card flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {artwork.title}
            </h2>
            
            <div className="space-y-3 mb-6">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Year:</span>
                <p className="text-foreground">{artwork.year}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-muted-foreground">Medium:</span>
                <p className="text-foreground">{artwork.medium}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-muted-foreground">Dimensions:</span>
                <p className="text-foreground">{artwork.dimensions}</p>
              </div>
            </div>
            
            <div>
              <span className="text-sm font-medium text-muted-foreground">Description:</span>
              <p className="text-foreground mt-2 leading-relaxed">
                {artwork.description}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtworkModal;