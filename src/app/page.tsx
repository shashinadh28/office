"use client";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import Hero4 from "@/components/hero4";
import dynamic from 'next/dynamic';

const Hero5 = dynamic(() => import('@/components/hero5'), {
  loading: () => <p>Loading map section...</p>,
  ssr: false
});
import Hero6 from "@/components/hero6";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <ScrollAnimationWrapper animation="fadeIn" duration={0.8}>
        <Hero2 />
      </ScrollAnimationWrapper>

      <Hero3 />


      {/* <ScrollAnimationWrapper animation="fadeIn" duration={0.8}>
        <Hero6 />
      </ScrollAnimationWrapper> */}

      <ScrollAnimationWrapper animation="fadeIn" duration={0.8}>
        <Hero4 />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fadeIn" duration={0.8}>
        <Hero5 />
      </ScrollAnimationWrapper>



      <FooterSection />
    </div>
  );
}
