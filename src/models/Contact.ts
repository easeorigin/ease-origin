import { Schema, models, model } from "mongoose";

export interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
}

const ContactSchema = new Schema<Contact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    subject: { type: String, required: true },
    company: { type: String, required: true },
  },
  { timestamps: true },
);

export const ContactModel =
  models.Contact || model<Contact>("Contact", ContactSchema);