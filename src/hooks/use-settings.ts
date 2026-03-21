/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/axios";

export type Address = {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  full?: string;
};

export type Contact = {
  email?: string;
  phone?: string;
};

export type Hours = {
  days?: string;
  time?: string;
};

export type SocialLinks = {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
};

export type Identifiers = {
  uei?: string;
  cage?: string;
  naics?: string;
};

export type Company = {
  name: string;
  shortName?: string;
  description?: string;
  url?: string;
  domain?: string;

  address?: Address;
  contact?: Contact;
  hours?: Hours;
  social?: SocialLinks;
  identifiers?: Identifiers;
};

export type Settings = {
  company: Company;
  notifications: {
    newSubscriber: boolean;
    newResume: boolean;
    newJobApplication: boolean;
  };
};

export type UpdateSettings = Partial<Settings>;

export const useSettings = () => {
  return useQuery<Settings>({
    queryKey: ["settings"],
    queryFn: async () => {
      const { data } = await api.get("/settings");
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: UpdateSettings) => {
      const res = await api.patch("/settings", data);
      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });

      toast({
        title: "Settings updated successfully",
      });
    },

    onError: (error: any) => {
      toast({
        title: "Failed to update settings",
        description:
          error?.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });
    },
  });
};
