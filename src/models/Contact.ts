import { Schema, models, model } from "mongoose";

export interface Contact {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  organisation: string;
  status?: "unread" | "read" | "responded";
}

const ContactSchema = new Schema<Contact>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    subject: { type: String, required: true },
    organisation: { type: String, required: true },
    status: {
      type: String,
      enum: ["unread", "read", "responded"],
      default: "unread",
    },
  },
  { timestamps: true },
);

export const ContactModel =
  models.Contact || model<Contact>("Contact", ContactSchema);