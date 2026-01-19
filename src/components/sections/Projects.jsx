import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Scale, Eye, ShoppingCart } from 'lucide-react';

const projects = [
    {
        title: "RegPulse: AI Compliance Engine",
        description: "Architected a Compliance-as-a-Service (CaaS) platform that ingests regulatory documents and uses NLP to map them against internal company data, flagging risks in real-time.",
        tech: ["Python (FastAPI)", "React.js", "Google Gemini", "MongoDB"],
        icon: <Scale className="w-6 h-6 text-primary" />,
        stat: "40% reduced audit time"
    },
    {
        title: "Intelligent Defect Detection",
        description: "Built a Computer Vision pipeline using OpenCV and TensorFlow to identify surface defects in real-time video feeds for manufacturing lines.",
        tech: ["Python", "TensorFlow (CNN)", "OpenCV", "Data Augmentation"],
        icon: <Eye className="w-6 h-6 text-secondary" />,
        stat: "92% detection accuracy"
    },
    {
        title: "Scalable MERN Marketplace",
        description: "Developed a full-featured marketplace with secure payment gateways, role-based dashboards, and real-time inventory tracking.",
        tech: ["React.js (Redux)", "Node.js", "MongoDB", "Stripe API"],
        icon: <ShoppingCart className="w-6 h-6 text-accent" />,
        stat: "25 point Lighthouse boost"
    }
];

const Projects = () => {
    return (
        <Section id="projects" className="bg-surface/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-secondary">Case Studies</span></h2>
                <p className="text-neutral-400 max-w-2xl">Engineering solutions for complex problems.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="h-full"
                    >
                        <Card hoverEffect className="h-full flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                    {project.icon}
                                </div>
                                <div className="flex gap-3">
                                    <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Github size={18} /></a>
                                    <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors"><ExternalLink size={18} /></a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-neutral-400 mb-6 flex-grow">{project.description}</p>

                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded border border-primary/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <span className="text-sm font-semibold text-accent flex items-center gap-2">
                                        Impact: <span className="text-white font-normal">{project.stat}</span>
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
