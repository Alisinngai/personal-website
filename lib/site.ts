/**
 * Everything you are likely to edit lives in this file: your name, your email,
 * the words on the page, the photo placeholders and the pricing.
 *
 * The images are placeholder photographs served by picsum.photos. Each one is
 * addressed by a `seed`, so it stays the same picture every time the page is
 * loaded. Replace a seed with your own image file (put the file in /public and
 * use a path such as "/work/harbour-first-light.jpg") — see the README for the
 * full list of slots.
 */

export type Photo = {
  /** Picsum seed — swap for a path in /public when your own photo is ready. */
  seed: string
  title: string
  /** Used as the image alt text, so describe what the photograph shows. */
  alt: string
}

export type PricingTier = {
  name: string
  price: string
  summary: string
  includes: string[]
}

export const site = {
  /** TODO: your name, as you want it to appear in the header and footer. */
  name: "Alisinngai Lynn",
  role: "Photographer",
  /** TODO: your address — this is the link people will reach you on. */
  email: "hello@example.com",
  /** TODO: prices are placeholders. Change the currency here if you like. */
  currency: "$",

  headline: "Quiet pictures of people and places.",

  /** The photograph beside the introduction. */
  hero: {
    seed: "self-portrait-window",
    alt: "Placeholder for a photograph that introduces you — a self-portrait works well.",
    caption: "Self-portrait, late afternoon",
  },

  intro: [
    "I photograph with natural light, which means slow mornings, long conversations and very little equipment. Most of the work here was made on location — in living rooms, on the street, at the edge of a field.",
    "I take on portraits, editorial commissions and the occasional wedding. If you have something you would like photographed, tell me about it. I will tell you honestly what I can make of it.",
  ],

  /** Shown under the introduction as a short list of what you take on. */
  subjects: [
    "Portraits & families",
    "Editorial & brand",
    "Weddings & celebrations",
    "Places & travel",
  ],

  work: {
    heading: "Selected work",
    intro:
      "A small selection from the last few years. Every photograph here is a placeholder — the real ones are still in the darkroom.",
    photos: [
      {
        seed: "harbour-first-light",
        title: "Harbour, first light",
        alt: "Placeholder photograph standing in for a harbour scene at dawn.",
      },
      {
        seed: "room-with-morning",
        title: "Room with morning light",
        alt: "Placeholder photograph standing in for an interior lit by morning sun.",
      },
      {
        seed: "north-field",
        title: "North field",
        alt: "Placeholder photograph standing in for a wide landscape.",
      },
      {
        seed: "studio-one-light",
        title: "Studio, one light",
        alt: "Placeholder photograph standing in for a studio portrait.",
      },
      {
        seed: "river-bend",
        title: "River bend",
        alt: "Placeholder photograph standing in for a river landscape.",
      },
      {
        seed: "market-lane",
        title: "Market lane, early",
        alt: "Placeholder photograph standing in for a street scene.",
      },
      {
        seed: "quiet-street",
        title: "Quiet street",
        alt: "Placeholder photograph standing in for a quiet city street.",
      },
      {
        seed: "window-seat",
        title: "Window seat",
        alt: "Placeholder photograph standing in for a portrait by a window.",
      },
      {
        seed: "after-rain",
        title: "After rain",
        alt: "Placeholder photograph standing in for a wet landscape.",
      },
      {
        seed: "long-shadows",
        title: "Long shadows",
        alt: "Placeholder photograph standing in for a late afternoon scene.",
      },
    ] satisfies Photo[],
  },

  pricing: {
    heading: "Pricing",
    intro:
      "Every commission is quoted individually, because a two-hour portrait and a three-day wedding are not the same job. The figures below are starting points; they include planning, the shoot itself and the retouching afterwards.",
    note:
      "Travel beyond the city is charged at cost. Prints, albums and extra shooting days can be added to any commission.",
    tiers: [
      {
        name: "Portrait",
        price: "280",
        summary: "One person, one place, one hour of unhurried attention.",
        includes: [
          "Up to 1 hour of shooting",
          "One location of your choosing",
          "15 retouched photographs",
          "Private online gallery",
        ],
      },
      {
        name: "Editorial & brand",
        price: "650",
        summary: "Half a day for a story, a product or a small team.",
        includes: [
          "Up to 4 hours of shooting",
          "Planning call and shot list",
          "30 retouched photographs",
          "Licence for web and print",
        ],
      },
      {
        name: "Weddings & events",
        price: "1,800",
        summary: "A full day, from getting ready to the last dance.",
        includes: [
          "Up to 10 hours of coverage",
          "300 or more edited photographs",
          "Preview gallery within 72 hours",
          "Second photographer on request",
        ],
      },
    ] satisfies PricingTier[],
  },

  contact: {
    heading: "Contact",
    intro:
      "Email is the quickest way to reach me and I answer every message within two days.",
    /** Helps people write a first email that you can actually quote from. */
    checklist: [
      "The date and the place",
      "What the photographs are for",
      "Anything you have seen and liked",
    ],
  },
} as const

export const navItems = [
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const
