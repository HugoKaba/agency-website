import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projects from '../app/projects';
import Link from 'next/link';
import Image from 'next/image';

const Work = () => {
    const { ref, inView: isInView } = useInView({ triggerOnce: false });

    const [categoryFilter, setCategoryFilter] = useState<string>('');
    const [techFilter, setTechFilter] = useState<string>('');

    const categories = Array.from(
        new Set(projects.flatMap(project => project.categories))
    );
    const technologies = Array.from(
        new Set(projects.flatMap(project => project.technologies_used))
    );

    const filteredProjects = projects.filter((project) => {
        const matchesCategory = categoryFilter ? project.categories.includes(categoryFilter) : true;
        const matchesTech = techFilter ? project.technologies_used.includes(techFilter) : true;
        return matchesCategory && matchesTech;
    });

    return (
        <div className="pb-14" ref={ref}>
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-1 text-center pt-10 font-NeuePowerTrial"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 40,
                    damping: 5,
                }}
            >
                Our Work
            </motion.h1>
            <motion.p
                className="md:text-base font-medium mt-2 pt-3 pb-1 text-indigo-600 opacity-70 mb-1 text-center"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 40,
                    damping: 10,
                    delay: 0.9,
                }}
            >
                Discover some of the fantastic work our team creates
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-5">
                <div className='flex justify-center items-center gap-4'>
                    <label htmlFor="categoryFilter" className="font-medium font-NeuePowerTrial">Filter by Category</label>
                    <select
                        id="categoryFilter"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="mt-2 p-2 border border-gray-300 rounded flex  items-center"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className='flex justify-center items-center gap-4'>
                    <label htmlFor="techFilter" className="font-medium font-NeuePowerTrial">Filter by Technology</label>
                    <select
                        id="techFilter"
                        value={techFilter}
                        onChange={(e) => setTechFilter(e.target.value)}
                        className="mt-2 p-2 border border-gray-300 rounded flex  items-center"
                    >
                        <option value="">All Technologies</option>
                        {technologies.map((tech, index) => (
                            <option key={index} value={tech}>{tech}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        className="relative w-80 h-64 rounded-md overflow-hidden"
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                        transition={{
                            duration: 0.5,
                            type: "spring",
                            stiffness: 40,
                            damping: 5,
                            delay: index * 0.1,
                        }}
                    >
                        <Link href={`../project/${project.id}`}>
                            <Image
                                src={project.image}
                                alt={project.alt}
                                className="w-full h-full object-cover"
                                width={1000}
                                height={1000}
                                quality={100}
                                layout="intrinsic"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                                <h3 className="text-lg font-bold font-NeuePowerTrial">{project.title}</h3>
                                <div className="flex gap-2 mt-2">
                                    {project.categories.map((category, index) => (
                                        <span key={index} className=" rounded-lg px-3 py-1 text-xs font-normal filter drop-shadow-2xl custom-drop-shadow text-white bg-indigo-600">
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Work;
