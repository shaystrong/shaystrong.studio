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
        <a
          href="https://www.instagram.com/shaystrong.studio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.5" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;