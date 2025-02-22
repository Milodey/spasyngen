"use client";
// app/blog/page.tsx
import React from 'react';
import { CldImage } from 'next-cloudinary';

interface BlogPost {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    image: string;
}

const page = () => {
    // Static array of 10 synthetic data posts
    const posts: BlogPost[] = [
        {
            title: 'Understanding Synthetic Data: The Basics',
            slug: '/blog/synthetic-data-basics',
            date: '2025-02-09',
            excerpt:
                'Discover what synthetic data is, why it matters, and how it can revolutionize your data strategy...',
            image: 'syngen/pcyppa88exagpmfh2gku',
        },
        {
            title: 'Top 5 Use Cases for Synthetic Data',
            slug: '/blog/synthetic-data-use-cases',
            date: '2025-02-10',
            excerpt:
                'Explore the most common real-world applications of synthetic data in healthcare, finance, and beyond...',
            image: 'syngen/pcyppa88exagpmfh2gku',
        },
        {
            title: 'Preserving Privacy with Synthetic Data',
            slug: '/blog/preserving-privacy-synthetic-data',
            date: '2025-02-11',
            excerpt:
                'Learn how synthetic data can protect sensitive information while still providing actionable insights...',
            image: 'syngen/pcyppa88exagpmfh2gku',
        },
        {
            title: 'Synthetic Data vs. Anonymized Data: Key Differences',
            slug: '/blog/synthetic-vs-anonymized',
            date: '2025-02-12',
            excerpt:
                'Which method is best for your organization? We break down the pros and cons of each approach...',
            image: 'syngen/pcyppa88exagpmfh2gku',
        },
        {
            title: 'How AI & Machine Learning Benefit From Synthetic Data',
            slug: '/blog/ai-ml-synthetic-data-benefits',
            date: '2025-02-13',
            excerpt:
                'Uncover the advantages of using synthetic datasets to train and validate machine learning models...',
            image: 'syngen/pcyppa88exagpmfh2gku',
        },
        {
            title: 'Boosting Data Quality with Synthetic Techniques',
            slug: '/blog/boosting-data-quality-synthetic',
            date: '2025-02-14',
            excerpt:
                'Quality data is vital. Find out how synthetic generation methods can enhance data integrity...',
            image: 'syngen/pcyppa88exagpmfh2gku',
        },
        {
            title: 'Synthetic Data for Startups: A Quick Guide',
            slug: '/blog/synthetic-data-for-startups',
            date: '2025-02-15',
            excerpt:
                'Learn why early-stage companies are turning to synthetic data for rapid, secure scaling...',
            image: 'syngen/pcyppa88exagpmfh2gku',
        },
        {
            title: 'Common Myths About Synthetic Data Debunked',
            slug: '/blog/synthetic-data-myths',
            date: '2025-02-16',
            excerpt:
                'Is synthetic data inaccurate or too costly? We tackle the biggest misconceptions head-on...',
            image: 'syngen/pcyppa88exagpmfh2gku',
        },
        {
            title: 'Regulatory Considerations for Synthetic Data',
            slug: '/blog/synthetic-data-regulations',
            date: '2025-02-17',
            excerpt:
                'Understand how laws like GDPR and HIPAA view synthetic data, and what you need to stay compliant...',
            image: 'syngen/pcyppa88exagpmfh2gku',
        },
        {
            title: 'Future Trends in Synthetic Data Generation',
            slug: '/blog/future-trends-synthetic-data',
            date: '2025-02-18',
            excerpt:
                'What’s next for synthetic data? A sneak peek at emerging tools, techniques, and innovations...',
            image: 'syngen/pcyppa88exagpmfh2gku',
        },
    ];

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
                                    <CldImage
                                        src={post.image}
                                        alt={`Image for ${post.title}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
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
                                    {/* <Link
                                    
                                    // href={post.slug}
                                    > */}
                                    <button className="px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition">
                                        Read More
                                    </button>
                                    {/* </Link> */}
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
