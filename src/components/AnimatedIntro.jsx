import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Static image imports
import reactLogo from '../assets/images/react.png';
import springbootLogo from '../assets/images/springboot.png';
import nodeLogo from '../assets/images/nodejs.png';
import mongoLogo from '../assets/images/mongo.png';
import awsLogo from '../assets/images/aws.png';

const techStack = [
  { name: "React.js", image: reactLogo },
  { name: "Java Spring Boot", image: springbootLogo },
  { name: "Node.js", image: nodeLogo },
  { name: "MongoDB", image: mongoLogo },
  { name: "AWS", image: awsLogo },
];

const TYPING_SPEED = 100; // ms per letter
const HOLD_TIME = 1500; 

const AnimatedIntro = () => {
    const [index, setIndex] = useState(0); // current tech index
    const [displayedText, setDisplayedText] = useState(''); // animated text
    const [isTyping, setIsTyping] = useState(true); // controls typing state
  
    useEffect(() => {
      const currentName = techStack[index].name;
  
      if (isTyping) {
        if (displayedText.length < currentName.length) {
          const timeout = setTimeout(() => {
            setDisplayedText(currentName.slice(0, displayedText.length + 1));
          }, TYPING_SPEED);
          return () => clearTimeout(timeout);
        } else {
          // Done typing
          const hold = setTimeout(() => {
            setIsTyping(false);
          }, HOLD_TIME);
          return () => clearTimeout(hold);
        }
      } else {
        // Prepare for next tech
        const next = setTimeout(() => {
          const nextIndex = (index + 1) % techStack.length;
          setIndex(nextIndex);
          setDisplayedText('');
          setIsTyping(true);
        }, 1000);
        return () => clearTimeout(next);
      }
    }, [displayedText, isTyping]);
  
    const currentImage = techStack[index].image;
  
    return (
      <div className='mx-[5rem] h-[8rem] mt-5 bg-white rounded-xl flex overflow-hidden shadow-xl'>
        {/* Left: Image */}
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='w-1/2 flex items-center justify-center'
        >
          <img
            src={currentImage}
            alt="Technology"
            className='w-[50%] h-[50%] object-contain'
          />
        </motion.div>
  
        {/* Right: Typed Text */}
        <div className='w-1/2 flex items-center justify-center text-3xl font-bold text-gray-700'>
          <span>{displayedText}</span>
          <span className='animate-pulse ml-1'>|</span>
        </div>
      </div>
    );
  };

export default AnimatedIntro;


