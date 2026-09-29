import { Photo } from "@/components/photo"
import { site } from "@/lib/site"

/** Editorial rhythm: wide pairs, then a row of three, repeating. */
const layout = [
  "sm:col-span-3 aspect-4/5",
  "sm:col-span-3 aspect-4/5",
  "sm:col-span-2 aspect-3/4",
  "sm:col-span-2 aspect-3/4",
  "sm:col-span-2 aspect-3/4",
  "sm:col-span-3 aspect-4/5",
  "sm:col-span-3 aspect-4/5",
  "sm:col-span-2 aspect-3/4",
  "sm:col-span-2 aspect-3/4",
  "sm:col-span-2 aspect-3/4",
]

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-border/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.7rem] tracking-[0.32em] text-muted-foreground uppercase">
              Portfolio
            </p>
            <h2 className="mt-5 font-heading text-3xl sm:text-4xl">
              {site.work.heading}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.work.intro}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-6">
          {site.work.photos.map((photo, index) => (
            <li key={photo.seed} className={layout[index % layout.length]}>
              <figure className="flex h-full flex-col">
                <div className="relative w-full flex-1 overflow-hidden bg-muted">
                  <Photo
                    seed={photo.seed}
                    alt={photo.alt}
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <figcaption className="mt-3 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {photo.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
