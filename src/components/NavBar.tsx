"use client";

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from "framer-motion";

const NavBar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isHome, setIsHome] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById("home");
            if (homeSection) {
                const { top, bottom } = homeSection.getBoundingClientRect();
                setIsHome(top <= 0 && bottom > 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigation = (e: React.MouseEvent, section: string) => {
        e.preventDefault();
        if (pathname === "/") {
            document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push(`/#${section}`);
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 sm:flex justify-between items-center p-4
                    transition-colors duration-300 ${isHome ? "bg-transparent" : "bg-white/30 backdrop-blur-md"
                }`}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 30,
                damping: 10,
            }}
        >
            <div className="font-bold text-xl">
                <a
                    href={`/#home`}
                    className="cursor-pointer"
                    onClick={(e) => handleNavigation(e, "home")}
                >
                    <span className="text-black">3</span><span className='text-indigo-600'>B</span><span className="text-indigo-600">B</span>®
                </a>
            </div>
            <div className="sm:flex space-x-4 hidden">
                {["home", "work", "team", "testimonials", "contact"].map((section) => (
                    <a
                        key={section}
                        href={`/#${section}`}
                        className="px-4 py-2 cursor-pointer transition-colors duration-300 hover:text-indigo-600"
                        onClick={(e) => handleNavigation(e, section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default NavBar;
