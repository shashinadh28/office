"use client";

import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideRight' | 'slideLeft' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { y: 75, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideRight: {
    hidden: { x: -75, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  slideLeft: {
    hidden: { x: 75, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  scale: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  }
};

export default function ScrollAnimationWrapper({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  once = false,
  className = '',
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold
  });

  const selectedAnimation = animations[animation];
  
  const transition = {
    duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1.0]
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
} 