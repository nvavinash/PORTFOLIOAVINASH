import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import Button from '../ui/Button';
import Section from '../ui/Section';

const Hero = () => {
    return (
        <Section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                        Senior Product Designer & AI Engineer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
                >
                    Building <span className="text-primary">Intelligent Compliance</span> & Scalable Web Architectures.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto"
                >
                    Bridging the gap between <strong>Full-Stack Engineering (MERN)</strong> and <strong>Data Science</strong> to deliver production-grade AI solutions for Fintech & Regulatory Tech.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="w-full sm:w-auto group">
                        View Projects <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                        <FileText className="mr-2 w-4 h-4" /> Download Resume
                    </Button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-12 text-sm text-neutral-500"
                >
                    Trusted by <strong>Debt Recovery Tribunal (NIC)</strong> & <strong>50+ MSMEs</strong>
                </motion.p>
            </div>
        </Section>
    );
};

export default Hero;
