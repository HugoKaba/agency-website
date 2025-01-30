import { motion } from "framer-motion";
import Image from "next/image";

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.5, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverVariants = {
    hover: { y: -10 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen w-full p-4 md:p-14 my-10 bg-[#eef2ff]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      {/* TITRE */}
      <div className="flex flex-col items-center">
        <motion.h2
          className="text-5xl md:text-5xl xl:text-6xl font-bold font-NeuePowerTrial text-[#102030] text-center my-5 lg:mb-2 lg:my-0"
          variants={itemVariants}
        >
          Our Team
        </motion.h2>
        <motion.p
          className="text-indigo-600 opacity-70 drop-shadow-2xl filter mb-10 text-center font-medium md:text-base text-base custom-drop-shadow"
          variants={itemVariants}
        >
          Three amazing developers, They call us the{" "}
          <span className="font-bold text-lg">BIG 3</span>
        </motion.p>
      </div>

      {/* CARTES ÉQUIPE */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10  p-4"
        variants={containerVariants}
      >
        {/* Kevin */}
        <motion.div
          className="flex flex-col items-center rounded-xl bg-white pb-6 md:pb-10 drop-shadow-sm shadow-2xl shadow-indigo-500/20 cursor-pointer"
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.div variants={hoverVariants}>
            <Image
              src="/img/kevin3bb.png"
              width={300}
              height={300}
              alt="Kevin"
              draggable={false}
            />
          </motion.div>
          <h4 className="text-xl md:text-3xl font-medium mb-2">Kevin L.</h4>
          <p className="text-black text-center"><span className="font-medium">Founder</span> & Front-End Developer</p>
        </motion.div>

        {/* Hamza */}
        <motion.div
          className="flex flex-col items-center rounded-xl bg-white pb-6 md:pb-10 drop-shadow-sm shadow-2xl shadow-indigo-500/20 cursor-pointer"
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.div variants={hoverVariants}>
            <Image
              src="/img/hamza.png"
              width={300}
              height={300}
              alt="Hamza"
              draggable={false}
            />
          </motion.div>
          <h4 className="text-xl md:text-3xl font-medium mb-2">Hamza I.</h4>
          <p className="text-black text-center"><span className="font-medium">CTO</span> & Front-End Developer</p>
        </motion.div>

        {/* Hugo */}
        <motion.div
          className="flex flex-col items-center rounded-xl bg-white pb-6 md:pb-10 drop-shadow-sm shadow-2xl shadow-indigo-500/20 cursor-pointer"
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.div variants={hoverVariants}>
            <Image
              src="/img/hugo33b.png"
              width={300}
              height={300}
              alt="Hugo"
              draggable={false}
            />
          </motion.div>
          <h4 className="text-xl md:text-3xl font-medium mb-2">Hugo K.</h4>
          <p className="text-black text-center"><span className="font-medium">Founder</span> & Full Stack Developer</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Team;
