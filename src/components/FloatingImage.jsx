import React from "react";
import { motion } from "framer-motion";
import profileimg from "../assets/profile.png";

const FloatingImage = () => {
  return (
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="h-[26rem] flex items-center justify-center"
    >
      <img
        className="w-full h-full rounded-xl object-cover shadow-2xl"
        src={profileimg}
        alt="profile"
      />
    </motion.div>
  );
};

export default FloatingImage;
