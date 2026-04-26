import {
  Film,
  Home,
  Settings2,
  Ship,
  Building2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const items = [
  {
    icon: Film,
    title: "Media & Entertainment",
    body: "Immersive home theaters, media rooms and multi-room audio systems.",
  },
  {
    icon: Home,
    title: "Home Automation",
    body: "Lighting, climate, security and entertainment in one intuitive control.",
  },
  {
    icon: Settings2,
    title: "Specialized Services",
    body: "AV, networking and power solutions engineered for peak reliability.",
  },
  {
    icon: Ship,
    title: "Yacht AV",
    body: "Marine-grade entertainment and smart control for life on the water.",
  },
  {
    icon: Building2,
    title: "Commercial & Hospitality",
    body: "AV crafted for offices, restaurants, venues and hospitality spaces.",
  },
  {
    icon: Sparkles,
    title: "Elite Environments",
    body: "Refined performance technology for the most discerning residences.",
  },
];

export const Expertise = () => {
  return (
    <section id="expertise" className="relative bg-card/60 py-28 md:py-40">
      <div className="container-luxe">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="hairline" />
              <span className="eyebrow">Our Expertise</span>
            </div>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Cutting-edge technology, <span className="italic text-primary">elegant by design.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            We blend engineering precision with design sensibility — delivering
            high-performance systems for residences, yachts, executive offices and
            hospitality spaces.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative bg-background p-10 transition-colors duration-500 hover:bg-card"
            >
              <Icon className="h-7 w-7 text-primary transition-transform duration-500 group-hover:-translate-y-1" />
              <h3 className="mt-8 font-display text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <ArrowUpRight className="absolute right-8 top-10 h-5 w-5 text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
