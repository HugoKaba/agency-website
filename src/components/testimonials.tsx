import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            feedback: "I needed a site to showcase my content and brand collabs. 3 Big Brain made it sleek!",
            company: "ABC Corp",
            image: "/img/hamza.png"
        },
        {
            name: "Jane Smith",
            feedback: "I needed a site to showcase my content and brand collabs. 3 Big Brain made it sleek!",
            company: "XYZ Inc",
            image: "/img/kevin3bb.png"
        },
        {
            name: "Michael Brown",
            feedback: "I needed a site to showcase my content and brand collabs. 3 Big Brain made it sleek!",
            company: "LMN Ltd",
            image: "/img/hugo33b.png"
        },
        {
            name: "Sarah Johnson",
            feedback: "I needed a site to showcase my content and brand collabs. 3 Big Brain made it sleek!",
            company: "OPQ Solutions",
            image: "/img/hamza.png"
        },
        {
            name: "David Wilson",
            feedback: "I needed a site to showcase my content and brand collabs. 3 Big Brain made it sleek!",
            company: "RST Enterprises",
            image: "/img/hugo33b.png"
        },
        {
            name: "Emma Davis",
            feedback: "I needed a site to showcase my content and brand collabs. 3 Big Brain made it sleek!",
            company: "UVW Services",
            image: "/img/kevin3bb.png"
        },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className="" ref={ref}>
            <motion.h1
                className="text-5xl p-5 md:text-6xl xl:text-7xl font-bold mb-5 text-center font-NeuePowerTrial"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 40,
                    damping: 5,
                }}
            >
                Don&rsquo;t just take our word for it
            </motion.h1>
            <motion.p
                className="mb-10 text-center text-indigo-600 opacity-70 font-medium"
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
                The projects speak for themselves but so do they
            </motion.p>
            <div className="ml-4 md:grid md:grid-cols-3 md:gap-4 overflow-x-scroll md:overflow-hidden gap-6 flex py-4">
                {testimonials.map((testimonial, index) => (
                    <div className="border rounded-xl border-gray-400" key={index}>
                    <motion.div
                        className="bg-white relative w-80 h-64 bg-opacity-25  p-4 md:overflow-hidden filter"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        transition={{
                            duration: 0.5,
                            type: "spring",
                            stiffness: 40,
                            damping: 5,
                            delay: 0.3 * index,
                        }}
                    >
                        <div className="flex items-center w-80 absolute top-4 left-4">
                            <Image className="w-16 h-16 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} width={100} height={100} />
                            <div className="text-black font-bold w-80 text-md p-2 rounded-md">
                                {testimonial.name}
                            </div>
                        </div>
                        <div className=" absolute w-80 top-24 left-4 text-black text-lg italic pr-6">
                            {testimonial.feedback}
                        </div>
                        <div className=" w-80 absolute bottom-4 left-4 text-gray-700 text-sm">
                            {testimonial.company}
                        </div>
                    </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
