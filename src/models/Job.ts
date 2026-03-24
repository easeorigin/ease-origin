/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose, { Schema, model, models } from "mongoose";

export type WorkType = "remote" | "hybrid" | "onsite";
export type Category =
  | "software engineering"
  | "cloud engineering"
  | "cybersecurity"
  | "data & analytics"
  | "project management"
  | "devops"
  | "web design";

  export type EmploymentType = "contract" | "part-time" | "full-time"

export interface Job {
  slug: string;
  title: string;
  category: Category;
  location: string;
  workType: WorkType;
  employmentType: EmploymentType;
  aboutRole: string;
  responsibilities: string[];
  qualifications: string[];
  technologies: string[];
  clearance?: string;
  applicationDeadline: Date;
  status: "draft" | "published" | "closed";
}

const jobSchema = new Schema<Job>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, enum: [
    "software engineering",
    "cloud engineering",
    "cybersecurity",
    "data & analytics",
    "project management",
    "devOps",
    "web design",
  ], required: true },
    location: { type: String, required: true },
    workType: { type: String, enum: ["remote", "hybrid", "onsite"], required: true },
    employmentType: { type: String, enum: ["contract", "part-time", "full-time"], required: true },
    aboutRole: { type: String, required: true },
    responsibilities: [{ type: String, required: true }],
    qualifications: [{ type: String, required: true }],
    technologies: [{ type: String, required: true }],
    clearance: { type: String },
    applicationDeadline: { type: Date, required: true},
    status: {
  type: String,
  enum: ["draft", "published", "closed"],
  default: "draft",
}
  },
  { timestamps: true },
);

export const JobModel = models.Job || model<Job>("Job", jobSchema);
