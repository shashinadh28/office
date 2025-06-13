"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IBM_Plex_Sans, Lexend } from 'next/font/google';
import { 
  Cloud, CloudCog, Server, Database, Shield, Rocket,
  Zap, Globe, ArrowRight, Sparkles, Star, Code,
  Settings, GitBranch, Lock, Users, CheckCircle
} from 'lucide-react';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['700'], display: 'swap' });
const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const floatingElements = [
  { icon: Cloud, position: "top-16 left-16", size: "w-12 h-12", color: "text-blue-400", delay: 0 },
  { icon: CloudCog, position: "top-24 right-20", size: "w-10 h-10", color: "text-cyan-400", delay: 0.5 },
  { icon: Server, position: "top-1/3 left-8", size: "w-8 h-8", color: "text-green-400", delay: 1 },
  { icon: Database, position: "top-1/2 right-12", size: "w-9 h-9", color: "text-purple-400", delay: 1.5 },
  { icon: Shield, position: "bottom-1/3 left-12", size: "w-11 h-11", color: "text-orange-400", delay: 2 },
  { icon: Rocket, position: "bottom-24 right-16", size: "w-10 h-10", color: "text-pink-400", delay: 2.5 },
  { icon: Zap, position: "top-20 left-1/3", size: "w-7 h-7", color: "text-yellow-400", delay: 3 },
  { icon: Globe, position: "bottom-20 left-20", size: "w-9 h-9", color: "text-teal-400", delay: 3.5 },
  { icon: Code, position: "top-1/4 right-1/4", size: "w-8 h-8", color: "text-indigo-400", delay: 4 },
  { icon: Settings, position: "bottom-1/4 right-8", size: "w-10 h-10", color: "text-rose-400", delay: 4.5 },
  { icon: GitBranch, position: "top-2/3 left-16", size: "w-8 h-8", color: "text-emerald-400", delay: 5 },
  { icon: Lock, position: "bottom-1/2 right-20", size: "w-9 h-9", color: "text-violet-400", delay: 5.5 },
  { icon: Users, position: "top-1/2 left-1/4", size: "w-10 h-10", color: "text-sky-400", delay: 6 },
  { icon: CheckCircle, position: "bottom-2/3 left-8", size: "w-8 h-8", color: "text-lime-400", delay: 6.5 },
  { icon: Sparkles, position: "top-3/4 right-1/3", size: "w-7 h-7", color: "text-amber-400", delay: 7 },
  { icon: Star, position: "bottom-16 left-1/3", size: "w-9 h-9", color: "text-fuchsia-400", delay: 7.5 },
];

const HeroCloudSection: React.FC = () => {
  const [textAnimated, setTextAnimated] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimated(true);
    }, 300);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* No background image - now using solid gradient */}

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.color} opacity-60 hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
            x: index % 2 === 0 ? [0, 15, 0] : [0, -15, 0],
            rotate: index % 3 === 0 ? [0, 360] : [0, -180, 0],
          }}
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            delay: element.delay * 0.3,
            ease: "easeInOut"
          }}
        >
          <element.icon className={element.size} />
        </motion.div>
      ))}

      {/* Additional Floating Particles */}
      {[...Array(12)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className={`absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-50 hidden md:block`}
          style={{
            top: `${15 + (index * 8)}%`,
            left: `${8 + (index * 9)}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 25, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 5 + (index % 3),
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
          
              {/* Hero Badge */}
              <motion.div
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textAnimated ? 1 : 0, y: textAnimated ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Cloud className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-white font-semibold">Gateway Workforce Cloud Solutions</span>
                <Sparkles className="w-5 h-5 text-yellow-400 ml-2" />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className={`${ibmPlexSans.className} text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: textAnimated ? 1 : 0, y: textAnimated ? 0 : 30 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Cloud Excellence
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className={`${lexend.className} text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textAnimated ? 1 : 0, y: textAnimated ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Accelerate innovation with AWS & Azure cloud solutions. From migration to management, 
                we deliver scalable, secure, and cost-effective cloud infrastructure that powers your digital transformation.
              </motion.p>

              {/* Key Features */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: textAnimated ? 1 : 0, y: textAnimated ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-white font-medium">Secure & Compliant</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Rocket className="w-6 h-6 text-purple-400" />
                  <span className="text-white font-medium">Rapid Deployment</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-medium">24/7 Support</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textAnimated ? 1 : 0, y: textAnimated ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center space-x-2">
                    <span>Start Your Cloud Journey</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.button>
                
                <motion.button
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(255, 255, 255, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>View Our Solutions</span>
                  </div>
                </motion.button>
              </motion.div>
            </div>
            
            {/* Right Side - Image Card */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: textAnimated ? 1 : 0, x: textAnimated ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="relative max-w-lg w-full">
                <motion.div
                  className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src="/images/cloud_somputing.jpg"
                      alt="Cloud Computing Solutions"
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                      onLoad={() => setImageLoaded(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl mb-2">Cloud Infrastructure Excellence</h3>
                      <p className="text-white/80 text-sm">Scalable, secure, and efficient cloud solutions tailored for your business needs.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: textAnimated ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              className="flex flex-col items-center cursor-pointer group"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <span className="text-white/70 text-sm font-medium mb-2 group-hover:text-white transition-colors">
                Explore Solutions
              </span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full group-hover:border-white transition-colors">
                <motion.div
                  className="w-1 h-3 bg-white/70 rounded-full mx-auto mt-2 group-hover:bg-white"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroCloudSection;
