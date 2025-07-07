"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IBM_Plex_Sans, Lexend } from 'next/font/google';
import Link from 'next/link';
import { Bot, Database, BrainCircuit } from 'lucide-react';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['700'], display: 'swap' });
const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const floatAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "backOut"
    }
  }
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const HeroAISection: React.FC = () => {
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimated(true);
    }, 300);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#FCF0FF' }}>
      
      {/* Floating SVG Elements */}
      {/* Top area hexagons */}
      <motion.div
        className="absolute top-20 right-14 w-20 h-20 z-10"
        variants={scaleIn}
        initial="hidden"
        animate={textAnimated ? "visible" : "hidden"}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          animate={floatAnimation}
          style={{ animationDelay: '0s' }}
        >
          <img
            src="/svg/ai_svg/ai-hexagon-small.svg"
            alt="Hexagon"
            width={53}
            height={61}
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-0 right-120 w-40 h-40 z-10"
        variants={fadeInUp}
        initial="hidden"
        animate={textAnimated ? "visible" : "hidden"}
        transition={{ delay: 1.0 }}
      >
        <motion.div
          animate={floatAnimation}
          style={{ animationDelay: '1s' }}
        >
          <img
            src="/svg/ai_svg/ai-hexagon-big.svg"
            alt="Hexagon"
            width={255}
            height={290}
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>

      {/* Middle area hexagons */}
      <motion.div
        className="absolute bottom-40 right-20 w-40 h-40 z-10"
        variants={scaleIn}
        initial="hidden"
        animate={textAnimated ? "visible" : "hidden"}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={floatAnimation}
          style={{ animationDelay: '2s' }}
        >
          <img
            src="/svg/ai_svg/ai-hexagon-purple.svg"
            alt="Hexagon"
            width={206}
            height={236}
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>

             

      {/* Additional Scattered Floating Elements */}
      
      {/* Small Hexagons */}
       
        
      <motion.div
        className="absolute top-32 left-8 w-16 h-16 z-10"
        variants={fadeInUp}
        initial="hidden"
        animate={textAnimated ? "visible" : "hidden"}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={floatAnimation}
          style={{ animationDelay: '2.5s' }}
        >
          <img
            src="/svg/ai_svg/ai-hexagon-small.svg"
            alt="Hexagon"
            width={53}
            height={61}
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>

      

      {/* Floating Circles */}
      <motion.div
        className="absolute top-40 right-40 w-6 h-6 rounded-full bg-purple-200/60 z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-8 h-8 rounded-full bg-pink-200/60 z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      <motion.div
        className="absolute top-96 right-8 w-4 h-4 rounded-full bg-purple-300/70 z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Floating Icons - Scattered All Over Section */}
      
      {/* Top Area Icons */}
      <motion.div
        className="absolute top-16 left-8 text-purple-400/60 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '1.8s' }}
      >
        <BrainCircuit className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute top-24 right-8 text-pink-500/60 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '0.8s' }}
      >
        <Bot className="w-7 h-7" />
      </motion.div>

      <motion.div
        className="absolute top-80 left-220 text-purple-500/50 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '3.2s' }}
      >
        <Database className="w-6 h-6" />
      </motion.div>

      {/* Bottom Area Icons */}
      <motion.div
        className="absolute bottom-16 left-8 text-pink-400/70 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '2.8s' }}
      >
        <Database className="w-9 h-9" />
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 text-purple-600/60 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '1.2s' }}
      >
        <BrainCircuit className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-96 text-pink-500/50 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '4s' }}
      >
        <Bot className="w-6 h-6" />
      </motion.div>

      {/* Side Area Icons */}
      <motion.div
        className="absolute top-80 left-4 text-purple-400/50 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '3.5s' }}
      >
        <Bot className="w-7 h-7" />
      </motion.div>

      <motion.div
        className="absolute top-64 right-4 text-pink-400/60 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '2.5s' }}
      >
        <Database className="w-8 h-8" />
      </motion.div>

      {/* Center Area Icons (Very Few) */}
      <motion.div
        className="absolute top-48 left-1/2 transform -translate-x-1/2 text-purple-300/40 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '5s' }}
      >
        <BrainCircuit className="w-5 h-5" />
      </motion.div>

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-24 left-48 w-8 h-8 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '2.2s' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="rgba(147, 51, 234, 0.5)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-56 right-48 w-6 h-6 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '4s' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="rgba(236, 72, 153, 0.6)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Dotted Elements */}
      <motion.div
        className="absolute top-56 left-64 w-3 h-3 rounded-full bg-purple-300/50 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '1.2s' }}
      />

      <motion.div
        className="absolute bottom-72 left-8 w-2 h-2 rounded-full bg-pink-300/60 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '3.8s' }}
      />

      <motion.div
        className="absolute top-80 left-56 w-4 h-4 rounded-full bg-purple-200/70 z-10"
        animate={floatAnimation}
        style={{ animationDelay: '0.8s' }}
      />

      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-7xl mx-auto">
          
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={slideInLeft}
            initial="hidden"
            animate={textAnimated ? "visible" : "hidden"}
          >
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={textAnimated ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200">
                <Bot className="w-4 h-4 text-purple-600" />
                <span className="text-purple-700 text-sm font-medium">Gateway Workforce</span>
              </div>
            </motion.div>

            <motion.h1
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight ${ibmPlexSans.className}`}
              variants={slideInLeft}
              initial="hidden"
              animate={textAnimated ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <span className="text-purple-600">AI & Data Intelligence</span><br />
              Solutions
            </motion.h1>

            <motion.p
              className={`text-lg text-gray-600 max-w-xl leading-relaxed ${lexend.className}`}
              variants={slideInLeft}
              initial="hidden"
              animate={textAnimated ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              Transform your business with cutting-edge AI solutions. From machine learning to data analytics, 
              we deliver intelligent systems that drive innovation and growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={slideInLeft}
              initial="hidden"
              animate={textAnimated ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
            >
              <Link href="/#services-section">
                <motion.button
                  className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Solutions
                </motion.button>
              </Link>
              <motion.button
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              className="flex gap-6 pt-8"
              variants={slideInLeft}
              initial="hidden"
              animate={textAnimated ? "visible" : "hidden"}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2 text-gray-700">
                <Bot className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">AI Automation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Database className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">Data Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <BrainCircuit className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">Machine Learning</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={slideInRight}
            initial="hidden"
            animate={textAnimated ? "visible" : "hidden"}
          >
            <motion.div
              className="relative z-20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={textAnimated ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative w-full max-w-lg">
                <img
                  src="/optimized/background_images/ai_background.webp"
                  alt="AI Solutions"
                  width={400}
                  height={400}
                  className="object-contain w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: textAnimated ? 1 : 0, y: textAnimated ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-gray-600 text-sm mb-2 font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroAISection;
