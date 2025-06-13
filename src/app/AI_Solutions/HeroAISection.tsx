"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IBM_Plex_Sans, Lexend } from 'next/font/google';
import Link from 'next/link';
import { BrainCircuit, Zap, BarChartBig, Sparkles, Bot, Database } from 'lucide-react';

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
  y: [0, -30, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 25,
    repeat: Infinity,
    ease: "linear"
  }
};

const pulseAnimation = {
  scale: [1, 1.2, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Cool intro animations
const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
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
  hidden: { x: 100, opacity: 0 },
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

const bounceIn = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4
    }
  }
};

const HeroAISection: React.FC = () => {
  const [textAnimated, setTextAnimated] = useState(false);
  const [particles, setParticles] = useState<Array<{ left: number; top: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate particle positions and timings once on client side
    const particleData = [...Array(25)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 3,
    }));
    setParticles(particleData);

    setTimeout(() => {
      setTextAnimated(true);
    }, 300);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-violet-600">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-500/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/20 to-purple-800/40"></div>
        
        {/* Enhanced Floating Particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

        {/* Animated Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-32 w-40 h-40 bg-gradient-to-r from-violet-400/30 to-pink-500/30 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8 lg:pr-8 lg:pl-16"
            variants={slideInLeft}
            initial="hidden"
            animate={textAnimated ? "visible" : "hidden"}
          >
            <motion.div
              variants={bounceIn}
              initial="hidden"
              animate={textAnimated ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Gateway Workforce</span>
              </div>
            </motion.div>

            <motion.h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight ${ibmPlexSans.className}`}
              variants={slideInLeft}
              initial="hidden"
              animate={textAnimated ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              AI & Data Intelligence Solutions
              <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent block">
                
              </span>
            </motion.h1>

            <motion.p
              className={`text-lg text-white/90 max-w-xl ${lexend.className}`}
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
                  className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:shadow-lg hover:shadow-white/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Solutions
                </motion.button>
              </Link>
              <motion.button
                className="px-8 py-4 border border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
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
              <div className="flex items-center gap-2 text-white/90">
                <Bot className="w-5 h-5" />
                <span className="text-sm">AI Automation</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Database className="w-5 h-5" />
                <span className="text-sm">Data Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <BrainCircuit className="w-5 h-5" />
                <span className="text-sm">Machine Learning</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image with Decorative Elements */}
          <motion.div
            className="relative flex justify-center lg:justify-end lg:pr-16"
            variants={slideInRight}
            initial="hidden"
            animate={textAnimated ? "visible" : "hidden"}
          >
            {/* Main Image Container */}
            <motion.div
              className="relative z-20"
              variants={scaleIn}
              initial="hidden"
              animate={textAnimated ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
            >
              {/* Enhanced Image Frame */}
              <div className="relative w-[24rem] h-[24rem] lg:w-[28rem] lg:h-[28rem]">
                {/* Decorative Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl p-1">
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-3xl backdrop-blur-sm"></div>
                </div>
                
                {/* Image - slightly larger and centered */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-[22rem] h-[22rem] flex items-center justify-center">
                    <Image
                      src="/images/ai3.png"
                      alt="AI Solutions"
                      width={352}
                      height={352}
                      className="object-contain rounded-2xl filter drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>

                {/* Pulsing Ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/30 rounded-3xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Scattered Floating Decorative Elements */}
            
            {/* Far Scattered Hexagons */}
            <motion.div
              className="absolute -top-20 -right-20 w-20 h-20"
              animate={floatAnimation}
              style={{ animationDelay: '0s' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.polygon
                  points="50,5 85,25 85,75 50,95 15,75 15,25"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                  animate={rotateAnimation}
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute top-60 -left-32 w-16 h-16"
              animate={floatAnimation}
              style={{ animationDelay: '1s' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.polygon
                  points="50,5 85,25 85,75 50,95 15,75 15,25"
                  fill="none"
                  stroke="rgba(255, 192, 203, 0.7)"
                  strokeWidth="2"
                  animate={rotateAnimation}
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute -bottom-16 right-32 w-12 h-12"
              animate={floatAnimation}
              style={{ animationDelay: '2s' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.polygon
                  points="50,5 85,25 85,75 50,95 15,75 15,25"
                  fill="none"
                  stroke="rgba(138, 43, 226, 0.7)"
                  strokeWidth="2"
                  animate={rotateAnimation}
                />
              </svg>
            </motion.div>

            {/* Far Scattered Circles */}
            <motion.div
              className="absolute -top-10 left-20 w-8 h-8 rounded-full border-2 border-white/50"
              animate={pulseAnimation}
              style={{ animationDelay: '0.5s' }}
            />
            
            <motion.div
              className="absolute bottom-20 -left-20 w-6 h-6 rounded-full border-2 border-pink-300/60"
              animate={pulseAnimation}
              style={{ animationDelay: '1.5s' }}
            />

            <motion.div
              className="absolute top-20 right-40 w-10 h-10 rounded-full border-2 border-violet-300/60"
              animate={pulseAnimation}
              style={{ animationDelay: '2.5s' }}
            />

            {/* Far Scattered Triangles */}
            <motion.div
              className="absolute -bottom-10 -left-40 w-12 h-12"
              animate={floatAnimation}
              style={{ animationDelay: '1.5s' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.polygon
                  points="50,10 90,90 10,90"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                  animate={rotateAnimation}
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute top-80 -right-16 w-8 h-8"
              animate={floatAnimation}
              style={{ animationDelay: '3s' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.polygon
                  points="50,10 90,90 10,90"
                  fill="none"
                  stroke="rgba(255, 192, 203, 0.7)"
                  strokeWidth="2"
                  animate={rotateAnimation}
                />
              </svg>
            </motion.div>

            {/* Far Scattered Floating Icons */}
            <motion.div
              className="absolute -top-16 -left-24 text-white/60"
              animate={floatAnimation}
              style={{ animationDelay: '0.8s' }}
            >
              <BrainCircuit className="w-8 h-8" />
            </motion.div>

            <motion.div
              className="absolute bottom-32 -right-20 text-pink-200/70"
              animate={floatAnimation}
              style={{ animationDelay: '2.2s' }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>

            <motion.div
              className="absolute top-96 -left-16 text-violet-200/70"
              animate={floatAnimation}
              style={{ animationDelay: '3.5s' }}
            >
              <BarChartBig className="w-7 h-7" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
          <span className="text-white/90 text-sm mb-2 font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
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
