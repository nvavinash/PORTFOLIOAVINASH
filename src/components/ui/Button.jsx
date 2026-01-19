import React from 'react';
import { cn } from '../../utils/cn';

const Button = React.forwardRef(({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}, ref) => {
    const variants = {
        primary: 'bg-primary text-background hover:bg-primary/90 shadow-[0_0_20px_rgba(56,189,248,0.3)]',
        secondary: 'border border-primary/20 text-primary hover:bg-primary/10',
        ghost: 'text-neutral-300 hover:text-white hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            ref={ref}
            className={cn(
                'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 active:scale-95 disabled:opacity-50',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";
export default Button;
