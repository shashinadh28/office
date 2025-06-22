"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AnimatedSVG from '../../components/ui/animated-svg';
import ContactButton from '../../components/ContactButton';
import AboutSection from './healthcare/AboutSection';
import WhyChooseSection from './healthcare/WhyChooseSection';
import VisualCalloutSection from './healthcare/VisualCalloutSection';
import ServicesSection from './healthcare/ServicesSection';
import TransformBusinessSection from './TransformBusinessSection';

import HireTalentSection from '@/components/HireTalentSection';

import FooterSection from '@/components/footer';

export default function HealthcareBPO() {
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimated(true);
    }, 600);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative h-[500px] sm:h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/optimized/background_images/health_bg.webp"
            alt="Healthcare BPO Background"
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

        {/* Overlay for content and hex shapes */}
        <div className="absolute inset-0 flex items-center justify-start z-10 px-4 sm:px-6">
          <div className="ml-0 md:ml-16 lg:ml-32 xl:ml-48 max-w-md sm:max-w-xl">
            {/* Animated subheading */}
            <div className="overflow-hidden mb-2">
              <div
                className={
                  `text-[#18B8E5] text-base sm:text-lg font-semibold transition-all duration-1000 ease-out`
                }
                style={{
                  transform: textAnimated ? 'translateX(0)' : 'translateX(-100%)',
                  opacity: textAnimated ? 1 : 0,
                  filter: textAnimated ? 'blur(0)' : 'blur(4px)',
                }}
              >
                Gateway Workforce:

              </div>
            </div>
            {/* Animated main heading */}
            <div className="overflow-hidden mb-6">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight transition-all duration-1000 ease-out drop-shadow-lg"
                style={{
                  transform: textAnimated ? 'translateY(0)' : 'translateY(40px)',
                  opacity: textAnimated ? 1 : 0,
                  filter: textAnimated ? 'blur(0)' : 'blur(4px)',
                  transitionDelay: '200ms',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                End-to-End<br className="hidden sm:block" /> Medical Billing & Telehealth Support
              </h1>
            </div>
            {/* Animated Get Started button replaced with scroll down button */}
            <div
              className={`transition-all duration-700 ${textAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="mt-8 sm:mt-10">
                <button
                  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                  className="flex flex-col items-center transition-all duration-300 group"
                >
                  <span className="font-montserrat text-xs sm:text-sm tracking-widest mb-2 sm:mb-3 text-[#18B8E5] group-hover:text-white transition-colors duration-300">
                    SCROLL DOWN
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#18B8E5] flex items-center justify-center group-hover:bg-[#18B8E5] transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-[#18B8E5] group-hover:text-white animate-bounce transition-colors duration-300"
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
          {/* Thunder Shape */}
          <div className="absolute top-0" style={{ right: '36%' }}>
            <AnimatedSVG
              src="/svg/thunder.svg"
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
              src="/svg/1.svg"
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
              src="/svg/2.svg"
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
              src="/svg/traingle.svg"
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
          {/* Thunder Shape - Top Right */}
          <div className="absolute top-[8%] right-[5%]">
            <AnimatedSVG
              src="/svg/thunder.svg"
              alt="Thunder Shape"
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

          {/* Small decorative elements */}
          <div className="absolute bottom-[45%] left-[3%]">
            <AnimatedSVG
              src="/svg/1.svg"
              alt="SVG 1"
              width={80}
              height={80}
              position="left"
              delay={0.6}
            />
          </div>

          <div className="absolute bottom-[5%] left-[2%]">
            <AnimatedSVG
              src="/svg/traingle.svg"
              alt="Triangle"
              width={70}
              height={70}
              position="left"
              delay={0.8}
            />
          </div>
        </div>
      </section>
      
      <main>
        <AboutSection />
        <WhyChooseSection />
        <ServicesSection />
        <VisualCalloutSection />
        <HireTalentSection theme={{
          primary: "sky-600",
          secondary: "cyan-600", 
          accent: "blue-500",
          background: "from-sky-50 via-white to-cyan-50",
          gradientFrom: "sky-600",
          gradientTo: "cyan-600"
        }} />
        <TransformBusinessSection />
      </main>
      
      <FooterSection />
    </div>
  );
}