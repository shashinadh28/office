"use client";

import React from 'react';
import FooterSection from '@/components/footer';
import HeroCloudSection from './HeroCloudSection';
import AboutCloudSection from './AboutCloudSection';
import WhyChooseCloudSection from './WhyChooseCloudSection';
import CloudServicesSection from './CloudServicesSection';
import AccelerateJourneySection from './AccelerateJourneySection';
import HireTalentSection from '@/components/HireTalentSection';

const CloudSolutionsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroCloudSection />
      <AboutCloudSection />
      <WhyChooseCloudSection />
      <CloudServicesSection />
      <HireTalentSection theme={{
        primary: "blue-600",
        secondary: "cyan-600", 
        accent: "sky-500",
        background: "from-blue-50 via-white to-cyan-50",
        gradientFrom: "blue-600",
        gradientTo: "cyan-600"
      }} />
      <AccelerateJourneySection />
      
      <FooterSection />
    </div>
  );
};

export default CloudSolutionsPage;
