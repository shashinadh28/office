'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: ReactNode;
  fadeIn?: boolean;
  delay?: number;
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
  className = '',
  style = {},
  placeholder = null,
  fadeIn = true,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !elementRef.current || (once && hasAnimated)) {
      return;
    }

    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, hasAnimated]);

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: delay / 1000,
      },
    },
  };

  const content = (
    <div
      ref={elementRef}
      className={`lazy-load-container ${className}`}
      style={style}
    >
      {isVisible ? (
        fadeIn ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        ) : (
          children
        )
      ) : (
        placeholder
      )}
    </div>
  );

  return content;
};

export default LazyLoad;
