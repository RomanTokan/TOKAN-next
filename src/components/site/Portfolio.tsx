import cinema from "@/assets/portfolio-cinema.jpg";
import yacht from "@/assets/portfolio-yacht.jpg";
import penthouse from "@/assets/portfolio-penthouse.jpg";
import outdoor from "@/assets/portfolio-outdoor.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    img: cinema,
    title: "Belle Meade Private Cinema",
    tag: "Home Theater · Florida",
    span: "lg:col-span-7",
  },
  {
    img: yacht,
    title: "M/Y Aurora Salon",
    tag: "Yacht AV · Mediterranean",
    span: "lg:col-span-5",
  },
  {
    img: penthouse,
    title: "Manhattan Sky Penthouse",
    tag: "Smart Home · NYC",
    span: "lg:col-span-5",
  },
  {
    img: outdoor,
    title: "Belle Meade Outdoor",
    tag: "Landscape AV · FL",
    span: "lg:col-span-7",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-28 md:py-40">
      <div className="container-luxe">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="hairline" />
              <span className="eyebrow">Selected Work</span>
            </div>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              A portfolio of <span className="italic text-primary">elevated spaces.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary"
          >
            View full portfolio
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#contact"
              className={`group relative block overflow-hidden rounded-sm border border-border bg-card ${p.span}`}
            >
              <div className="aspect-[4/3] overflow-hidden lg:aspect-[16/11]">
                <img
                  src={p.img.src}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-8">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-primary">{p.tag}</div>
                  <h3 className="mt-2 font-display text-2xl text-foreground md:text-3xl">{p.title}</h3>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-primary/40 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
