import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email address").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (10 characters minimum)").max(4000),
  // Honeypot field — real users never fill this in; bots often do.
  website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email address").max(200),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const jobApplicationSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  resumeUrl: z.string().trim().min(5, "Add a link to your resume (Google Drive, LinkedIn, etc.)").max(500),
  coverLetter: z.string().trim().max(4000).optional().or(z.literal("")),
  jobListingId: z.string().optional(),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type JobApplicationInput = z.infer<typeof jobApplicationSchema>;
