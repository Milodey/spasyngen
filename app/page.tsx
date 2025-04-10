'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { Loader } from '@/components/Loader';
import { CldImage } from 'next-cloudinary';
// import Script from 'next/script';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);


  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitor', { method: 'POST' });
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 200);

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
    <div className="flex flex-col space-y-16 ">
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
            <Link href="https://studio.syngendata.ai/" target="" rel="noopener noreferrer">
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
            <button
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center space-x-2 px-8 py-4 bg-yellow-600 text-white rounded-full shadow-xl hover:bg-yellow-700 hover:scale-105 transform transition duration-300"
            >
              <span>Watch Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>

          </div>
        </div>
      </section>



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
            <CldImage
              src="syngen/khtscduyzvw9zwh3gszi" // Use this sample image or upload your own via the Media Explorer
              width="500" // Transform the image: auto-crop to square aspect_ratio
              height="500"
              crop={{
                type: 'auto',
                source: true
              }}
              alt='Healthcare'
              className="mx-auto mb-5 rounded-2xl"
            />            <h3 className="font-bold mb-2 text-gray-800 dark:text-yellow-300">Healthcare</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Generate safe data for clinical trials and research.
            </p>
          </div>
          <div className="border rounded-2xl shadow-lg bg-white dark:bg-gray-800 text-center max-w-[400px]">
            <CldImage src="syngen/b9vuhscyefr6mxxsqt58" width={400} height={300} alt="Finance" className="mx-auto mb-5 rounded-2xl" />
            <h3 className="font-bold mb-2 text-gray-800 dark:text-yellow-300">Finance</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Secure data for fraud detection and risk analysis.
            </p>
          </div>
          <div className="border rounded-2xl shadow-lg bg-white dark:bg-gray-800 text-center max-w-[400px]">
            <CldImage src="syngen/retail" width={400} height={300} alt="Retail" className="mx-auto mb-5 rounded-2xl" />
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

      <section className="py-6 transition-colors duration-300 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          {/* Logos */}
          <div className="flex flex-wrap justify-center  items-center gap-4 md:gap-12 w-full md:w-auto">
            <div className='dark:bg-white p-2 rounded-lg'>
              <CldImage
                src="syngen/nghn1zonnzcvvajhcrcg"
                alt="Department of Science & Technology Logo"
                width={500} height={100}
                className="rounded-lg"
              />
            </div>
            <CldImage
              src="syngen/smalghw76wubiqlvbcpe"
              alt="NM-ICPS Logo"
              width={150} height={100}
              className="rounded-lg"
            />
            <CldImage
              src="syngen/cpxju4gfabbnih22ccf4"
              alt="IDEAS - Technology Innovation Hub Logo"
              width={150} height={100}
              className="rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left max-w-lg px-4 w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-300 mb-2">
              Funded by
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              The <strong>Institute of Data Engineering, Analytics, and Science Foundation (IDEAS)</strong> operates under the
              <strong> Technology Innovation Hub at the Indian Statistical Institute</strong>.
              Supported by the <strong>Department of Science & Technology (DST)</strong> as part of the
              <strong> National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS)</strong>,
              driving innovation and advancements in cutting-edge technologies.
            </p>
          </div>


        </div>
      </section>

      <hr className='' />

      <section className="py-2 transition-colors duration-300 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 flex flex-col-reverse items-center md:flex-row md:space-x-8 md:items-center md:space-y-0">

          {/* Text Section (Mobile: below logo) */}
          <div className="text-center md:text-left max-w-lg px-4 w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-300 mb-4">
              Supported by
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              The <strong>Indian Institute of Technology Guwahati (IIT Guwahati) </strong>
              actively supports the SynGenData initiative by facilitating research collaborations,
              knowledge sharing, and technological advancements in the field of data engineering and AI-driven synthetic data.
            </p>
          </div>

          {/* Logo Section (Mobile: at the top with bottom padding) */}
          <div className="flex justify-center md:justify-end items-center w-full md:w-1/2 pb-8 md:pb-0">
            <CldImage
              src="syngen/frxnbpnjzv56mambrmqk"
              alt="IIT Guwahati Logo"
              width={180}
              height={120}
              className="rounded-lg dark:bg-white"
            />
          </div>

        </div>
      </section>








      {/* Final CTA: Newsletter Signup Section */}
      {/* <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-yellow-300">
          Stay Updated with SynGenData AI
        </h2>
        <p className="mb-8 text-gray-700 dark:text-gray-200 max-w-xl mx-auto">
          Subscribe to our newsletter for the latest trends in synthetic data and AI.
        </p>
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
      </section> */}
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
            <div className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 inline-block mt-2">
              <h2 className="font-semibold text-gray-900 dark:text-white text-sm">
                Total Visitors:{" "}
                <span className="text-yellow-600 dark:text-yellow-200">
                  {visitorCount !== null ? visitorCount : "Loading..."}
                </span>
              </h2>
            </div>
          </div>

        </div>

      </footer>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-full max-w-3xl mx-4 bg-white rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600 z-10"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/00FM4-VLHpQ"
                title="SynGenData Demo"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}


    </div>


  );


}
