import { Contact } from "@/components/contact"
import { Introduction } from "@/components/introduction"
import { Pricing } from "@/components/pricing"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Work } from "@/components/work"

export default function Page() {
  return (
    <div className="min-h-svh">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-xs focus:tracking-[0.22em] focus:uppercase"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Introduction />
        <Work />
        <Pricing />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
