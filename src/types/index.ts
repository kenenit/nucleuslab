export interface ServiceContent {
  slug: string;
  title: string;
  summary: string;
  description: string;
  benefits: string[];
  process: string[];
  technologies: string[];
  icon: string;
}

export interface ProductContent {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  features: string[];
  storeUrlIos?: string;
  storeUrlAndroid?: string;
  liveDemoUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}
