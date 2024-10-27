"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedComponentProps {
  children: React.ReactNode;
  animationType:
    | "fade"
    | "slide-left"
    | "slide-right"
    | "slide-top"
    | "slide-bottom"
    | "zoom-in"
    | "rotate"
    | "flip"
    | "bounce"
    | "pulse";
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  animationType,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Define animation variants based on the type
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    "slide-left": {
      initial: { opacity: 0, x: "-100%" },
      animate: { opacity: 1, x: 0 },
    },
    "slide-right": {
      initial: { opacity: 0, x: "100%" },
      animate: { opacity: 1, x: 0 },
    },
    "slide-top": {
      initial: { opacity: 0, y: "-100%" },
      animate: { opacity: 1, y: 0 },
    },
    "slide-bottom": {
      initial: { opacity: 0, y: "100%" },
      animate: { opacity: 1, y: 0 },
    },
    "zoom-in": {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
    },
    rotate: {
      initial: { opacity: 0, rotate: -180 }, // Start rotated
      animate: { opacity: 1, rotate: 0 }, // End in normal position
    },
    flip: {
      initial: { opacity: 0, scale: 0.5, rotateY: -180 }, // Start flipped
      animate: { opacity: 1, scale: 1, rotateY: 0 }, // End in normal position
    },
    bounce: {
      initial: { y: 0 },
      animate: {
        y: [0, -20, 0], // Bounce effect
        transition: {
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
    pulse: {
      initial: { scale: 1 },
      animate: {
        scale: [1, 1.1, 1], // Pulse effect
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants[animationType]}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      transition={{ duration: 1 }} // Adjust duration as needed
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
