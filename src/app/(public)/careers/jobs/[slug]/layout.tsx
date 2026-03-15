import type { Metadata } from "next";
import { getJobBySlug, jobs } from "@/data/jobs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  return {
    title: job ? job.title : "Job Details",
    description: job
      ? job.shortDescription
      : "View job details at EaseOrigin.",
    openGraph: job
      ? {
          title: job.title,
          description: job.shortDescription,
          type: "article",
          siteName: "EaseOrigin",
        }
      : undefined,
  };
}

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export default function JobDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
