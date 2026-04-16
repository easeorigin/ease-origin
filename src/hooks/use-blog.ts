import { useQuery, useMutation, useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/axios";

export type BlogCategory =
  | "cloud & infrastructure"
  | "cybersecurity"
  | "devOps"
  | "program management"
  | "company news"
  | "federal iT"
  | "aI & data"
  | "enterprise platforms"
  | "agile & delivery"
  | "govCon insights"
  | "industry insights"
  | "perspectives";

export type Blog = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  imageUrl: string;
  author: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export type CreateBlogInput = {
  title: string;
  content: string;
  author: string;
  imageUrl?: string;
};

export type UpdateBlogInput = CreateBlogInput & {
  slug: string;
};

export const useBlogs = () => {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await api.get<Blog[]>("/blogs");
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useBlog = (
  slug: string,
  options?: Omit<
    UseQueryOptions<Blog, Error, Blog>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<Blog>({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const { data } = await api.get(`/blogs/${slug}`);
      return data;
    },
    enabled: !!slug,
    ...options,
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<Blog, Error, CreateBlogInput>({
    mutationFn: async (data) => {
      const { data: res } = await api.post<Blog>("/blogs", data);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast({
        title: "Blog created",
        description: "Your blog has been created successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error creating blog",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<Blog, Error, UpdateBlogInput>({
    mutationFn: async ({ slug, ...data }: UpdateBlogInput) => {
      const res = await api.put(`/blogs/${slug}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast({
        title: "Blog updated",
        description: "Your blog has been updated successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error updating blog",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<void, Error, string>({
    mutationFn: async (slug) => {
      await api.delete(`/blogs/${slug}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast({
        title: "Blog deleted",
        description: "Your blog has been deleted successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error deleting blog",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};