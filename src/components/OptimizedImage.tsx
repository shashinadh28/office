'use client';

import React, { useMemo } from 'react';
import Image, { ImageProps as NextImageProps } from 'next/image';
import LazyLoad from './LazyLoad';

export interface OptimizedImageProps extends Omit<NextImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  quality?: number;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  unoptimized?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  lazyLoad?: boolean;
  lazyThreshold?: number;
  lazyRootMargin?: string;
  lazyOnce?: boolean;
  fadeIn?: boolean;
  fadeDelay?: number;
  className?: string;
  imgClassName?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  quality = 75,
  priority = false,
  loading = 'lazy',
  unoptimized = false,
  placeholder = 'blur',
  blurDataURL,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  lazyLoad = true,
  lazyThreshold = 0.1,
  lazyRootMargin = '0px',
  lazyOnce = true,
  fadeIn = true,
  fadeDelay = 0,
  className = '',
  imgClassName = '',
  style = {},
  ...props
}) => {
  // Handle external URLs
  const isExternal = useMemo(() => 
    src.startsWith('http') || src.startsWith('//') || src.startsWith('data:'),
    [src]
  );

  // Generate blur data URL if not provided
  const defaultBlurDataURL = useMemo(() => 
    blurDataURL || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
    [blurDataURL]
  );

  // Process image source
  const imageSrc = useMemo(() => {
    if (isExternal) return src;
    // For Vercel deployment, use original image paths
    // Vercel's image optimization handles the optimization automatically
    return src.startsWith('/') ? src : `/${src}`;
  }, [src, isExternal]);

  // Create the image element
  const imageElement = (
    <Image
      src={imageSrc}
      alt={alt}
      quality={quality}
      priority={priority}
      loading={loading}
      unoptimized={unoptimized || isExternal}
      placeholder={placeholder}
      blurDataURL={placeholder === 'blur' ? defaultBlurDataURL : undefined}
      sizes={sizes}
      className={`optimized-image ${imgClassName}`}
      style={{
        width: '100%',
        height: 'auto',
        ...style,
      }}
      {...props}
    />
  );

  // Apply lazy loading if enabled
  if (lazyLoad && !priority) {
    return (
      <LazyLoad
        threshold={lazyThreshold}
        rootMargin={lazyRootMargin}
        once={lazyOnce}
        fadeIn={fadeIn}
        delay={fadeDelay}
        className={`lazy-image-container ${className}`}
        style={style}
        placeholder={
          <div 
            className={`bg-gray-200 animate-pulse ${className}`}
            style={{
              width: props.width || '100%',
              height: props.height || '100%',
              ...style,
            }}
          />
        }
      >
        {imageElement}
      </LazyLoad>
    );
  }

  return (
    <div className={`optimized-image-container ${className}`} style={style}>
      {imageElement}
    </div>
  );
};

export default OptimizedImage;
