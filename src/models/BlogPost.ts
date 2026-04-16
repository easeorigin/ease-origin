import mongoose, { Schema, Document } from "mongoose";

export type BlogCategory =
  | "cloud & infrastructure"
  | "cybersecurity"
  | "devOps"
  | "program management"
  | "company news"
  | "federal iT"
  | "aI & data"
  | "enterprise platforms"
  | "agile & delivery"
  | "govCon insights"
  | "industry insights"
  | "perspectives";

export interface BlogPostDocument extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  imageUrl: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new Schema<BlogPostDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: { type: String, required: true, unique: true, trim: true },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: [
        "cloud & infrastructure",
        "cybersecurity",
        "devOps",
        "program management",
        "company news",
        "federal iT",
        "aI & data",
        "enterprise platforms",
        "agile & delivery",
        "govCon insights",
        "industry insights",
        "perspectives"
      ]
    },
    tags:[
      {type: String,
        required: true,
      }
    ],
    author: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const BlogPost =
  mongoose.models.BlogPost ?? mongoose.model("BlogPost", BlogPostSchema);
