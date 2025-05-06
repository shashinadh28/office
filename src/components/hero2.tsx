'use client';
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, Variants } from 'motion/react';
import KnowMoreButton from './buttons/know-more';

// Animation variants for different elements
const titleVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth easing
    }
  }
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      delay: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.6
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20, y: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const Hero2 = () => {
  // Refs for scroll-triggered animations
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const subtitleRef = useRef(null);
  const benefitsRef = useRef(null);
  
  // Check if elements are in view
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const paragraphInView = useInView(paragraphRef, { once: true, amount: 0.5 });
  const subtitleInView = useInView(subtitleRef, { once: true, amount: 0.5 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });
  
  // Animation controls
  const titleControls = useAnimation();
  const paragraphControls = useAnimation();
  const subtitleControls = useAnimation();
  const benefitsControls = useAnimation();
  
  // Trigger animations when elements come into view
  useEffect(() => {
    if (titleInView) titleControls.start('visible');
    if (paragraphInView) paragraphControls.start('visible');
    if (subtitleInView) subtitleControls.start('visible');
    if (benefitsInView) benefitsControls.start('visible');
  }, [titleInView, paragraphInView, subtitleInView, benefitsInView, 
      titleControls, paragraphControls, subtitleControls, benefitsControls]);

  return (
    <section className="py-40 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="space-y-8">
        <motion.h1 
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-7xl font-bold"
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
        >
          Why Hire Indian <span className="text-blue-500">Talent</span>
        </motion.h1>
        
        <motion.p 
          ref={paragraphRef}
          className="text-lg max-w-4xl"
          initial="hidden"
          animate={paragraphControls}
          variants={paragraphVariants}
        >
          Businesses today face many challenges, including a shortage of available talent, training resources, expanded coverage and
          more. Gateway Workforce was formed to help solve some of these challenges.
        </motion.p>
        
        <div className="mt-8">
          <motion.h2 
            ref={subtitleRef}
            className="text-3xl font-semibold mb-8"
            initial="hidden"
            animate={subtitleControls}
            variants={subtitleVariants}
          >
            Indian <span className="text-gray-700">Talent Benifits:</span>
          </motion.h2>
          
          <motion.div 
            ref={benefitsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={benefitsControls}
            variants={containerVariants}
          >
            {/* Benefit 1 */}
            <motion.div 
              className="border-l-3 border-blue-800 pl-6 py-2 hover:shadow-lg transition-all duration-300 rounded-r-lg"
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                borderLeftWidth: '6px'
              }}
            >
              <div className="text-blue-500 text-xl font-bold mb-2">01</div>
              <h3 className="text-2xl font-bold mb-2">Global Impact</h3>
              <p className="text-gray-700">
              One job has the power to uplift an entire family, support education, and strengthen local economies
              </p>
            </motion.div>
            
            {/* Benefit 2 */}
            <motion.div 
              className="border-l-3 border-blue-800 pl-6 py-2 hover:shadow-lg transition-all duration-300 rounded-r-lg"
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                borderLeftWidth: '6px'
              }}
            >
              <div className="text-blue-500 text-xl font-bold mb-2">02</div>
              <h3 className="text-2xl font-bold mb-2">Top Skills</h3>
              <p className="text-gray-700">
              Millions of STEM graduates are entering fields like IT, finance, and engineering — driving innovation, shaping the future, and powering the global economy.
              </p>
            </motion.div>
            
            {/* Benefit 3 */}
            <motion.div 
              className="border-l-3 border-blue-800 pl-6 py-2 hover:shadow-lg transition-all duration-300 rounded-r-lg"
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                borderLeftWidth: '6px'
              }}
            >
              <div className="text-blue-500 text-xl font-bold mb-2">03</div>
              <h3 className="text-2xl font-bold mb-2">Cost-Effective</h3>
              <p className="text-gray-700">
              Delivering top-notch quality without compromising on affordability.
              </p>
            </motion.div>
            
            {/* Benefit 4 */}
            <motion.div 
              className="border-l-3 border-blue-800 pl-6 py-2 hover:shadow-lg transition-all duration-300 rounded-r-lg"
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                borderLeftWidth: '6px'
              }}
            >
              <div className="text-blue-500 text-xl font-bold mb-2">03</div>
              <h3 className="text-2xl font-bold mb-2">Driven Professionals</h3>
              <p className="text-gray-700">
              Driven by a strong work ethic, consistently aiming to exceed expectations and deliver excellence.
              </p>
            </motion.div>
            
            {/* Benefit 5 */}
            <motion.div 
              className="border-l-3 border-blue-800 pl-6 py-2 hover:shadow-lg transition-all duration-300 rounded-r-lg"
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                borderLeftWidth: '6px'
              }}
            >
              <div className="text-blue-500 text-xl font-bold mb-2">04</div>
              <h3 className="text-2xl font-bold mb-2">English Fluency</h3>
              <p className="text-gray-700">
              Clear, responsive, and collaborative communication — ensuring nothing gets lost in translation.
              </p>
            </motion.div>
            
            {/* Benefit 6 */}
            <motion.div 
              className="border-l-3 border-blue-800 pl-6 py-2 hover:shadow-lg transition-all duration-300 rounded-r-lg"
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                borderLeftWidth: '6px'
              }}
            >
              <div className="text-blue-500 text-xl font-bold mb-2">05</div>
              <h3 className="text-2xl font-bold mb-2">Agile & Innovative</h3>
              <p className="text-gray-700">
              Agile thinkers and solution-focused teams built to navigate the fast-paced demands of evolving markets.
              </p>
            </motion.div>
            
            {/* Benefit 7 */}
            <motion.div 
              className="border-l-3 border-blue-800 pl-6 py-2 hover:shadow-lg transition-all duration-300 rounded-r-lg"
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                borderLeftWidth: '6px'
              }}
            >
              <div className="text-blue-500 text-xl font-bold mb-2">06</div>
              <h3 className="text-2xl font-bold mb-2">Time Zone Sync</h3>
              <p className="text-gray-700">
              Strategic time zone overlaps with US and EU markets enable real-time collaboration and faster turnaround.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <KnowMoreButton/>
      </div>
      
    </section>
  )
}

export default Hero2
