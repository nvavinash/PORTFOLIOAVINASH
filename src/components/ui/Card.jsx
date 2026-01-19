import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

const Card = ({ className, children, hoverEffect = false, ...props }) => {
    const BaseTag = hoverEffect ? motion.div : 'div';

    return (
        <BaseTag
            className={cn(
                'bg-surface/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 overflow-hidden',
                hoverEffect && 'hover:border-primary/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-500 group',
                className
            )}
            whileHover={hoverEffect ? { y: -5 } : undefined}
            {...props}
        >
            {children}
        </BaseTag>
    );
};

export default Card;
