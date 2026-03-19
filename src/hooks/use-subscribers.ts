"use client";

import { api, publicApi } from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";


export type Subscriber = {
    _id: string;
    email: string;
    subscribedAt: string;
}

export type Subscribe = {
  email: string;
  subscribedAt: string;
};

type SubscribersResponse = {
  subscribers: Subscriber[];
};

export const useSubscribe = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<Subscriber, Error, Subscribe>({
    mutationFn: async (data) => {
      const { data: res } = await publicApi.post<Subscriber>(
        "/subscribe",
        data,
      );
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscribe"] });
      toast({
        title: "Newsletter Subscription",
        description: "Your newsletter subscription was successful.",
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

export function useSubscribers() {
  return useQuery<Subscriber[]>({
    queryKey: ["subscribers"],
    queryFn: async () => {
      const response = await api.get<SubscribersResponse>("/subscribers");
      return response.data.subscribers;
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useDeleteSubscriber() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/subscribers/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscribers"] });
      toast({
        title: "Subscriber removed",
        description: "The subscriber has been successfully removed.",
        variant: "default",
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
