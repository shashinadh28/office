"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AnimatedSVG from '../../components/ui/animated-svg';
import ContactButton from '../../components/ContactButton';
import AboutSection from './healthcare/AboutSection';
import WhyChooseSection from './healthcare/WhyChooseSection';
import ServicesSection from './healthcare/ServicesSection';
import VisualCalloutSection from './healthcare/VisualCalloutSection';
import FinalCTASection from './healthcare/FinalCTASection';

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
      {/* Background section */}
      <section className="relative h-[600px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/background_images/health_bg.png"
            alt="Healthcare BPO Background"
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            priority
          />
        </div>

        {/* Overlay for content and hex shapes */}
        <div className="absolute inset-0 flex items-center mb-20 justify-start z-10">
          <div className="ml-64 max-w-xl">
            {/* Animated subheading */}
            <div className="overflow-hidden mb-2">
              <div
                className={
                  `text-[#18B8E5] text-lg font-semibold transition-all duration-1000 ease-out`
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
                className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 leading-tight transition-all duration-1000 ease-out"
                style={{
                  transform: textAnimated ? 'translateY(0)' : 'translateY(40px)',
                  opacity: textAnimated ? 1 : 0,
                  filter: textAnimated ? 'blur(0)' : 'blur(4px)',
                  transitionDelay: '200ms',
                }}
              >
                End-to-End<br /> Medical Billing & Telehealth Support

              </h1>
            </div>
            {/* Animated Get Started button replaced with scroll down button */}
            <div
              className={`transition-all duration-700 ${textAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="flex flex-col items-center transition-all duration-300 mt-6"
              >
                <span className="font-montserrat text-xs sm:text-sm tracking-widest mb-2 sm:mb-3 text-[#18B8E5]">
                  SCROLL DOWN
                </span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#18B8E5] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#18B8E5] animate-bounce"
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

        {/* SVG Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Thunder Shape */}
          <div className="absolute top-0 left-176">
            <AnimatedSVG
              src="/svg/thunder.svg"
              alt="Thunder Shape"
              width={286}
              height={286}
              className="rotate--1"
              position="left"
              delay={0.2}
            />
          </div>

          {/* Hexagon */}
          <div className="absolute bottom-0 right-190">
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

          {/* SVG 1 */}
          <div className="absolute bottom-39 left-0">
            <AnimatedSVG
              src="/svg/1.svg"
              alt="SVG 1"
              width={150}
              height={150}
              position="left"
              delay={0.6}
            />
          </div>

          {/* SVG 2 */}
          <div className="absolute bottom-0 right-350">
            <AnimatedSVG
              src="/svg/2.svg"
              alt="SVG 2"
              width={130}
              height={130}
              position="right"
              delay={0.8}
            />
          </div>

          {/* Triangle */}
          <div className="absolute bottom-0 left-0">
            <AnimatedSVG
              src="/svg/traingle.svg"
              alt="Triangle"
              width={135}
              height={135}
              position="left"
              delay={1}
            />
          </div>
        </div>
      </section>
      <main>
        <AboutSection />
        <WhyChooseSection />
        <ServicesSection />
        <VisualCalloutSection />
        <FinalCTASection />
      </main>
      <FooterSection />
    </div>
  );
}