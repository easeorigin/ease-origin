export type WorkType = "onsite" | "remote" | "hybrid";

export type EmploymentType = "contract" | "part-time" | "full-time";

export type Category =
  | "software engineering"
  | "cloud engineering"
  | "cybersecurity"
  | "data & analytics"
  | "project management"
  | "devOps"
  | "web design"
  | "others";
export interface Job {
  slug: string;
  title: string;
  category: Category;
  location: string;
  workType: WorkType;
  shortDescription?: string;
  aboutRole?: string;
  responsibilities: string[];
  qualifications: string[];
  technologies: string[];
  clearance?: string;
}

/**
 * No open positions.
 *
 * This list previously carried five requisitions that implied a standing
 * engineering bench. EaseOrigin does not have one, and open reqs are the
 * kind of claim a prime or contracting officer checks. Add an entry here
 * only when the role is genuinely open and funded.
 */
export const jobs: Job[] = [];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export const CATEGORIES: Category[] = [
  "software engineering",
  "cloud engineering",
  "cybersecurity",
  "data & analytics",
  "project management",
  "devOps",
];

export const WORK_TYPES: WorkType[] = ["remote", "hybrid", "onsite"];

export const LOCATIONS = [
  "Anywhere",
  "United States",
  "Canada",
  "UK",
  "Nigeria",
  "India",
  "Other",
];
