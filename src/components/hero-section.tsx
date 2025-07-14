"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationsTriggered, setAnimationsTriggered] = useState(false);

  useEffect(() => {
    // Immediate animation trigger for faster perceived performance
    setAnimationsTriggered(true);
    
    // Optimize background image loading with preload link - with error handling
    let preloadLink: HTMLLinkElement | null = null;
    
    try {
      preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = '/home_img.webp';
      preloadLink.type = 'image/webp';
      document.head.appendChild(preloadLink);
    } catch (error) {
      console.warn('Failed to create preload link:', error);
    }

    // Set loaded state immediately for better UX
    const timer = setTimeout(() => setIsLoaded(true), 50);

    return () => {
      clearTimeout(timer);
      // Safely remove preload link with error handling
      if (preloadLink && document.head.contains(preloadLink)) {
        try {
          document.head.removeChild(preloadLink);
        } catch (error) {
          console.warn('Failed to remove preload link:', error);
        }
      }
    };
  }, []);

  // Memoized animation variants for better performance
  const animationVariants = useMemo(() => ({
    fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    }
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    }
    },
    floatingSmooth: {
    y: [0, -35, 0],
    x: [0, 20, 0],
    rotate: [0, 12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
    },
    floatingReverse: {
      y: [0, 30, 0],
      x: [0, -15, 0],
      rotate: [0, -8, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }
    },
    floatingGentle: {
      y: [0, -20, 0],
      x: [0, 25, 0],
      rotate: [0, 15, 0],
    transition: {
        duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
    }
  }), []);

  const { fadeInUp, slideInLeft, scaleIn, floatingSmooth, floatingReverse, floatingGentle } = animationVariants;

  // Optimized stagger animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white pb-20">
      
      {/* Optimized Background Image - Hidden on mobile */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/home_img.webp"
          alt="Gateway Workforce Background"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Mobile Background - Light gradient */}
      <div className="absolute inset-0 z-0 md:hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>

      {/* Mobile Floating SVG Elements - Simplified for performance */}
      <div className="md:hidden absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {/* Reduced number of floating elements for better mobile performance */}
        <motion.div
          className="absolute top-20 right-8 w-16 h-16 text-blue-300 opacity-30"
          animate={floatingSmooth}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-6 w-12 h-12 text-teal-300 opacity-20"
          animate={floatingReverse}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12l2 2 4-4"/>
          </svg>
        </motion.div>
      </div>

      {/* Desktop Floating SVG Elements - Optimized */}
      <div className="hidden md:block absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-24 right-20 w-20 h-20 text-white/20"
          animate={floatingSmooth}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-32 w-16 h-16 text-white/15"
          animate={floatingReverse}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12l2 2 4-4"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-24 w-14 h-14 text-white/10"
          animate={floatingGentle}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">
        
        {/* Logo with fast animation */}
        <motion.div
          className="absolute top-3 left-6 md:top-4 md:left-12"
          initial="hidden"
          animate={animationsTriggered ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
            }
          }}
        >
          <img
            src="/optimized/images/gateway_workforce.webp"
            alt="Gateway Workforce Logo"
            width={80} 
            height={80}
            className="h-auto w-[70px] sm:w-[80px] md:w-[90px]"
            loading="eager"
          />
        </motion.div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-center min-h-screen pt-12 md:pt-8">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-center sm:text-left sm:mx-0">
            
            {/* Main headline with optimized animation */}
            <motion.div 
              className="mb-6 sm:mb-8 mt-0"
              initial="hidden"
              animate={animationsTriggered ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h1 
                className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-800 mb-4 md:pt-10 lg:pt-20"
                variants={slideInLeft}
              >
                <motion.span variants={fadeInUp}>Connecting Global Businesses</motion.span>
                <br className="hidden sm:block" />
                <motion.span variants={fadeInUp}>To India's Educated &</motion.span>
                <br className="hidden sm:block" />
                <motion.span variants={fadeInUp}>Motivated </motion.span>
                <motion.span className="text-blue-400" variants={fadeInUp}>Talent</motion.span>
              </motion.h1>
              
              {/* Fast underline animation */}
              <motion.div
                className="h-1 w-32 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600 rounded-full mx-auto sm:mx-0"
                initial={{ width: 0, opacity: 0 }}
                animate={animationsTriggered ? { width: 128, opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.div>

            {/* Fast description animation */}
            <motion.div
              className="mb-8 sm:mb-10"
              initial="hidden"
              animate={animationsTriggered ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.p 
                className="font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl lg:max-w-3xl text-gray-700 leading-relaxed mx-auto sm:mx-0"
                variants={fadeInUp}
              >
                <motion.span variants={fadeInUp}>We connect </motion.span>
                <motion.span className="text-teal-600 font-semibold" variants={fadeInUp}>global companies </motion.span>
                <motion.span variants={fadeInUp}>with </motion.span>
                <motion.span className="text-blue-600 font-semibold" variants={fadeInUp}>India's skilled talent</motion.span>
                <motion.span variants={fadeInUp}>, enabling business growth and global career opportunities.</motion.span>
              </motion.p>
            </motion.div>

            {/* Fast CTA Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start mb-8 sm:mb-12"
              initial="hidden"
              animate={animationsTriggered ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {/* Secondary CTA with enhanced animation */}
              <motion.div variants={fadeInUp}>
                <motion.button
                  onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg text-gray-800 font-medium hover:bg-white hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore Services</span>
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Fast stats section */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
              initial="hidden"
              animate={animationsTriggered ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {[
                { number: "70+", label: "Professionals Placed" },
                { number: "25+", label: "Global Clients" },
                { number: "95%", label: "Client Satisfaction" },
                { number: "2+", label: "Years Excellence" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-white/20"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}