"use client";

import { useState } from "react";
// import { useJobs, useCreateJob, useUpdateJob, useDeleteJob, useCloseJob } from "@/hooks/use-jobs";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, Search, MoreHorizontal, Edit, Trash2, XCircle, Briefcase, X } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { Job, useCloseJob, useCreateJob, useDeleteJob, useJobs, useUpdateJob } from "@/hooks/use-jobs";

const jobFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.enum(["software engineering", "cloud engineering", "cybersecurity", "data & analytics", "project management", "devOps", "web design", "others"]),
  location: z.string().min(1, "Location is required"),
  workType: z.enum(["remote", "hybrid", "onsite"]),
  employmentType: z.enum(["contract", "part-time", "full-time"]),
  aboutRole: z.string().min(1, "this field is required"),
  responsibilities: z.array(z.string()).default([]),
  qualifications: z.array(z.string()).default([]),
  technologies: z.array(z.string()).default([]),
  salaryRange: z.string().min(1, "This field is required"),
  applicationDeadline: z.string().min(1, "This field is required"),
  status: z.enum(["draft","published", "closed"]).default("draft"),
});

type JobFormValues = z.infer<typeof jobFormSchema>;

function ListField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string[];
  onChange: (val: string[]) => void;
}) {
  const [inputVal, setInputVal] = useState("");

  const addItem = () => {
    const trimmed = inputVal.trim();
    if (!trimmed) return;
    onChange([...value, trimmed]);
    setInputVal("");
  };

  const removeItem = (idx: number) => {
    onChange(value.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium leading-none">{label}</p>
      <div className="flex gap-2">
        <Input
          placeholder={placeholder}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addItem();
            }
          }}
          className="flex-1"
        />
        <Button type="button" variant="secondary" size="sm" onClick={addItem} className="shrink-0">
          Add
        </Button>
      </div>
      {value.length > 0 && (
        <ul className="space-y-1.5 mt-2">
          {value.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm bg-muted/50 border border-border rounded-md px-3 py-2"
            >
              <span className="flex-1 leading-snug">{item}</span>
              <button
                type="button"
                onClick={() => removeItem(idx)}
                className="text-muted-foreground hover:text-destructive mt-0.5 shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  const { data: jobs, isLoading } = useJobs();
  console.log("jobs:", jobs);
  const createMutation = useCreateJob();
  const updateMutation = useUpdateJob();
  const deleteMutation = useDeleteJob();
  const closeMutation = useCloseJob();
  const { toast } = useToast();

  const defaultValues: JobFormValues = {
    title: "",
    category: "others",
    location: "",
    workType: "onsite",
    employmentType: "full-time",
    aboutRole: "",
    responsibilities: [],
    qualifications: [],
    technologies: [],
    salaryRange: "",
    applicationDeadline: "",
    status: "draft",
  };

  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues,
  });

  const openCreateDialog = () => {
    setEditingJob(null);
    form.reset(defaultValues);
    setIsDialogOpen(true);
  };

  const openEditDialog = (job: Job) => {
    setEditingJob(job);
    form.reset({
      title: job.title,
      category: job.category,
      location: job.location,
      workType: job.workType,
      employmentType: job.employmentType,
      aboutRole: job.aboutRole || "",
      responsibilities: (job.responsibilities as string[]) || [],
      qualifications: (job.qualifications as string[]) || [],
      technologies: (job.technologies as string[]) || [],
      salaryRange: job.salaryRange || "",
      applicationDeadline: job.applicationDeadline || "",
      status: job.status,
    });
    setIsDialogOpen(true);
  };

  const onSubmit = (data: JobFormValues) => {
    if (editingJob) {
      updateMutation.mutate({ id: editingJob._id, ...data }, {
        onSuccess: () => {
          toast({ title: "Job updated successfully" });
          setIsDialogOpen(false);
        },
      });
    } else {
      createMutation.mutate(data, {
        onSuccess: () => {
          toast({ title: "Job created successfully" });
          setIsDialogOpen(false);
        },
      });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this job?")) {
      deleteMutation.mutate(id, {
        onSuccess: () => toast({ title: "Job deleted" }),
      });
    }
  };

  const handleClose = (id: string) => {
    closeMutation.mutate(id, {
      onSuccess: () => toast({ title: "Job closed" }),
    });
  };

  const filteredJobs = jobs?.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.category.toLowerCase().includes(searchTerm.toLowerCase()),
  ) || [];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Jobs Management"
        description="Manage job postings and open positions"
        action={
          <Button onClick={openCreateDialog} className="shadow-md">
            <Plus className="w-4 h-4 mr-2" /> Add New Job
          </Button>
        }
      />

      <div className="flex items-center space-x-4 mb-4 bg-eo-navy p-4 rounded-xl border border-border">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-eo-blue"
          />
        </div>
      </div>

      <div className="bg-eo-navy border border-border rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-eo-navy/50">
            <TableRow>
              <TableHead>Job Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Posted Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">Loading jobs...</TableCell>
              </TableRow>
            ) : filteredJobs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Briefcase className="w-8 h-8 text-white" />
                    No jobs found.
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredJobs.map((job) => (
                <TableRow key={job._id} className="text-white">
                  <TableCell>
                    <div className="font-bold text-white">{job.title}</div>
                    <div className="text-xs text-muted-foreground">{job.category}</div>
                  </TableCell>
                  <TableCell className="text-sm">{job.location}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm capitalize">{job.employmentType}</span>
                      <span className="text-xs text-muted-foreground capitalize">{job.workType}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    {format(new Date(job.createdAt), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell>
                    <Badge variant={job.status === "draft" ? "default" : "secondary"} className="capitalize">
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 border-white">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem onClick={() => openEditDialog(job)}>
                          <Edit className="w-4 h-4 mr-2" /> Edit Job
                        </DropdownMenuItem>
                        {job.status === "draft" && (
                          <DropdownMenuItem onClick={() => handleClose(job._id)}>
                            <XCircle className="w-4 h-4 mr-2" /> Close Job
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem onClick={() => handleDelete(job._id)} className="text-destructive focus:text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-187.5 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingJob ? "Edit Job" : "Add New Job"}</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="title" render={({ field }) => (
                  <FormItem><FormLabel>Job Title *</FormLabel><FormControl><Input placeholder="e.g. Senior Software Engineer" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="category" render={({ field }) => (
                  <FormItem><FormLabel>Category *</FormLabel><FormControl><Input placeholder="e.g. Engineering" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="location" render={({ field }) => (
                  <FormItem><FormLabel>Location *</FormLabel><FormControl><Input placeholder="e.g. Washington, DC" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="workType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Type *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="onsite">On-site</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="employmentType" render={({ field }) => (
                  <FormItem><FormLabel>Employment Type *</FormLabel><FormControl><Input placeholder="e.g. Full-time, Contract" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="salaryRange" render={({ field }) => (
                  <FormItem><FormLabel>Salary Range</FormLabel><FormControl><Input placeholder="e.g. $80,000 - $120,000" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="applicationDeadline" render={({ field }) => (
                  <FormItem><FormLabel>Application Deadline</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="status" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              {/* About Role */}
              <FormField control={form.control} name="aboutRole" render={({ field }) => (
                <FormItem>
                  <FormLabel>About Role</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the role, team, and what success looks like..."
                      rows={4}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* List Fields */}
              <FormField control={form.control} name="responsibilities" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ListField
                      label="Responsibilities"
                      placeholder="Add a responsibility and press Enter"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="qualifications" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ListField
                      label="Qualifications"
                      placeholder="Add a qualification and press Enter"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="technologies" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ListField
                      label="Technologies"
                      placeholder="Add a technology and press Enter"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                  {editingJob ? "Save Changes" : "Create Job"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
