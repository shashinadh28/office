"use client";
import { cn } from "@/lib/utils";
import {
  IconHelp,
  IconHome,
  IconInfoCircle,
  IconMessage,
  IconStar,
  IconUser,
} from "@tabler/icons-react";
import { Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "./logo";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Services",
    link: "/#services-section",
    icon: <IconStar className="h-4 w-4 text-neutral-500 dark:text-white" />,
    hasDropdown: true,
    dropdownItems: [
      { name: "IT Outsourcing", link: "/IT_Outsourcing" },
      { name: "Healthcare BPO", link: "/Healthcare_BPO" },
      { name: "US Taxation", link: "/US_Taxation" },
      { name: "Cloud Solutions", link: "/cloud-solutions" },
      { name: "SaaS Experts", link: "/Saas_Experts" },
      { name: "AI Solutions", link: "/AI_Solutions" },
      { name: "Virtual Assistant", link: "/virtual-assistant" },
    ],
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Why Us",
    link: "/why-us",
    icon: <IconHelp className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Why India?",
    link: "/why-india",
    icon: (
      <IconInfoCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const Navbar = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Use useRef to persist timer across renders
  const scrollTimer = React.useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    try {
      if (typeof current === "number") {
        const prev = scrollYProgress.getPrevious() ?? 0;
        const direction = current - prev;

        // Only proceed if there's actual movement
        if (Math.abs(direction) < 0.001) return;

        // Set scrolling state
        setIsScrolling(true);

        // Clear existing timer
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current);
        }

        // Hide navbar while scrolling
        if (scrollYProgress.get() < 0.05) {
          setVisible(false);
        } else {
          // Only show when scrolling up significantly
          if (direction < -0.005) {
            setVisible(true);
          } else if (direction > 0.003) {
            setVisible(false);
          }
        }

        // Set timer to show navbar when scrolling completely stops
        scrollTimer.current = setTimeout(() => {
          setIsScrolling(false);
          if (scrollYProgress.get() >= 0.05) {
            setVisible(true);
          }
        }, 500); // Increased to 500ms for complete stop detection
      }
    } catch (error) {
      console.warn("Error in navbar scroll handler:", error);
    }
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={cn(
            "flex max-w-fit fixed top-6 md:top-10 inset-x-0 mx-auto border-2 border-black rounded-full bg-white/80 backdrop-blur-md shadow-lg z-[5000] px-6 md:px-10 py-3 md:py-4 items-center justify-between",
            className
          )}
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center mr-2 p-2 rounded-full hover:bg-black/10"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-gray-800" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-center space-x-2">
            {navItems.map((navItem, idx) => (
              <div key={`nav-item=${idx}`} className="relative">
                {navItem.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={navItem.link}
                      className={cn(
                        "relative items-center flex space-x-1 text-gray-800 hover:text-black font-medium transition-all duration-200 group px-3 py-1 rounded-full hover:bg-black/5"
                      )}
                    >
                      <span className="text-sm md:text-base font-medium">
                        {navItem.name}
                      </span>
                      <svg
                        className="w-4 h-4 ml-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        >
                          {navItem.dropdownItems?.map(
                            (dropdownItem, dropdownIdx) => (
                              <Link
                                key={`dropdown-${dropdownIdx}`}
                                href={dropdownItem.link}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                              >
                                {dropdownItem.name}
                              </Link>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={navItem.link}
                    className={cn(
                      "relative items-center flex space-x-1 text-gray-800 hover:text-black font-medium transition-all duration-200 group px-3 py-1 rounded-full hover:bg-black/5"
                    )}
                  >
                    <span className="text-sm md:text-base font-medium">
                      {navItem.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile navigation (icon only) */}
          <div className="flex md:hidden items-center justify-center space-x-4">
            {navItems.slice(0, 3).map((navItem, idx) => (
              <Link
                key={`mobile-link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center text-gray-700 hover:text-teal-600 transition-all duration-200"
                )}
              >
                {navItem.icon}
              </Link>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[5001]"
              onClick={toggleMobileMenu}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 left-0 bottom-0 w-[250px] bg-gradient-to-b from-white/95 to-white/98 backdrop-blur-md z-[5002] p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-8">
                <Logo className="h-8" />
                <button onClick={toggleMobileMenu} className="p-1">
                  <X className="h-5 w-5 text-gray-700" />
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                {navItems.map((navItem, idx) => (
                  <div key={`mobile-nav-${idx}`}>
                    <Link
                      href={navItem.link}
                      onClick={toggleMobileMenu}
                      className="flex items-center space-x-3 text-gray-700 hover:text-teal-600 font-medium transition-all duration-200"
                    >
                      <span className="text-teal-500">{navItem.icon}</span>
                      <span>{navItem.name}</span>
                    </Link>

                    {/* Mobile dropdown items */}
                    {navItem.hasDropdown && navItem.dropdownItems && (
                      <div className="ml-7 mt-2 space-y-2">
                        {navItem.dropdownItems.map(
                          (dropdownItem, dropdownIdx) => (
                            <Link
                              key={`mobile-dropdown-${dropdownIdx}`}
                              href={dropdownItem.link}
                              onClick={toggleMobileMenu}
                              className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 py-1"
                            >
                              {dropdownItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
