/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useBlog, useDeleteBlog } from "@/hooks/use-blog";
import { useRouter, useParams } from "next/navigation";
import {
  Loader2,
  Calendar,
  Clock,
  Edit,
  Trash2,
  ArrowLeft,
  User,
} from "lucide-react";
import { format } from "date-fns";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import Image from "next/image";



export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const { data: blog, isLoading } = useBlog(slug);
  const deleteBlog = useDeleteBlog();

  const handleDelete = () => {
    deleteBlog.mutate(slug, {
      onSuccess: () => router.push("/admin/blogs"),
      onError: (err: any) => {
        console.error("Failed to delete blog post", err);
      },
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-2xl font-bold mb-2">Post not found</h2>
          <Link href="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  // Calculate read time (approximate)
  const wordCount = blog.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <div className="min-h-screen bg-background pb-20">
      <article className="container w-full mx-auto px-4 py-12">
        <Link
          href="/admin/blogs"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-10 transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />{" "}
          Back to Blogs
        </Link>

        <header className="mb-12 text-center">
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4" />
              {format(new Date(blog.createdAt), "MMMM d, yyyy")}
            </span>
            <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <span className="flex items-center">
              <Clock className="mr-1.5 h-4 w-4" />
              {readTime} min read
            </span>
            {blog.author && (
              <>
                <span className="w-1 h-1 bg-muted-foreground/30 rounded-full hidden sm:block" />
                <span className="flex items-center">
                  <User className="mr-1.5 h-4 w-4" />
                  By {blog.author}
                </span>
              </>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
            {blog.title}
          </h1>

          <div className="flex items-center justify-center space-x-3">
            <Link href={`/admin/blogs/edit/${blog.slug}`}>
              <button className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-background text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Edit className="mr-2 h-3.5 w-3.5" />
                Edit
              </button>
            </Link>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-background text-sm font-medium text-muted-foreground hover:text-destructive hover:border-destructive transition-colors">
                  <Trash2 className="mr-2 h-3.5 w-3.5" />
                  Delete
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete this story?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    &quot;
                    {blog.title}&quot;.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          {blog.imageUrl && (
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border mt-12 mb-12">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover"
                fill
              />
            </div>
          )}
        </header>

        <div
          className="prose prose-lg prose-neutral dark:prose-invert max-w-none 
            prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-border
            prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:rounded-r-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground italic font-display text-lg">
            Thanks for reading.
          </p>
        </div>
      </article>
    </div>
  );
}
