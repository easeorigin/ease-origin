import { Schema, model, models } from "mongoose";

interface SubmitResume {
  name: string;
  email: string;
  country: string;
  expertise: string;
  resumeUrl: string;
  message: string;
  resumeKey: string;
};

const SubmitResumeSchema = new Schema<SubmitResume>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  expertise: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  message: { type: String, required: true },
  resumeKey: { type: String, required: true },
}, { timestamps: true });

export const SubmitResumeModel = models.SubmitResume || model<SubmitResume>("SubmitResume", SubmitResumeSchema);