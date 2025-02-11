// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Brand / Logo */}
                <HoverBorderGradient className="bg-white">
                    <Link
                        href="/"
                        className="text-xl font-bold text-black hover:opacity-80 transition-opacity"
                    >
                        SynGen
                    </Link>
                </HoverBorderGradient>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className={navigationMenuTriggerStyle()}>
                        Home
                    </Link>
                    <Link href="/about" className={navigationMenuTriggerStyle()}>
                        About
                    </Link>
                    <Link href="/features" className={navigationMenuTriggerStyle()}>
                        Features
                    </Link>
                    <Link href="/pricing" className={navigationMenuTriggerStyle()}>
                        Pricing
                    </Link>
                    <Link href="/blog" className={navigationMenuTriggerStyle()}>
                        Blog
                    </Link>
                    <Link href="/contact" className={navigationMenuTriggerStyle()}>
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-sm">
                    <div className="px-6 py-4 space-y-4">
                        <Link href="/" className={navigationMenuTriggerStyle()} onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/about" className={navigationMenuTriggerStyle()} onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                        <Link href="/features" className={navigationMenuTriggerStyle()} onClick={() => setIsOpen(false)}>
                            Features
                        </Link>
                        <Link href="/pricing" className={navigationMenuTriggerStyle()} onClick={() => setIsOpen(false)}>
                            Pricing
                        </Link>
                        <Link href="/blog" className={navigationMenuTriggerStyle()} onClick={() => setIsOpen(false)}>
                            Blog
                        </Link>
                        <Link href="/contact" className={navigationMenuTriggerStyle()} onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
