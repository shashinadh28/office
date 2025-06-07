"use client";

import React from 'react';
import FooterSection from '@/components/footer';
import HeroAISection from './HeroAISection';
import WhyChooseAISection from './WhyChooseAISection';
import AIServicesSection from './AIServicesSection';
import AICTASection from './AICTASection';

const AISolutionsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroAISection />
      <WhyChooseAISection />
      <AIServicesSection />
      <AICTASection />
      
      <FooterSection />
    </div>
  );
};

export default AISolutionsPage;
