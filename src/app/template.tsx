'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const styles = `
.stairs {
    .transition-container {
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        left: 0;
        top: 0;
        pointer-events: none;
        z-index: 2;
        div {
            position: relative;
            height: 100%;
            width: 100%;
            background-color: #c7d2fe;
        }
    }
    .transition-background {
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: #c7d2fe;
        z-index: 1;
        pointer-events: none;
        top: 0;
        left: 0;
    }
}
`;

export const expand: Variants = {
    initial: {
        top: 0
    },
    enter: (i) => ({
        top: "100vh",
        transition: {
            duration: 1,
            delay: 0.05 * i,
            ease: [0.215, 0.61, 0.355, 1],
        },
        transitionEnd: { height: "0", top: "0" }
    }),
    exit: (i) => ({
        height: "100vh",
        transition: {
            duration: 1,
            delay: 0.05 * i,
            ease: [0.215, 0.61, 0.355, 1]
        }
    })
};

export const opacity: Variants = {
    initial: {
        opacity: 0.5
    },
    enter: {
        opacity: 0
    },
    exit: {
        opacity: 0.5,
    }
};

interface StairsProps {
    children: React.ReactNode;
    backgroundColor: string;
}

const Template: React.FC<StairsProps> = ({ children, backgroundColor }) => {
    const anim = (variants: Variants, custom: number | null = null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    const nbOfColumns = 5;

    return (
        <>
            <style>{styles}</style>
            <div className='page stairs' style={{ backgroundColor }}>
                <motion.div {...anim(opacity)} className='transition-background'/>
                <div className='transition-container'>
                    {[...Array(nbOfColumns)].map((_, i) => (
                        <motion.div key={i} {...anim(expand, nbOfColumns - i)}/>
                    ))}
                </div>
                {children}
            </div>
        </>
    );
}

export default Template;
