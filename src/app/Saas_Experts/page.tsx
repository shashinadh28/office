"use client";

import React from 'react';
import FooterSection from '@/components/footer';
import HeroSaasSection from './HeroSaasSection';
import AboutSaasSection from './AboutSaasSection';
import WhyPartnerSaasSection from './WhyPartnerSaasSection';
import SaasServicesSection from './SaasServicesSection';
import TransformBusinessSection from './TransformBusinessSection';

const SaasExpertsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroSaasSection />
      <AboutSaasSection />
      <WhyPartnerSaasSection />
      <SaasServicesSection />
      <TransformBusinessSection />
      
      <FooterSection />
    </div>
  );
};

export default SaasExpertsPage;
