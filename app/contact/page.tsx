'use client';

import { useState } from 'react';
import { Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import LiveChat from '@/components/LiveChat';

// Calendly Integration
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
    const [showForm, setShowForm] = useState(true);
    const [status, setStatus] = useState<string>('');


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';

        formData.append('access_key', accessKey);

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        setStatus(result.message ? 'Done ✅' : 'Something went wrong ❌');

        // Wait for 2 seconds, then hide form
        setTimeout(() => {
            setShowForm(false);
            setStatus('');
        }, 2000);
    };

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
            </section>

            {/* Contact Methods */}
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
                            <p className="text-gray-700 dark:text-gray-300">Coming Soon!</p>
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

            {/* Web3Forms Contact Form - Hide after success */}
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-yellow-300">
                        Contact Form
                    </h2>

                    {showForm ? (
                        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg">
                            <div>
                                <label className="block mb-1 font-bold text-gray-700 dark:text-gray-300">Name</label>
                                <input type="text" name="name" required className="w-full border rounded px-4 py-3 bg-white dark:bg-gray-700" />
                            </div>
                            <div>
                                <label className="block mb-1 font-bold text-gray-700 dark:text-gray-300">Email</label>
                                <input type="email" name="email" required className="w-full border rounded px-4 py-3 bg-white dark:bg-gray-700" />
                            </div>
                            <div>
                                <label className="block mb-1 font-bold text-gray-700 dark:text-gray-300">Message</label>
                                <textarea name="message" required className="w-full border rounded px-4 py-3 bg-white dark:bg-gray-700" rows={5}></textarea>
                            </div>
                            <button type="submit" className="w-full px-4 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition">
                                Send Message
                            </button>
                            {status && (
                                <div className="text-center text-gray-700 dark:text-gray-300">
                                    {status}
                                </div>
                            )}
                        </form>
                    ) : (
                        <div className="text-center text-green-600 dark:text-green-400 text-xl font-bold">
                            <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                            Done ✅
                        </div>
                    )}
                </div>
            </section>

            {/* Live Chat */}
            <section className="bg-gray-50 dark:bg-gray-800 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-yellow-300">
                        Chat with Us
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-8">
                        Need instant support? Use our live chat feature.
                    </p>
                    <LiveChat />
                </div>
            </section>
        </main>
    );
}
