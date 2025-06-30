'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSVG from '../../components/ui/animated-svg';
import FooterSection from '@/components/footer';
import WhyPartnerSection from './taxation/WhyPartnerSection';
import ServicesSection from './taxation/ServicesSection';

import PrecisionAccountingSection from './taxation/PrecisionAccountingSection';
import TransformBusinessSection from './TransformBusinessSection';
import HireTalentSection from '@/components/HireTalentSection';

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
      <section className="relative h-[500px] sm:h-[600px] w-full overflow-hidden">
        {/* Background Image - Hidden on mobile and small tablets, shown on larger screens */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/optimized/background_images/taxation.webp" 
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

        {/* Mobile/Tablet Background - Light gray background for screens under 768px */}
        <div className="absolute inset-0 md:hidden" style={{ backgroundColor: '#E4E6E9' }}></div>

        <div className="absolute inset-0 flex items-center justify-center md:justify-start z-10 px-4 sm:px-6">
          <div className="text-center md:text-left md:ml-16 lg:ml-32 xl:ml-48 max-w-md sm:max-w-xl">
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
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 md:text-black leading-tight transition-all duration-1000 ease-out"
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
              className={`transition-all duration-700 ${textAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} flex justify-center sm:justify-start`}
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

        {/* SVG Elements - Only show on desktop when background image is visible */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {/* Thunder Shape */}
          <div className="absolute top-0" style={{ right: '36%' }}>
            <AnimatedSVG
              src="/svg/taxation_svg/thunder.svg"
              alt="Thunder Shape"
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

          {/* SVG 1 */}
          <div className="absolute left-0" style={{ bottom: '22%' }}>
            <AnimatedSVG
              src="/svg/taxation_svg/1.svg"
              alt="SVG 1"
              width={140}
              height={140}
              position="left"
              delay={0.6}
            />
          </div>

          {/* SVG 2 */}
          <div className="absolute bottom-0" style={{ right: '91%' }}>
            <AnimatedSVG
              src="/svg/taxation_svg/2.svg"
              alt="SVG 2"
              width={120}
              height={120}
              position="right"
              delay={0.8}
            />
          </div>

          {/* Triangle */}
          <div className="absolute bottom-0 left-0">
            <AnimatedSVG
              src="/svg/taxation_svg/triangle.svg" 
              alt="Triangle"
              width={120}
              height={120}
              position="left"
              delay={1}
            />
          </div>
        </div>

        {/* Mobile Layout - Beautiful floating elements and enhanced UI (like Healthcare) */}
        <div className="block md:hidden absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Particles */}
          <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-[#2D77C2] rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-[#2D77C2] rounded-full animate-bounce opacity-40" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[35%] left-[5%] w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[45%] right-[8%] w-2.5 h-2.5 bg-[#2D77C2] rounded-full animate-bounce opacity-30" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-[55%] left-[12%] w-2 h-2 bg-red-600 rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[65%] right-[20%] w-1 h-1 bg-[#2D77C2] rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.8s' }}></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-[20%] right-[5%] opacity-20">
            <div className="w-8 h-8 border border-[#2D77C2] rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
          </div>
          <div className="absolute top-[40%] left-[8%] opacity-15">
            <div className="w-6 h-6 bg-[#2D77C2] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="absolute top-[60%] right-[12%] opacity-25">
            <div className="w-4 h-4 border-2 border-red-600 rotate-12 animate-pulse"></div>
          </div>
          
          {/* Floating Lines */}
          <div className="absolute top-[30%] left-[2%] w-12 h-0.5 bg-gradient-to-r from-[#2D77C2] to-transparent opacity-30 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-[50%] right-[3%] w-8 h-0.5 bg-gradient-to-l from-red-600 to-transparent opacity-25 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          
          {/* Enhanced Hexagon with glow effect */}
          <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2">
            {/* Glow effect behind hexagon */}
            <div className="absolute inset-0 bg-[#2D77C2] rounded-full blur-2xl opacity-5 scale-125 animate-pulse"></div>
            <AnimatedSVG
              src="/svg/hexagon.svg"
              alt="Hexagon"
              width={200}
              height={200}
              className="opacity-20 drop-shadow-lg"
              position="bottom"
              delay={0.4}
            />
          </div>
          
          {/* Floating Dollar & Tax Icons */}
          <div className="absolute top-[18%] left-[20%] opacity-15">
            <svg className="w-5 h-5 text-[#2D77C2] animate-bounce" style={{ animationDelay: '0.7s' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
              <path d="M12 8C10.9 8 10 8.9 10 10S10.9 12 12 12S14 11.1 14 10S13.1 8 12 8ZM12 10.5C11.7 10.5 11.5 10.3 11.5 10S11.7 9.5 12 9.5S12.5 9.7 12.5 10S12.3 10.5 12 10.5Z"/>
            </svg>
          </div>
          <div className="absolute top-[70%] right-[25%] opacity-10">
            <svg className="w-4 h-4 text-red-600 animate-pulse" style={{ animationDelay: '1.8s' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.8 10.9C10.53 10.9 9.8 11.48 9.8 12.4C9.8 13.76 12.15 14.5 12.15 16.84C12.15 18.45 10.8 19.4 8.95 19.4C7.7 19.4 6.6 18.9 5.85 18.15L7.1 16.9C7.6 17.4 8.35 17.7 9.05 17.7C10.32 17.7 11.05 17.12 11.05 16.2C11.05 14.84 8.7 14.1 8.7 11.76C8.7 10.15 10.05 9.2 11.9 9.2C13.15 9.2 14.25 9.7 15 10.45L13.75 11.7C13.25 11.2 12.5 10.9 11.8 10.9Z"/>
            </svg>
          </div>
          
          {/* Curved decorative elements */}
          <div className="absolute top-[10%] right-[30%] opacity-10">
            <svg className="w-16 h-16 text-[#2D77C2] animate-spin" style={{ animationDuration: '12s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M8 12h8"/>
            </svg>
          </div>
          
          {/* Bottom decorative wave */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2D77C2] to-transparent opacity-30"></div>
          
          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#2D77C2] opacity-20"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#2D77C2] opacity-20"></div>
          <div className="absolute bottom-20 left-4 w-6 h-6 border-l-2 border-b-2 border-red-600 opacity-15"></div>
          <div className="absolute bottom-20 right-4 w-6 h-6 border-r-2 border-b-2 border-red-600 opacity-15"></div>
        </div>
      </section>
      
      <PrecisionAccountingSection />
      <WhyPartnerSection />
      <ServicesSection />
      <HireTalentSection 
        customColor="#DC2626"
        theme={{
          primary: "blue-700",
          secondary: "red-600", 
          accent: "blue-600",
          background: "from-blue-50 via-white to-red-50",
          gradientFrom: "blue-700",
          gradientTo: "red-600"
        }} 
      />
      <TransformBusinessSection />
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
