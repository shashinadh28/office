"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { theme } = useTheme();

  // Memoize expensive operations to prevent re-computation on every render
  const { svgMap, projectedDots } = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    const svgMapData = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

    const projectedDotsData = dots.map(dot => ({
      start: projectPoint(dot.start.lat, dot.start.lng),
      end: projectPoint(dot.end.lat, dot.end.lng),
    }));

    return { svgMap: svgMapData, projectedDots: projectedDotsData };
  }, [dots, theme]);

  // Optimized intersection observer - no timeout delay
  useEffect(() => {
    const currentContainer = containerRef.current;
    
    if (!currentContainer) return;
    
    let observer: IntersectionObserver | null = null;
    
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          try {
            if (entry.isIntersecting) {
              setIsInView(true);
              // Disconnect after first intersection for better performance
              if (observer) {
                observer.disconnect();
              }
            }
          } catch (error) {
            console.warn('Intersection observer callback error:', error);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );

      observer.observe(currentContainer);
    } catch (error) {
      console.warn('Failed to create intersection observer:', error);
      // Fallback: just show the animation immediately
      setIsInView(true);
    }

    return () => {
      if (observer) {
        try {
          observer.disconnect();
        } catch (error) {
          console.warn('Failed to disconnect observer:', error);
        }
      }
    };
  }, []);

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div ref={containerRef} className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
        loading="eager"
      />
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="10%" stopColor={lineColor} />
            <stop offset="90%" stopColor={lineColor} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {projectedDots.map((dot, i) => {
          const pathData = createCurvedPath(dot.start, dot.end);
          return (
            <g key={`connection-${i}`}>
              {/* Animated path */}
              <motion.path
                d={pathData}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { 
                  pathLength: 1, 
                  opacity: 1 
                } : {}}
                transition={{
                  duration: 1.2,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
              />

              {/* Start point */}
              <motion.circle
                cx={dot.start.x}
                cy={dot.start.y}
                r="4"
                fill={lineColor}
                stroke="white"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { 
                  scale: 1, 
                  opacity: 1 
                } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
              />

              {/* End point (India) with pulsing effect */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { 
                  scale: 1, 
                  opacity: 1 
                } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1 + 0.5,
                }}
              >
                <circle
                  cx={dot.end.x}
                  cy={dot.end.y}
                  r="6"
                  fill="#ff6b35"
                  stroke="white"
                  strokeWidth="2"
                />
                {isInView && (
                  <circle
                    cx={dot.end.x}
                    cy={dot.end.y}
                    r="6"
                    fill="none"
                    stroke="#ff6b35"
                    strokeWidth="2"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      values="6;15;6"
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${i * 0.3}s`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${i * 0.3}s`}
                    />
                  </circle>
                )}
              </motion.g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
