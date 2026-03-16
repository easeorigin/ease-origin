/**
 * Stock image manifest for the EaseOrigin website.
 *
 * Each entry maps a logical key to the image path, alt text, and credit source.
 * Attribution is included as a best practice even when not strictly required.
 */

export interface StockImage {
  src: string;
  alt: string;
  credit: string;
}

export const stockImages: Record<string, StockImage> = {
  aboutTeam: {
    src: "/images/about-team.jpg",
    alt: "Diverse team collaborating around a conference table",
    credit: "Unsplash",
  },
  cybersecurity: {
    src: "/images/cybersecurity.jpg",
    alt: "Cybersecurity operations center with monitors displaying security dashboards",
    credit: "Unsplash",
  },
  cloudInfrastructure: {
    src: "/images/cloud-infrastructure.jpg",
    alt: "Cloud data center server racks with blue lighting",
    credit: "Unsplash",
  },
  caseStudiesHero: {
    src: "/images/case-studies-hero.jpg",
    alt: "Technology project delivery and case study analysis",
    credit: "Unsplash",
  },
  careersOffice: {
    src: "/images/careers-office.jpg",
    alt: "Modern technology office workspace",
    credit: "Unsplash",
  },
  contactHero: {
    src: "/images/contact-hero.jpg",
    alt: "Professional business meeting in a modern office",
    credit: "Unsplash",
  },
  solutionsHero: {
    src: "/images/solutions-hero.jpg",
    alt: "Technology solutions and infrastructure overview",
    credit: "Unsplash",
  },
  blogHero: {
    src: "/images/blog-hero.jpg",
    alt: "Technology insights, research, and industry articles",
    credit: "Unsplash",
  },
};
