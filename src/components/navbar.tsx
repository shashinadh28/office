'use client'
import Link from 'next/link'
import { Logo } from './logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react'
import { IconHome, IconUser, IconMessage, IconInfoCircle, IconHelp, IconStar } from '@tabler/icons-react'

const navItems = [
  { name: 'Home', link: '/', icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  { name: 'Services', link: '/#services', icon: <IconStar className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  { name: 'Why Us?', link: '/#why-us', icon: <IconHelp className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  { name: 'About', link: '/about', icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  { name: 'Contact', link: '/contact', icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  { name: 'Why India?', link: '/#why-india', icon: <IconInfoCircle className="h-4 w-4 text-neutral-500 dark:text-white" /> },
]

export const Navbar = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const prev = scrollYProgress.getPrevious() ?? 0;
      let direction = current - prev;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
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
          transition={{ duration: 0.2 }}
          className={cn(
            'flex max-w-fit fixed top-6 md:top-10 inset-x-0 mx-auto border border-gray-200 rounded-full bg-white/85 backdrop-blur-md shadow-[0px_2px_15px_-1px_rgba(0,0,0,0.1)] z-[5000] px-4 md:px-8 py-2 md:py-3 items-center justify-between',
            className
          )}
        >
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center mr-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  'relative items-center flex space-x-1 text-gray-700 hover:text-teal-600 font-medium transition-all duration-200 group'
                )}
              >
                <span className="text-sm">
                  {navItem.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-teal-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </span>
              </Link>
            ))}
          </div>
          
          {/* Mobile navigation (icon only) */}
          <div className="flex md:hidden items-center justify-center space-x-4">
            {navItems.slice(0, 3).map((navItem, idx) => (
              <Link
                key={`mobile-link=${idx}`}
                href={navItem.link}
                className={cn(
                  'relative flex items-center text-gray-700 hover:text-teal-600 transition-all duration-200'
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
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed top-0 left-0 bottom-0 w-[250px] bg-white z-[5002] p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-8">
                <Logo className="h-8" />
                <button onClick={toggleMobileMenu} className="p-1">
                  <X className="h-5 w-5 text-gray-700" />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={`mobile-menu-link=${idx}`}
                    href={navItem.link}
                    onClick={toggleMobileMenu}
                    className="flex items-center space-x-3 text-gray-700 hover:text-teal-600 font-medium transition-all duration-200"
                  >
                    <span className="text-teal-500">{navItem.icon}</span>
                    <span>{navItem.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
