// app/features/page.tsx
'use client';

import { Shield, EyeOff, Cpu, Wrench, Sliders } from 'lucide-react';
// Example icons from the lucide-react library. Choose icons that best fit your content.

export default function Features() {
    return (
        <main className="text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-gray-700 dark:to-gray-900 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md mb-4">
                        Features
                    </h1>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Discover how SynGenData is redefining synthetic data generation.
                    </p>
                </div>

                {/* Decorative Wave Divider */}
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

            {/* Features List */}
            <section className="bg-white dark:bg-gray-900 pt-10 pb-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Feature 1 */}
                        <div className="flex flex-col p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition">
                            <div className="flex items-center space-x-3 mb-4">
                                <Shield className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-300">
                                    Privacy‑First Synthetic Data
                                </h2>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Our algorithms ensure that your data remains secure and anonymous,
                                complying with global data protection regulations.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition">
                            <div className="flex items-center space-x-3 mb-4">
                                <EyeOff className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-300">
                                    PII Detection &amp; Compliance
                                </h2>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Automatically detect and redact personally identifiable information
                                (PII) to maintain GDPR and HIPAA compliance.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition">
                            <div className="flex items-center space-x-3 mb-4">
                                <Cpu className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-300">
                                    AI‑Ready Datasets
                                </h2>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Generate datasets that are optimized for machine learning, ensuring
                                seamless integration with your data science tools.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex flex-col p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition">
                            <div className="flex items-center space-x-3 mb-4">
                                <Wrench className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-300">
                                    Integration with Data Science Tools
                                </h2>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Our platform integrates with popular tools like Python, R, and SQL,
                                making it easier to incorporate synthetic data into your workflow.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="flex flex-col p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <Sliders className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-300">
                                    Data Augmentation &amp; Customization
                                </h2>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Customize your data generation process to suit your specific requirements,
                                enhancing your AI models with tailored datasets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
