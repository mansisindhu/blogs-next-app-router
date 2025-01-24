import { Blog } from "@/types/blogPost";

async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs/${id}/api`);
  const post: Blog = await res.json()
  
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">Published on {new Date(post.createdAt).toLocaleDateString()}</p>
      <div className="prose max-w-none">{post.content}</div>
    </div>
  );
}

export default BlogPostPage;
