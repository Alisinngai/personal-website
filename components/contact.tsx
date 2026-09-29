import { site } from "@/lib/site"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-b border-border/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-[0.7rem] tracking-[0.32em] text-muted-foreground uppercase">
              Say hello
            </p>
            <h2 className="mt-5 font-heading text-3xl sm:text-4xl">
              {site.contact.heading}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {site.contact.intro}
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 font-heading text-2xl break-all underline decoration-border underline-offset-[10px] transition-colors hover:decoration-foreground sm:text-3xl lg:text-4xl"
            >
              {site.email}
            </a>

            <div className="mt-10 border-t border-border/70 pt-6">
              <p className="text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
                A useful first email
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {site.contact.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
