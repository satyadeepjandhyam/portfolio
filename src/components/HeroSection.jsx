import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingImage from "./FloatingImage";

const HeroSection = ({ onAbout, onExp, onSkills, onContact }) => {
  const sectionRef = useRef(null);

  // Track scroll ONLY for hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth transforms
  const height = useTransform(scrollYProgress, [0, 1], ["30rem", "5rem"]);
  const padding = useTransform(scrollYProgress, [0, 1], ["2.5rem", "1rem"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["1.5rem", "0rem"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={sectionRef} >
      {/* Sticky Animated Hero */}
      <motion.div
        style={{ height, padding, borderRadius }}
        className="sticky top-0 mx-[5rem] bg-near-black border 
                   flex gap-5 items-center z-40 overflow-hidden"
      >
        {/* Floating Image */}
        <motion.div style={{ scale: imageScale }} className="w-[30%]">
          <FloatingImage />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="w-[70%] h-full bg-soft-green rounded-xl p-[2.5rem] 
                     flex flex-col justify-between"
        >
          <div className="flex flex-col items-end">
            <p className="text-[3rem] font-semibold">SATYADEEP JANDHYAM</p>
            <p className="text-[1rem]">Sr. Fullstack Developer</p>
          </div>

          <p className="text-[1.5rem] text-dark-brown">
            Hi I am Satyadeep, Welcome to my profile.
          </p>

          <div className="flex gap-x-10">
            <button onClick={onAbout} className="nav-btn">About</button>
            <button onClick={onExp} className="nav-btn">Experience</button>
            <button onClick={onSkills} className="nav-btn">Skills</button>
            <button onClick={onContact} className="nav-btn">Contact</button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
