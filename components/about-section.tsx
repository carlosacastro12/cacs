const pillars = [
  {
    title: "Community Driven",
    body: "Initiatives rooted in the people and communities they serve, built for shared and lasting value.",
  },
  {
    title: "Culturally Rooted",
    body: "Bilingual, cross-cultural expertise that helps you engage authentically across borders and audiences.",
  },
  {
    title: "Purposely Executed",
    body: "Every engagement moves with intent — from ambition to achievement, with clarity and confidence.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-b border-brand/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta">Who we are</p>
        <div className="mt-6 grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-brand text-balance md:text-4xl">
            Success today requires more than expertise in a single field.
          </h2>
          <div className="space-y-5 leading-relaxed text-foreground/70">
            <p>
              It requires the ability to connect strategy, innovation, market realities, and societal needs into a clear
              direction for action and results.
            </p>
            <p>
              At Commerce Advisory &amp; Consulting Solutions (CACS) we advise organizations on high-impact
              opportunities that advance growth, strengthen resilience, and deliver measurable value. By integrating
              insights from sustainable development, entrepreneurship, education, business strategy, and social impact,
              at CACS we help clients develop initiatives that are commercially viable, operationally achievable, and
              socially relevant.
            </p>
            <p>
              Our work is centered on one objective: helping organizations move with purpose from ambition to
              achievement with clarity, confidence, and measurable results.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="rounded-xl border border-brand/12 bg-brand/[0.03] p-6">
              <span className="font-serif text-sm text-brand/40">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-brand">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
