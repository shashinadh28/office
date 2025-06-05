'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ServiceCardItem {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export const ServiceCardGrid = ({
  items,
  className,
}: {
  items: ServiceCardItem[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {items.map((item, i) => (
        <ServiceCard key={i} {...item} />
      ))}
    </div>
  );
};

export const ServiceCard = ({
  icon,
  title,
  description,
  color,
}: ServiceCardItem) => {
  return (
    <div className="relative group h-full">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 shadow-sm group-hover:shadow-lg transition-all duration-300 flex flex-col h-full"
        style={{ 
          clipPath: 'polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)',
          borderRadius: '0 0.75rem 0.75rem 0.75rem'
        }}
      >
        {/* Top colored background with gradient overlay */}
        <div className="relative w-full h-32 overflow-hidden">
          <div 
            className={`absolute inset-0 ${color || 'bg-gradient-to-br from-indigo-600 to-blue-700'} z-[1]`}
          ></div>
          <div 
            className="absolute inset-0 z-[2]"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(1, 22, 90, 0.3) 50%)'
            }}
          ></div>
        </div>
        
        {/* Icon Container - overlapping image and content */}
        <div className="relative mx-auto -mt-10 z-10">
          <div className="bg-white dark:bg-gray-700 rounded-full p-4 shadow-lg border-2 border-indigo-100 dark:border-indigo-900 w-20 h-20 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-800">
            <div className="text-indigo-600 dark:text-indigo-300 text-3xl">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex-grow flex flex-col relative">
          {/* Bottom accent line that animates on hover */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};
