import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileimg from "../assets/profile.png";

const HeroSection = ({ onAbout, onExp, onSkills, onContact }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Container animation
  const height = useTransform(scrollYProgress, [0, 1], ["30rem", "6rem"]);
  const marginTop = useTransform(scrollYProgress, [0, 1], ["5rem", "1rem"]);
  const padding = useTransform(scrollYProgress, [0, 1], ["2.5rem", "1rem"]);


// Image animation (square → circle)
// Image morph
const imageWidth = useTransform(scrollYProgress, [0, 1], ["20%", "4rem"]);
const imageHeight = useTransform(scrollYProgress, [0, 1], ["100%", "5rem"]);
const imageRadius = useTransform(scrollYProgress, [0, 1], ["1rem", "50%"]);


  // Hero text fade out
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Navbar buttons fade in
  const navOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="h-[200vh]">

      <motion.div
        style={{ height, marginTop, padding }}
        className="
          fixed top-[15px]
          mx-[5rem]
          w-[calc(100%-10rem)]
          bg-near-black border rounded-xl
          flex flex-row gap-5 justify-start items-center
          z-50
        "
      >

    {/* Image */}
<motion.div
  style={{
    width: imageWidth,
    height: imageHeight,
    borderRadius: imageRadius,
    maxHeight: "100%",
  }}
  className="overflow-hidden flex-shrink-0"
>
  <img
    src={profileimg}
    className="w-full h-full object-cover"
    alt=""
  />
</motion.div>



        {/* Hero Content (fades out) */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="w-[70%] h-full bg-soft-green rounded-xl p-[2.5rem] flex flex-col gap-y-5"
        >
          <div className="flex flex-col items-end justify-end">
            <p className="text-[3rem] font-[10]">SATYADEEP JANDHYAM</p>
            <p className="text-[1rem]">Sr. Fullstack developer</p>
          </div>

          <div>
            <p className="text-[1.5rem] text-dark-brown">
              Hii iam satyadeep, Welcome to my profile.
            </p>
          </div>

          <div className="flex flex-row gap-x-10">
            <button onClick={onAbout} className="border w-[8rem] bg-white rounded-[0.2rem] h-[2rem] button-shadow">
              About
            </button>
            <button onClick={onExp} className="border w-[8rem] bg-white rounded-[0.2rem] h-[2rem] button-shadow">
              Experience
            </button>
            <button onClick={onSkills} className="border w-[8rem] bg-white rounded-[0.2rem] h-[2rem] button-shadow">
              Skills
            </button>
            <button onClick={onContact} className="border w-[8rem] bg-white rounded-[0.2rem] h-[2rem] button-shadow">
              Contact
            </button>
          </div>
        </motion.div>

        {/* Navbar buttons (fade in, replace name area) */}
        <motion.div
          style={{ opacity: navOpacity }}
          className="absolute right-10 flex gap-x-8"
        >
          <button onClick={onAbout} className="border px-6 bg-white rounded-md h-[2rem]">
            About
          </button>
          <button onClick={onExp} className="border px-6 bg-white rounded-md h-[2rem]">
            Experience
          </button>
          <button onClick={onSkills} className="border px-6 bg-white rounded-md h-[2rem]">
            Skills
          </button>
          <button onClick={onContact} className="border px-6 bg-white rounded-md h-[2rem]">
            Contact
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
