import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Software Engineer (Systems & Compliance)",
        company: "Debt Recovery Tribunal (eDRT – NIC)",
        period: "Current",
        description: "Spearheading QA and rollout engineering for India's debt recovery legal infrastructure. Designing automated testing frameworks ensuring zero-downtime deployments.",
        highlight: "Government Tech"
    },
    {
        role: "Full Stack Developer",
        company: "Fortax (GST Compliance Startup)",
        period: "Previous",
        description: "Built core GST filing modules serving 50+ MSMEs. Migrated manual workflows to a MERN-based web app, reducing filing time by 60%.",
        highlight: "Fintech Startup"
    },
    {
        role: "Data Science Intern",
        company: "Tech Company",
        period: "Previous",
        description: "Assisted in building predictive models using Scikit-Learn. Preprocessed 100k+ transactional records to improve model training efficiency.",
        highlight: "Data Engineering"
    }
];

const Experience = () => {
    return (
        <Section id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-primary">Journey</span></h2>
                <p className="text-neutral-400">Where I've built and scaled systems.</p>
            </motion.div>

            <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="pl-8 md:pl-12 relative"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <span className="hidden md:block w-1 h-1 rounded-full bg-neutral-600" />
                            <span className="text-neutral-400">{exp.company}</span>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm font-mono text-primary/80 bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                                {exp.period}
                            </span>
                            <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                                {exp.highlight}
                            </span>
                        </div>

                        <p className="text-neutral-400 max-w-3xl leading-relaxed">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
