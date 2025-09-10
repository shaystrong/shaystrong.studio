import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const FORMSPREE_ACTION = "https://formspree.io/f/mqadnwzd"; // Formspree endpoint

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="container mx-auto px-6 pt-28 pb-16 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-wide">Contact</h1>
        <p className="mt-2 text-sm text-muted-foreground">I’d love to hear from you. Share a bit about your project or question.</p>

        {!submitted ? (
          <form
            action={FORMSPREE_ACTION}
            method="POST"
            className="mt-8 grid gap-4"
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Honeypot field */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            {/* Timestamp bot trap */}
            <input type="hidden" name="timestamp" value={String(Date.now())} />

            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="whatsapp" className="text-sm font-medium">WhatsApp (optional)</label>
              <Input id="whatsapp" name="whatsapp" type="tel" inputMode="tel" placeholder="+1 555 123 4567" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message (optional)</label>
              <Textarea id="message" name="message" placeholder="Write a short message" className="min-h-32" />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
              <p className="text-xs text-muted-foreground">No email exposed. Powered by Formspree.</p>
            </div>
            {/* Success redirect without JS */}
            <input type="hidden" name="_subject" value="New website inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="/contact?sent=1" />
          </form>
        ) : null}

        {submitted ? (
          <div className="mt-8 rounded-md border p-6">
            <h2 className="text-xl font-medium">Thanks! Your message has been sent.</h2>
            <p className="mt-1 text-sm text-muted-foreground">I’ll get back to you soon.</p>
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default Contact;


