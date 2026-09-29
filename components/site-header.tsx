import Link from "next/link"

import { navItems, site } from "@/lib/site"

function SectionNav({ className }: { className?: string }) {
  return (
    <nav aria-label="Sections" className={className}>
      <ul className="flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex items-center justify-between gap-6 py-5">
          <Link
            href="#top"
            className="font-heading text-base tracking-[0.28em] uppercase"
          >
            {site.name}
          </Link>

          <div className="flex items-center gap-8">
            <SectionNav className="hidden sm:block" />
            <a
              href={`mailto:${site.email}`}
              className="border border-border px-4 py-2 text-[0.7rem] tracking-[0.22em] uppercase transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              Email me
            </a>
          </div>
        </div>

        <SectionNav className="border-t border-border/70 py-3 sm:hidden" />
      </div>
    </header>
  )
}
