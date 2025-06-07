"use client";

import React from 'react';
import FooterSection from '@/components/footer'; // Assuming you want the common footer
import HeroCloudSection from './HeroCloudSection';
import WhyChooseCloudSection from './WhyChooseCloudSection';
import CloudServicesSection from './CloudServicesSection';
import CloudCTASection from './CloudCTASection';

const CloudSolutionsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroCloudSection />
      <WhyChooseCloudSection />
      <CloudServicesSection />
      <CloudCTASection />
      
      <FooterSection />
    </div>
  );
};

export default CloudSolutionsPage;
