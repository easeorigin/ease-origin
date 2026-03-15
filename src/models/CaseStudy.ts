import mongoose, { Schema, model, models } from "mongoose";

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  heroDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

const caseStudySchema = new Schema<CaseStudy>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    shortDescription: { type: String, required: true },
    heroDescription: { type: String, required: true },
    overview: { type: String, required: true },
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    results: [{ type: String, required: true }],
    technologies: [{ type: String, required: true }],
  },
  { timestamps: true },
);

export const CaseStudyModel =
  models.CaseStudy || model<CaseStudy>("CaseStudy", caseStudySchema);
