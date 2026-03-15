export type RecentApplicant = {
    id: string
    fullName: string;
    email: string;
    jobTitle: string;
    createdAt: string;
    status: "pending" | "reviewing" | "accepted" | "rejected";
};

export type RecentContact = {
    id: string
    name: string;
    email: string;
    subject: string;
    createdAt: string;
    status: "unread" | "read" | "responded";
};

export type AdminStats = {
    totalApplications: number;
    totalJobs: number;
    totalCaseStudies: number;
    totalContacts: number;
    recentApplications: RecentApplicant[];
    recentContacts: RecentContact[];
};