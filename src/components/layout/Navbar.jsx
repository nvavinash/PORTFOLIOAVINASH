import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../../utils/cn';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/0',
                scrolled ? 'bg-background/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Portfolio.
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="h-6 w-px bg-white/10 mx-2" />
                    <div className="flex gap-4">
                        <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    'md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden',
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
            >
                <div className="flex flex-col p-6 space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-neutral-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
