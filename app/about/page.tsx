'use client';

import Image from 'next/image';
import { Users, Flag, MapPin, Rocket } from 'lucide-react';

export default function About() {
    return (
        <main className="text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-gray-700 dark:to-gray-900 py-16 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md mb-4">
                        About SynGen Data
                    </h1>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Empowering AI innovation with privacy-first synthetic data solutions.
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="bg-white dark:bg-gray-900 pt-16 pb-20">
                <div className="container mx-auto px-6 space-y-16">

                    {/* Our Story */}
                    <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-yellow-300 flex items-center">
                                <Flag className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mr-2" />
                                <span>Our Story</span>
                            </h2>
                            <p className="leading-relaxed text-lg">
                                SynGen was built to revolutionize data privacy while empowering AI innovation.
                                Our journey started with a mission to solve the challenges of data privacy in the age of AI.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Image src="/founding.webp" alt="Founding Moment" width={400} height={400} className="rounded-lg shadow-lg" />
                        </div>
                    </div>

                    {/* The Team */}
                    <div className="flex flex-col md:flex-row-reverse items-center md:space-x-12 space-y-8 md:space-y-0">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-yellow-300 flex items-center">
                                <Users className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mr-2" />
                                <span>The Team</span>
                            </h2>
                            <p className="leading-relaxed text-lg">
                                Our team comprises industry experts, researchers, and visionary leaders dedicated
                                to pushing the boundaries of synthetic data technology and protecting user privacy.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Image src="/team.webp" alt="Our Team" width={400} height={400} className="rounded-lg shadow-lg" />
                        </div>
                    </div>

                    {/* Partnerships */}
                    <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-yellow-300 flex items-center">
                                <MapPin className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mr-2" />
                                <span>Partnerships</span>
                            </h2>
                            <p className="leading-relaxed text-lg">
                                We are backed by leading institutions and organizations that share our commitment
                                to data privacy and innovation. Our partnerships fuel cutting-edge research and product development.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Image src="/privacy.webp" alt="Our Partnerships" width={400} height={400} className="rounded-lg shadow-lg" />
                        </div>
                    </div>

                    {/* Vision & Roadmap */}
                    <div className="flex flex-col md:flex-row-reverse items-center md:space-x-12 space-y-8 md:space-y-0">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-yellow-300 flex items-center">
                                <Rocket className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mr-2" />
                                <span>Vision &amp; Roadmap</span>
                            </h2>
                            <p className="leading-relaxed text-lg">
                                Our vision is to become the leading provider of AI‑powered synthetic data solutions.
                                Stay tuned for upcoming features and expansions in our roadmap as we continuously innovate.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Image src="/vision.webp" alt="Future Plans" width={400} height={400} className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
