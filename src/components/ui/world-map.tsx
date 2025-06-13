"use client";

import { useRef, useState, useEffect } from "react";
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
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme } = useTheme();

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-50px 0px -50px 0px", // Add some margin for better timing
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isInView]);

  const svgMap = map.getSVG({
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

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div ref={containerRef} className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg  relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: isInView ? 1 : 0,
                }}
                transition={{
                  duration: 1,
                  delay: isInView ? 0.5 * i : 0,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="india-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff9933" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#138808" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const path = createCurvedPath(startPoint, endPoint);
          
          // Calculate arrow position (75% along the path)
          const pathLength = 200; // Approximate path length
          const arrowPosition = pathLength * 0.75;
          
          return (
            <g key={`points-group-${i}`}>
              {/* Start Point - Country Marker */}
              <g key={`start-${i}`}>
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="3"
                  fill={lineColor}
                  stroke="white"
                  strokeWidth="1"
                />
                {isInView && (
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="3"
                    fill={lineColor}
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      from="3"
                      to="10"
                      dur="2s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="2s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>

              {/* Animated Arrow along the path - Only animate when in view */}
              {isInView && (
                <g key={`arrow-${i}`}>
                  <defs>
                    <path id={`arrow-path-${i}`} d={path} />
                  </defs>
                  <motion.path
                    d="M-6,-3 L6,0 L-6,3 L-2,0 Z"
                    fill={lineColor}
                  >
                    <animateMotion
                      dur={`${3 + i * 0.3}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                      begin={`${i * 0.3}s`}
                    >
                      <mpath href={`#arrow-path-${i}`} />
                    </animateMotion>
                  </motion.path>
                </g>
              )}

              {/* India - Bullseye Target */}
              <g key={`india-bullseye-${i}`}>
                {/* Outer rings - Only animate when in view */}
                {isInView && (
                  <>
                    <circle
                      cx={endPoint.x}
                      cy={endPoint.y}
                      r="12"
                      fill="none"
                      stroke="#ff6b35"
                      strokeWidth="2"
                      opacity="0.8"
                    >
                      <animate
                        attributeName="r"
                        from="8"
                        to="20"
                        dur="2s"
                        begin="0s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.8"
                        to="0"
                        dur="2s"
                        begin="0s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    <circle
                      cx={endPoint.x}
                      cy={endPoint.y}
                      r="8"
                      fill="none"
                      stroke="#ff6b35"
                      strokeWidth="2"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="r"
                        from="6"
                        to="16"
                        dur="2s"
                        begin="0.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.6"
                        to="0"
                        dur="2s"
                        begin="0.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </>
                )}

                {/* Center bullseye - Always visible */}
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="6"
                  fill="#ff6b35"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="3"
                  fill="white"
                />
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="1.5"
                  fill="#ff6b35"
                />

                {/* India Flag Colors Ring - Always visible */}
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="8"
                  fill="none"
                  stroke="url(#india-gradient)"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
              </g>
            </g>
          );
        })}

        
      </svg>
    </div>
  );
}
