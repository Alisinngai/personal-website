import Link from "next/link"

import { navItems, site } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-heading text-lg tracking-[0.28em] uppercase">
            {site.name}
          </p>
          <p className="mt-3 text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {site.role}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex flex-wrap items-center gap-6">
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
          <a
            href={`mailto:${site.email}`}
            className="text-[0.7rem] tracking-[0.22em] uppercase underline decoration-border underline-offset-[6px] transition-colors hover:decoration-foreground"
          >
            {site.email}
          </a>
        </div>
      </div>

      <p className="mt-12 text-xs text-muted-foreground">
        &copy; {year} {site.name}. All photographs are the property of the
        photographer.
      </p>
    </footer>
  )
}
