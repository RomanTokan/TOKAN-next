import heroImg from "@/assets/hero-living.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden">
      <img
  src={heroImg.src}
        alt="Luxury smart home living room with integrated AV and ambient lighting"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-fade-bottom" />

      <div className="container-luxe flex min-h-screen flex-col justify-center pt-28">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 flex items-center gap-4">
            <span className="hairline" />
            <span className="eyebrow">Luxury Smart Technology</span>
          </div>
          <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Seamless Automation,
            <br />
            <span className="italic text-gradient-gold">Unparalleled Performance.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Bespoke smart solutions for luxury residences, mega yachts, and elite
            spaces — engineered, installed and supported with uncompromising
            craftsmanship.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="luxe" size="xl" asChild>
              <a href="#contact">
                Get a personalized consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghostLuxe" size="xl" asChild>
              <a href="#portfolio">
                <Play className="h-4 w-4 fill-current" />
                Watch the showcase
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px border-t border-border/60 md:grid-cols-4">
          {[
            { k: "20+", v: "Years of craft" },
            { k: "500+", v: "Bespoke installs" },
            { k: "30+", v: "Elite brand partners" },
            { k: "24/7", v: "White-glove support" },
          ].map((s) => (
            <div key={s.v} className="px-2 py-8">
              <div className="font-display text-4xl text-primary md:text-5xl">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
