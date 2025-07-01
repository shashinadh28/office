"use client";

import React from 'react';
import FooterSection from '@/components/footer';
import HeroAISection from './HeroAISection';
import TransformAISection from './TransformAISection';
import WhyChooseAISection from './WhyChooseAISection';
import AIServicesSection from './AIServicesSection';
import HireTalentSection from '@/components/HireTalentSection';
import TransformBusinessAISection from './TransformBusinessAISection';

const AISolutionsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroAISection />
      <TransformAISection />
      <WhyChooseAISection />
      <AIServicesSection />
      <HireTalentSection 
        useSpecialColor={true}
        theme={{
          primary: "purple-600",
          secondary: "pink-600", 
          accent: "indigo-600",
          background: "from-purple-50 via-white to-pink-50",
          gradientFrom: "purple-600",
          gradientTo: "pink-600"
        }} 
      />
      <TransformBusinessAISection />
      
      <FooterSection />
    </div>
  );
};

export default AISolutionsPage;
