"use client";

import { useState } from "react";
import { useSubmittedResumes, Submission } from "@/hooks/use-submit";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Download, Eye } from "lucide-react";
import { format } from "date-fns";
import { ResumeDrawer } from "@/components/resume-drawer";

export default function SubmittedResumes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resumeApp, setResumeApp] = useState<Submission | null>(null);

  const { data: resumes, isLoading } = useSubmittedResumes();

  if(!resumes) {
    return null;
  }

  const filtered = resumes.filter(
    (app) =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (app.email || "").toLowerCase().includes(searchTerm.toLowerCase()),
  );

  

  return (
    <div className="space-y-6">
      <PageHeader
        title="Submitted Resumes"
        description="Browse and preview resumes from all applicants"
      />

      {/* Stats */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Resumes", value: withResumes.length },
        ].map(stat => (
          <div key={stat.label} className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div> */}

      {/* Search */}
      <div className="flex items-center bg-card p-4 rounded-xl border border-border">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, role, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-background"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>Applicant</TableHead>
              <TableHead>Date Submitted</TableHead>
              <TableHead className="text-right">Resume</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-32 text-center text-muted-foreground"
                >
                  Loading resumes…
                </TableCell>
              </TableRow>
            ) : filtered.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-32 text-center text-muted-foreground"
                >
                  {searchTerm
                    ? "No resumes match your search."
                    : "No resumes submitted yet."}
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((app) => (
                <TableRow key={app._id} className="hover:bg-muted/30">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-semibold text-primary">
                          {app.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {app.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {app.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {format(new Date(app.createdAt), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 gap-1.5"
                        onClick={() => setResumeApp(app)}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Preview</span>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="h-8 gap-1.5 text-muted-foreground"
                      >
                        <a
                          href={app.resumeUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Download</span>
                        </a>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {filtered.length > 0 && (
        <p className="text-xs text-muted-foreground text-center">
          Showing {filtered.length} of {resumes.length} submitted resume
          {resumes.length !== 1 ? "s" : ""}
        </p>
      )}

      <ResumeDrawer
        open={!!resumeApp}
        onClose={() => setResumeApp(null)}
        resumeUrl={resumeApp?.resumeUrl}
        applicantName={resumeApp?.name ?? ""}
      />
    </div>
  );
}
