import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import { Sparkles, Brain, FileSearch } from 'lucide-react';

const BuildingNow = () => {
    return (
        <Section className="bg-gradient-to-b from-surface/30 to-background pb-32">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
                    <Sparkles size={14} /> Current R&D
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">What I'm <span className="text-accent">Building Now</span></h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="h-full bg-surface/80 border-accent/10">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                <Brain size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">AI-First Compliance Architectures</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Developing "Risk Dashboards" that use LLMs to interpret legal orders and predict compliance bottlenecks before they occur.
                                </p>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="h-full bg-surface/80 border-accent/10">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                <FileSearch size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Agentic AI Workflows</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Exploring autonomous agents for document retrieval and preliminary legal due diligence, automating the boring stuff.
                                </p>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
};

export default BuildingNow;
