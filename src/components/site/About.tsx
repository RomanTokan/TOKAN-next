import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="container-luxe grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="mb-6 flex items-center gap-4">
            <span className="hairline" />
            <span className="eyebrow">Who we are</span>
          </div>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            A studio of <span className="italic text-primary">engineers,</span> designers and audiophiles.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our professional team delivers custom-designed solutions that elevate
            comfort, security, and entertainment in your home, office, or even on
            your yacht. From initial design and engineering to installation and
            ongoing white-glove support — we ensure technology enriches your life
            at every step.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-10">
            <div>
              <div className="font-display text-3xl text-primary">Bespoke</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Every system tailored to your space, your habits and your taste.
              </p>
            </div>
            <div>
              <div className="font-display text-3xl text-primary">Discreet</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Technology that disappears into refined architecture and interiors.
              </p>
            </div>
          </div>
          <Button variant="ghostLuxe" className="mt-10" asChild>
            <a href="#expertise">Explore our expertise →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
