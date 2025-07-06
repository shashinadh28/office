// thanks to oliver: https://www.youtube.com/@olivierlarose1
'use client';
import { ReactLenis } from 'lenis/react';
import { IBM_Plex_Sans } from 'next/font/google';
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['700'], display: 'swap' });
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { createContext, useContext } from 'react';
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';

// Define Context for scrollYProgress
const ScrollProgressContext = createContext<MotionValue<number> | null>(null);

// Custom hook to use the scroll progress context
const useHeroScrollProgress = () => {
  const context = useContext(ScrollProgressContext);
  if (context === null) {
    throw new Error('useHeroScrollProgress must be used within a ScrollProgressProvider');
  }
  return context;
};

const projects = [
  {
    title: 'IT Outsourcing',
    description: 'Scalable Teams for Web & Mobile Development\nEmpower your digital growth with agile, cross-functional teams tailored to your project needs.\nWe deliver high-quality, scalable solutions that accelerate time-to-market and drive business impact.',
    link: '/optimized/images/outsourcing.webp',
    color: '#5196fd',
  },
  {
    title: 'Healthcare BPO',
    description: 'End-to-End Medical Billing & Telehealth Support\nStreamline your revenue cycle with accurate billing and seamless virtual care services. ',
    link: '/optimized/images/medicall.webp',
    color: '#8f89ff',
  },
  {
    title: 'US Taxation',
    description: 'Accurate Accounting & Compliance for Firms and CPAs\nEnsure financial precision and regulatory adherence with our expert-led services.\nWe help streamline bookkeeping, reporting, and tax workflows for maximum efficiency and peace of mind.',
    link: '/optimized/images/tax.webp',
    color: '#13006c',
  },
  {
    title: 'Cloud Solutions',
    description: 'AWS/Azure Deployment, Migration & Management\nSeamlessly deploy, scale, and manage applications across leading cloud platforms.\nOur experts ensure secure migration, cost optimization, and high availability for your infrastructure.',
    link: '/optimized/images/cloud.webp',
    color: '#ed649e',
  },
  {
    title: 'SaaS Experts',
    description: 'Salesforce, Shopify & HubSpot Integration & Optimization\nUnify your CRM, e-commerce, and marketing platforms for seamless operations.\nWe tailor integrations to boost productivity, enhance customer experience, and drive revenue growth.',
    link: '/optimized/images/saas.webp',
    color: '#fd521a',
  },
  {
    title: 'AI Solutions',
    description: 'Custom LLMs, Automation & Data Intelligence\nBuild tailored AI solutions to streamline workflows and uncover deep insights.\nLeverage the power of automation and large language models to drive smart, data-led decisions.',
    link: '/optimized/images/artificial.webp',
    color: '#00c4a7', // New color for the 6th card
  },
  {
    title: 'Virtual Assistant',
    description: 'Professional Administrative & Operational Support\nDelegate routine tasks and focus on strategic growth.\nOur skilled assistants handle scheduling, research, communication, and project coordination with precision.',
    link: '/optimized/images/virtual-assistance/virtual-assestent-main.webp',
    color: '#9b59b6', // Purple color for Virtual Assistant
  },
];

export default function Hero3() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>
      <ScrollProgressContext.Provider value={scrollYProgress}>
        <main id='services-section' className='bg-[#021533]' ref={container}>
          <>
            <section className='h-[50vh] sm:h-[60vh] md:h-[70vh] w-full grid place-content-center px-4'>
              <h2 className={`${ibmPlexSans.className} text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-center text-white max-w-4xl`}>
               Our  <span className="text-teal-500">Services</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl px-4 text-center max-w-3xl mx-auto leading-relaxed">
                We power global businesses with India's top talent, offering specialized outsourcing solutions across
              </p>
            </section>
          </>
          <section className='text-slate-700 w-full'>
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  title={project?.title}
                  description={project?.description}
                  src={project?.link} // Use project.link for the image source
                  color={project?.color}
                  // progress prop removed
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </section>
        </main>
      </ScrollProgressContext.Provider>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string; // Image URL
  color: string;
  // progress: MotionValue<number>; // Removed from props
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src, // This is the image URL
  color,
  // progress, // Removed from destructuring
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const heroProgress = useHeroScrollProgress(); // Get progress from context
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]); // Reduced scale range for mobile
  const scale = useTransform(heroProgress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0 px-2 sm:px-4 md:px-6'
      style={{ willChange: 'transform' }}
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          willChange: 'transform'
        }}
        className={`text-white flex flex-col relative -top-[25%] 
          h-[550px] sm:h-[580px] md:h-[600px] lg:h-[650px]
          w-[96%] sm:w-[92%] md:w-[87%] lg:w-[82%] 
          rounded-lg md:rounded-xl 
          p-4 sm:p-6 md:p-8 lg:p-10 
          origin-top`}
      >
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold mb-3 sm:mb-4 md:mb-5 leading-tight'>
          {title}
        </h2>
        
        {/* Responsive Layout: Stack on mobile, side-by-side on larger screens */}
        <div className={`flex flex-col lg:flex-row h-full mt-3 sm:mt-4 md:mt-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8`}>
          
          {/* Text Content Section */}
          <div className={`w-full lg:w-[40%] relative lg:top-[5%] order-2 lg:order-1`}>
            <ul className='list-disc pl-4 sm:pl-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl space-y-1 leading-relaxed'>
              {description.split('\n').map((point, index) => (
                <li key={index} className="leading-snug">{point}</li>
              ))}
            </ul>
            
            {/* Call to Action Button */}
            <div className='flex items-center gap-2 pt-3 sm:pt-4 md:pt-6'>
              {title === 'IT Outsourcing' ? (
                <Link href="/IT_Outsourcing" passHref legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#031936] font-bold shadow-md hover:bg-[#18C7FF] hover:text-white transition-colors text-sm sm:text-base md:text-lg mt-2"
                >
                  See more
                </a>
                </Link>
              ) : title === 'Healthcare BPO' ? (
                <Link href="/Healthcare_BPO" passHref legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#031936] font-bold shadow-md hover:bg-[#18C7FF] hover:text-white transition-colors text-sm sm:text-base md:text-lg mt-2"
                >
                  See more
                </a>
                </Link>
              ) : title === 'US Taxation' ? (
                <Link href="/US_Taxation" passHref legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#031936] font-bold shadow-md hover:bg-[#18C7FF] hover:text-white transition-colors text-sm sm:text-base md:text-lg mt-2"
                >
                  See more
                </a>
                </Link>
              ) : title === 'Cloud Solutions' ? (
                <Link href="/cloud-solutions" passHref legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#031936] font-bold shadow-md hover:bg-[#18C7FF] hover:text-white transition-colors text-sm sm:text-base md:text-lg mt-2"
                >
                  See more
                </a>
                </Link>
              ) : title === 'SaaS Experts' ? (
                <Link href="/Saas_Experts" passHref legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#031936] font-bold shadow-md hover:bg-[#18C7FF] hover:text-white transition-colors text-sm sm:text-base md:text-lg mt-2"
                >
                  See more
                </a>
                </Link>
              ) : title === 'AI Solutions' ? (
                <Link href="/AI_Solutions" passHref legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#031936] font-bold shadow-md hover:bg-[#18C7FF] hover:text-white transition-colors text-sm sm:text-base md:text-lg mt-2"
                >
                  Know more
                </a>
                </Link>
              ) : title === 'Virtual Assistant' ? (
                <Link href="/virtual-assistant" passHref legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#031936] font-bold shadow-md hover:bg-[#18C7FF] hover:text-white transition-colors text-sm sm:text-base md:text-lg mt-2"
                >
                  Know more
                </a>
                </Link>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#031936] font-bold shadow-md hover:bg-[#18C7FF] hover:text-white transition-colors text-sm sm:text-base md:text-lg mt-2"
                >
                  Know more
                </button>
              )}
              <svg
                width='16'
                height='10'
                viewBox='0 0 22 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='sm:w-[18px] sm:h-[11px] md:w-[22px] md:h-[12px]'
              >
                <path
                  d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                  fill='currentColor'
                />
              </svg>
            </div>
          </div>

          {/* Image Section */}
          <div className={`relative w-full lg:w-[60%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-full rounded-lg overflow-hidden order-1 lg:order-2`}>
            <motion.div
              className={`relative w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image 
                fill 
                src={src} 
                alt={title || 'Project image'} 
                className='object-cover'
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
