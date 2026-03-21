export type RecentApplicant = {
    id: string
    fullName: string;
    email: string;
    jobTitle: string;
    createdAt: string;
    status: "pending" | "reviewing" | "accepted" | "rejected";
};

export type RecentSubscriber = {
    _id: string
    email: string;
    subscribedAt: string;
};

export type AdminStats = {
    totalApplications: number;
    totalJobs: number;
    totalSubscribers: number;
    totalResumeSubmissions: number;
    recentSubscribers: RecentSubscriber[];
    recentApplications: RecentApplicant[];
};