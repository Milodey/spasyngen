'use client';

import { Users, Flag, MapPin, Rocket } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

export default function About() {
    return (
        <main className="text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-gray-700 dark:to-gray-900 py-16 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md mb-4">
                        About SynGenData
                    </h1>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Empowering AI innovation with privacy-first synthetic data solutions.
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
                                SynGenData was built to revolutionize data privacy while empowering AI innovation.
                                Our journey started with a mission to solve the challenges of data privacy in the age of AI.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <CldImage src="syngen/vifqc61i2ykzxo6vch5v" alt="Founding Moment" width={400} height={400} className="rounded-lg shadow-lg" />
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
                            <CldImage src="syngen/j2hlgg3jvwbxh7dtcyv1" alt="Our Team" width={400} height={400} className="rounded-lg shadow-lg" />
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
                            <CldImage src="syngen/hw5oidy4x4qvb4ghwygk" alt="Our Partnerships" width={400} height={400} className="rounded-lg shadow-lg" />
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
                            <CldImage src="syngen/privacy" alt="Future Plans" width={400} height={400} className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
