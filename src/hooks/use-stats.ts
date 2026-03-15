"use client";

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import type { AdminStats } from "@/types/stat";

export function useStats() {
  return useQuery<AdminStats>({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await api.get<AdminStats>("/stats");
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
}