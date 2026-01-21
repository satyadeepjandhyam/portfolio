import React from "react";
import { motion } from "framer-motion";
import profileimg from "../assets/profile.png";

const FloatingImage = ({ isNavbar = false }) => {
  return (
    <motion.div
      animate={
        isNavbar
          ? { y: 0 }                 // stop floating in navbar
          : { y: [0, -12, 0] }       // float only in hero
      }
      transition={{
        duration: 6,
        repeat: isNavbar ? 0 : Infinity,
        ease: "easeInOut",
      }}
      className="w-full h-full flex items-center justify-center"
    >
      <img
        className="w-full h-full object-cover rounded-xl"
        src={profileimg}
        alt="profile"
      />
    </motion.div>
  );
};

export default FloatingImage;
