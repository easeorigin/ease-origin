"use client";

import { useState } from "react";
import {
  useApplications,
  useUpdateApplicationStatus,
  useDeleteApplication,
  ApplicationStatus,
  Application,
} from "@/hooks/use-applications";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Search,
  MoreHorizontal,
  Eye,
  Trash2,
  Download,
  FileText,
} from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import dynamic from "next/dynamic";

const ResumeDrawer = dynamic(
  () => import("@/components/resume-drawer").then((mod) => mod.ResumeDrawer), // or mod.default if it’s default-exported
  { ssr: false },
);

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "reviewing":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    case "interview":
      return "bg-purple-500/10 text-purple-500 border-purple-500/20";
    case "rejected":
      return "bg-red-500/10 text-red-500 border-red-500/20";
    case "hired":
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    default:
      return "bg-gray-500/10 text-gray-500 border-gray-500/20";
  }
};

export default function Applications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [resumeApp, setResumeApp] = useState<Application | null>(null);

  const { data: applications, isLoading } = useApplications();
  const updateStatusMutation = useUpdateApplicationStatus();
  const deleteMutation = useDeleteApplication();
  const { toast } = useToast();

  const handleStatusUpdate = (id: string, status: string) => {
    updateStatusMutation.mutate(
      { id, status: status as ApplicationStatus },
      {
        onSuccess: () => toast({ title: "Status updated successfully" }),
      },
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this application?")) {
      deleteMutation.mutate(id, {
        onSuccess: () => {
          toast({ title: "Application deleted" });
          setSelectedApp(null);
        },
      });
    }
  };

  const filteredApps =
    applications?.filter(
      (app) =>
        app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Applications"
        description="Review and manage candidate applications"
      />

      <div className="flex items-center space-x-4 mb-4 bg-eo-blue p-4 rounded-xl border border-eo-blue/75">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search applicants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-eo-navy text-white focus:ring-2 focus:ring-eo-blue"
          />
        </div>
      </div>

      <div className="bg-eo-blue border border-eo-blue/75 rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-eo-navy/50 border-b border-eo-blue/75">
            <TableRow>
              <TableHead>Applicant</TableHead>
              <TableHead>Applied For</TableHead>
              <TableHead>Date Applied</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-32 text-center text-muted-foreground"
                >
                  Loading applications...
                </TableCell>
              </TableRow>
            ) : filteredApps.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-32 text-center text-muted-foreground"
                >
                  No applications found.
                </TableCell>
              </TableRow>
            ) : (
              filteredApps.map((app) => {
                const isFinalState =
                  app.status === "hired" || app.status === "rejected";
                return (
                  <TableRow
                    key={app._id}
                    className="hover:bg-muted/30 text-white"
                  >
                    <TableCell>
                      <div className="font-medium text-white">
                        {app.fullName}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {app.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-sm">{app.jobTitle}</div>
                      <div className="text-xs text-muted-foreground">
                        {app.country} - {app.currentLocation}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {format(new Date(app.createdAt), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`capitalize border ${getStatusColor(app.status)}`}
                      >
                        {app.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem onClick={() => setSelectedApp(app)}>
                            <Eye className="w-4 h-4 mr-2" /> View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setResumeApp(app)}>
                            <FileText className="w-4 h-4 mr-2" /> View Resume
                          </DropdownMenuItem>
                          {app.resumeUrl && (
                            <DropdownMenuItem asChild>
                              <a
                                href={app.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Download className="w-4 h-4 mr-2" /> Download
                                Resume
                              </a>
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                            Update Status
                          </DropdownMenuLabel>
                          {["reviewing", "interview", "rejected", "hired"].map(
                            (status) => (
                              <DropdownMenuItem
                                key={status}
                                onClick={() =>
                                  handleStatusUpdate(app._id, status)
                                }
                                disabled={isFinalState || app.status === status}
                                className="capitalize"
                              >
                                {status}
                              </DropdownMenuItem>
                            ),
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleDelete(app._id)}
                            className="text-destructive focus:text-destructive"
                          >
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Application Details Dialog */}
      <Dialog
        open={!!selectedApp}
        onOpenChange={(open) => !open && setSelectedApp(null)}
      >
        <DialogContent className="sm:max-w-150 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
          </DialogHeader>
          {selectedApp && (
            <div className="space-y-6 mt-4">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold">
                    {selectedApp.fullName}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedApp.email} • {selectedApp.phone}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={`capitalize border ${getStatusColor(selectedApp.status)}`}
                >
                  {selectedApp.status}
                </Badge>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2 text-primary">
                  Applied Position
                </h4>
                <p className="font-medium">{selectedApp.jobTitle}</p>
                <p className="text-sm text-muted-foreground">
                  {selectedApp.country} - {selectedApp.currentLocation}
                </p>
              </div>

              {selectedApp.skills && selectedApp.skills.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedApp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4 border-t border-border">
                {selectedApp.resumeUrl && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedApp(null);
                      setResumeApp(selectedApp);
                    }}
                  >
                    <FileText className="w-4 h-4 mr-2" /> View Resume
                  </Button>
                )}
                {selectedApp.resumeUrl && (
                  <Button asChild>
                    <a
                      href={selectedApp.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4 mr-2" /> Download Resume
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Resume Drawer */}
      <ResumeDrawer
        open={!!resumeApp}
        onClose={() => setResumeApp(null)}
        resumeKey={resumeApp?.resumeKey}
        applicantName={resumeApp?.fullName ?? ""}
        jobTitle={resumeApp?.jobTitle ?? ""}
      />
    </div>
  );
}
