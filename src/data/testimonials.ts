export interface TestimonialData {
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
}

export const testimonials: TestimonialData[] = [
  {
    quote: "Nucleus Labs took a vague idea and turned it into a working product in weeks, not months. The communication was constant and clear.",
    name: "Sara T.",
    role: "Founder, hospitality startup",
    initials: "S.T.",
    rating: 5,
  },
  {
    quote: "What impressed us most was how much they cared about the details — performance, accessibility, all of it, without us having to ask.",
    name: "Daniel M.",
    role: "Operations Lead, retail chain",
    initials: "D.M.",
    rating: 5,
  },
  {
    quote: "They didn't just build what we asked for — they pushed back when it mattered and the product is better for it.",
    name: "Ruth A.",
    role: "Director, NGO",
    initials: "R.A.",
    rating: 5,
  },
  {
    quote: "Response time on support requests has been excellent. Nothing has felt like it was handed off and forgotten.",
    name: "Michael K.",
    role: "IT Manager, education",
    initials: "M.K.",
    rating: 5,
  },
  {
    quote: "The handoff documentation alone saved us weeks when we brought on our own engineer later.",
    name: "Liya G.",
    role: "COO, healthcare startup",
    initials: "L.G.",
    rating: 4,
  },
  {
    quote: "Straightforward pricing, straightforward timelines, and they hit both. Rare combination.",
    name: "Samuel B.",
    role: "Owner, restaurant group",
    initials: "S.B.",
    rating: 5,
  },
];
