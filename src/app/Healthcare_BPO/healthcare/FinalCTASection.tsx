import React from 'react';

const FinalCTASection = () => (
  <section className="py-28 px-4 bg-[#0a2540] flex flex-col items-center justify-center relative overflow-hidden">
    {/* Animated Shapes */}
    {/* Multiple Animated Stars */}
    <svg className="absolute left-8 top-8 w-8 h-8 animate-star z-0" style={{ filter: 'blur(2px)' }} viewBox="0 0 64 64" fill="none">
      <polygon points="32,4 39,24 60,24 42,38 48,58 32,46 16,58 22,38 4,24 25,24" fill="#18C7FF"/>
    </svg>
    <svg className="absolute left-1/4 top-20 w-6 h-6 animate-star2 z-0" style={{ filter: 'blur(2px)' }} viewBox="0 0 64 64" fill="none">
      <polygon points="32,4 39,24 60,24 42,38 48,58 32,46 16,58 22,38 4,24 25,24" fill="#18C7FF"/>
    </svg>
    {/* Multiple Animated Circles */}
    <div className="absolute right-10 bottom-12 w-10 h-10 rounded-full bg-teal-400 opacity-60 animate-circle z-0" style={{ filter: 'blur(2px)' }}></div>
    <div className="absolute right-1/3 top-16 w-8 h-8 rounded-full bg-teal-300 opacity-60 animate-circle2 z-0" style={{ filter: 'blur(2px)' }}></div>
    {/* Multiple Animated Hexagons */}
    <svg className="absolute left-1/2 bottom-10 w-8 h-8 animate-hexagon z-0" style={{ filter: 'blur(2px)' }} viewBox="0 0 100 100">
      <polygon points="50,10 90,27 90,73 50,90 10,73 10,27" fill="#fff176"/>
    </svg>
    <svg className="absolute left-3/4 top-24 w-6 h-6 animate-hexagon2 z-0" style={{ filter: 'blur(2px)' }} viewBox="0 0 100 100">
      <polygon points="50,10 90,27 90,73 50,90 10,73 10,27" fill="#fff176"/>
    </svg>
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Ready to transform your healthcare operations?</h2>
    <div className="flex gap-4 mb-4">
      <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-full shadow transition-colors duration-300">Get a Free Consultation</button>
      <button className="bg-white hover:bg-teal-50 text-teal-700 font-bold px-6 py-3 rounded-full shadow border border-teal-500 transition-colors duration-300">Request a Quote</button>
    </div>
  </section>
);

export default FinalCTASection;

<style jsx global>{`
  /* Star 1 */
  @keyframes star-float-rotate {
    0% { transform: translateY(0px) rotate(0deg); }
    30% { transform: translateY(-8px) rotate(8deg); }
    50% { transform: translateY(-12px) rotate(0deg); }
    70% { transform: translateY(-8px) rotate(-8deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  .animate-star {
    animation: star-float-rotate 6s ease-in-out infinite;
    opacity: 0.7;
  }
  /* Star 2 */
  @keyframes star2-float-rotate {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(-12deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  .animate-star2 {
    animation: star2-float-rotate 4.5s ease-in-out infinite;
    opacity: 0.7;
  }
  /* Circle 1 */
  @keyframes circle-float-scale {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-12px) scale(1.10); }
  }
  .animate-circle {
    animation: circle-float-scale 4s ease-in-out infinite;
    opacity: 0.6;
  }
  /* Circle 2 */
  @keyframes circle2-float-scale {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-8px) scale(1.12); }
  }
  .animate-circle2 {
    animation: circle2-float-scale 3.2s ease-in-out infinite;
    opacity: 0.6;
  }
  /* Hexagon 1 */
  @keyframes hexagon-spin-float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
    100% { transform: translateY(0px) rotate(360deg); }
  }
  .animate-hexagon {
    animation: hexagon-spin-float 10s linear infinite;
    opacity: 0.5;
  }
  /* Hexagon 2 */
  @keyframes hexagon2-spin-float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-6px) rotate(-180deg); }
    100% { transform: translateY(0px) rotate(-360deg); }
  }
  .animate-hexagon2 {
    animation: hexagon2-spin-float 6s linear infinite;
    opacity: 0.5;
  }
`}</style>