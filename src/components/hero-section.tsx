"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationsTriggered, setAnimationsTriggered] = useState(false);

  useEffect(() => {
    // Preload the background image for smooth fade-in
    const img = new window.Image();
    img.onload = () => {
      setTimeout(() => setIsLoaded(true), 300); // Faster loading
    };
    img.onerror = () => {
      console.warn('Background image failed to preload, falling back to normal loading');
      setIsLoaded(true);
    };
    img.src = '/home6.png';

    // Much faster animation trigger for immediate text appearance
    const timer = setTimeout(() => {
      setAnimationsTriggered(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);



  // Fast professional animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  // Enhanced floating animations for SVGs
  const floatingSmooth = {
    y: [0, -35, 0],
    x: [0, 20, 0],
    rotate: [0, 12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingGentle = {
    y: [0, -40, 0],
    x: [0, -25, 0],
    rotate: [0, -15, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingDeep = {
    y: [0, -30, 0],
    x: [0, 30, 0],
    rotate: [0, 20, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingWave = {
    y: [0, -45, 0],
    x: [0, -20, 0],
    rotate: [0, 18, 0],
    transition: {
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseFloat = {
    scale: [1, 1.3, 1],
    opacity: [0.2, 0.5, 0.2],
    y: [0, -25, 0],
    rotate: [0, 15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const slowFloat = {
    y: [0, -50, 0],
    x: [0, 25, 0],
    rotate: [0, -22, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white pb-20">
      
      {/* Background Image with Fade Animation - Hidden on mobile */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/home6.png"
          alt="Gateway Workforce Background"
          fill
          sizes="100vw"
          priority={true}
          className={`object-cover object-center transition-opacity duration-1500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Mobile Background - Light gradient */}
      <div className="absolute inset-0 z-0 md:hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>

             {/* Mobile Floating SVG Elements - Enhanced and distributed across screen */}
       <div className="absolute inset-0 z-5 md:hidden overflow-hidden">
         {/* Floating Particles */}
         <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-teal-500 rounded-full animate-pulse opacity-60"></div>
         <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-40" style={{ animationDelay: '0.5s' }}></div>
         <div className="absolute top-[35%] left-[5%] w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
         <div className="absolute top-[45%] right-[8%] w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce opacity-30" style={{ animationDelay: '1.5s' }}></div>
         <div className="absolute top-[55%] left-[12%] w-2 h-2 bg-teal-600 rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
         <div className="absolute top-[65%] right-[20%] w-1 h-1 bg-blue-600 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.8s' }}></div>

         {/* Enhanced Circle SVGs with glow */}
         <motion.div
           className="absolute top-[20%] left-[15%] w-8 h-8 opacity-30"
           animate={floatingGentle}
           transition={{ delay: 0.5 }}
         >
           <div className="absolute inset-0 bg-teal-400 rounded-full blur-sm opacity-50 animate-pulse"></div>
           <svg viewBox="0 0 26 25" fill="none" className="w-full h-full relative z-10">
             <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
           </svg>
         </motion.div>

         <motion.div
           className="absolute top-[40%] right-[20%] w-10 h-10 opacity-35"
           animate={floatingDeep}
           transition={{ delay: 1 }}
         >
           <div className="absolute inset-0 bg-blue-400 rounded-full blur-sm opacity-50 animate-pulse"></div>
           <svg viewBox="0 0 26 25" fill="none" className="w-full h-full relative z-10">
             <circle cx="13" cy="12.5" r="12.5" fill="#3B82F6"/>
           </svg>
         </motion.div>

         <motion.div
           className="absolute top-[60%] left-[25%] w-6 h-6 opacity-25"
           animate={floatingWave}
           transition={{ delay: 1.5 }}
         >
           <div className="absolute inset-0 bg-teal-500 rounded-full blur-sm opacity-40 animate-pulse"></div>
           <svg viewBox="0 0 26 25" fill="none" className="w-full h-full relative z-10">
             <circle cx="13" cy="12.5" r="12.5" fill="#14B8A6"/>
           </svg>
         </motion.div>

         {/* Enhanced Star SVGs */}
         <motion.div
           className="absolute top-[30%] right-[10%] w-7 h-7 opacity-30"
           animate={slowFloat}
           transition={{ delay: 0.8 }}
         >
           <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
           <svg viewBox="0 0 24 24" fill="none" className="w-full h-full relative z-10">
             <path opacity="0.16" d="M12.0001 2L15.1041 8.728L22.4621 9.601L17.0221 14.631L18.4661 21.899L12.0001 18.28L5.53409 21.9L6.97809 14.632L1.53809 9.6L8.89709 8.727L12.0001 2Z" fill="#F59E0B"/>
             <path d="M12.0001 2L15.1041 8.728L22.4621 9.601L17.0221 14.631L18.4661 21.899L12.0001 18.28L5.53409 21.9L6.97809 14.632L1.53809 9.6L8.89709 8.727L12.0001 2Z" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round"/>
           </svg>
         </motion.div>

         <motion.div
           className="absolute bottom-[20%] right-[15%] w-5 h-5 opacity-25"
           animate={pulseFloat}
           transition={{ delay: 2 }}
         >
           <div className="absolute inset-0 bg-yellow-300 rounded-full blur-md opacity-40 animate-pulse"></div>
           <svg viewBox="0 0 24 24" fill="none" className="w-full h-full relative z-10">
             <path opacity="0.16" d="M12.0001 2L15.1041 8.728L22.4621 9.601L17.0221 14.631L18.4661 21.899L12.0001 18.28L5.53409 21.9L6.97809 14.632L1.53809 9.6L8.89709 8.727L12.0001 2Z" fill="#FDE047"/>
             <path d="M12.0001 2L15.1041 8.728L22.4621 9.601L17.0221 14.631L18.4661 21.899L12.0001 18.28L5.53409 21.9L6.97809 14.632L1.53809 9.6L8.89709 8.727L12.0001 2Z" stroke="#FDE047" strokeWidth="2" strokeLinejoin="round"/>
           </svg>
         </motion.div>

         {/* Floating Geometric Shapes */}
         <div className="absolute top-[18%] right-[5%] opacity-20">
           <div className="w-8 h-8 border border-teal-500 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
         </div>
         <div className="absolute bottom-[30%] left-[8%] opacity-15">
           <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
         </div>

         {/* Corner accents */}
         <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-teal-500 opacity-20"></div>
         <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-500 opacity-20"></div>
         <div className="absolute bottom-20 left-4 w-6 h-6 border-l-2 border-b-2 border-teal-400 opacity-15"></div>
         <div className="absolute bottom-20 right-4 w-6 h-6 border-r-2 border-b-2 border-blue-400 opacity-15"></div>

         {/* Bottom decorative wave */}
         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-30"></div>
       </div>

       {/* Desktop SVG Elements - Left Side Only */}
       <div className="absolute inset-0 z-5 hidden md:block">
        {/* Circle SVGs - Left Side Top */}
        <motion.div
          className="absolute top-24 left-16 w-4 h-4 opacity-25"
          animate={floatingGentle}
          transition={{ delay: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-20 left-1/3 w-5 h-5 opacity-30"
          animate={floatingDeep}
          transition={{ delay: 1.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.30 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        {/* Circle SVGs - Left Side Middle */}
        <motion.div
          className="absolute top-40 left-20 w-7 h-7 opacity-35"
          animate={floatingWave}
          transition={{ delay: 1.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.35 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-44 left-2/3 w-5 h-5 opacity-25"
          animate={floatingSmooth}
          transition={{ delay: 1.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-12 w-3 h-3 opacity-20"
          animate={pulseFloat}
          transition={{ delay: 2.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.20 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/3 w-4 h-4 opacity-25"
          animate={floatingDeep}
          transition={{ delay: 3 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        {/* Circle SVGs - Left Side Lower */}
        <motion.div
          className="absolute top-2/3 left-24 w-6 h-6 opacity-30"
          animate={slowFloat}
          transition={{ delay: 3.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.30 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-2/3 left-1/2 w-7 h-7 opacity-35"
          animate={pulseFloat}
          transition={{ delay: 3.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.35 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        {/* Circle SVGs - Bottom Left */}
        <motion.div
          className="absolute bottom-40 left-16 w-5 h-5 opacity-25"
          animate={floatingGentle}
          transition={{ delay: 4 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-28 left-1/3 w-4 h-4 opacity-20"
          animate={floatingWave}
          transition={{ delay: 4.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.20 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        {/* Additional scattered circles - Left and Center only */}
        <motion.div
          className="absolute top-60 left-2/3 w-3 h-3 opacity-15"
          animate={pulseFloat}
          transition={{ delay: 5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-2/3 w-5 h-5 opacity-25"
          animate={floatingSmooth}
          transition={{ delay: 5.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
        >
          <svg viewBox="0 0 26 25" fill="none" className="w-full h-full">
            <circle cx="13" cy="12.5" r="12.5" fill="#12A493"/>
          </svg>
        </motion.div>

        {/* Star SVGs - Left and Center positions only */}
        <motion.div
          className="absolute top-16 left-1/2 w-6 h-6 opacity-30"
          animate={floatingGentle}
          transition={{ delay: 0.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.30 }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path opacity="0.16" d="M12.0001 2L15.1041 8.728L22.4621 9.601L17.0221 14.631L18.4661 21.899L12.0001 18.28L5.53409 21.9L6.97809 14.632L1.53809 9.6L8.89709 8.727L12.0001 2Z" fill="#7ACCC2"/>
            <path d="M12.0001 2L15.1041 8.728L22.4621 9.601L17.0221 14.631L18.4661 21.899L12.0001 18.28L5.53409 21.9L6.97809 14.632L1.53809 9.6L8.89709 8.727L12.0001 2Z" stroke="#7ACCC2" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-1/4 w-5 h-5 opacity-25"
          animate={floatingDeep}
          transition={{ delay: 2.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path opacity="0.16" d="M12.0001 2L15.1041 8.728L22.4621 9.601L17.0221 14.631L18.4661 21.899L12.0001 18.28L5.53409 21.9L6.97809 14.632L1.53809 9.6L8.89709 8.727L12.0001 2Z" fill="#7ACCC2"/>
            <path d="M12.0001 2L15.1041 8.728L22.4621 9.601L17.0221 14.631L18.4661 21.899L12.0001 18.28L5.53409 21.9L6.97809 14.632L1.53809 9.6L8.89709 8.727L12.0001 2Z" stroke="#7ACCC2" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-3/4 left-1/5 w-6 h-6 opacity-20"
          animate={slowFloat}
          transition={{ delay: 3.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.20 }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path opacity="0.16" d="M12.0001 2L15.1041 8.728L22.4621 9.601L17.0221 14.631L18.4661 21.899L12.0001 18.28L5.53409 21.9L6.97809 14.632L1.53809 9.6L8.89709 8.727L12.0001 2Z" fill="#7ACCC2"/>
            <path d="M12.0001 2L15.1041 8.728L22.4621 9.601L17.0221 14.631L18.4661 21.899L12.0001 18.28L5.53409 21.9L6.97809 14.632L1.53809 9.6L8.89709 8.727L12.0001 2Z" stroke="#7ACCC2" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        
        {/* Logo with fast animation */}
        <motion.div
          className="absolute top-3 left-6 md:top-4 md:left-12"
          initial="hidden"
          animate={animationsTriggered ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
            }
          }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src="/optimized/images/gateway_workforce.webp"
            alt="Gateway Workforce Logo"
            width={80}
            height={80}
            className="h-auto w-[70px] sm:w-[80px] md:w-[90px]"
            priority
          />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-center min-h-screen pt-12 md:pt-8">
          {/* Constrain content width better for different screen sizes */}
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto sm:mx-0">
            
            {/* Main headline with FAST animation */}
            <motion.div 
              className="mb-6 sm:mb-8 mt-0"
              initial="hidden"
              animate={animationsTriggered ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.2
                  }
                }
              }}
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
                className="h-1 w-32 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={animationsTriggered ? { width: 128, opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.div>

            {/* Fast description animation */}
            <motion.div
              className="mb-8 sm:mb-10"
              initial="hidden"
              animate={animationsTriggered ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.04,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              <motion.p 
                className="font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl lg:max-w-3xl text-gray-700 leading-relaxed"
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
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mb-8 sm:mb-12"
              initial="hidden"
              animate={animationsTriggered ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8
                  }
                }
              }}
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
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl sm:max-w-2xl"
              initial="hidden"
              animate={animationsTriggered ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 1
                  }
                }
              }}
            >
              {[
                { number: "25+", label: "Global Clients" },
                { number: "35+", label: "Skilled Professionals" },
                { number: "95%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8, 
                    boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.15)",
                    backgroundColor: "rgba(255, 255, 255, 0.95)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div 
                    className="text-xl sm:text-2xl font-bold text-teal-600 mb-1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={animationsTriggered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ 
                      delay: 1.2 + index * 0.1, 
                      duration: 0.5, 
                      type: "spring",
                      stiffness: 100 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-700 font-medium">
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