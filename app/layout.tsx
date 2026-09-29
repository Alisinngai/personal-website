import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

/** Display face: a quiet, high-contrast serif for headings and the wordmark. */
const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-heading",
  display: "swap",
})

/** Text face: a neutral grotesque that stays out of the photographs' way. */
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Portfolio of a photographer working in natural light: portraits, editorial commissions, weddings and places.",
  keywords: [
    "photographer",
    "portrait photography",
    "editorial photography",
    "wedding photography",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.role}`,
    description:
      "Portraits, editorial commissions and weddings, photographed in natural light.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Portraits, editorial commissions and weddings, photographed in natural light.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased font-sans",
        sans.variable,
        heading.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
