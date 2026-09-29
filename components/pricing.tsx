import Link from "next/link"

import { site } from "@/lib/site"

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-border/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.7rem] tracking-[0.32em] text-muted-foreground uppercase">
              Commissions
            </p>
            <h2 className="mt-5 font-heading text-3xl sm:text-4xl">
              {site.pricing.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {site.pricing.intro}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
          {site.pricing.tiers.map((tier) => (
            <li
              key={tier.name}
              className="flex flex-col bg-background p-7 lg:p-8"
            >
              <h3 className="font-heading text-xl">{tier.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {tier.summary}
              </p>

              <p className="mt-7 flex items-baseline gap-2">
                <span className="text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
                  from
                </span>
                <span className="font-heading text-3xl">
                  {site.currency}
                  {tier.price}
                </span>
              </p>

              <ul className="mt-7 space-y-3 border-t border-border/70 pt-6 text-sm">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="text-muted-foreground">
                      &#8212;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="mt-8 self-start text-[0.7rem] tracking-[0.22em] uppercase underline decoration-border underline-offset-[6px] transition-colors hover:decoration-foreground"
              >
                Enquire
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {site.pricing.note}
        </p>
      </div>
    </section>
  )
}
