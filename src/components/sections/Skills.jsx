import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import { Database, Code, ShieldCheck, Terminal } from 'lucide-react';

const skillsData = [
    {
        category: "Data Science & AI",
        icon: <Database className="w-8 h-8 text-primary" />,
        items: ["Python, Pandas, NumPy", "TensorFlow, OpenCV", "Google Gemini Integration", "Predictive Modeling"]
    },
    {
        category: "Full-Stack Engineering",
        icon: <Code className="w-8 h-8 text-secondary" />,
        items: ["React.js, Tailwind CSS", "Node.js, Express", "FastAPI (Python)", "RESTful APIs, Microservices"]
    },
    {
        category: "Systems & Compliance",
        icon: <ShieldCheck className="w-8 h-8 text-accent" />,
        items: ["MongoDB (Aggregations)", "SQL / PostgreSQL", "Docker, AWS (EC2)", "QA Rollout Strategies"]
    },
    {
        category: "Tools & Platforms",
        icon: <Terminal className="w-8 h-8 text-neutral-400" />,
        items: ["Git / GitHub (CI/CD)", "Matplotlib, Seaborn", "Linux Environment", "VS Code, Jupyter"]
    }
];

const Skills = () => {
    return (
        <Section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
                <p className="text-neutral-400 max-w-2xl">The tools and technologies I use to build production-grade systems.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card hoverEffect className="h-full">
                            <div className="mb-4 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center border border-white/10">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                            <ul className="space-y-2">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="text-neutral-400 text-sm flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
