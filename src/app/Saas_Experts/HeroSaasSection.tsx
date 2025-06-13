"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSVG from '../../components/ui/animated-svg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const HeroSaasSection: React.FC = () => {
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimated(true);
    }, 600);
  }, []);

  return (
    <section className="relative h-[500px] sm:h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/optimized/background_images/saas-experts.webp" 
          alt="SaaS Experts Background" 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
          className="object-cover object-center"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            willChange: 'transform'
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-start z-10 px-4 sm:px-6">
        <div className="ml-0 md:ml-16 lg:ml-32 xl:ml-48 max-w-md sm:max-w-xl">
          <div className="overflow-hidden mb-2">
            <div
              className={`bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent text-base sm:text-lg font-semibold transition-all duration-1000 ease-out`}
              style={{
                transform: textAnimated ? 'translateX(0)' : 'translateX(-100%)',
                opacity: textAnimated ? 1 : 0,
                filter: textAnimated ? 'blur(0)' : 'blur(4px)',
              }}
            >
              Gateway Workforce: 
            </div>
          </div>
          <div className="overflow-hidden mb-6">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight transition-all duration-1000 ease-out"
              style={{
                transform: textAnimated ? 'translateY(0)' : 'translateY(40px)',
                opacity: textAnimated ? 1 : 0,
                filter: textAnimated ? 'blur(0)' : 'blur(4px)',
                transitionDelay: '200ms',
                
              }}
            >
              SaaS Integration & Optimization Experts
            </h1>
          </div>
          <div
            className={`transition-all duration-700 ${textAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="mt-8 sm:mt-10">
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="flex flex-col items-center transition-all duration-300 group"
              >
                <span className="font-montserrat text-xs sm:text-sm tracking-widest mb-2 sm:mb-3 text-red-600 group-hover:text-white transition-colors duration-300">
                  SCROLL DOWN
                </span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-red-600 group-hover:text-white animate-bounce transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Elements - Fixed Positioning for 768px+ screens */}
      {/* Desktop and Tablet Layout - Fixed pixel positioning */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {/* Gear Shape */}
        <div className="absolute top-0" style={{ right: '36%' }}>
          <AnimatedSVG
            src="/svg/saas_svg/gear.svg"
            alt="Gear Shape"
            width={279}
            height={279}
            className="rotate--1"
            position="right"
            delay={0.2}
          />
        </div>

        {/* Hexagon */}
        <div className="absolute bottom-0" style={{ right: '48%' }}>
          <AnimatedSVG
            src="/svg/hexagon.svg"
            alt="Hexagon"
            width={320}
            height={320}
            className="opacity-80"
            position="right"
            delay={0.4}
          />
        </div>

        {/* SaaS SVG 1 */}
        <div className="absolute left-0" style={{ bottom: '22%' }}>
          <AnimatedSVG
            src="/svg/saas_svg/salesforce.svg"
            alt="Salesforce"
            width={140}
            height={140}
            position="left"
            delay={0.6}
          />
        </div>

        {/* SaaS SVG 2 */}
        <div className="absolute bottom-0" style={{ right: '91%' }}>
          <AnimatedSVG
            src="/svg/saas_svg/shopify.svg"
            alt="Shopify"
            width={120}
            height={120}
            position="right"
            delay={0.8}
          />
        </div>

        {/* Triangle */}
        <div className="absolute bottom-0 left-0">
          <AnimatedSVG
            src="/svg/saas_svg/triangle.svg" 
            alt="Triangle"
            width={120}
            height={120}
            position="left"
            delay={1}
          />
        </div>
      </div>

      {/* Mobile Layout - Simplified and Clean */}
      <div className="block md:hidden absolute inset-0 pointer-events-none">
        {/* Gear - Top Right */}
        <div className="absolute top-[8%] right-[5%]">
          <AnimatedSVG
            src="/svg/saas_svg/gear.svg"
            alt="Gear"
            width={140}
            height={140}
            className="rotate--1 opacity-70"
            position="right"
            delay={0.2}
          />
        </div>

        {/* Hexagon - Bottom Right */}
        <div className="absolute bottom-[15%] right-[2%]">
          <AnimatedSVG
            src="/svg/hexagon.svg"
            alt="Hexagon"
            width={160}
            height={160}
            className="opacity-60"
            position="right"
            delay={0.4}
          />
        </div>

        {/* Salesforce - Bottom Left */}
        <div className="absolute bottom-[5%] left-[5%]">
          <AnimatedSVG
            src="/svg/saas_svg/salesforce.svg"
            alt="Salesforce"
            width={100}
            height={100}
            className="opacity-50"
            position="left"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSaasSection;
