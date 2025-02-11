// app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Example interface for blog posts (optional)
interface BlogPost {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    image: string;
}

const page = () => {
    // Generate 30 placeholder blog posts
    const posts: BlogPost[] = Array.from({ length: 30 }, (_, i) => ({
        title: `Awesome Blog Post #${i + 1}`,
        slug: `/blog/post-${i + 1}`,
        date: `2025-02-09`,
        excerpt:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula justo sit amet sapien tempus bibendum...',
        image: `https://placekitten.com/400/25${(i % 9) + 1}`, // Variation in placeholder images
    }));

    return (
        <main className="text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-gray-700 dark:to-gray-900 py-16 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
                        Blog Page
                    </h1>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Stay updated with our latest news, insights, and articles.
                    </p>
                </div>

                {/* Wave Divider */}
                <div className="absolute w-full bottom-0">
                    <svg
                        className="relative block w-full h-16 text-white dark:text-gray-800"
                        fill="currentColor"
                        preserveAspectRatio="none"
                        viewBox="0 0 1440 320"
                    >
                        <path d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,144C672,160,768,192,864,197.3C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Blog Listing */}
            <section className="bg-white dark:bg-gray-900 pt-10 pb-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-2xl"
                            >
                                {/* Image */}
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={post.image}
                                        alt={`Image for ${post.title}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-yellow-300">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        {post.date}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        {post.excerpt}
                                    </p>
                                    <Link href={post.slug}>
                                        <button className="px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition">
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default page;
