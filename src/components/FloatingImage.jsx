import React from "react";
import { motion } from "framer-motion";
import profileimg from "../assets/profile.png";

const FloatingImage = ({ isNavbar = false }) => {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`w-full h-full flex items-center justify-center ${
        isNavbar ? "" : "p-4"
      }`}
    >
      <img
        className="w-full h-full object-cover"
        src={profileimg}
        alt="profile"
      />
    </motion.div>
  );
};

export default FloatingImage;
