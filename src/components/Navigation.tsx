import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="flex gap-8 text-sm font-medium tracking-wide">
        <Button variant="ghost" className="text-foreground hover:text-primary">
          WORK
        </Button>
        <Button variant="ghost" className="text-foreground hover:text-primary">
          ABOUT
        </Button>
        <Button variant="ghost" className="text-foreground hover:text-primary">
          CONTACT
        </Button>
        <Button variant="ghost" className="text-foreground hover:text-primary">
          SHOP
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;