import { Blog } from "@/types/blogPost";
import { Clock } from "lucide-react";
import Link from "next/link";

const BlogPostCard = ({ post }: { post: Blog }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div className="p-5">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                    <Clock className="mr-2" size={16} />
                    {new Date(post.createdAt).toLocaleDateString()}
                </div>
            </div>
            <Link
                href={`/blogs/${post._id}`}
                className="mt-4 block text-blue-600 hover:underline"
            >
                Read More
            </Link>
        </div>
    </div>
);

export default BlogPostCard