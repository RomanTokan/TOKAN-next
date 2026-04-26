const brands = [
  "Control4",
  "Crestron",
  "Lutron",
  "Savant",
  "Sonance",
  "Sonos",
  "McIntosh",
  "Bowers & Wilkins",
  "Meridian",
  "Storm Audio",
  "Digital Projection",
  "Samsung",
  "DMF Lighting",
  "BDI",
  "Cineak",
  "Sony",
];

export const Brands = () => {
  const loop = [...brands, ...brands];
  return (
    <section id="brands" className="border-y border-border bg-card/40 py-24">
      <div className="container-luxe mb-12 text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="hairline" />
          <span className="eyebrow">Trusted Products</span>
          <span className="hairline" />
        </div>
        <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight md:text-5xl">
          Industry-leading partners,
          <span className="italic text-primary"> proven performance.</span>
        </h2>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee flex w-max gap-16 px-6">
          {loop.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="flex h-16 min-w-[160px] items-center justify-center font-display text-2xl tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
