"use client";

import React from 'react';
import FooterSection from '@/components/footer';
import HeroSaasSection from './HeroSaasSection';
import WhyChooseSaasSection from './WhyChooseSaasSection';
import SaasServicesSection from './SaasServicesSection';
import SaasCTASection from './SaasCTASection';

const SaasExpertsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroSaasSection />
      <WhyChooseSaasSection />
      <SaasServicesSection />
      <SaasCTASection />
      
      <FooterSection />
    </div>
  );
};

export default SaasExpertsPage;
