"use client";

import { useStats } from "@/hooks/use-stats";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Newspaper, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { format, isValid } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { data: stats, isLoading } = useStats();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <PageHeader
          title="Dashboard"
          description="Overview of your platform activity"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-32 rounded-xl bg-eo-navy z-20 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Jobs",
      value: stats?.totalJobs || 0,
      icon: Briefcase,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Applications",
      value: stats?.totalApplications || 0,
      icon: FileText,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Blogs",
      value: 0 || 0,
      icon: Newspaper,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Subscribers",
      value: stats?.totalSubscribers || 0,
      icon: Mail,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Overview of your platform activity"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Card
            key={index}
            className="border-[#080f1c] bg-eo-navy z-20 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white mb-1">
                  {stat.title}
                </p>
                <h3 className="text-3xl font-sans font-bold text-white">
                  {stat.value}
                </h3>
              </div>
              <div
                className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Applications */}
        <Card className="border-[#080f1c] bg-eo-navy z-20 shadow-sm flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-border/50">
            <CardTitle className="text-lg font-sans text-muted-foreground">
              Recent Applications
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-eo-blue"
              asChild
            >
              <Link
                href="/admin/applications"
                className="flex items-center gap-1"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0 flex-1">
            {stats?.recentApplications &&
            stats.recentApplications.length > 0 ? (
              <div className="divide-y divide-border/50">
                {stats.recentApplications.map((app) => (
                  <div
                    key={app.id}
                    className="p-4 hover:bg-muted/30 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        {app.fullName}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {app.jobTitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant="outline"
                        className="mb-1 capitalize text-xs px-2 py-0 h-5"
                      >
                        {app.status}
                      </Badge>
                      <p className="text-[10px] text-muted-foreground">
                        {format(new Date(app.createdAt), "MMM d, yyyy")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-muted-foreground text-sm">
                No recent applications found.
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Contacts */}
        <Card className="border-[#080f1c] bg-eo-navy z-20 shadow-sm flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-border/50">
            <CardTitle className="text-lg font-sans text-muted-foreground">
              Recent Subscribers
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-eo-blue"
              asChild
            >
              <Link
                href="/admin/subscribers"
                className="flex items-center gap-1"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0 flex-1">
            {stats?.recentSubscribers && stats.recentSubscribers.length > 0 ? (
              <div className="divide-y divide-border/50">
                {stats.recentSubscribers.map((msg) => (
                  <div
                    key={msg._id}
                    className="p-4 hover:bg-muted/30 transition-colors flex items-center justify-between"
                  >
                    <div className="truncate pr-4">
                      <p className="font-medium text-sm text-foreground flex items-center gap-2">
                        {msg.email}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[10px] text-muted-foreground">
                        {msg.subscribedAt && isValid(new Date(msg.subscribedAt))
                          ? format(new Date(msg.subscribedAt), "MMM d, yyyy")
                          : "—"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-muted-foreground text-sm">
                No subscriptions found.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
