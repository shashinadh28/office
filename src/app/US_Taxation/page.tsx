'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSVG from '../../components/ui/animated-svg';
import FooterSection from '@/components/footer';
import WhyPartnerSection from './taxation/WhyPartnerSection';
import ServicesSection from './taxation/ServicesSection';
import EfficiencySection from './taxation/EfficiencySection';
import PrecisionAccountingSection from './taxation/PrecisionAccountingSection';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const USATaxationPage: React.FC = () => {
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimated(true);
    }, 600);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section from Healthcare_BPO - Modified by User */}
      <section className="relative h-[500px] sm:h-[600px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/background_images/taxation.png" 
            alt="US Taxation Background" 
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
                className={`text-[#2D77C2] text-base sm:text-lg font-semibold transition-all duration-1000 ease-out`}
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
                Expert US Taxation & <br className="hidden sm:block" /> Accounting Services for Firms & CPAs
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
        <div className="absolute top-0 left-0 w-full h-full md:w-3/4 lg:w-full xl:w-3/4">
          <div className="absolute top-0 left-60 transform translate-x-87 md:left-80 lg:left-92 xl:left-[22rem]">
            <AnimatedSVG
              src="/svg/taxation_svg/thunder.svg"
              alt="Thunder Shape"
              width={286}
              height={286}
              className="rotate--1"
              position="left"
              delay={0.2}
            />
          </div>
          <div className="absolute bottom-0 right-79">
            <AnimatedSVG
              src="/svg/hexagon.svg"
              alt="Hexagon"
              width={340}
              height={340}
              className="opacity-80"
              position="right"
              delay={0.4}
            />
          </div>
          <div className="absolute bottom-39 left-0">
            <AnimatedSVG
              src="/svg/taxation_svg/1.svg"
              alt="SVG 1"
              width={150}
              height={150}
              position="left"
              delay={0.6}
            />
          </div>
          <div className="absolute bottom-0 right-248">
            <AnimatedSVG
              src="/svg/taxation_svg/2.svg"
              alt="SVG 2"
              width={130}
              height={130}
              position="right"
              delay={0.8}
            />
          </div>
          <div className="absolute bottom-0 left-0">
            <AnimatedSVG
              src="/svg/taxation_svg/triangle.svg" 
              alt="Triangle"
              width={135}
              height={135}
              position="left"
              delay={1}
            />
          </div>
        </div>
      </section>
      <PrecisionAccountingSection />
      <WhyPartnerSection />
      <ServicesSection />
      <EfficiencySection />
      <footer className="py-8 text-center text-gray-700 bg-gray-200 border-t border-gray-300">
        <div className="container mx-auto px-6">
          <hr className="mb-6 border-gray-400 max-w-xs mx-auto" />
          <p className="text-sm">
            Gateway Workforce – Your trusted partner for US taxation, accounting, and financial compliance.
          </p>
        </div>
      </footer>
      <FooterSection />
    </div>
  );
};

export default USATaxationPage;
