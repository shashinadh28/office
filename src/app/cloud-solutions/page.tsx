"use client";

import React from 'react';
import FooterSection from '@/components/footer';
import HeroCloudSection from './HeroCloudSection';
import AboutCloudSection from './AboutCloudSection';
import WhyChooseCloudSection from './WhyChooseCloudSection';
import CloudServicesSection from './CloudServicesSection';
import AccelerateJourneySection from './AccelerateJourneySection';

const CloudSolutionsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroCloudSection />
      <AboutCloudSection />
      <WhyChooseCloudSection />
      <CloudServicesSection />
      <AccelerateJourneySection />
      
      <FooterSection />
    </div>
  );
};

export default CloudSolutionsPage;
