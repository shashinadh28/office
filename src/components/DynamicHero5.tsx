"use client"; // Mark this wrapper as a Client Component

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import Hero5 here with ssr: false
const Hero5 = dynamic(() => import('@/components/hero5'), {
  loading: () => <p>Loading map section...</p>, // Optional: you can customize this
  ssr: false
});

const DynamicHero5 = () => {
  return <Hero5 />;
};

export default DynamicHero5;
