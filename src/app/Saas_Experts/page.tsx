"use client";

import React from 'react';
import FooterSection from '@/components/footer';
import HeroSaasSection from './HeroSaasSection';
import AboutSaasSection from './AboutSaasSection';
import WhyPartnerSaasSection from './WhyPartnerSaasSection';
import SaasServicesSection from './SaasServicesSection';
import TransformBusinessSection from './TransformBusinessSection';
import HireTalentSection from '@/components/HireTalentSection';

const SaasExpertsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroSaasSection />
      <AboutSaasSection />
      <WhyPartnerSaasSection />
      <SaasServicesSection />
      <HireTalentSection 
        customColor="#F35120"
        theme={{
          primary: "orange-600",
          secondary: "red-600", 
          accent: "amber-500",
          background: "from-orange-50 via-white to-red-50",
          gradientFrom: "orange-600",
          gradientTo: "red-600"
        }} 
      />
      <TransformBusinessSection />
      
      <FooterSection />
    </div>
  );
};

export default SaasExpertsPage;
