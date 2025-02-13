'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
        >
            {theme === 'light' ? (
                <Moon className="w-6 h-6 text-black" />
            ) : (
                <Sun className="w-6 h-6 text-yellow-300" />
            )}
        </button>
    );
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white dark:bg-black shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Brand / Logo */}
                <HoverBorderGradient className="bg-white dark:bg-black">
                    <Link
                        href="/"
                        className="text-xl font-bold text-black dark:text-yellow-300 hover:opacity-80 transition-opacity"
                    >
                        SynGen
                    </Link>
                </HoverBorderGradient>

                {/* Desktop Navigation Links with Theme Toggle */}
                <div className="hidden md:flex space-x-4 items-center">
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
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button and Theme Toggle */}
                <div className="md:hidden flex items-center space-x-2">
                    <ThemeToggle />
                    <button onClick={toggleMenu} className="text-black dark:text-yellow-300 focus:outline-none">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-black shadow-sm">
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
