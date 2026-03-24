import { useQuery } from "@tanstack/react-query";
import { publicApi } from "@/lib/axios";

export type Blog = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  imageUrl: string;
  author: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
};

// Fetch all posts
export const usePosts = () => {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await publicApi.get<Blog[]>("/blogs");
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
}

// Fetch a single post
export function usePost(slug: string) {
  return useQuery<Blog>({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const { data } = await publicApi.get(`/blogs/${slug}`);
      return data;
    },
    enabled: !!slug,
  });
}