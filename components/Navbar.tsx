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
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden'); // Prevent scrolling when menu is open
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white dark:bg-black shadow-md transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Brand / Logo */}
                <HoverBorderGradient className="bg-white dark:bg-black">
                    <Link
                        href="/"
                        className="text-xl font-bold text-black dark:text-yellow-300 hover:opacity-80 transition-opacity"
                    >
                        SynGenData
                    </Link>
                </HoverBorderGradient>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6 items-center">
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
                    {/* <Link href="/blog" className={navigationMenuTriggerStyle()}>
                        Blog
                    </Link> */}
                    <Link href="/contact" className={navigationMenuTriggerStyle()}>
                        Contact
                    </Link>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-2">
                    <ThemeToggle />
                    <button onClick={toggleMenu} className="text-black dark:text-yellow-300 focus:outline-none">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu (Sliding Drawer) */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                    onClick={closeMenu}
                ></div>

                {/* Sliding Menu */}
                <div
                    className={`fixed top-0 right-0 w-4/5 max-w-sm h-[50%] bg-white dark:bg-black shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-lg font-bold text-black dark:text-yellow-300">Menu</span>
                        <button onClick={closeMenu} className="text-black dark:text-yellow-300">
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="px-6 py-4 flex flex-col space-y-4">
                        <Link href="/" className={navigationMenuTriggerStyle()} onClick={closeMenu}>
                            Home
                        </Link>
                        <Link href="/about" className={navigationMenuTriggerStyle()} onClick={closeMenu}>
                            About
                        </Link>
                        <Link href="/features" className={navigationMenuTriggerStyle()} onClick={closeMenu}>
                            Features
                        </Link>
                        <Link href="/pricing" className={navigationMenuTriggerStyle()} onClick={closeMenu}>
                            Pricing
                        </Link>
                        {/* <Link href="/blog" className={navigationMenuTriggerStyle()} onClick={closeMenu}>
                            Blog
                        </Link> */}
                        <Link href="/contact" className={navigationMenuTriggerStyle()} onClick={closeMenu}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
