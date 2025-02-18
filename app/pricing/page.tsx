// app/pricing/page.tsx
'use client';

import { Award, Briefcase, DollarSign, Layers } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
    return (
        <main className="text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-gray-700 dark:to-gray-900 py-16 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
                        Pricing
                    </h1>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Find the perfect plan for your synthetic data needs.
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
                        <path d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,144C672,160,768,192,864,197.3C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                    </svg>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="bg-white dark:bg-gray-900 pt-10 pb-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        {/* Free Tier */}
                        <div className="relative flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md transition transform hover:-translate-y-1 hover:shadow-2xl">
                            <DollarSign className="h-10 w-10 text-yellow-600 dark:text-yellow-400 mb-2" />
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-yellow-300">
                                Free Tier
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Limited usage: 5 MB data, 1000 records
                            </p>
                            <Link href="https://www.iitg.ac.in/pgapps/syngenM3/" target="" rel="noopener noreferrer">
                                <button className="px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition">
                                    Get Started
                                </button>
                            </Link>
                        </div>

                        {/* Pro Plan */}
                        <div className="relative flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md transition transform hover:-translate-y-1 hover:shadow-2xl">
                            <Award className="h-10 w-10 text-yellow-600 dark:text-yellow-400 mb-2" />
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-yellow-300">
                                Pro Plan
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                More data generation, custom models
                            </p>
                            {/* Example "Popular" badge */}
                            <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                Popular
                            </div>
                            <button className="px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition">
                                Upgrade
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="relative flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md transition transform hover:-translate-y-1 hover:shadow-2xl">
                            <Briefcase className="h-10 w-10 text-yellow-600 dark:text-yellow-400 mb-2" />
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-yellow-300">
                                Enterprise
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                API access, private deployment
                            </p>
                            <button className="px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition">
                                Contact Sales
                            </button>
                        </div>

                        {/* Custom Solutions */}
                        <div className="relative flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md transition transform hover:-translate-y-1 hover:shadow-2xl">
                            <Layers className="h-10 w-10 text-yellow-600 dark:text-yellow-400 mb-2" />
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-yellow-300">
                                Custom Solutions
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Tailored for AI firms, banks, healthcare
                            </p>
                            <button className="px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition">
                                Inquire Now
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
