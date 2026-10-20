import type { SiteContent } from "./types";

export const site: SiteContent = {
  name: "Famous Sandwiches",
  tagline: "Breakfast & sandwiches on Cassat Avenue",
  description:
    "Famous Sandwiches is a neighborhood breakfast and sandwich counter at 1185 Cassat Ave in Jacksonville's Murray Hill.",
  opened: "",
  address: {
    street: "1185 Cassat Ave",
    suite: "",
    neighborhood: "Murray Hill",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32205",
    country: "US",
    full: "1185 Cassat Ave, Jacksonville, FL 32205",
  },
  locationHint: "",
  geo: { latitude: null, longitude: null },
  mapUrl: "",
  phone: {
    display: "(904) 384-4429",
    tel: "tel:+19043844429",
    e164: "+19043844429",
  },
  closedNotice: "",
  hours: {
    timezone: "America/New_York",
    summary: "",
    openTime: null,
    closeTime: null,
  },
  priceRange: "",
  paymentNote: "",
  orderingLinks: [],
  socials: [],
  rating: null,
  testimonials: [],
  faq: [],
  menuNote: "",
  menu: [],
  photos: [],
  about: {
    heading: "Your neighborhood counter",
    paragraphs: [
      "Famous Sandwiches is a classic breakfast and sandwich counter on Cassat Avenue, right in Jacksonville's Murray Hill neighborhood.",
      "Stop in for breakfast or lunch, or give the counter a call with any questions.",
    ],
  },
  heroKicker: "Murray Hill · Jacksonville, FL",
  servesCuisine: ["Breakfast", "Sandwiches"],
  seo: {
    title: "Famous Sandwiches · Breakfast & Sandwiches in Murray Hill, Jacksonville",
    description:
      "Neighborhood breakfast and sandwich counter at 1185 Cassat Ave, Jacksonville, FL 32205. Call (904) 384-4429.",
  },
  footerCredit: "Built by nicklopacki.com",
};
