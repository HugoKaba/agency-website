"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    const [randomHead, setRandomHead] = useState<string>("");

    useEffect(() => {
        const heads = [
            "/img/kevin3bb.png",
            "/img/hamza.png",
            "/img/hugo33B.png"
        ];
        const randomIndex = Math.floor(Date.now() / 1000) % heads.length;
        setRandomHead(heads[randomIndex]);
    }, []);

    return (
        <motion.div
            className="bg-gradient-to-r flex items-center justify-center h-screen"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                background: '#eef2ff'
            }}
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                style={{ textAlign: 'center', fontSize: '8rem' }}
                className="font-NeuePowerTrial text-indigo-600 filter drop-shadow-2xl custom-drop-shadow md:text-xl lg:text-9xl xl:text-[70px] animate-bounce"
            >
                N😵‍💫t found – 404!
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex justify-center items-center gap-4 mt-6"
            >
                {randomHead && (
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <Image src={randomHead} width={100} height={100} alt="Random Head" draggable={false} />
                    </motion.div>
                )}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                style={{ marginBottom: '-16rem', position: 'absolute', zIndex: 9999 }}
            >
                <span 
                    className="text-lg text-indigo-500 hover:text-indigo-300 font-bold font-NeuePowerTrial transition-colors duration-300 z-50000"
                >
                    <Link href="/">
                        GO BACK HOME
                    </Link>
                </span>
            </motion.div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute -bottom-5 sm:block hidden"
            >
                <Image src="/img/37.png" width={300} height={500} alt="Image 37" />
            </motion.div>
        </motion.div>
    );
}
