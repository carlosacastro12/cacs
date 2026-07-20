import { Mail, Phone } from "lucide-react"
export function ContactSection() {
  return (
    <section id="contact" className="border-b border-brand/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="rounded-2xl border border-brand/15 bg-brand/[0.05] p-8 md:p-14">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta">Get started</p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-brand text-balance md:text-5xl">
                Meet with an advisor.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-foreground/70">
                Tell us where your organization is heading. We&apos;ll help you move with purpose from ambition to
                achievement — with clarity and confidence.
              </p>
              <div className="mt-8 space-y-3">
                <a
                  href="mailto:commerce@cacs.pro"
                  className="flex items-center gap-3 text-sm font-medium text-brand transition-colors hover:text-brand/70"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  commerce@cacs.pro
                </a>
                <a
                  href="tel:+13234511189"
                  className="flex items-center gap-3 text-sm font-medium text-brand transition-colors hover:text-brand/70"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +1 323 451 1189
                </a>
                <p className="pt-2 text-xs uppercase tracking-[0.14em] text-foreground/45">
                  Interdisciplinary consulting — remote &amp; on-site engagements
                </p>
              </div>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="92afeea6-abcc-407e-a3c6-316bee07de16" />
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-foreground/60">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-brand/20 bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-brand"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-foreground/60">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="myname@company.com"
                  className="w-full rounded-lg border border-brand/20 bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-brand"
                />
              </div>
              <div>
                <label htmlFor="objective" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-foreground/60">
                  Briefly describe your objective
                </label>
                <textarea
                  id="objective"
                  name="objective"
                  rows={4}
                  placeholder="What are you looking to achieve?"
                  className="w-full resize-none rounded-lg border border-brand/20 bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-brand"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-brand/90"
              >
                Request a meeting
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

    </div>
  )
}

