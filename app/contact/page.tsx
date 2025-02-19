// app/contact/page.tsx
'use client';

import { Phone, Mail, MessageCircle } from 'lucide-react';
import LiveChat from '@/components/LiveChat';

// Calendly Integration (Embed Widget)
const CalendlyWidget = () => {
    return (
        <div className="flex justify-center">
            <iframe
                src="https://calendly.com/milo-dey-work"
                className="w-full max-w-2xl h-[600px] border-0 rounded-lg shadow-lg"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default function Contact() {
    return (
        <main className="text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-gray-700 dark:to-gray-900 py-16 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        We’re here to help. Reach out for inquiries, demos, or support.
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

            {/* Contact Methods Section */}
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-yellow-300">
                        Get in Touch
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Phone */}
                        <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center">
                            <Phone className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-4" />
                            <h3 className="font-bold text-lg">Call Us</h3>
                            <p className="text-gray-700 dark:text-gray-300">Comming Soon!</p>
                        </div>
                        {/* Email */}
                        <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center">
                            <Mail className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-4" />
                            <h3 className="font-bold text-lg">Email Us</h3>
                            <p className="text-gray-700 dark:text-gray-300">palash.ghosh@iitg.ac.in</p>
                        </div>
                        {/* Live Chat */}
                        <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center">
                            <MessageCircle className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-4" />
                            <h3 className="font-bold text-lg">Live Chat</h3>
                            <p className="text-gray-700 dark:text-gray-300">Available 24/7</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Schedule a Demo */}
            <section className="bg-gray-50 dark:bg-gray-800 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-yellow-300">
                        Schedule a Demo
                    </h2>
                    <CalendlyWidget />
                </div>
            </section>

            {/* Contact Form */}
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-yellow-300">
                        Contact Form
                    </h2>
                    <form
                        className="max-w-lg mx-auto space-y-4 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg"
                        action="/api/contact"
                        method="POST"
                    >
                        <div>
                            <label className="block mb-1 font-bold text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full border rounded px-4 py-3 bg-white dark:bg-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-bold text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full border rounded px-4 py-3 bg-white dark:bg-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-bold text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <textarea
                                name="message"
                                required
                                className="w-full border rounded px-4 py-3 bg-white dark:bg-gray-700"
                                rows={5}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Live Chat */}
            <section className="bg-gray-50 dark:bg-gray-800 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-yellow-300">
                        Chat with Us
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-8">
                        Need instant support? Use our live chat feature (Comming Soon).
                    </p>
                    <LiveChat />
                </div>
            </section>
        </main>
    );
}
