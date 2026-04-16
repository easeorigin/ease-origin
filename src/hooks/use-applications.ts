"use client";

import { api, publicApi } from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";

export type ApplicationStatus =
  | "pending"
  | "interwiew"
  | "reviewing"
  | "rejected"
  | "hired";

export type Experience = {
  _id: string;
  roleTitle: string;
  employer: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  currentRole: boolean;
  description: string;
  technologies: string[];
};

export type Education = {
  _id: string;
  degree: string;
  courseOfStudy: string;
  school: string;
  specialization: string;
  startDate: string;
  endDate: string;
};

export type Application = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  currentLocation: string;
  willingToRelocate: boolean;
  summary: string;
  skills: string[];
  noticePeriod: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  coverLetterUrl?: string;
  resumeUrl: string;
  resumeKey: string;
  experiences: Experience[];
  education: Education[];
  workAuthorization?: string;
  clearance?: string;
  jobTitle: string;
  status: ApplicationStatus;
  createdAt: string;
  updatedAt: string;
};

export type Applicant = Omit<Application, "_id" | "createdAt" | "updatedAt">;

export type UpdateApplicantStatus = {
  id: string;
  status: ApplicationStatus;
};

export const useCreateApplication = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<Application, AxiosError<{ message?: string }>, Applicant>({
    mutationFn: async (data) => {
      const { data: response } = await publicApi.post("/applications", data);
      if (!response) {
        throw new Error("Invalid server response");
      }
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Application submitted",
        description: "The application has been submitted successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["applications"], exact: true  });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description:
          error?.message || "Failed to submit the application.",
        variant: "destructive",
      });
    },
  });
};

export const useApplications = () => {
  return useQuery<Application[]>({
    queryKey: ["applications"],
    queryFn: async () => {
      const response = await api.get("/applications");
      return response.data.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes`
  });
};

export const useUpdateApplicationStatus = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<Application, Error, UpdateApplicantStatus>({
    mutationFn: async ({ id, status }) => {
      const response = await api.patch(`/applications/${id}`, {
        status,
      });
      return response.data.data;
    },
    onSuccess: () => {
      toast({
        title: "Status updated",
        description: "Application status has been updated successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update application status.",
        variant: "destructive",
      });
    },
  });
};

export const useDeleteApplication = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/applications/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Application deleted",
        description: "The application has been deleted successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete the application.",
        variant: "destructive",
      });
    },
  });
};
