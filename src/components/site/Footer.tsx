const cols = [
  {
    title: "Solutions",
    items: [
      "Media & Entertainment",
      "Home Automation",
      "Yacht AV",
      "Commercial & Hospitality",
      "Lighting & Climate",
    ],
  },
  {
    title: "Products",
    items: [
      "Audio Systems",
      "Video Systems",
      "Lighting",
      "Window Treatments",
      "Interiors",
    ],
  },
  {
    title: "Studio",
    items: ["About", "Portfolio", "Blog", "Careers", "Contact"],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container-luxe py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-primary/40">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
              </span>
              <span className="font-display text-xl tracking-[0.25em]">
                STEREO<span className="text-primary"> TYPES</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Bespoke luxury smart-home, AV and automation systems for residences,
              yachts and elite environments worldwide.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="eyebrow mb-5">{c.title}</div>
              <ul className="space-y-3">
                {c.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <div className="eyebrow mb-5">Reach</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-primary" href="tel:+18882179488">
                  +1 (888) 217-9488
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="mailto:hello@stereotypes.tech">
                  hello@stereotypes.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Stereo Types — All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
