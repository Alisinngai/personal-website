import Link from "next/link"

import { Photo } from "@/components/photo"
import { site } from "@/lib/site"

export function Introduction() {
  return (
    <section id="top" className="scroll-mt-24 border-b border-border/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start lg:gap-20">
          <div>
            <p className="text-[0.7rem] tracking-[0.32em] text-muted-foreground uppercase">
              {site.role}
            </p>
            <h1 className="mt-7 font-heading text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
              {site.headline}
            </h1>

            <div className="mt-9 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              {site.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-11 grid gap-x-10 gap-y-3 border-t border-border/70 pt-6 sm:grid-cols-2">
              <dt className="sr-only">What I photograph</dt>
              {site.subjects.map((subject) => (
                <dd
                  key={subject}
                  className="text-[0.8rem] tracking-[0.14em] uppercase"
                >
                  {subject}
                </dd>
              ))}
            </dl>

            <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="#work"
                className="border border-foreground bg-foreground px-6 py-3 text-[0.7rem] tracking-[0.22em] text-background uppercase transition-opacity hover:opacity-85"
              >
                See the work
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="text-[0.7rem] tracking-[0.22em] uppercase underline decoration-border underline-offset-[6px] transition-colors hover:decoration-foreground"
              >
                Start a conversation
              </a>
            </div>
          </div>

          <figure className="relative">
            <div className="relative aspect-4/5 overflow-hidden bg-muted">
              <Photo
                seed={site.hero.seed}
                alt={site.hero.alt}
                sizes="(min-width: 1024px) 42vw, 100vw"
                priority
              />
            </div>
            <figcaption className="mt-4 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              {site.hero.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
