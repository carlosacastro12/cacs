import Link from "next/link"
import Image from "next/image"

const stats = [
  { value: "12+", label: "Areas of practice" },
  { value: "Bilingual", label: "Cross-cultural teams" },
  { value: "End-to-end", label: "Strategy to execution" },
  { value: "Measurable", label: "Results & impact" },
]

export function HeroSection() {
  return (
    <section id="top" className="border-b border-brand/10">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta">
              Interdisciplinary Consulting
            </p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-brand text-balance md:text-6xl">
              Commerce Advisory &amp; Consulting Solutions
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-foreground/70">
              We advise organizations on high-impact opportunities that advance growth, strengthen resilience, and
              deliver measurable value — connecting strategy, innovation, market realities, and societal needs into a
              clear direction for action.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-brand/90"
              >
                Meet with an advisor
              </Link>
              <Link
                href="#markets"
                className="inline-flex items-center gap-2 rounded-full border border-brand/25 px-6 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand/5"
              >
                Explore our markets <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/cacs-checkmark.png"
              alt="CACS checkmark logo"
              width={224}
              height={224}
              className="h-40 w-40 md:h-56 md:w-56"
              priority
            />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-brand/10 pt-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-serif text-2xl font-semibold text-brand md:text-3xl">{stat.value}</dt>
              <dd className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-foreground/50">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
