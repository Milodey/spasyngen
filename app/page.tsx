'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
import { Loader } from '@/components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    // Handle scroll event to show/hide scroll-to-top button
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col space-y-16">
      {/* Hero Section with Dynamic SVG Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 dark:from-black dark:via-gray-900 dark:to-yellow-800 transition-colors duration-500">
        {/* Background Decorative SVG Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute left-[-20%] top-[-20%] w-[600px] h-[600px] opacity-20 fill-current text-yellow-600 dark:text-yellow-800 animate-pulse"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="300" cy="300" r="300" />
          </svg>
          <svg
            className="absolute right-[-30%] bottom-[-30%] w-[700px] h-[700px] opacity-20 fill-current text-yellow-600 dark:text-yellow-800"
            viewBox="0 0 700 700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="700" height="700" rx="350" />
          </svg>
        </div>

        <div className="container relative z-10 text-center px-6 py-10">
          <div className="flex flex-col items-center space-y">
            <Star className="w-16 h-16 text-yellow-700 dark:text-yellow-400 mb-4 animate-bounce" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-yellow-300 drop-shadow-lg">
              Unlock AI-Powered Synthetic Data
            </h1>
            <p className="mb-8 text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
              Experience privacy‑first data generation like never before.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link href="https://www.iitg.ac.in/pgapps/syngenM3/" target="" rel="noopener noreferrer">
              <button className="flex items-center space-x-2 px-8 py-4 bg-yellow-600 text-white rounded-full shadow-xl hover:bg-yellow-700 hover:scale-105 transform transition duration-300">
                <span>Try SynGenData Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="flex items-center space-x-2 px-8 py-4 border-2 border-yellow-600 text-yellow-700 bg-white rounded-full shadow-xl hover:bg-yellow-600 hover:text-white hover:scale-105 transform transition duration-300">
                <span>Schedule a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative wave transition between sections */}
      <div className="relative w-full -mt-16">
        <svg
          className="block w-full h-16 text-white dark:text-gray-800"
          fill="currentColor"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,266.7C672,277,768,267,864,250.7C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>

      {/* Why SynGen Section */}
      <section className="container mx-auto px-6 -mt-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-yellow-300">
          Why SynGenData?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg bg-white dark:bg-gray-800 transition transform hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="font-bold mb-2 text-gray-800 dark:text-yellow-300">
              Privacy‑First
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our synthetic data ensures maximum privacy compliance and security.
            </p>
          </div>
          <div className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg bg-white dark:bg-gray-800 transition transform hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="font-bold mb-2 text-gray-800 dark:text-yellow-300">
              AI‑Ready
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Datasets optimized for machine learning and data science.
            </p>
          </div>
          <div className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg bg-white dark:bg-gray-800 transition transform hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="font-bold mb-2 text-gray-800 dark:text-yellow-300">
              Customizable
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Tailor‑made data generation to fit your industry needs.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section with 5 Steps */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-yellow-300">
            How It Works
          </h2>
          {/* Use a grid layout for 5 steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-2">
              <div className="mb-4 h-40 w-40 bg-yellow-200 dark:bg-yellow-600 rounded-full mx-auto shadow-2xl flex items-center justify-center transition transform hover:scale-105">
                <span className="text-3xl font-bold text-yellow-600 dark:text-yellow-200">1</span>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-yellow-300">Upload your Data</h3>
              <p className="text-gray-700 dark:text-gray-300">Easily import files for processing.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-2">
              <div className="mb-4 h-40 w-40 bg-yellow-200 dark:bg-yellow-600 rounded-full mx-auto shadow-2xl flex items-center justify-center transition transform hover:scale-105">
                <span className="text-3xl font-bold text-yellow-600 dark:text-yellow-200">2</span>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-yellow-300">PII Detection</h3>
              <p className="text-gray-700 dark:text-gray-300">Identify and protect sensitive information.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-2">
              <div className="mb-4 h-40 w-40 bg-yellow-200 dark:bg-yellow-600 rounded-full mx-auto shadow-2xl flex items-center justify-center transition transform hover:scale-105">
                <span className="text-3xl font-bold text-yellow-600 dark:text-yellow-200">3</span>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-yellow-300">Generate Synthetic Data</h3>
              <p className="text-gray-700 dark:text-gray-300">Anonymize and prepare for AI & analytics.</p>
            </div>

            {/* Step 4 */}
            <div className="text-center space-y-2">
              <div className="mb-4 h-40 w-40 bg-yellow-200 dark:bg-yellow-600 rounded-full mx-auto shadow-2xl flex items-center justify-center transition transform hover:scale-105">
                <span className="text-3xl font-bold text-yellow-600 dark:text-yellow-200">4</span>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-yellow-300">Validate & Review</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ensure data accuracy before finalizing.
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center space-y-2">
              <div className="mb-4 h-40 w-40 bg-yellow-200 dark:bg-yellow-600 rounded-full mx-auto shadow-2xl flex items-center justify-center transition transform hover:scale-105">
                <span className="text-3xl font-bold text-yellow-600 dark:text-yellow-200">5</span>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-yellow-300">Download or Integrate</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Seamlessly export synthetic data into your workflows.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Use Cases Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-yellow-300">
          Use Cases <span className='text-gray-500 italic'> (Comming Soon !)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-2xl shadow-lg bg-white dark:bg-gray-800 text-center max-w-[400px]">
            <Image src="/doctor.webp" width={400} height={300} alt="Healthcare" className="mx-auto mb-5 rounded-2xl" />
            <h3 className="font-bold mb-2 text-gray-800 dark:text-yellow-300">Healthcare</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Generate safe data for clinical trials and research.
            </p>
          </div>
          <div className="border rounded-2xl shadow-lg bg-white dark:bg-gray-800 text-center max-w-[400px]">
            <Image src="/finance.webp" width={400} height={300} alt="Finance" className="mx-auto mb-5 rounded-2xl" />
            <h3 className="font-bold mb-2 text-gray-800 dark:text-yellow-300">Finance</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Secure data for fraud detection and risk analysis.
            </p>
          </div>
          <div className="border rounded-2xl shadow-lg bg-white dark:bg-gray-800 text-center max-w-[400px]">
            <Image src="/retail.webp" width={400} height={300} alt="Retail" className="mx-auto mb-5 rounded-2xl" />
            <h3 className="font-bold mb-2 text-gray-800 dark:text-yellow-300">Retail</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Analyze consumer behavior without compromising privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By / Testimonials Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-yellow-300">
            Trusted By
          </h2>
          {/* <div className="flex flex-wrap justify-center items-center gap-6">
            Replace these placeholders with actual client logos
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
              <p className="font-semibold text-gray-600 dark:text-yellow-300">Logo 1</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
              <p className="font-semibold text-gray-600 dark:text-yellow-300">Logo 2</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
              <p className="font-semibold text-gray-600 dark:text-yellow-300">Logo 3</p>
            </div>
          </div> */}
          <div className="mt-12 text-center">
            <blockquote className="italic text-lg text-gray-800 dark:text-yellow-300 max-w-xl mx-auto">
              &quot;SynGenData revolutionized our data strategy!&quot;
            </blockquote>
            <p className="mt-4 font-bold text-gray-900 dark:text-yellow-300">
              - Data Scientist
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA: Newsletter Signup Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-yellow-300">
          Stay Updated with SynGenData AI
        </h2>
        <p className="mb-8 text-gray-700 dark:text-gray-200 max-w-xl mx-auto">
          Subscribe to our newsletter for the latest trends in synthetic data and AI.
        </p>
        {/* Insert your NewsletterForm component or any sign-up form here */}
        <div className="mx-auto max-w-md">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-l-full sm:rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-yellow-600 dark:focus:border-yellow-300 transition"
            />
            <button className="bg-yellow-600 text-white rounded-full px-6 py-3 hover:bg-yellow-700 transition font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-600 text-white p-4 rounded-full shadow-lg hover:bg-yellow-700 transition-transform transform hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

      )}

      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
            {/* Left: Branding or Company Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800 dark:text-yellow-300">
                SynGenData
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Privacy‑first synthetic data solutions
              </p>
            </div>

            {/* Center: Quick Links */}
            <div className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-300 transition"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-300 transition"
              >
                Contact
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-300 transition"
              >
                Pricing
              </Link>
            </div>
          </div>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 SynGenData Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
