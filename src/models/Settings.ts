import { Schema, model, models } from "mongoose";

export type SocialLinks = {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
};

export interface SettingSchema {
    companyName: string;
    companyDescription: string;
    contactEmail: string;
    contactPhone: string;
    socialLinks: SocialLinks;
}

const settingSchema = new Schema<SettingSchema>({
    companyName: { type: String, required: true },
    companyDescription: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
    socialLinks: {
        linkedin: { type: String },
        twitter: { type: String },
        facebook: { type: String },
        instagram: { type: String },
    },
}, {
    timestamps: true,
});

export const Setting = models.Setting || model<SettingSchema>("Setting", settingSchema);