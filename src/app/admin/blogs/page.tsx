"use client";

import { useBlogs, useDeleteBlog } from "@/hooks/use-blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import { Loader2, Trash2, Plus, Edit2 } from "lucide-react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function AdminBlogs() {
  const [search, setSearch] = useState("");
  const { data: blogs, isLoading } = useBlogs();
  const deleteMutation = useDeleteBlog();
  const router = useRouter();

  const filteredBlogs = blogs?.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl text-white font-display font-bold">Blogs</h1>
          <p className="text-muted-foreground">Manage blog posts for your platform.</p>
        </div>

        <Link href="/admin/blogs/edit">
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
            <Plus className="mr-2 h-4 w-4" />
            New Blog
          </Button>
        </Link>
      </div>

      <div className="bg-eo-navy border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border bg-eo-navy/30 flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-50 max-w-sm">
            <Input
              placeholder="Search by title..."
              className="pl-3 bg-eo-blue"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 px-12">
          {filteredBlogs?.map((blog) => (
            <div key={blog._id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm flex flex-col">
              {blog.imageUrl && (
                <div className="aspect-video relative w-full overflow-hidden">
                  <Image src={blog.imageUrl} alt={blog.title} fill className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h2 
                    className="text-xl font-bold font-display cursor-pointer hover:text-primary transition-colors"
                    onClick={() => router.push(`/admin/blogs/view/${blog.slug}`)}
                  >
                    {blog.title}
                  </h2>
                  
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  By {blog.author} • {format(new Date(blog.createdAt!), "MMM d, yyyy")}
                </p>
                {blog.excerpt && <p className="text-sm line-clamp-2 mb-4">{blog.excerpt}</p>}
                <div className="mt-auto flex gap-3">
                  <Button variant="outline" className="flex-1" onClick={() => router.push(`/admin/blogs/view/${blog.slug}`)}>
                    Read More
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => router.push(`/admin/blogs/edit/${blog.slug}`)}>
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => {
                        if (confirm("Are you sure you want to delete this blog post?")) {
                          deleteMutation.mutate(blog._id);
                        }
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {blogs?.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed rounded-xl">
              No blog posts found. Create your first post to get started!
            </div>
          )}
        </div>
      )}
      </div>
    </>
  );
}