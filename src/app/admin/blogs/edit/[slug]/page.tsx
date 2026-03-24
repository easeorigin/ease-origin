import BlogForm from "../../BlogForm";

export default function EditBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  return <BlogForm slug={params.slug} />;
}