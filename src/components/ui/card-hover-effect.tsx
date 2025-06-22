import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link"; // Added Link import, though not used in the provided Card, it's good practice if links are intended.
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    icon?: React.ReactNode; // Made icon optional in case some cards don't have it
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a // Changed from Link to <a> as per original Aceternity code, assuming direct href usage.
          href={item?.link}
          key={item.title} // Using title as key, ensure titles are unique
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#18C7FF]/20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.icon}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl h-full w-full p-6 overflow-hidden bg-white border border-slate-200 group-hover:border-[#18C7FF] shadow-lg relative z-20 flex flex-col items-center text-center", // Matched rounded corners, added flex for centering
        className
      )}
    >
      <div className="relative z-50 w-full">
        <div className="p-0">{children}</div> {/* Removed padding here as it's on the main card div now and children are centered */} 
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-slate-800 font-bold tracking-wide mt-2 text-xl", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-slate-600 tracking-wide leading-relaxed text-base", // Increased top margin, adjusted text color/size
        className
      )}
    >
      {children}
    </p>
  );
};
