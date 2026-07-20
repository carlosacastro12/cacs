const markets = [
  {
    title: "Global Program Strategy & Management",
    body: "Scalable international exchange, education, cultural, and travel programs — built for efficiency, compliance, and impact, with bilingual stakeholder engagement.",
  },
  {
    title: "Organizational Growth & Strategic Partnerships",
    body: "Expansion, restructuring, and operational optimization paired with partnerships that unlock new opportunities and streamline how you operate.",
  },
  {
    title: "AI-Driven Strategy & Digital Optimization",
    body: "AI tools for automation, predictive analytics, and content — integrated with marketing and workflows to sharpen decisions and scale impact.",
  },
  {
    title: "Digital Strategy & Marketing",
    body: "Data-driven campaigns and content strategy that lift engagement and optimize brand presence across every digital channel.",
  },
  {
    title: "NGO & Social Enterprise",
    body: "Program development, fundraising, and community engagement with bilingual, cross-cultural expertise to expand reach and social impact.",
  },
  {
    title: "International Education & Cultural Exchange",
    body: "Guidance through cultural exchange programs and personalized admissions counseling — helping students access scholarships worldwide.",
  },
  {
    title: "Leadership & Team Development",
    body: "Mentoring leaders and building high-performing teams that translate strategy into action and sustainable growth.",
  },
  {
    title: "Bilingual & Cross-Cultural Interpretation",
    body: "Professional Spanish-English interpretation and translation for meetings, conferences, and international programs.",
  },
  {
    title: "Photography & Travel Consulting",
    body: "Professional photography and global travel consulting for hospitality, real estate, restaurants, museums, and business.",
  },
  {
    title: "Strategic Lead Architecture",
    body: "Identify and engage qualified clients across industries through market insights, targeted outreach, and bilingual communication.",
  },
  {
    title: "Culinary & Business Design",
    body: "From concept and menu development to branding and experience — turning food ventures into scalable, sustainable projects.",
  },
  {
    title: "Sports Management",
    body: "Team development, marketing, events, contracts, and sponsorships — plus analytics and media to reach the next level.",
  },
]

export function MarketsSection() {
  return (
    <section id="markets" className="border-b border-brand/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta">Our markets</p>
        <h2 className="mt-6 max-w-3xl font-serif text-3xl font-semibold leading-tight text-brand text-balance md:text-5xl">
          Trusted to identify opportunities, optimize capabilities, and accelerate growth.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-brand/12 bg-brand/10 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((market, i) => (
            <div
              key={market.title}
              tabIndex={0}
              className="group bg-background p-7 outline-none transition-colors duration-300 ease-out hover:bg-terracotta focus-visible:bg-terracotta active:bg-terracotta"
            >
              <span className="font-serif text-sm text-terracotta transition-colors duration-300 ease-out group-hover:text-background group-focus-visible:text-background group-active:text-background">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-brand transition-colors duration-300 ease-out group-hover:text-background group-focus-visible:text-background group-active:text-background">
                {market.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60 transition-colors duration-300 ease-out group-hover:text-background/90 group-focus-visible:text-background/90 group-active:text-background/90">
                {market.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
