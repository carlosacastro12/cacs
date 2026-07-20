import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PartneringSection } from "@/components/partnering-section"
import { MarketsSection } from "@/components/markets-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <PartneringSection />
        <MarketsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
