import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import Hero4 from "@/components/hero4";
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
      
      <FooterSection />  
    </div>
  );
}
