import React from "react";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import { buttonVariants } from "@/components/ui/button";

import Link from 'next/link';


export const HomeTitle = () => {
    return (
            <section className="grid h-screen w-full place-content-center bg-[#eef2ff]">
                <div className="text-center items-center pt-0 pr-32  pl-32">
                <MotionDiv className="flex justify-center items-center"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1,
                    delay: 2.5 }}
                    >
                        <div className="flex flex-row gap-1">
                            <MotionDiv
                                className="cursor-pointer"
                                initial={{ y: 0 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <Image src="/img/kevin3bb.png" width={100} height={100} alt={""} draggable={false} />
                            </MotionDiv>
                            <MotionDiv
                                className="cursor-pointer"
                                initial={{ y: 0 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
                            >
                                <Image src="/img/hamza.png" width={100} height={100} alt={""} draggable={false} />
                            </MotionDiv>
                            <MotionDiv
                                className="cursor-pointer"
                                initial={{ y: 0 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
                            >
                                <Image src="/img/hugo33B.png" width={100} height={100} alt={""} draggable={false} />
                            </MotionDiv>
                        </div>
                </MotionDiv>
                    <MotionDiv
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 1,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 40,
                            damping: 5,
                        }}
                    >
                        <h1 className="text-2xl md:text-5xl text-102030 font-bold font-NeuePowerTrial lg:text-5xl xl:text-[70px]  selection:bg-[#a5b4fc] filter drop-shadow-2xl custom-drop-shadow ">
                            Let&rsquo;s create something <span className="text-indigo-600 filter drop-shadow-2xl custom-drop-shadow">BIG</span> out of what you have in your <span className=" text-indigo-600  ">Brain</span>
                        </h1>
                    </MotionDiv>
                    <MotionDiv
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 10 }}
                        transition={{
                            duration: 0.5,
                            delay: 1.5,
                            type: "spring",
                            stiffness: 100,
                            damping: 8,
                        }}
                    >
                        <p className=" text-xs md:text-base mt-2 font-light font-NeuePowerTrial text-center pt-3 pb-11  text-indigo-600 opacity-70">
                            Best newcomer agency in the world 2024 (#1)
                        </p>
                    </MotionDiv>

                    <MotionDiv className="flex justify-center items-center gap-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 2,
                            type: "spring",
                            stiffness: 100,
                            damping: 8,
                        }}>
                        <Link href='#contact' className={`${buttonVariants({ variant: "default" })} p-16 filter drop-shadow-2xl custom-drop-shadow bg-indigo-600 text-white`}>
                            Contact Us
                        </Link>
                        <Link href='#work' className={`${buttonVariants({ variant: "secondary" })} p-16`}>
                            See our projects
                        </Link>
                    </MotionDiv>

                    <MotionDiv className="absolute -bottom-5 xl:block hidden"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1,
                    delay: 3.0 }}
                    >
                        <Image src="/img/37.png" width={300} height={500} alt={""} />
                    </MotionDiv>

                    <MotionDiv className="absolute -bottom-5 right-28 xl:block hidden"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1,
                        delay: 3.0 }}
                    >
                        <Image src="/img/28.png" width={300} height={500} alt={""} />
                    </MotionDiv>

                </div>
            </section>
    );
};

export default HomeTitle;
