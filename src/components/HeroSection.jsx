// HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import profileimg from "../assets/profile.png";
import { User, Briefcase, Wrench, Mail } from "lucide-react";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}

const scrollToHero = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const HeroSection = ({ onAbout, onExp, onSkills, onContact }) => {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile(768);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const [isCollapsed, setIsCollapsed] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsCollapsed(latest >= 0.4);
  });

  // Container animation (responsive)
  const height = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [520, 88] : [500, 96]
  );
  const padding = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [20, 12] : [40, 16]
  );

  // Image morph (square -> circle)
  const imageW = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [260, 52] : [320, 56]
  );
  const imageRadius = useTransform(scrollYProgress, [0, 1], [16, 999]);

  // Fade hero content out / nav in
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const navOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="h-[70vh] xl:h-[75vh]    mdl:h-[75vh] ">
      <motion.div
        style={{ height, padding }}
        className="
          fixed top-4 left-0 right-0 z-50
          mx-4 md:mx-20
          rounded-2xl
          flex flex-col md:flex-row gap-4 md:gap-6
          items-center md:items-stretch
          overflow-hidden

          /* ✅ glossy glass look */
          bg-white/10
          backdrop-blur-xl
          border border-white/15
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        "
      >
        {/* ✅ Gloss highlight overlay (gives shiny texture) */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-br from-white/20 via-white/5 to-transparent
          "
        />
        {/* ✅ Top shine streak */}
        <div
          className="
            pointer-events-none absolute -top-24 left-[-20%] h-56 w-[140%]
            rotate-6
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            blur-2xl
            opacity-70 
          "
        />

        {/* ✅ Image (float only when NOT collapsed) */}
        <motion.div
          style={{
            width: imageW,
            borderRadius: imageRadius,
          }}
          className="
            relative overflow-hidden flex-shrink-0
            bg-black/30
            border border-white/15 
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_18px_50px_rgba(0,0,0,0.35)]
          "
          animate={
            isCollapsed ? { y: 0 } : { y: [0, -10, 0] } // water float
          }
          transition={
            isCollapsed
              ? { duration: 0.2 }
              : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
          }
        >
          {/* subtle image gloss */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent" />
          <img
            src={profileimg}
            className="w-full h-full object-cover"
            alt="profile"
          />
        </motion.div>

        {/* Hero Content (fades out) */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="
            relative w-full md:flex-1
            rounded-2xl
            p-5 md:p-10
            flex flex-col gap-4 md:gap-6

            /* ✅ glossy card */
            bg-white/70
            backdrop-blur-md
            border border-white/40
            shadow-[inset_0_1px_0_rgba(255,255,255,0.7),_0_18px_50px_rgba(0,0,0,0.20)]
          "
        >
          {/* card gloss highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 via-transparent to-transparent" />

          <div className="relative flex flex-col items-end">
            <p className="text-xl sm:text-2xl md:text-[2rem]  font-light tracking-wide text-right text-black/90">
              SATYADEEP JANDHYAM
            </p>
            <p className="text-xs sm:text-sm md:text-[1rem] text-black/70">
              Sr. Fullstack developer
            </p>
          </div>

          <p className="relative text-sm sm:text-base md:text-[1rem] text-dark-brown">
            Hii I am Satyadeep, welcome to my profile.
          </p>

          {/* <div className="relative flex flex-wrap gap-2 sm:gap-3 md:gap-6">
            {[
              ["About", onAbout],
              ["Experience", onExp],
              ["Skills", onSkills],
              ["Contact", onContact],
            ].map(([label, fn]) => (
              <button
                key={label}
                onClick={fn}
                className="
                  border border-white/50
                  px-4 py-1.5
                  rounded-md
                  text-xs sm:text-sm md:text-base
                  bg-white/70
                  backdrop-blur
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_10px_24px_rgba(0,0,0,0.15)]
                  hover:bg-white/80
                  active:scale-[0.98]
                  transition
                "
              >
                {label}
              </button>
            ))}
          </div> */}
          <div className="relative flex flex-wrap gap-2 sm:gap-3 md:gap-6">
  {[
    ["About", scrollToHero],
    ["Experience", onExp],
    ["Skills", onSkills],
    ["Contact", onContact],
  ].map(([label, fn]) => (
    <button
      key={label}
      onClick={fn}
      className="
        border border-white/50
        px-4 py-1.5
        rounded-md
        text-xs sm:text-sm md:text-[0.7rem]
        bg-white/70
        backdrop-blur
        shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_10px_24px_rgba(0,0,0,0.15)]
        hover:bg-white/80
        active:scale-[0.98]
        transition
      "
    >
      {label}
    </button>
  ))}
</div>
<div className="relative mt-4 md:mt-1">
  <p className="text-sm sm:text-base md:text-[1rem] mdl:text-[0.7rem] text-black/70 leading-relaxed">
    Full Stack Developer with 3+ years of experience developing scalable, secure,
    and high-performance applications using Java (Spring Boot, Microservices,
    Spring Security, Spring Data, JSP, Servlets) and React.js. Strong background
    in designing REST APIs, authentication systems using JWT, and integrating
    payment gateways including Razorpay and BillDesk. Demonstrated ability to
    modernize legacy systems, optimize backend logic, and deliver measurable
    performance improvements of 40–90%. Experienced in government digital
    transformation and product-based development environments.
  </p>
</div>

        </motion.div>

        {/* Collapsed navbar (fade in) */}
        <motion.div
          style={{ opacity: navOpacity }}
          className="absolute inset-y-0 right-0 flex items-center pr-3 md:pr-10"
        >
          {/* Mobile: icon-only */}
          <div className="flex md:hidden gap-2">
            {[
              ["About", onAbout, <User size={18} />],
              ["Experience", onExp, <Briefcase size={18} />],
              ["Skills", onSkills, <Wrench size={18} />],
              ["Contact", onContact, <Mail size={18} />],
            ].map(([title, fn, icon]) => (
              <button
                key={title}
                onClick={fn}
                title={title}
                aria-label={title}
                className="
                  h-9 w-9 flex items-center justify-center rounded-md
                  border border-white/25
                  bg-white/20 backdrop-blur
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.35),_0_14px_30px_rgba(0,0,0,0.25)]
                  hover:bg-white/25
                  active:scale-[0.98]
                  transition
                  text-white
                "
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Desktop: text buttons */}
          <div className="hidden md:flex gap-6">
            {[
              ["About", scrollToHero],
              ["Experience", onExp],
              ["Skills", onSkills],
              ["Contact", onContact],
            ].map(([label, fn]) => (
              <button
                key={label}
                onClick={fn}
                className="
                  border border-white/25
                  px-6 rounded-md h-8
                  text-sm lg:text-base
                  bg-white/15 backdrop-blur
                  text-black
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_14px_30px_rgba(0,0,0,0.30)]
                  hover:bg-white/20
                  active:scale-[0.98]
                  transition
                "
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
