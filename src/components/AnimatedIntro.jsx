// AnimatedIntro.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const TYPING_SPEED = 80;
const HOLD_TIME = 1200;

const AnimatedIntro = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentName = techStack[index].name;

    if (isTyping) {
      if (displayedText.length < currentName.length) {
        const t = setTimeout(() => {
          setDisplayedText(currentName.slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        const hold = setTimeout(() => setIsTyping(false), HOLD_TIME);
        return () => clearTimeout(hold);
      }
    } else {
      const next = setTimeout(() => {
        setIndex((prev) => (prev + 1) % techStack.length);
        setDisplayedText("");
        setIsTyping(true);
      }, 650);
      return () => clearTimeout(next);
    }
  }, [displayedText, isTyping, index]);

  const current = techStack[index];

  const dots = useMemo(() => Array.from({ length: 18 }), []);

  return (
    <div className="w-full">
     <div
  className="
    relative mt-6
    px-4 md:px-20
    w-full
    max-w-[calc(100%-2rem)] md:max-w-[calc(100%-10rem)]
    mx-auto
    rounded-2xl
    overflow-hidden

    bg-white/10
    backdrop-blur-xl
    border border-white/15
    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
  "
>
        {/* glossy overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent" />
        <div className="pointer-events-none absolute -top-20 left-0 right-0 h-48 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl opacity-60" />

        {/* subtle animated dots (doesn't affect layout) */}
        <div className="pointer-events-none absolute inset-0 opacity-35">
          {dots.map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-white/40"
              style={{
                left: `${(i * 11) % 95}%`,
                top: `${(i * 17) % 80}%`,
              }}
              animate={{ y: [0, -8, 0], opacity: [0.25, 0.7, 0.25] }}
              transition={{
                duration: 2.8 + (i % 5) * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 7) * 0.12,
              }}
            />
          ))}
        </div>

        {/* CONTENT GRID */}
        <div
          className="
            relative z-10
            grid grid-cols-1 md:grid-cols-[260px_1fr]
            items-center
            gap-4 md:gap-6
            p-4 sm:p-6 md:p-8
          "
        >
          {/* Left: Logo "coin" */}
          <div className="flex items-center justify-center md:justify-start">
            <div
              className="
                relative
                w-[140px] h-[140px]
                sm:w-[160px] sm:h-[160px]
                rounded-2xl
                bg-white/5
                border border-white/15
                shadow-[inset_0_1px_0_rgba(255,255,255,0.20),_0_16px_40px_rgba(0,0,0,0.35)]
                overflow-hidden
                flex items-center justify-center
              "
            >
              {/* inner gloss */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent" />

              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.name}
                  className="relative w-[70%] h-[70%] object-contain drop-shadow-xl"
                  initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.92, rotate: 6 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Title + typing + progress */}
          <div className="min-w-0">
            <p className="text-white/80 text-xs sm:text-sm tracking-wider">
              WORKS WITH YOUR TECH STACK
            </p>

            <div className="mt-2 flex items-center gap-2 min-w-0">
              <span
                className="
                  text-white font-semibold
                  text-lg sm:text-xl md:text-3xl
                  tracking-wide
                  min-w-0
                  whitespace-normal md:whitespace-nowrap
                  break-words
                "
              >
                {displayedText}
              </span>
              <span className="text-white animate-pulse">|</span>
            </div>

            {/* progress pills (no weird alignment) */}
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  className={`
                    px-3 py-1 rounded-full text-xs
                    border transition
                    ${
                      i === index
                        ? "bg-white/20 border-white/30 text-white"
                        : "bg-white/5 border-white/15 text-white/70 hover:bg-white/10"
                    }
                  `}
                  onClick={() => {
                    setIndex(i);
                    setDisplayedText("");
                    setIsTyping(true);
                  }}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* bottom shimmer strip */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default AnimatedIntro;
