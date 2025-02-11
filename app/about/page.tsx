// app/about/page.tsx
'use client';

import { Users, Flag, MapPin, Rocket } from 'lucide-react'; // Example icons from lucide-react

export default function About() {
    return (
        <main className="text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-yellow-300 to-yellow-500 dark:from-gray-600 dark:to-gray-800">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md mb-4">
                        About SynGen
                    </h1>
                    <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
                        Empowering AI innovation with privacy-first synthetic data solutions.
                    </p>
                </div>

            </section>

            {/* Content Sections */}
            <section className="bg-white dark:bg-gray-900 pt-16 pb-20">
                <div className="container mx-auto px-6 space-y-16">

                    {/* Our Story */}
                    <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-yellow-300 flex items-center space-x-3">
                                <Flag className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
                                <span>Our Story</span>
                            </h2>
                            <p className="leading-relaxed">
                                SynGen was built to revolutionize data privacy while empowering AI innovation.
                                Our journey started with a mission to solve the challenges of data privacy in the age of AI.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            {/* Placeholder image - replace with your own or remove if not needed */}
                            <div className="h-64 rounded-lg bg-yellow-100 dark:bg-gray-800 flex items-center justify-center">
                                <p className="text-gray-500 dark:text-gray-400 italic">Our Founding Moment</p>
                            </div>
                        </div>
                    </div>

                    {/* The Team */}
                    <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
                        <div className="md:w-1/2">
                            {/* Placeholder image - replace with your own or remove if not needed */}
                            <div className="h-64 rounded-lg bg-yellow-100 dark:bg-gray-800 flex items-center justify-center">
                                <p className="text-gray-500 dark:text-gray-400 italic">Our Amazing Team</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-yellow-300 flex items-center space-x-3">
                                <Users className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
                                <span>The Team</span>
                            </h2>
                            <p className="leading-relaxed">
                                Our team comprises industry experts, researchers, and visionary leaders dedicated
                                to pushing the boundaries of synthetic data technology and protecting user privacy.
                            </p>
                        </div>
                    </div>

                    {/* Partnerships */}
                    <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-yellow-300 flex items-center space-x-3">
                                <MapPin className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
                                <span>Partnerships</span>
                            </h2>
                            <p className="leading-relaxed">
                                We are backed by leading institutions and organizations that share our commitment
                                to data privacy and innovation. Our partnerships fuel cutting-edge research and product development.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            {/* Placeholder image - replace with your own or remove if not needed */}
                            <div className="h-64 rounded-lg bg-yellow-100 dark:bg-gray-800 flex items-center justify-center">
                                <p className="text-gray-500 dark:text-gray-400 italic">Our Partners</p>
                            </div>
                        </div>
                    </div>

                    {/* Vision & Roadmap */}
                    <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
                        <div className="md:w-1/2">
                            {/* Placeholder image - replace with your own or remove if not needed */}
                            <div className="h-64 rounded-lg bg-yellow-100 dark:bg-gray-800 flex items-center justify-center">
                                <p className="text-gray-500 dark:text-gray-400 italic">Future Plans</p>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-yellow-300 flex items-center space-x-3">
                                <Rocket className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
                                <span>Vision &amp; Roadmap</span>
                            </h2>
                            <p className="leading-relaxed">
                                Our vision is to become the leading provider of AI‑powered synthetic data solutions.
                                Stay tuned for upcoming features and expansions in our roadmap as we continuously innovate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Wave Divider */}
            <div className="relative w-full">
                <svg
                    className="block w-full h-16 text-white dark:text-gray-900"
                    fill="currentColor"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 320"
                >
                    <path d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,106.7C672,107,768,149,864,186.7C960,224,1056,256,1152,256C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                </svg>
            </div>
        </main>
    );
}
