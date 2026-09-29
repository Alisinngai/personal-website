import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * A `seed` is either a path to an image in /public (once you have your own
 * photographs) or a picsum.photos seed, which keeps the placeholder stable.
 */
export function photoSrc(seed: string) {
  if (seed.startsWith("/")) {
    return seed
  }

  return `https://picsum.photos/seed/${seed}/1600/2000`
}

type PhotoProps = {
  seed: string
  alt: string
  className?: string
  sizes: string
  priority?: boolean
}

export function Photo({ seed, alt, className, sizes, priority }: PhotoProps) {
  const isPlaceholder = !seed.startsWith("/")

  return (
    <Image
      src={photoSrc(seed)}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      // Placeholders are fetched straight from picsum.photos by the browser.
      // The optimiser would fetch them server-side instead, which fails behind
      // networks that resolve image hosts to a private address range.
      unoptimized={isPlaceholder}
      className={cn("object-cover", className)}
    />
  )
}
