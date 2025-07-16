"use client";

import { useEffect, useState } from 'react';
import AnimatedSVG from '../../components/ui/animated-svg';
import EfficiencySection from './taxation/EfficiencySection';
import PrecisionAccountingSection from './taxation/PrecisionAccountingSection';
import ServicesSection from './taxation/ServicesSection';
import WhyPartnerSection from './taxation/WhyPartnerSection';
import TransformBusinessSection from './TransformBusinessSection';

import HireTalentSection from '@/components/HireTalentSection';
import FooterSection from '@/components/footer';

export default function USTaxation() {
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
            src="/optimized/background_images/taxation.webp"
            alt="US Taxation Background"
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

                 {/* Mobile/Tablet Background - American Flag Colors with Blur Effect */}
         <div className="absolute inset-0 md:hidden">
           {/* American Flag Blurred Background - More Vibrant */}
           <div className="absolute inset-0 bg-gradient-to-br from-[#B22234]/50 via-[#FFFFFF]/60 to-[#3C3B6E]/45"></div>
           <div className="absolute inset-0 bg-gradient-to-tl from-[#3C3B6E]/40 via-[#FFFFFF]/70 to-[#B22234]/50"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-[#B22234]/30 via-transparent to-[#3C3B6E]/30"></div>
           {/* Blur overlay */}
           <div className="absolute inset-0 backdrop-blur-[2px] bg-white/40"></div>
         </div>

        {/* Overlay for content and hex shapes */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start z-10 px-4 sm:px-6">
          <div className="text-center sm:text-left sm:ml-0 md:ml-16 lg:ml-32 xl:ml-48 max-w-md sm:max-w-xl relative">
                         {/* Content backdrop for both mobile and desktop */}
             <div className="absolute inset-0 bg-white/20 backdrop-blur-[3px] rounded-2xl border border-white/20 md:bg-white/70 md:backdrop-blur-[1px] md:border-white/30 -mx-6 -my-4"></div>
            
            {/* Content wrapper with relative positioning */}
            <div className="relative z-10">
              {/* Animated subheading */}
              <div className="overflow-hidden mb-2">
                                 <div
                   className={
                     `text-black md:text-[#DC2626] text-base sm:text-lg font-semibold transition-all duration-1000 ease-out`
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
                   className="text-3xl sm:text-4xl md:text-5xl font-bold text-black md:text-black leading-tight transition-all duration-1000 ease-out drop-shadow-lg"
                   style={{
                     transform: textAnimated ? 'translateY(0)' : 'translateY(40px)',
                     opacity: textAnimated ? 1 : 0,
                     filter: textAnimated ? 'blur(0)' : 'blur(4px)',
                     transitionDelay: '200ms',
                     textShadow: '0 2px 4px rgba(255,255,255,0.8)'
                   }}
                 >
                   Expert US Taxation<br className="hidden sm:block" /> & Accounting Services
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
                    <div className="absolute inset-0 bg-[#DC2626]/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden scale-125"></div>
                    
                                         <span className="font-montserrat text-xs sm:text-sm tracking-widest mb-2 sm:mb-3 text-black md:text-black group-hover:text-white md:group-hover:text-white transition-colors duration-300 relative z-10">
                       SCROLL DOWN
                     </span>
                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black md:border-black flex items-center justify-center group-hover:bg-black md:group-hover:bg-black transition-all duration-300 relative z-10 backdrop-blur-sm">
                       <svg
                         className="w-5 h-5 text-black md:text-black group-hover:text-white md:group-hover:text-white animate-bounce transition-colors duration-300"
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
              src="/svg/taxation_svg/thunder.svg"
              alt="Thunder Shape"
              width={279}
              height={279}
              className="rotate--1"
              position="right"
              delay={0.2}
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
        </div>

                 {/* Mobile Layout - Beautiful floating elements with American Flag theme */}
         <div className="block md:hidden absolute inset-0 pointer-events-none overflow-hidden">
           {/* Floating Particles - More Vibrant American Flag Colors */}
           <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-[#B22234] rounded-full animate-pulse opacity-80"></div>
           <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-[#3C3B6E] rounded-full animate-bounce opacity-75" style={{ animationDelay: '0.5s' }}></div>
           <div className="absolute top-[35%] left-[5%] w-1.5 h-1.5 bg-[#B22234] rounded-full animate-pulse opacity-85" style={{ animationDelay: '1s' }}></div>
           <div className="absolute top-[45%] right-[8%] w-2.5 h-2.5 bg-[#3C3B6E] rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.5s' }}></div>
           <div className="absolute top-[55%] left-[12%] w-2 h-2 bg-[#B22234] rounded-full animate-pulse opacity-80" style={{ animationDelay: '2s' }}></div>
           <div className="absolute top-[65%] right-[20%] w-1 h-1 bg-[#3C3B6E] rounded-full animate-bounce opacity-75" style={{ animationDelay: '0.8s' }}></div>
         </div>
      </section>

      {/* Main Content Sections */}
      <PrecisionAccountingSection />
      <ServicesSection />
      <WhyPartnerSection />
      <EfficiencySection />
      <TransformBusinessSection />
      
      {/* Hire Talent Section */}
      <HireTalentSection 
        customColor="#DC2626"
      />
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
} 