export interface JobData {
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

export const jobs: JobData[] = [
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Addis Ababa / Remote",
    description: "Building interfaces across client and product work using React, Next.js, and Tailwind.",
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Addis Ababa / Remote",
    description: "Designing APIs and data models across our product suite and client platforms.",
  },
  {
    slug: "product-design-intern",
    title: "Product Design Intern",
    department: "Design",
    type: "Internship",
    location: "Addis Ababa",
    description: "Supporting UI/UX work across live client projects, with direct mentorship from senior designers.",
  },
];
