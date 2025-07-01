'use client';

import React, { CSSProperties, useMemo } from 'react';
import { getOptimizedImage } from '@/utils/imageUtils';
import LazyLoad from './LazyLoad';

interface ResponsiveBackgroundProps {
  /**
   * Base image path (without extension)
   * Example: '/images/hero-bg' (will look for /optimized/images/hero-bg-{width}w.{format})
   */
  imagePath: string;
  
  /**
   * Alt text for the image (required for accessibility)
   */
  alt: string;
  
  /**
   * Class name for the container element
   */
  className?: string;
  
  /**
   * Inline styles for the container element
   */
  style?: CSSProperties;
  
  /**
   * Additional class name for the image element
   */
  imageClassName?: string;
  
  /**
   * Whether to enable lazy loading (default: true)
   */
  lazyLoad?: boolean;
  
  /**
   * Whether to show a loading placeholder (default: true)
   */
  showPlaceholder?: boolean;
  
  /**
   * Custom placeholder element
   */
  placeholder?: React.ReactNode;
  
  /**
   * Image formats to use (default: ['webp', 'jpg'])
   */
  formats?: Array<'webp' | 'jpg' | 'png' | 'avif'>;
  
  /**
   * Widths to generate for srcset (default: [400, 800, 1200, 1600, 2000])
   */
  widths?: number[];
  
  /**
   * Sizes attribute for the image (default: '100vw')
   */
  sizes?: string;
  
  /**
   * Whether the image is decorative (default: false)
   * If true, the alt text will be an empty string for screen readers
   */
  decorative?: boolean;
  
  /**
   * Object position for the background image (default: 'center')
   */
  objectPosition?: string;
}

/**
 * A responsive background image component that handles:
 * - Multiple image formats (WebP, AVIF fallback)
 - Lazy loading with IntersectionObserver
 - Responsive images with srcset
 - Proper aspect ratio
 - Accessibility
 */
const ResponsiveBackground: React.FC<ResponsiveBackgroundProps> = ({
  imagePath,
  alt,
  className = '',
  style = {},
  imageClassName = '',
  lazyLoad = true,
  showPlaceholder = true,
  placeholder,
  formats = ['webp', 'jpg'],
  widths = [400, 800, 1200, 1600, 2000],
  sizes = '100vw',
  decorative = false,
  objectPosition = 'center',
  ...props
}) => {
  // Generate optimized image sources
  const { srcSets, src, srcSet } = useMemo(
    () => getOptimizedImage(imagePath, formats, widths),
    [imagePath, formats, widths]
  );

  // Container styles
  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    ...style,
  };

  // Image styles
  const imgStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition,
  };

  // Create picture sources for different formats
  const pictureSources = srcSets.map(({ type, srcSet }, index) => (
    <source
      key={`${type}-${index}`}
      type={type}
      srcSet={srcSet}
      sizes={sizes}
    />
  ));

  // The actual image element
  const imageElement = (
    <picture>
      {pictureSources}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={decorative ? '' : alt}
        className={`responsive-bg-image ${imageClassName}`}
        style={imgStyle}
        loading={lazyLoad ? 'lazy' : 'eager'}
        decoding="async"
        {...props}
      />
    </picture>
  );

  // Loading placeholder
  const loadingPlaceholder = placeholder || (
    <div 
      className="absolute inset-0 bg-gray-200 animate-pulse"
      aria-hidden="true"
    />
  );

  // If lazy loading is disabled or it's a critical image
  if (!lazyLoad) {
    return (
      <div 
        className={`responsive-bg-container ${className}`}
        style={containerStyle}
      >
        {imageElement}
      </div>
    );
  }

  // With lazy loading
  return (
    <div 
      className={`responsive-bg-container ${className}`}
      style={containerStyle}
    >
      <LazyLoad
        threshold={0.1}
        rootMargin="200px"
        once={true}
        fadeIn={true}
        placeholder={showPlaceholder ? loadingPlaceholder : null}
      >
        {imageElement}
      </LazyLoad>
    </div>
  );
};

export default ResponsiveBackground;
