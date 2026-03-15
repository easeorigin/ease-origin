import mongoose, { Schema, model, models } from "mongoose";

export type WorkType = "Remote" | "Hybrid" | "Onsite";
export type Category =
  | "Software Engineering"
  | "Cloud Engineering"
  | "Cybersecurity"
  | "Data & Analytics"
  | "Project Management"
  | "DevOps";

export interface Job {
  slug: string;
  title: string;
  category: Category;
  location: string;
  workType: WorkType;
  shortDescription: string;
  overview: string;
  responsibilities: string[];
  qualifications: string[];
  technologies: string[];
  clearance?: string;
}

const jobSchema = new Schema<Job>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    workType: { type: String, required: true },
    shortDescription: { type: String, required: true },
    overview: { type: String, required: true },
    responsibilities: [{ type: String, required: true }],
    qualifications: [{ type: String, required: true }],
    technologies: [{ type: String, required: true }],
    clearance: { type: String },
  },
  { timestamps: true },
);

export const JobModel = models.Job || model<Job>("Job", jobSchema);
