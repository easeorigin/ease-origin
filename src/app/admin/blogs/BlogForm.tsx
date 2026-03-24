/*eslint-disable react-hooks/set-state-in-effect*/ /* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState, useRef, useEffect } from "react";
import { useBlog, useCreateBlog, useUpdateBlog } from "@/hooks/use-blog";
import { useRouter } from "next/navigation";
import { RichTextEditor } from "@/components/blog/RichTextEditor";
import { Loader2, ArrowLeft, Upload, X } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { useCloudinaryUpload } from "@/hooks/use-upload";
import Image from "next/image";

interface EditProps {
  slug: string;
};

type Blog = {
    title: string;
    content: string;
    author: string;
    imageUrl: string;
}

export default function BlogForm({slug}: EditProps) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isEditing = slug !== "new";
  
    const { data: blog, isLoading } = useBlog(slug);
    const createMutation = useCreateBlog();
    const updateMutation = useUpdateBlog();

  const { uploadFile, isUploading, progress } = useCloudinaryUpload({
    folder: "easeorigin/blogs",
    onSuccess: (url) => setImageUrl(url),
  });

  useEffect(() => {
    if (blog && isEditing) {
      setTitle(blog.title);
      setContent(blog.content);
      setAuthorName(blog.author);
      setImageUrl(blog.imageUrl ?? null);
    }
  }, [blog, isEditing]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError("Image size should be less than 10MB");
        return;
      }

      await uploadFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Please provide both a title and content.");
      return;
    }

    if (content === "<p></p>" || content === "<p><br></p>") {
      setError("Please write some content for your post.");
      return;
    }

    const payload: Blog = {
      title,
      content,
      author: authorName,
      imageUrl: imageUrl ?? "",
    };

    setIsSubmitting(true);
    setError(null);

    if (isEditing) {
      updateMutation.mutate(
        { slug, ...payload },
        {
          onSuccess: () => router.push("/admin/blogs"),
          onError: (err: any) => {
            setError(err?.message || "Failed to update post");
            setIsSubmitting(false);
          },
        }
      );
    } else {
      createMutation.mutate(payload, {
        onSuccess: () => router.push("/admin/blogs"),
        onError: (err: any) => {
          setError(err?.message || "Failed to create post");
          setIsSubmitting(false);
        },
      });
    }
  };

  if (isEditing && isLoading) {
      return (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      );
    }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/admin/blogs"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
        </Link>

        <div className="space-y-2 mb-8">
          <h1 className="font-display text-4xl font-bold tracking-tight">
            {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
          </h1>
          <p className="text-muted-foreground">
            
            {isEditing
            ? "Update your blog post details."
            : "Share your thoughts with the world. Use the editor below to format your post."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Enter your title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-transparent text-4xl font-bold font-display placeholder:text-muted-foreground/50 border-none px-0 focus:ring-0 focus:outline-none"
                autoFocus
              />
              <div className="h-px w-full bg-border" />
            </div>

            <div className="space-y-2">
              <input
                type="text"
                placeholder="Author Name (Optional)"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full bg-transparent text-xl font-medium placeholder:text-muted-foreground/50 border-none px-0 focus:ring-0 focus:outline-none"
              />
              <div className="h-px w-full bg-border/50" />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-muted-foreground">
                Cover Image
              </label>
              {imageUrl ? (
                <div className="relative aspect-video rounded-xl overflow-hidden group">
                  <Image
                    src={imageUrl}
                    alt="Preview"
                    fill
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setImageUrl(null)}
                    className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full aspect-video rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  {isUploading ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-medium">
                        <span>Uploading...</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                        <Upload className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                        {isUploading ? "Uploading..." : "Click to upload image"}
                      </span>
                      <span className="text-xs text-muted-foreground/60">
                        Recommended: 16:9 aspect ratio
                      </span>
                    </div>
                  )}
                </button>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>

          <div className="min-h-100">
            <RichTextEditor content={content} onChange={setContent} />
          </div>

          {error && (
            <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20">
              {error}
            </div>
          )}

          <div className="flex justify-end pt-4 border-t border-border">
            <Link href="/">
              <button
                type="button"
                className="mr-4 px-6 py-2.5 rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              disabled={isSubmitting || !title || !content}
              className="
                px-8 py-2.5 rounded-full font-semibold text-sm
                bg-primary text-primary-foreground shadow-lg shadow-primary/25
                hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5
                active:translate-y-0 active:shadow-md
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                transition-all duration-200 ease-out flex items-center
              "
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Publishing...
                </>
              ) : (
                "Publish Story"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}