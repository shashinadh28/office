"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IBM_Plex_Sans, Lexend } from 'next/font/google';
import { 
  Cloud, CloudCog, Server, Database, Shield, Rocket,
  Zap, Globe, ArrowRight, Sparkles, Star, CheckCircle, Code, Monitor
} from 'lucide-react';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['700'], display: 'swap' });
const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const HeroCloudSection: React.FC = () => {
  const [textAnimated, setTextAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimated(true);
    }, 600);
  }, []);

  // Cloud SVG icons data
  const cloudSvgs = [
    { name: 'AWS', path: '/svg/cloud_svg/aws.svg' },
    { name: 'Azure', path: '/svg/cloud_svg/azure.svg' },
    { name: 'Docker', path: '/svg/cloud_svg/docker.svg' },
    { name: 'Kubernetes', path: '/svg/cloud_svg/kubernetes.svg' },
    { name: 'GitHub', path: '/svg/cloud_svg/github.svg' },
    { name: 'MySQL', path: '/svg/cloud_svg/mysql.svg' },
    { name: 'Oracle', path: '/svg/cloud_svg/oracle.svg' },
    { name: 'Grafana', path: '/svg/cloud_svg/grafana.svg' },
  ];

  // Enhanced scattered cloud elements - matching SaaS quality
  const cloudElements = [
    { icon: Cloud, label: "AWS", delay: 0, x: 12, y: 15 },
    { icon: Database, label: "Azure", delay: 0.6, x: 88, y: 20 },
    { icon: Shield, label: "Security", delay: 1.2, x: 8, y: 65 },
    { icon: CloudCog, label: "DevOps", delay: 1.8, x: 92, y: 70 },
    { icon: Zap, label: "Performance", delay: 2.4, x: 20, y: 35 },
    { icon: Server, label: "Infrastructure", delay: 3.0, x: 80, y: 45 },
    { icon: Globe, label: "CDN", delay: 3.6, x: 5, y: 85 },
    { icon: Monitor, label: "Monitoring", delay: 4.2, x: 95, y: 25 },
    { icon: Code, label: "API", delay: 4.8, x: 25, y: 80 },
    { icon: Rocket, label: "Deploy", delay: 5.4, x: 75, y: 60 },
    { icon: CheckCircle, label: "Reliable", delay: 6.0, x: 15, y: 50 },
    { icon: Sparkles, label: "Innovation", delay: 6.6, x: 85, y: 85 },
  ];

  return (
    <motion.div 
      ref={containerRef}
      className="bg-white relative overflow-hidden"
      style={{ minHeight: 'calc(100vh + 200px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      {/* Hexagon Background Animation - Enhanced like SaaS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, index) => (
          <motion.div
            key={`hexagon-${index}`}
            className="absolute"
            style={{
              top: `${5 + (index * 6)}%`,
              left: `${3 + (index * 7)}%`,
            }}
            animate={{
              scale: [0.4, 1.2, 0.4],
              rotate: [0, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 10 + (index % 5),
              repeat: Infinity,
              delay: index * 0.8,
              ease: "easeInOut"
            }}
          >
            <svg width="50" height="50" viewBox="0 0 100 100" className="text-blue-600">
              <polygon
                points="50,5 90,25 90,75 50,95 10,75 10,25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.7"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Circle Background Animation - Enhanced like SaaS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={`circle-${index}`}
            className="absolute"
            style={{
              top: `${10 + (index * 8)}%`,
              left: `${8 + (index * 8)}%`,
            }}
            animate={{
              scale: [0.5, 1.3, 0.5],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 12 + (index % 4),
              repeat: Infinity,
              delay: index * 1.5,
              ease: "easeInOut"
            }}
          >
            <svg width="40" height="40" viewBox="0 0 100 100" className="text-cyan-500">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.7"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Triangle Background Animation - Enhanced like SaaS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={`triangle-${index}`}
            className="absolute"
            style={{
              top: `${15 + (index * 9)}%`,
              left: `${12 + (index * 9)}%`,
            }}
            animate={{
              scale: [0.6, 1.1, 0.6],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 14 + (index % 3),
              repeat: Infinity,
              delay: index * 2,
              ease: "easeInOut"
            }}
          >
            <svg width="35" height="35" viewBox="0 0 100 100" className="text-blue-600">
              <polygon
                points="50,10 90,80 10,80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.7"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Scattered Cloud Floating Elements - Enhanced like SaaS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {cloudElements.map((element, index) => (
          <motion.div
            key={`cloud-${index}`}
            className="absolute"
            style={{
              top: `${element.y}%`,
              left: `${element.x}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [0.7, 1.2, 0.7],
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360]
            }}
            transition={{
              duration: 9 + (index % 4),
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <div className="bg-blue-600 rounded-full p-2 shadow-2xl"
                 style={{
                   boxShadow: `0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)`
                 }}>
              <element.icon className="w-3 h-3 text-white opacity-80" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-16 py-20 md:py-28 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
          {/* Left Side - Content with Added Padding */}
          <div className="w-full lg:w-1/2 text-center lg:text-left pl-4 sm:pl-8 lg:pl-12">
            <div className="overflow-hidden mb-4">
              <motion.div
                className="text-blue-600 text-sm sm:text-base font-semibold uppercase tracking-wider"
                style={{
                  transform: textAnimated ? 'translateX(0)' : 'translateX(-100%)',
                  opacity: textAnimated ? 1 : 0,
                  transition: 'all 1s ease-out',
                }}
              >
                Cloud Solutions Excellence
              </motion.div>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                style={{
                  transform: textAnimated ? 'translateY(0)' : 'translateY(40px)',
                  opacity: textAnimated ? 1 : 0,
                  transition: 'all 1s ease-out 200ms',
                }}
              >
                Transform with{' '}
                <span className="text-blue-600">
                  Cloud Excellence
                </span>
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-600"
                style={{
                  transform: textAnimated ? 'translateY(0)' : 'translateY(20px)',
                  opacity: textAnimated ? 1 : 0,
                  transition: 'all 1s ease-out 400ms',
                }}
              >
                AWS & Azure Migration Experts
              </motion.h2>
            </div>

            <div className="overflow-hidden mb-12">
              <motion.p
                className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-2xl"
                style={{
                  transform: textAnimated ? 'translateY(0)' : 'translateY(20px)',
                  opacity: textAnimated ? 1 : 0,
                  transition: 'all 1s ease-out 600ms',
                }}
              >
                Accelerate your digital transformation with our expert cloud migration, optimization, and SaaS development services. 
                Scale seamlessly with enterprise-grade solutions.
              </motion.p>
            </div>

            {/* Feature Highlights - Single Color Pill Badges */}
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: textAnimated ? 1 : 0, y: textAnimated ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { text: "99.9% Uptime", color: "bg-blue-600" },
                { text: "24/7 Support", color: "bg-cyan-600" },
                { text: "Auto-Scaling", color: "bg-indigo-600" },
                { text: "Cost Optimization", color: "bg-blue-700" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className={`${feature.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
                  style={{
                    boxShadow: `0 4px 15px ${feature.color === 'bg-blue-600' ? 'rgba(59, 130, 246, 0.3)' : 
                                            feature.color === 'bg-cyan-600' ? 'rgba(6, 182, 212, 0.3)' :
                                            feature.color === 'bg-indigo-600' ? 'rgba(99, 102, 241, 0.3)' :
                                            'rgba(29, 78, 216, 0.3)'}`
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 8px 25px ${feature.color === 'bg-blue-600' ? 'rgba(59, 130, 246, 0.4)' : 
                                            feature.color === 'bg-cyan-600' ? 'rgba(6, 182, 212, 0.4)' :
                                            feature.color === 'bg-indigo-600' ? 'rgba(99, 102, 241, 0.4)' :
                                            'rgba(29, 78, 216, 0.4)'}`
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                >
                  {feature.text}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Single Colors */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: textAnimated ? 1 : 0, y: textAnimated ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                style={{
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Migration</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.button
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - Hero Image with Background Glow Effect */}
          <div className="w-full lg:w-1/2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: textAnimated ? 1 : 0, x: textAnimated ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {/* Background Glow Effect Behind Image */}
              <div className="absolute inset-0 -m-8">
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 35%, rgba(99, 102, 241, 0.08) 70%, transparent 100%)',
                    filter: 'blur(40px)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Additional Animated Glow Layers */}
              <div className="absolute inset-0 -m-12">
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)',
                    filter: 'blur(60px)',
                  }}
                  animate={{
                    scale: [1.1, 1.3, 1.1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>

              <div className="relative max-w-lg mx-auto z-10">
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/optimized/background_images/cloud-hero2.webp"
                    alt="Cloud Solutions Hero"
                    width={600}
                    height={500}
                    className="w-full h-auto object-contain relative z-10"
                    priority
                  />
                </motion.div>
              </div>

              {/* Decorative Hexagons around image */}
              <motion.div
                className="absolute -top-8 -right-8 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="60" height="60" viewBox="0 0 100 100" className="text-cyan-600">
                  <polygon
                    points="50,5 90,25 90,75 50,95 10,75 10,25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 z-0"
                animate={{
                  scale: [0.8, 1.1, 0.8],
                  rotate: [360, 0],
                  opacity: [0.03, 0.12, 0.03],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
              >
                <svg width="50" height="50" viewBox="0 0 100 100" className="text-indigo-600">
                  <polygon
                    points="50,5 90,25 90,75 50,95 10,75 10,25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Sliding SVG Rectangle at Bottom */}
      <div 
        className="absolute left-0 w-full overflow-hidden"
        style={{ 
          bottom: '-10px',
          height: '120px', 
          backgroundColor: '#4C4A5B' 
        }}
      >
        <motion.div 
          className="flex items-center h-full whitespace-nowrap"
          animate={{
            x: [0, -2000]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Multiple copies for seamless loop */}
          {[...cloudSvgs, ...cloudSvgs, ...cloudSvgs, ...cloudSvgs].map((svg, index) => (
            <motion.div
              key={`svg-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-8 md:mx-12 h-full flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={svg.path}
                alt={svg.name}
                width={svg.name === 'AWS' ? 70 : 110}
                height={svg.name === 'AWS' ? 70 : 110}
                className={
                  svg.name === 'AWS' 
                    ? 'w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 object-contain filter brightness-0 invert opacity-90' 
                    : 'w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-contain filter brightness-0 invert opacity-90'
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroCloudSection;
