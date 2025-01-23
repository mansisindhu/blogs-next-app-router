import React from "react";
import { Flame } from "lucide-react";
import BlogPostCard from "@/components/blog-post-card";
import { Post } from "@/types/blogPost";

const posts = [
    {
        id: "1",
        title: "The Future of Sustainable Living",
        content:
            "As the world becomes increasingly aware of the need for sustainability, the future of living is poised to undergo a significant transformation. From renewable energy sources to eco-friendly construction materials, the landscape of sustainable living is evolving rapidly. This article explores the key trends and innovations that will shape the way we live in the years to come.",
        createdAt: "2023-04-15T12:00:00Z",
    },
    {
        id: "2",
        title: "Mastering the Art of Time Management",
        content:
            "In today's fast-paced world, effective time management has become a crucial skill for success. This article delves into proven strategies and techniques that can help you optimize your workflow, increase productivity, and achieve a better work-life balance. Discover practical tips and tools to conquer the challenges of modern-day time management.",
        createdAt: "2023-04-10T09:30:00Z",
    },
    {
        id: "3",
        title: "Exploring the Wonders of the Natural World",
        content:
            "From majestic mountains to pristine forests, the natural world is a breathtaking tapestry of wonder and beauty. In this article, we embark on a journey to uncover the awe-inspiring landscapes, diverse ecosystems, and captivating wildlife that make our planet so unique. Prepare to be inspired and reconnect with the great outdoors.",
        createdAt: "2023-04-05T15:45:00Z",
    }
];

function BlogListingPage() {
    return (
        <div className="container mx-auto px-4">
            <section>
                <div className="flex items-center mb-8">
                    <Flame className="mr-3 text-orange-500" size={30} />
                    <h2 className="text-2xl font-bold">All Blog Posts</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {posts.map((post: Post) => (
                        <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogListingPage;
