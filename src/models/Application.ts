/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose, { Schema, model, models } from "mongoose";

const ExperienceSchema = new Schema({
  id: String,
  roleTitle: String,
  employer: String,
  employmentType: String,
  startDate: String,
  endDate: String,
  currentRole: Boolean,
  description: String,
  technologies: [String],
});

const EducationSchema = new Schema({
  id: String,
  degree: String,
  courseOfStudy: String,
  school: String,
  specialization: String,
  startDate: String,
  endDate: String,
});

const ApplicationSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    currentLocation: { type: String, required: true },
    willingToRelocate: { type: Boolean, required: true },
    summary: { type: String, required: true },
    skills: [{ type: String, required: true }],
    noticePeriod: { type: String, required: true },
    linkedin: { type: String },
    github: { type: String },
    portfolio: { type: String },
    coverLetterUrl: { type: String },
    resumeUrl: { type: String, required: true },
    experiences: [ExperienceSchema],
    education: [EducationSchema],
    workAuthorization: { type: String },
    clearance: { type: String },
    jobTitle: { type: String },
    status: {
      type: String,
      enum: ["pending", "reviewing", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

export const ApplicationModel =
  models.Application || model("Application", ApplicationSchema);
