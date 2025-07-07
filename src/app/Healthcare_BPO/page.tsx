"use client";

import { useEffect, useState } from 'react';
import AnimatedSVG from '../../components/ui/animated-svg';
import AboutSection from './healthcare/AboutSection';
import ServicesSection from './healthcare/ServicesSection';
import VisualCalloutSection from './healthcare/VisualCalloutSection';
import WhyChooseSection from './healthcare/WhyChooseSection';
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
        {/* Background - Hidden on mobile and small tablets, shown on larger screens */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src="/optimized/background_images/health_bg.webp"
            alt="Healthcare BPO Background"
            width="1"
            height="1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover object-center w-full h-full"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              willChange: 'transform'
            }}
          />
        </div>

        {/* Mobile/Tablet Background - Enhanced with gradient for screens under 768px */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#031936] via-[#0a2547] to-[#031936] md:hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#031936]/80 via-transparent to-[#031936]/40"></div>
        </div>

        {/* Overlay for content and hex shapes */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start z-10 px-4 sm:px-6">
          <div className="text-center sm:text-left sm:ml-0 md:ml-16 lg:ml-32 xl:ml-48 max-w-md sm:max-w-xl relative">
            {/* Mobile content backdrop - Better fitted */}
            <div className="absolute inset-0 bg-white/3 backdrop-blur-[2px] rounded-2xl border border-white/5 md:hidden -mx-6 -my-4"></div>
            
            {/* Content wrapper with relative positioning */}
            <div className="relative z-10">
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
                className={`transition-all duration-700 ${textAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} flex justify-center sm:justify-start`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="mt-8 sm:mt-10">
                  <button
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    className="flex flex-col items-center transition-all duration-300 group relative"
                  >
                    {/* Mobile glow effect - Reduced strength */}
                    <div className="absolute inset-0 bg-[#18B8E5]/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden scale-125"></div>
                    
                    <span className="font-montserrat text-xs sm:text-sm tracking-widest mb-2 sm:mb-3 text-[#18B8E5] group-hover:text-white transition-colors duration-300 relative z-10">
                      SCROLL DOWN
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#18B8E5] flex items-center justify-center group-hover:bg-[#18B8E5] transition-all duration-300 relative z-10 backdrop-blur-sm">
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

        {/* Mobile Layout - Beautiful floating elements and enhanced UI */}
        <div className="block md:hidden absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Particles */}
          <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-[#18B8E5] rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-[#18B8E5] rounded-full animate-bounce opacity-40" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[35%] left-[5%] w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[45%] right-[8%] w-2.5 h-2.5 bg-[#18B8E5] rounded-full animate-bounce opacity-30" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-[55%] left-[12%] w-2 h-2 bg-white rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[65%] right-[20%] w-1 h-1 bg-[#18B8E5] rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.8s' }}></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-[20%] right-[5%] opacity-20">
            <div className="w-8 h-8 border border-[#18B8E5] rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
          </div>
          <div className="absolute top-[40%] left-[8%] opacity-15">
            <div className="w-6 h-6 bg-[#18B8E5] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="absolute top-[60%] right-[12%] opacity-25">
            <div className="w-4 h-4 border-2 border-white rotate-12 animate-pulse"></div>
          </div>
          
          {/* Floating Lines */}
          <div className="absolute top-[30%] left-[2%] w-12 h-0.5 bg-gradient-to-r from-[#18B8E5] to-transparent opacity-30 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-[50%] right-[3%] w-8 h-0.5 bg-gradient-to-l from-white to-transparent opacity-25 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          
          {/* Enhanced Hexagon with glow effect */}
          <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2">
            {/* Glow effect behind hexagon - Reduced strength */}
            <div className="absolute inset-0 bg-[#18B8E5] rounded-full blur-2xl opacity-5 scale-125 animate-pulse"></div>
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
          
          {/* Floating Medical Cross Icons */}
          <div className="absolute top-[18%] left-[20%] opacity-15">
            <svg className="w-5 h-5 text-[#18B8E5] animate-bounce" style={{ animationDelay: '0.7s' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 8h-2V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H5a1 1 0 0 0 0 2h2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6h2a1 1 0 0 0 0-2zM15 16H9v-6H7V6h10v4h-2v6z"/>
            </svg>
          </div>
          <div className="absolute top-[70%] right-[25%] opacity-10">
            <svg className="w-4 h-4 text-white animate-pulse" style={{ animationDelay: '1.8s' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 8h-2V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H5a1 1 0 0 0 0 2h2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6h2a1 1 0 0 0 0-2zM15 16H9v-6H7V6h10v4h-2v6z"/>
            </svg>
          </div>
          
          {/* Curved decorative elements */}
          <div className="absolute top-[10%] right-[30%] opacity-10">
            <svg className="w-16 h-16 text-[#18B8E5] animate-spin" style={{ animationDuration: '12s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M8 12h8"/>
            </svg>
          </div>
          
          {/* Bottom decorative wave */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#18B8E5] to-transparent opacity-30"></div>
          
          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#18B8E5] opacity-20"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#18B8E5] opacity-20"></div>
          <div className="absolute bottom-20 left-4 w-6 h-6 border-l-2 border-b-2 border-white opacity-15"></div>
          <div className="absolute bottom-20 right-4 w-6 h-6 border-r-2 border-b-2 border-white opacity-15"></div>
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