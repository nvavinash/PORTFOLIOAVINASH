import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Section id="about" className="bg-surface/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        The intersection of <span className="text-secondary">Logic</span>, <span className="text-primary">Law</span>, and <span className="text-accent">Code</span>.
                    </h2>
                    <div className="space-y-4 text-neutral-300 leading-relaxed">
                        <p>
                            I am a <strong>Full-Stack AI Engineer</strong> with a specialized focus on building robust, data-driven systems for high-stakes environments. My journey began in the world of application development, mastering the <strong>MERN stack</strong> to build scalable web platforms, but my curiosity about the <em>data</em> behind the interface led me deeper into <strong>Data Science and Machine Learning</strong>.
                        </p>
                        <p>
                            Today, I operate at the convergence of these fields. I don’t just train models; I deploy them into living, breathing web applications. I don’t just build UIs; I design the data pipelines that power them.
                        </p>
                        <p>
                            My work serves a critical purpose: <strong>Regulatory Compliance and Automated Governance.</strong> From ensuring GST compliance for over 50 businesses to currently modernizing the digital infrastructure for the <strong>Debt Recovery Tribunal (NIC)</strong>, I build software that handles complex legal logic, sensitive data, and real-world financial stakes.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Abstract Visualization Placeholder */}
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 p-8 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                        <div className="grid grid-cols-2 gap-4 w-full h-full opacity-50">
                            <div className="bg-primary/20 rounded-lg animate-pulse" />
                            <div className="bg-surface rounded-lg" />
                            <div className="bg-secondary/20 rounded-lg" />
                            <div className="bg-accent/20 rounded-lg animate-pulse delay-500" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-primary/50">
                            {`{ "compliance": "active", "risk": 0.01 }`}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
