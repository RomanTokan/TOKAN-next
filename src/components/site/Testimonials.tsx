import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I love Stereo Types — the response times, the professionalism, the knowledge and the relationships. I've been working with David for years.",
    name: "Caroline",
    meta: "2 reviews · 2 weeks ago",
  },
  {
    quote: "Jordan is the ultimate professional and a pleasure to work with.",
    name: "Alan Binder",
    meta: "8 reviews · 5 months ago",
  },
  {
    quote:
      "Great place for custom home theaters. Dan is incredibly knowledgeable and helpful.",
    name: "Sunil Bajaj",
    meta: "Local Guide · 115 reviews",
  },
  {
    quote: "David Marrs is phenomenal. Great customer relations skills.",
    name: "W. Chasen",
    meta: "5 reviews · 3 months ago",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-28 md:py-40">
      <div className="container-luxe">
        <div className="mb-16 max-w-2xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="hairline" />
            <span className="eyebrow">Client voices</span>
          </div>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Trusted by <span className="italic text-primary">discerning</span> clients.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="group relative flex flex-col justify-between rounded-sm border border-border bg-card p-10 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div>
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-2xl leading-snug text-foreground md:text-3xl">
                  “{r.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-10 border-t border-border pt-6">
                <div className="font-medium">{r.name}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {r.meta}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
