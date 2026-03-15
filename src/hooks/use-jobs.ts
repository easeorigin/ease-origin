"use client";

import { api, publicApi } from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

export type WorkType = "onsite" | "remote" | "hybrid";

export type EmploymentType = "contract" | "part-time" | "full-time";

export type Category =
  | "software engineering"
  | "cloud engineering"
  | "cybersecurity"
  | "data & analytics"
  | "project management"
  | "devOps"
  | "others";

  export type Status = "open" | "closed";

export type Job = {
  id: string;
  title: string;
  category: Category;
  location: string;
  workType: WorkType;
  employmentType: EmploymentType;
  aboutRole: string;
  shortDescription: string;
  responsibilities: string[];
  qualifications: string[];
  technologies: string[];
  salaryRange: string;
  applicationDeadline: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
};

export type CreateJob = {
  title: string;
  category: Category;
  location: string;
  workType: WorkType;
  employmentType: EmploymentType;
  aboutRole: string;
  shortDescription: string;
  responsibilities: string[];
  qualifications: string[];
  technologies: string[];
  salaryRange: string;
  applicationDeadline: string;
};

export type UpdateJob = CreateJob & {
  id: string;
};

export const usePublicJobs = () => {
  return useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const { data } = await publicApi.get<Job[]>("/jobs");
      return data;
    },
    enabled: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useJobs = () => {
  return useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const { data } = await api.get<Job[]>("/admin/jobs");
      return data;
    },
    enabled: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useCreateJob = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<Job, Error, CreateJob>({
    mutationFn: async (data) => {
      const { data: res} = await api.post<Job>("/jobs", data);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      toast({
        title: "Job Created",
        description: "New role has been successfully added.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useUpdateJob = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<Job, Error, UpdateJob>({
    mutationFn: async ({ id, ...data }) => {
      const { data: res } = await api.put<Job>(`/jobs/${id}`, data);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      toast({
        title: "Job Updated",
        description: "The job has been successfully updated.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteJob = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/jobs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      toast({
        title: "Job Deleted",
        description: "The job has been successfully deleted.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useCloseJob = () => {
    const queryClient = useQueryClient();
    const { toast } = useToast();
    
    return useMutation<void, Error, string>({
        mutationFn: async (id) => {
            await api.post(`/jobs/${id}/close`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["jobs"] });
            toast({
                title: "Job Closed",
                description: "The job has been successfully closed.",
            });
        },
        onError: (error) => {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            });
        },
    });
}
