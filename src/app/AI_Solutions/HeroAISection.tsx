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
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear"
  }
};

const pulseAnimation = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const HeroAISection: React.FC = () => {
  const [textAnimated, setTextAnimated] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimated(true);
    }, 600);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-slate-900/50"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: textAnimated ? 1 : 0, x: textAnimated ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-200 text-sm font-medium">Gateway Workforce</span>
              </div>
            </motion.div>

            <motion.h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight ${ibmPlexSans.className}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: textAnimated ? 1 : 0, y: textAnimated ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI & Data Intelligence
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Solutions
              </span>
            </motion.h1>

            <motion.p
              className={`text-lg text-gray-300 max-w-xl ${lexend.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: textAnimated ? 1 : 0, y: textAnimated ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transform your business with cutting-edge AI solutions. From machine learning to data analytics, 
              we deliver intelligent systems that drive innovation and growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: textAnimated ? 1 : 0, y: textAnimated ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/#services-section">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Solutions
                </motion.button>
              </Link>
              <motion.button
                className="px-8 py-4 border border-blue-400/50 text-blue-200 font-semibold rounded-full hover:bg-blue-500/10 transition-all duration-300"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: textAnimated ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center gap-2 text-blue-300">
                <Bot className="w-5 h-5" />
                <span className="text-sm">AI Automation</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <Database className="w-5 h-5" />
                <span className="text-sm">Data Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-green-300">
                <BrainCircuit className="w-5 h-5" />
                <span className="text-sm">Machine Learning</span>
              </div>
            </motion.div>
          </div>

          {/* Right Image with Decorative Elements */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Image Container */}
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: textAnimated ? 1 : 0, scale: textAnimated ? 1 : 0.8 }}
              transition={{ duration: 1, delay: 0.8 }}
              onHoverStart={() => setImageHovered(true)}
              onHoverEnd={() => setImageHovered(false)}
            >
              {/* Glowing Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl"
                animate={{
                  scale: imageHovered ? 1.2 : 1,
                  opacity: imageHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src="/images/ai3.png"
                  alt="AI Solutions"
                  fill
                  className="object-contain rounded-2xl"
                  priority
                />
                
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl"
                  animate={{
                    opacity: imageHovered ? 1 : 0,
                    scale: imageHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Floating Decorative Elements */}
            
            {/* Animated Hexagons */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20"
              animate={floatAnimation}
              style={{ animationDelay: '0s' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.polygon
                  points="50,5 85,25 85,75 50,95 15,75 15,25"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.6)"
                  strokeWidth="2"
                  animate={rotateAnimation}
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute top-32 left-10 w-16 h-16"
              animate={floatAnimation}
              style={{ animationDelay: '1s' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.polygon
                  points="50,5 85,25 85,75 50,95 15,75 15,25"
                  fill="none"
                  stroke="rgba(168, 85, 247, 0.6)"
                  strokeWidth="2"
                  animate={rotateAnimation}
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-20 right-20 w-12 h-12"
              animate={floatAnimation}
              style={{ animationDelay: '2s' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.polygon
                  points="50,5 85,25 85,75 50,95 15,75 15,25"
                  fill="none"
                  stroke="rgba(34, 197, 94, 0.6)"
                  strokeWidth="2"
                  animate={rotateAnimation}
                />
              </svg>
            </motion.div>

            {/* Animated Circles */}
            <motion.div
              className="absolute top-20 left-32 w-8 h-8 rounded-full border-2 border-blue-400/50"
              animate={pulseAnimation}
              style={{ animationDelay: '0.5s' }}
            />
            
            <motion.div
              className="absolute bottom-32 left-20 w-6 h-6 rounded-full border-2 border-purple-400/50"
              animate={pulseAnimation}
              style={{ animationDelay: '1.5s' }}
            />

            <motion.div
              className="absolute top-40 right-32 w-10 h-10 rounded-full border-2 border-green-400/50"
              animate={pulseAnimation}
              style={{ animationDelay: '2.5s' }}
            />

            {/* Animated Triangles */}
            <motion.div
              className="absolute bottom-10 left-32 w-12 h-12"
              animate={floatAnimation}
              style={{ animationDelay: '1.5s' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.polygon
                  points="50,10 90,90 10,90"
                  fill="none"
                  stroke="rgba(244, 63, 94, 0.6)"
                  strokeWidth="2"
                  animate={rotateAnimation}
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute top-60 right-8 w-8 h-8"
              animate={floatAnimation}
              style={{ animationDelay: '3s' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.polygon
                  points="50,10 90,90 10,90"
                  fill="none"
                  stroke="rgba(251, 191, 36, 0.6)"
                  strokeWidth="2"
                  animate={rotateAnimation}
                />
              </svg>
            </motion.div>

            {/* Additional Floating Icons */}
            <motion.div
              className="absolute top-16 left-16 text-blue-400/60"
              animate={floatAnimation}
              style={{ animationDelay: '0.8s' }}
            >
              <BrainCircuit className="w-8 h-8" />
            </motion.div>

            <motion.div
              className="absolute bottom-16 right-8 text-purple-400/60"
              animate={floatAnimation}
              style={{ animationDelay: '2.2s' }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>

            <motion.div
              className="absolute top-72 left-8 text-green-400/60"
              animate={floatAnimation}
              style={{ animationDelay: '3.5s' }}
            >
              <BarChartBig className="w-7 h-7" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: textAnimated ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-blue-200 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
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
