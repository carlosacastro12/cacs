import Link from "next/link"
import { CacsLogo } from "@/components/cacs-logo"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Markets", href: "#markets" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="#top" aria-label="CACS home">
          <CacsLogo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-brand/90"
        >
          Meet with an advisor
        </Link>
      </div>
    </header>
  )
}
