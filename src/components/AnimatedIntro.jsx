// AnimatedIntro.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Static image imports
import reactLogo from "../assets/images/react.png";
import springbootLogo from "../assets/images/springboot.png";
import nodeLogo from "../assets/images/nodejs.png";
import mongoLogo from "../assets/images/mongo.png";
import awsLogo from "../assets/images/aws.png";

const techStack = [
  { name: "React.js", image: reactLogo },
  { name: "Java Spring Boot", image: springbootLogo },
  { name: "Node.js", image: nodeLogo },
  { name: "MongoDB", image: mongoLogo },
  { name: "AWS", image: awsLogo },
];

const TYPING_SPEED = 100;
const HOLD_TIME = 1500;

const AnimatedIntro = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentName = techStack[index].name;

    if (isTyping) {
      if (displayedText.length < currentName.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentName.slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
      } else {
        const hold = setTimeout(() => setIsTyping(false), HOLD_TIME);
        return () => clearTimeout(hold);
      }
    } else {
      const next = setTimeout(() => {
        setIndex((prev) => (prev + 1) % techStack.length);
        setDisplayedText("");
        setIsTyping(true);
      }, 900);
      return () => clearTimeout(next);
    }
  }, [displayedText, isTyping, index]);

  const currentImage = techStack[index].image;

  return (
    <div className="w-full max-w-full">
      <div
        className="
          relative mt-6
          mx-4 md:mx-20
          w-auto max-w-full
          rounded-2xl
          overflow-hidden

          flex flex-col md:flex-row
          items-stretch md:items-center

          bg-white/10
          backdrop-blur-xl
          border border-white/15
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        "
      >
        {/* ✅ glossy overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent" />

        {/* ✅ top shine streak (no overflow) */}
        <div className="pointer-events-none absolute -top-20 left-0 right-0 h-48 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl opacity-60" />

        {/* Left: Image */}
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            w-full md:w-1/2
            min-w-0
            flex items-center justify-center
            py-6 md:py-0
          "
        >
          <div
            className="
              relative
              rounded-2xl
              bg-white/5
              border border-white/15
              shadow-[inset_0_1px_0_rgba(255,255,255,0.20),_0_16px_40px_rgba(0,0,0,0.35)]
              p-4
            "
          >
            {/* subtle gloss */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/15 via-transparent to-transparent" />

            <img
              src={currentImage}
              alt="Technology"
              className="
                relative
                w-20 h-20
                sm:w-24 sm:h-24
                md:w-24 md:h-24
                lg:w-28 lg:h-28
                object-contain
                drop-shadow-xl
              "
            />
          </div>
        </motion.div>

        {/* Right: Typed Text */}
        <div
          className="
            relative
            w-full md:w-1/2
            min-w-0
            flex items-center justify-center
            px-4
            pb-6 md:pb-0
            text-center
          "
        >
          <div className="min-w-0 max-w-full">
            <span
              className="
                text-base sm:text-lg md:text-3xl
                font-semibold tracking-wide
                text-white
                whitespace-normal md:whitespace-nowrap
                break-words
              "
            >
              {displayedText}
            </span>
            <span className="ml-1 text-white animate-pulse">|</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedIntro;
