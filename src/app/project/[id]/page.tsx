"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projects from "../../projects";
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-semibold text-red-500">Projet non trouvé</h1>
                <Link href="/" className="text-blue-600 hover:underline mt-4 block">
                    Retour aux projets
                </Link>
            </div>
        );
    }

    return (
        <main className="flex flex-col min-h-screen justify-center snap-mandatory snap-y">
            <NavBar />
            <div className="flex flex-col md:flex-row p-20 px-52 h-screen justify-center gap-20">
                <div className="md:w-1/2 flex flex-col h-auto gap-4 justify-center">
                    <div>
                        <h1 className="text-6xl font-bold font-NeuePowerTrial">{project.title}</h1>
                        <p className="text-lg text-gray-800">{project.descriptions}</p>
                        <div className="flex gap-2 mt-4">
                            {project.categories.map((category, index) => (
                                <span key={index} className="bg-[#C7D2FE] text-black rounded-full px-3 py-1 text-sm font-normal border-[#6366F1] border-[1px]">
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col gap-20">
                        <div className="grid grid-cols-2 gap-x-10">
                            <div className="mb-2 text-md">
                                <h3 className="font-bold font-NeuePowerTrial">CONTEXT</h3>
                                <p>{project.context}</p>
                            </div>
                            <div className="text-md mb-2">
                                <h3 className="font-bold font-NeuePowerTrial">OBJECTIVES</h3>
                                <p>{project.objectives}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-10">
                            <div className="text-md mb-2">
                                <h3 className="font-bold font-NeuePowerTrial">TECHNOLOGIES</h3>
                                <p>{project.technologies_used.join(', ')}</p>
                            </div>
                            <div className="text-md mb-2">
                                <h3 className="font-bold font-NeuePowerTrial">RESULTS</h3>
                                <p>{project.results}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full md:h-auto md:w-1/2 md:ml-4 flex items-stretch">
                    <Image
                        src={project.image}
                        alt={project.alt}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </main>
    );
};

export default ProjectDetails;
