"use client";

import React from 'react';
import FooterSection from '@/components/footer';
import HeroAISection from './HeroAISection';
import TransformAISection from './TransformAISection';
import WhyChooseAISection from './WhyChooseAISection';
import AIServicesSection from './AIServicesSection';
import UnlockPowerSection from './UnlockPowerSection';

const AISolutionsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroAISection />
      <TransformAISection />
      <WhyChooseAISection />
      <AIServicesSection />
      <UnlockPowerSection />
      
      <FooterSection />
    </div>
  );
};

export default AISolutionsPage;
