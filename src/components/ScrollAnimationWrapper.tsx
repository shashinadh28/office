"use client";

import React, { ReactNode, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideRight' | 'slideLeft' | 'scale' | 'rotate' | 'bounce' | 'flip';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  distance?: number;
  stagger?: boolean;
  staggerChildren?: number;
  staggerDelay?: number;
}

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: (distance = 75) => ({ y: distance, opacity: 0 }),
    visible: { y: 0, opacity: 1 }
  },
  slideRight: {
    hidden: (distance = 75) => ({ x: -distance, opacity: 0 }),
    visible: { x: 0, opacity: 1 }
  },
  slideLeft: {
    hidden: (distance = 75) => ({ x: distance, opacity: 0 }),
    visible: { x: 0, opacity: 1 }
  },
  scale: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  },
  rotate: {
    hidden: { rotate: -15, opacity: 0, scale: 0.95 },
    visible: { rotate: 0, opacity: 1, scale: 1 }
  },
  bounce: {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }
  },
  flip: {
    hidden: { rotateX: 90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 }
  }
};

export default function ScrollAnimationWrapper({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  once = true,
  className = '',
  distance = 75,
  stagger = false,
  staggerChildren = 0.1,
  staggerDelay = 0.1
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold
  });

  const selectedAnimation = animations[animation];
  
  // Base transition properties
  const transition = {
    duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1.0]
  };

  // Create stagger container if requested
  const containerVariants = stagger ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      }
    }
  } : undefined;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants || selectedAnimation}
      custom={distance}
      transition={stagger ? undefined : transition}
      className={className}
    >
      {stagger ? (
        React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            variants={selectedAnimation}
            custom={distance}
            transition={{
              duration,
              delay: index * staggerDelay,
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
} 