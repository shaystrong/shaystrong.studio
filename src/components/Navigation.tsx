import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="flex gap-8 text-sm font-medium tracking-wide">
        <Button variant="ghost" className="text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          WORK
        </Button>
        <Button variant="ghost" className="text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          ABOUT
        </Button>
        <Button variant="ghost" className="text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          CONTACT
        </Button>
        <Button variant="ghost" className="text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          SHOP
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;