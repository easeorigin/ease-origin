"use client";

import { api, publicApi } from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";


export type Submission = {
  _id: string;
  name: string;
  email: string;
  country: string;
  expertise: string;
  resumeUrl: string;
  resumeKey: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateSubmission = {
  name: string;
  email: string;
  country: string;
  expertise: string;
  resumeUrl: string;
  resumeKey: string;
  message: string;
};

export const useSubmitResume = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<Submission, Error, CreateSubmission>({
    mutationFn: async (data) => {
      const { data: response } = await publicApi.post("/submit-resume", data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submit-resume"] });
      toast({
        title: "Resume submitted",
        description: "Your resume has been submitted successfully.",
        variant: "default",
      });
    },
    onError: (error) => {
      console.error(error);
      toast({
        title: "Submission failed",
        description:
          "There was an error submitting your resume. Please try again.",
        variant: "destructive",
      });
    },
  });
};

export const useSubmittedResumes = () => {
    return useQuery<Submission[]>({
        queryKey: ["resumes"],
        queryFn: async () => {
            const { data } = await api.get("/submitted");
            return data || [];
        },
    });
};