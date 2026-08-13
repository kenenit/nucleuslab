export interface JobData {
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

// Real open roles are managed from the admin dashboard (Careers) and
// pulled from the database at request time — see src/lib/content.ts.
// This stays empty so the site never shows fabricated job listings.
export const jobs: JobData[] = [];
