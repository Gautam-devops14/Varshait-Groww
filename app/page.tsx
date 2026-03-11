import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { TrustSection } from "@/components/sections/trust"
import { ServicesPreview } from "@/components/sections/services-preview"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { ProcessSection } from "@/components/sections/process"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesPreview />
        <PortfolioPreview />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
