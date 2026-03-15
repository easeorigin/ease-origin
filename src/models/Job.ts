/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose, { Schema, model, models } from "mongoose";

export type WorkType = "Remote" | "Hybrid" | "Onsite";
export type Category =
  | "Software Engineering"
  | "Cloud Engineering"
  | "Cybersecurity"
  | "Data & Analytics"
  | "Project Management"
  | "DevOps";

  export type EmploymentType = "Contract" | "Part-time" | "Full-time"

export interface Job {
  slug: string;
  title: string;
  category: Category;
  location: string;
  workType: WorkType;
  employmentType: EmploymentType;
  shortDescription: string;
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
    "Software Engineering",
    "Cloud Engineering",
    "Cybersecurity",
    "Data & Analytics",
    "Project Management",
    "DevOps",
  ], required: true },
    location: { type: String, required: true },
    workType: { type: String, enum: ["Remote", "Hybrid", "Onsite"], required: true },
    employmentType: { type: String, enum: ["Contract", "Part-time", "Full-time"], required: true },
    shortDescription: { type: String, required: true },
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
