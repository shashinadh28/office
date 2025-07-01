'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSVG from '../../components/ui/animated-svg'; // Assuming this path is correct
import FooterSection from '@/components/footer'; // Assuming this path is correct
import HireTalentSection from '@/components/HireTalentSection';

// Import IT Outsourcing specific sections
import WhyChooseUsSection from './WhyChooseUsSection';
import JourneySection from './JourneySection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';
import TechnologiesSection from './TechnologiesSection';
import TransformBusinessSection from './TransformBusinessSection';
import ContactForm from './ContactForm';

const ITOutsourcingPage: React.FC = () => {
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimated(true);
    }, 600); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section - Adapted from US_Taxation / Healthcare_BPO */}
      <section className="relative w-full bg-gray-800 py-16 md:py-20 lg:py-24"> 
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">
            <div className="w-full md:w-3/5 lg:w-7/12 max-w-2xl pt-0 md:pt-8 md:ml-16 lg:ml-24"> 
              <div className="overflow-hidden mb-3">
                <div
                  className={`text-sky-400 text-sm sm:text-base font-semibold uppercase tracking-wider transition-all duration-1000 ease-out`}
                  style={{
                    transform: textAnimated ? 'translateX(0)' : 'translateX(-100%)',
                    opacity: textAnimated ? 1 : 0,
                  }}
                >
                  Gateway Workforce: IT Outsourcing
                </div>
              </div>
              <div className="overflow-hidden mb-4">
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight transition-all duration-1000 ease-out"
                  style={{
                    transform: textAnimated ? 'translateY(0)' : 'translateY(40px)',
                    opacity: textAnimated ? 1 : 0,
                    transitionDelay: '200ms',
                  }}
                >
                  Scale Your Team with <br className="hidden sm:block" /> Expert Indian Developers
                </h1>
              </div>
              <div className="overflow-hidden mb-6">
                <p
                  className="text-sky-300 text-2xl sm:text-3xl font-medium transition-all duration-1000 ease-out"
                  style={{
                    transform: textAnimated ? 'translateY(0)' : 'translateY(30px)',
                    opacity: textAnimated ? 1 : 0,
                    transitionDelay: '400ms',
                  }}
                >
                  Starting at Just <span className="text-yellow-400">$15/Hour</span>!
                </p>
              </div>
              <div className="overflow-hidden mb-8">
                <p 
                  className="text-gray-200 text-base sm:text-lg leading-relaxed transition-all duration-1000 ease-out max-w-md"
                  style={{
                    transform: textAnimated ? 'translateY(0)' : 'translateY(20px)',
                    opacity: textAnimated ? 1 : 0,
                    transitionDelay: '600ms',
                  }}
                >
                  Access Pre-Vetted, Top-Tier Developers at Competitive Rates. Our skilled Indian developers seamlessly integrate with your team, accelerating project delivery without compromising quality.
                </p>
              </div>
              <div
                className={`transition-all duration-700 ${textAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: '800ms' }}
              >
                <div className="mt-8 sm:mt-10">
                  <button
                    onClick={() => document.getElementById('journey-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-colors duration-300 text-lg"
                  >
                    Discover Our Process
                  </button>
                </div>
              </div>
            </div>
            {/* Form Container (Right Column) */}
            <div className="w-full md:w-2/5 lg:w-5/12 md:ml-8 lg:ml-12">
              <div className="md:sticky md:top-24 lg:top-28">
                <ContactForm />
              </div>
            </div>
          </div> 
        </div> 
        {/* Animated SVGs removed as per request */}
      </section>

      {/* Content Sections */}
      <div id="journey-section" className="relative pt-12 md:pt-16 lg:pt-20"> 
        <JourneySection />
      </div>
      <WhyChooseUsSection />
      <StatsSection />
      <TechnologiesSection />
      <HireTalentSection theme={{
        primary: "sky-600",
        secondary: "yellow-500", 
        accent: "blue-600",
        background: "from-sky-50 via-white to-yellow-50",
        gradientFrom: "sky-600",
        gradientTo: "yellow-500"
      }} />
      <TransformBusinessSection />
      
      {/* Footer - Copied from US_Taxation page structure */}
      <footer className="py-8 text-center text-gray-700 bg-gray-200 border-t border-gray-300">
        <div className="container mx-auto px-6">
          <hr className="mb-6 border-gray-400 max-w-xs mx-auto" />
          <p className="text-sm">
            Gateway Workforce – Your trusted partner for IT Outsourcing and expert developer talent.
          </p>
        </div>
      </footer>
      <FooterSection />
    </div>
  );
};

export default ITOutsourcingPage;
