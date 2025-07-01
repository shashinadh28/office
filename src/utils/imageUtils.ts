/**
 * Generates optimized image source sets for responsive images
 * @param src - The base image path (without extension)
 * @param formats - Array of image formats to generate (default: ['webp', 'jpg'])
 * @param widths - Array of widths to generate for srcset (default: [400, 800, 1200, 1600, 2000])
 * @returns Object containing srcSet and src attributes for picture/source elements
 */

type ImageFormat = 'webp' | 'jpg' | 'png' | 'avif';

export const getOptimizedImage = (
  src: string,
  formats: ImageFormat[] = ['webp', 'jpg'],
  widths: number[] = [400, 800, 1200, 1600, 2000]
) => {
  // Remove file extension if present
  const basePath = src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
  
  const srcSets = formats.map(format => {
    const srcSet = widths
      .map(width => `/optimized/${basePath}-${width}w.${format} ${width}w`)
      .join(', ');
      
    return {
      type: `image/${format === 'jpg' ? 'jpeg' : format}`,
      srcSet
    };
  });

  // Default src (smallest size)
  const defaultSrc = `/optimized/${basePath}-${widths[0]}w.${formats[0]}`;
  
  return {
    srcSets,
    src: defaultSrc,
    srcSet: srcSets[0].srcSet, // Default srcSet for img element
  };
};

/**
 * Generates a blur data URL for placeholder images
 * @returns Base64 encoded 1x1 transparent PNG
 */
export const getBlurDataURL = (): string => {
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
};

/**
 * Converts a file to base64 data URL
 * @param file - File object
 * @returns Promise that resolves to base64 string
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};
