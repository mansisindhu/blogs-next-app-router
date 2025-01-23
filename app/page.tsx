import React from "react";
import { Flame, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/blogPost";

// Sample blog post data (would normally come from database)
const featuredPosts = [
  {
    id: 1,
    title: "The Future of AI in Everyday Life",
    excerpt:
      "Exploring how artificial intelligence is transforming our daily experiences...",
    author: "Sarah Johnson",
    createdAt: "5 min read",
    imageUrl: "/assets/1.jpg",
    content: "",
  },
  {
    id: 2,
    title: "Sustainable Living: Practical Tips",
    excerpt:
      "Simple strategies to reduce your environmental footprint and live more sustainably...",
    author: "Alex Rodriguez",
    createdAt: "4 min read",
    imageUrl: "/assets/2.jpg",
    content: "",
  },
  {
    id: 3,
    title: "Mastering Remote Work Productivity",
    excerpt:
      "Proven techniques to stay focused and efficient while working from home...",
    author: "Michael Chen",
    createdAt: "6 min read",
    imageUrl: "/assets/3.jpg",
    content: "",
  },
];

const BlogPostCard = ({ post }: { post: Post }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
    {post?.imageUrl && (
      <Image
        height={192}
        width={485}
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
    )}
    <div className="p-5">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <User className="mr-2" size={16} />
          {post.author}
        </div>
        <div className="flex items-center">
          <Clock className="mr-2" size={16} />
          {post.createdAt}
        </div>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to BIApp</h1>
        <p className="text-xl mb-6">Discover, Create, and Share Your Stories</p>
        <Link
          href="/create-blog"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
        >
          Start Writing
        </Link>
      </section>

      {/* Featured Posts */}
      <section>
        <div className="flex items-center mb-8">
          <Flame className="mr-3 text-orange-500" size={30} />
          <h2 className="text-2xl font-bold">Featured Posts</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredPosts.map((post: Post) => {
            return <BlogPostCard key={post.id} post={post} />;
          })}
        </div>
      </section>

      {/* Categories Preview */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Technology", "Lifestyle", "Travel", "Personal Growth"].map(
            (category) => (
              <a
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="bg-gray-100 p-4 rounded-lg text-center hover:bg-blue-100 transition"
              >
                {category}
              </a>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
