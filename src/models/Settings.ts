import { Schema, model, models } from "mongoose";

export type SocialLinks = {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
};

export type Address = {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  full?: string;
};

export type Contact = {
  email?: string;
  phone?: string;
};

export type Hours = {
  days?: string;
  time?: string;
};

export type Identifiers = {
  uei?: string;
  cage?: string;
  naics?: string;
};

export interface SettingSchema {
  company: {
    name: string;
    shortName?: string;
    description?: string;
    url?: string;
    domain?: string;

    address?: Address;
    contact?: Contact;
    hours?: Hours;
    social?: SocialLinks;
    identifiers?: Identifiers;
  };

  notifications: {
    newSubscriber: boolean;
    newResume: boolean;
    newJobApplication: boolean;
  };
}

const settingSchema = new Schema<SettingSchema>(
  {
    company: {
      name: { type: String, required: true },
      shortName: { type: String },
      description: { type: String },
      url: { type: String },
      domain: { type: String },

      address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        full: String,
      },

      contact: {
        email: { type: String },
        phone: { type: String },
      },

      hours: {
        days: String,
        time: String,
      },

      social: {
        linkedin: String,
        twitter: String,
        facebook: String,
        instagram: String,
      },

      identifiers: {
        uei: String,
        cage: String,
        naics: String,
      },
    },

    notifications: {
      newSubscriber: { type: Boolean, default: true },
      newResume: { type: Boolean, default: true },
      newJobApplication: { type: Boolean, default: true },
    },
  },
  {
    timestamps: true,
  }
);

export const Setting =
  models.Setting || model<SettingSchema>("Setting", settingSchema);