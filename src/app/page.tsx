"use client";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import Hero4 from "@/components/hero4";
import dynamic from 'next/dynamic';

const Hero5 = dynamic(() => import('@/components/hero5'), {
  loading: () => <div className="h-40 bg-gray-100 animate-pulse rounded"></div>,
  ssr: false
});
import Hero6 from "@/components/hero6";
import ClientStories from "@/components/ClientStories";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import HiringProcess from "@/components/HiringProcess";

export default function Home() {
  return (
    <div>
      <ScrollAnimationWrapper animation="fadeIn" duration={0.8}>
        <HeroSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="slideUp" duration={0.8}>
        <Hero2 />
      </ScrollAnimationWrapper>

      <Hero3 />

      <ScrollAnimationWrapper animation="slideUp" duration={0.8}>
        <HiringProcess /> 
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fadeIn" duration={0.8}>
        <Hero5 />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="slideUp" duration={0.8}>
        <ClientStories />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fadeIn" duration={0.8}>
        <FooterSection />
      </ScrollAnimationWrapper>
    </div>
  );
}
