import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimationConfig() {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 3000); 
    }
  };

  const cAnimationVariants = {
    initial: {
      scale: 1,
    },
    start: {
      scale: [1, 0], 
      rotate: [0, -360], 
      borderRadius: ["0%", "50%"],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    end: {
      scale: [0, 1], 
      rotate: [0, 360], 
      borderRadius: ["50%", "0%"],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.5, 
      },
    },
  };

  const circleAnimationVariants = {
    hidden: {
      scale: 0, 
      borderRadius: "50%",
      rotate: 0,
    },
    visible: {
      scale: [0, 1.5],
      borderRadius: ["50%", "10px"], 
      rotate: [0, 45],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    reverse: {
      scale: [1.5, 0], 
      borderRadius: ["10px", "50%"], 
      rotate: [45, 0], 
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="animation-config">
      <motion.svg
        width="260"
        height="284"
        viewBox="0 0 260 284"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={startAnimation} 
      >
        <motion.path
          d="M178.984 37.2146L225.81 69.7219L178.984 119.257L157.506 103.971H134.093L110.68 119.257L105.262 141.702L110.68 165.115L134.093 180.402H157.506L178.984 165.115L225.81 213.683L178.984 246.964H110.68L56.6943 207.491L33.2813 141.702L56.6943 75.1398L110.68 37.2146H178.984Z"
          fill="#252525"
          variants={cAnimationVariants}
          initial="initial"
          animate={isAnimating ? "start" : "end"}
        />

        <motion.circle
          cx="130" 
          cy="142" 
          r="50"
          fill="#252525" 
          variants={circleAnimationVariants}
          initial="hidden"
          animate={isAnimating ? "visible" : "reverse"}
        />
      </motion.svg>
    </div>
  );
}