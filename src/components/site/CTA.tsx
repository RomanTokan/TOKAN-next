import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(var(--primary) / 0.25), transparent 60%)",
        }}
      />
      <div className="container-luxe relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hairline" />
            <span className="eyebrow">Begin a project</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Let's design a system as
            <br />
            <span className="italic text-gradient-gold">remarkable as your space.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-muted-foreground">
            Schedule a private consultation with our design team. We'll listen,
            sketch and propose a tailored approach — anywhere in the world.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="luxe" size="xl" asChild>
              <a href="mailto:hello@stereotypes.tech">
                <Mail className="h-4 w-4" /> Request consultation
              </a>
            </Button>
            <Button variant="ghostLuxe" size="xl" asChild>
              <a href="tel:+18882179488">
                <Phone className="h-4 w-4" /> +1 (888) 217-9488
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
