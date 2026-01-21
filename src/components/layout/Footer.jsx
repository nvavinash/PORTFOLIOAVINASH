import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-neutral-500 text-sm">
                    © {new Date().getFullYear()} Avinash C. Built with React, Tailwind & Framer Motion.
                </p>
                <div className="flex gap-6">
                    <a href="https://github.com/nvavinash" target="_blank" className="text-neutral-400 hover:text-white transition-colors"><Github size={18} /></a>
                    <a href="https://www.linkedin.com/in/avinashnv" target="_blank" className="text-neutral-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
                    <a href="mailto:avinash.fortax@gmail.com" target="_blank" className="text-neutral-400 hover:text-white transition-colors"><Mail size={18} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
