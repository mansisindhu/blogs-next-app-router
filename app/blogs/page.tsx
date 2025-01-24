// export const dynamic = "force-static"

import React from "react";
import { Flame } from "lucide-react";
import BlogPostCard from "@/components/blog-post-card";
import { Blog } from "@/types/blogPost";

async function BlogListingPage() {
    const res = await fetch("http://localhost:3000/blogs/api");
    const posts = await res.json()
    
    return (
        <div className="container mx-auto px-4">
            <section>
                <div className="flex items-center mb-8">
                    <Flame className="mr-3 text-orange-500" size={30} />
                    <h2 className="text-2xl font-bold">All Blog Posts</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {posts.map((post: Blog) => (
                        <BlogPostCard key={post._id} post={post} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogListingPage;
