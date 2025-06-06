"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactButton from "./ContactButton";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    // Short delay for smoother blur animation
    setTimeout(() => {
      setIsLoaded(true);

      // Trigger text animation after background elements appear
      setTimeout(() => {
        setTextAnimated(true);
      }, 800);
    }, 100);
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white no-hero-grid">
      {/* Background image with blur and scale animation */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-1500 ease-out ${
          isLoaded
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-110 blur-xl"
        }`}
        style={{
          backgroundImage: "url('/home6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 h-full flex flex-col">
        {/* Logo with fade-blur animation */}
        <div
          className={`absolute top-4 left-4 sm:top-6 sm:left-6 md:top-1 md:left-12 transition-all duration-1000 ease-out ${
            isLoaded
              ? "translate-y-0 opacity-100 blur-0"
              : "-translate-y-10 opacity-0 blur-md"
          }`}
        >
          <Image
            src="/optimized/images/gateway_workforce.webp"
            alt="Gateway Workforce Logo"
            width={80}
            height={1}
            className="h-auto w-[70px] sm:w-[80px] md:w-[100px]"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-center h-full">
          <div className="max-w-3xl overflow-hidden">
            {/* Headline with left-to-right animation */}
            <div className="overflow-hidden mb-4 sm:mb-6 md:mb-8 relative">
              <h1
                className={`font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 transition-all duration-1800 ease-out`}
                style={{
                  transform: textAnimated
                    ? "translateX(0)"
                    : "translateX(-100%)",
                  opacity: textAnimated ? 1 : 0,
                  filter: textAnimated ? "blur(0)" : "blur(4px)",
                }}
              >
                Connecting Global Businesses To India's Educated & Motivated
                Talent
              </h1>
            </div>

            {/* Description with word-by-word reveal effect */}
            <div className="overflow-hidden mb-6 sm:mb-8 md:mb-12">
              <p
                className={`font-montserrat text-base sm:text-lg md:text-xl max-w-2xl transition-all duration-1500 ease-out ${
                  textAnimated
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-20 opacity-0 blur-sm"
                }`}
                style={{
                  transitionDelay: "300ms",
                  clipPath: textAnimated
                    ? "inset(0 0 0 0)"
                    : "inset(0 100% 0 0)",
                }}
              >
                We connect global companies with India's skilled talent,
                enabling business growth and global career opportunities.
              </p>
            </div>

            {/* Contact button with animation */}
            <div
              className={`transition-all duration-800 ${
                textAnimated ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Link href="/contact" passHref>
                <ContactButton />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll down button with fade-in animation */}
        <div
          className={`absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 flex justify-center transition-all duration-800 ${
            textAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <button
            onClick={scrollDown}
            className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1"
          >
            <span className="font-montserrat text-xs sm:text-sm tracking-widest mb-2 sm:mb-3 group-hover:text-teal-500 transition-colors">
              SCROLL DOWN
            </span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-teal-500 transition-colors group-hover:scale-110">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-teal-500 transition-colors animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
