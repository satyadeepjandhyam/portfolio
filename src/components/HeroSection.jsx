import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingImage from "./FloatingImage";

const HeroSection = ({ onAbout, onExp, onSkills, onContact }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Hero → Navbar morphing
  const height = useTransform(scrollYProgress, [0, 1], ["30rem", "5rem"]);
  const padding = useTransform(scrollYProgress, [0, 1], ["2.5rem", "1rem"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["1.5rem", "1rem"]);
  const marginTop = useTransform(scrollYProgress, [0, 1], ["15rem", "15px"]);

  // Content fade
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Image morph
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const imageBorderRadius = useTransform(scrollYProgress, [0, 1], ["1rem", "50%"]);
  const imageShadow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px 0px 30px rgba(255,255,255,0.5)", "0px 0px 15px rgba(255,255,255,0.9)"]
  );

  // Button color change
  const buttonColor = useTransform(scrollYProgress, [0.4, 1], ["#000", "#fff"]);

  return (
    <section ref={sectionRef} className="h-[200vh]">
      <motion.div
        style={{
          height,
          padding,
          borderRadius,
          marginTop,
        }}
        className="fixed top-[15px] left-1/2 -translate-x-1/2 
                   w-[90%] max-w-[1200px]
                   bg-near-black border 
                   flex gap-5 items-center z-50 overflow-hidden"
      >
        {/* Profile Image */}
        <motion.div
          style={{
            scale: imageScale,
            borderRadius: imageBorderRadius,
            boxShadow: imageShadow,
          }}
          className="w-[12rem] h-[12rem] overflow-hidden flex-shrink-0"
        >
          <FloatingImage isNavbar />
        </motion.div>

        {/* Hero Content (fade away) */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="flex-1 h-full bg-soft-green rounded-xl p-[2.5rem] 
                     flex flex-col justify-between"
        >
          <div className="flex flex-col items-end">
            <p className="text-[3rem] font-semibold">SATYADEEP JANDHYAM</p>
            <p className="text-[1rem]">Sr. Fullstack Developer</p>
          </div>

          <p className="text-[1.5rem] text-dark-brown">
            Hi I am Satyadeep, Welcome to my profile.
          </p>
        </motion.div>

        {/* Navbar Buttons */}
        <div className="flex gap-8 ml-auto">
          <motion.button
            style={{ color: buttonColor }}
            onClick={onAbout}
            className="nav-btn"
          >
            About
          </motion.button>

          <motion.button
            style={{ color: buttonColor }}
            onClick={onExp}
            className="nav-btn"
          >
            Experience
          </motion.button>

          <motion.button
            style={{ color: buttonColor }}
            onClick={onSkills}
            className="nav-btn"
          >
            Skills
          </motion.button>

          <motion.button
            style={{ color: buttonColor }}
            onClick={onContact}
            className="nav-btn"
          >
            Contact
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
