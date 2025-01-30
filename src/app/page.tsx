"use client";
import './globals.css'
import Contact from '../components/contact'
import HomeTitle from '@/components/HomeTitle'
import Work from '@/components/work'
import NavBar from '@/components/NavBar'
import Team from '@/components/Team'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import Testimonials from '@/components/testimonials';
import Image from 'next/image';
import { MotionDiv } from "../components/MotionDiv";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: DOMHighResTimeStamp):void {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <main className="flex flex-col min-h-screen justify-center snap-mandatory snap-y">
      <NavBar />
      <section id='home' className='flex flex-col justify-center relative'>
        <HomeTitle />
      </section>


      <section id='work' className='min-h-screen overflow-hidden flex justify-center items-center relative snap-center bg-white'>
        <Work />
      </section>

        <section id='team' className=' h-full lg:h-screen  overflow-hidden flex justify-center items-center relative snap-center bg-red'>
          <Team />
        </section>

      <section id='testimonials' className='h-full mt-16 overflow-hidden sm:flex justify-center items-center relative snap-center bg-white'>
        <Testimonials />
      </section>

      <section id='contact' className='border-r-green-50 h-full flex flex-col justify-center relative mt-16'>
        <Contact />


      <footer className="bg-[#312e81] h-full p-12 mb-0 pb-0 drop-shadow-lg">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-white'>
          <div className='w-full md:w-1/4 relative' ref={ref}>
        <motion.h4 className='break-word uppercase md:text-9xl text-7xl font-bold text-white font-NeuePowerTrial'
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }}
              transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 40,
                  damping: 10,
              }}>
          BIG BRAIN
          </motion.h4>
          </div>
            <div className='flex custom:hidden absolute md:left-60 left-40 gap-[-30px] flex-row md:top-[61px] sm:top-[45px]'>
        <MotionDiv
          className="cursor-pointer p-0 m-0 md:mr-[-50px] mr-[-30px]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image className="p-0  -mb-96 md:w-[110px] md:h-[110px] w-[70px] h-[70px]" src='/img/hugo33b.png' alt='hugo' width={110} height={110}/>
        </MotionDiv>
        <MotionDiv
          className="cursor-pointer p-0 m-0 md:mr-[-50px] mr-[-30px]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
        >
          <Image className="p-0 m-0 md:w-[110px] md:h-[110px] w-[70px] h-[70px]" src='/img/hamza.png' alt='hamza' width={110} height={110} />
        </MotionDiv>
        <MotionDiv
          className="cursor-pointer p-0 m-0 md:mr-[-50px] mr-[-30px]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
        >
          <Image className="p-0 m-0  md:w-[110px] md:h-[110px] w-[70px] h-[70px]" src='/img/kevin3bb.png' alt='kevin' width={110} height={110} />
        </MotionDiv>
          </div>
            <div className="hidden sm:block"></div>
          <div className='grid grid-cols-2 mt-10 md:mt-0'>
        <div>
          <div>
            <h4 className='font-bold mt-5 font-NeuePowerTrial'>Company</h4>
            <div className='font-light'>
          <p>Blog</p>
          <p>Careers</p>
            </div>
          </div>
          <div className='mt-10'>
            <h4 className='font-bold font-NeuePowerTrial'>Legal</h4>
            <div className='font-light'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies Policy</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className='font-bold mt-5 font-NeuePowerTrial'>
            Platform
          </h4>
          <div className='font-light'>
            <p>Plan & Pricing</p>
            <p>Personal AI Manager</p>
            <p>AI business writer</p>
          </div>
          <h4 className='font-bold mt-10 font-NeuePowerTrial'>
            Technologies
            </h4>
          <div className='font-light'>
            <p>Software</p>
            <p>Stack</p>
          </div>
        </div>
          </div>
        </div>
        <div className="text-left text-white md:mt-6  mt-10 pb-10 text-sm">
          <p>&copy; 2025 3 BIG BRAIN Inc. All rights reserved.</p>
        </div>
      </footer>
      </section>
    </main>

  )
}
