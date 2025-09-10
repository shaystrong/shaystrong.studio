import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import AboutPhoto from "@/assets/shay.png";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="container mx-auto px-6 pt-28 pb-16 max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-wide">About</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <img src={AboutPhoto} alt="Portrait of Shay Strong" className={cn("w-full h-auto rounded-lg shadow-sm object-cover")} />
          </div>
          <div className="text-base leading-7 text-foreground/90">
            <p>
              Shay is an American artist based in Helsinki, Finland. With a PhD in astrophysics, she pairs her scientific
              profession with the analog joy of making art—especially
              through the dark Finnish winters. At home, she shares life with a diva cat, a baby dog who is very
              much a mama’s companion, a husband, and two daughters. When she isn’t in the studio or keading teams of 
              engineers, she’s likely open water swimming.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;


