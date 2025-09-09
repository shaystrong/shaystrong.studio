import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const showHome = location.pathname !== "/";
  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      {/* Desktop navigation */}
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        {showHome && (
          <Button asChild variant="ghost" className="text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            <Link to="/">HOME</Link>
          </Button>
        )}
        <Button variant="ghost" className="text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          WORK
        </Button>
        <Button variant="ghost" className="text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          ABOUT
        </Button>
        <Button asChild variant="ghost" className="text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          <Link to="/contact">CONTACT</Link>
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

      {/* Mobile navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-foreground text-foreground"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle className="text-sm tracking-wide">Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-6 grid gap-3">
              {showHome && (
                <SheetClose asChild>
                  <Button asChild variant="ghost" className="justify-start transition-colors hover:bg-primary hover:text-primary-foreground">
                    <Link to="/">HOME</Link>
                  </Button>
                </SheetClose>
              )}
              <SheetClose asChild><Button variant="ghost" className="justify-start transition-colors hover:bg-primary hover:text-primary-foreground">WORK</Button></SheetClose>
              <SheetClose asChild><Button variant="ghost" className="justify-start transition-colors hover:bg-primary hover:text-primary-foreground">ABOUT</Button></SheetClose>
              <SheetClose asChild>
                <Button asChild variant="ghost" className="justify-start transition-colors hover:bg-primary hover:text-primary-foreground">
                  <Link to="/contact">CONTACT</Link>
                </Button>
              </SheetClose>
            </div>
            <a
              href="https://www.instagram.com/shaystrong.studio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground text-foreground transition-colors hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;