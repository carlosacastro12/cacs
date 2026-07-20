import Link from "next/link"
import { CacsLogo } from "@/components/cacs-logo"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Markets", href: "#markets" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <Link href="#top" aria-label="CACS home">
            <CacsLogo />
          </Link>

          <nav aria-label="Footer" className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:commerce@cacs.pro"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-brand"
            >
              commerce@cacs.pro
            </a>
            <a
              href="tel:+13234511189"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-brand"
            >
              +1 323 451 1189
            </a>
          </nav>
        </div>

        <p className="mt-10 border-t border-brand/10 pt-6 text-xs leading-relaxed text-foreground/45">
          All Rights Reserved © CACS - Management and Consulting, 225 W Wellesley Ave Suite 103, 99205 Spokane,
          Washington.
        </p>
      </div>
    </footer>
  )
}
