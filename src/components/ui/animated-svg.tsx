import { motion, Transition } from 'framer-motion';

interface AnimatedSVGProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

const getShapeSpecificAnimation = (src: string, position: string, delay: number = 0) => {
  // Thunder animation - Smooth slide from left
  if (src.includes('thunder')) {
    return {
      initial: {
        opacity: 0,
        x: -200,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'tween',
          duration: 0.7,
          ease: [0.4, 0, 0.2, 1],
          delay: delay,
        },
      }
    };
  }

  // Hexagon - Smooth entrance with gentle rotation
  if (src.includes('hexagon')) {
    return {
      initial: {
        opacity: 0,
        x: 100,
        rotate: 15,
      },
      animate: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
          type: 'tween',
          duration: 0.7,
          ease: [0.4, 0, 0.2, 1],
          delay: delay,
        },
      },
      whileHover: {
        rotate: [0, -2, 2, -2, 0],
        scale: 1.02,
        transition: {
          duration: 0.25,
          ease: 'easeInOut',
          repeat: 1,
          repeatType: 'reverse' as const,
        },
      },
    };
  }

  // Triangle - Smooth slide up
  if (src.includes('traingle')) {
    return {
      initial: {
        opacity: 0,
        y: 50,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'tween',
          duration: 0.7,
          ease: [0.4, 0, 0.2, 1],
          delay: delay,
        },
      },
      whileHover: {
        y: -5,
        transition: {
          duration: 0.25,
          ease: 'easeInOut',
        },
      },
    };
  }

  // SVG 1 - Smooth slide from left
  if (src.includes('1.svg')) {
    return {
      initial: {
        opacity: 0,
        x: -50,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'tween',
          duration: 0.7,
          ease: [0.4, 0, 0.2, 1],
          delay: delay,
        },
      },
      whileHover: {
        x: 5,
        transition: {
          duration: 0.25,
          ease: 'easeInOut',
        },
      },
    };
  }

  // SVG 2 - Smooth slide from right
  if (src.includes('2.svg')) {
    return {
      initial: {
        opacity: 0,
        x: 50,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'tween',
          duration: 0.7,
          ease: [0.4, 0, 0.2, 1],
          delay: delay,
        },
      },
      whileHover: {
        x: -5,
        transition: {
          duration: 0.25,
          ease: 'easeInOut',
        },
      },
    };
  }

  // Default animation for other shapes
  return {
    initial: {
      opacity: 0,
      x: position === 'left' ? -30 : position === 'right' ? 30 : 0,
      y: position === 'top' ? -30 : position === 'bottom' ? 30 : 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
        delay: delay,
      },
    },
    whileHover: {
      scale: 1.02,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  };
};

const AnimatedSVG = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  position,
  delay = 0
}: AnimatedSVGProps) => {
  const animations = getShapeSpecificAnimation(src, position, delay);

  return (
    <motion.div 
      initial={animations.initial}
      animate={animations.animate}
      whileHover={animations.whileHover}
      className={className}
    >
      <img 
        src={src} 
        alt={alt}
        width={width}
        height={height}
      />
    </motion.div>
  );
};

export default AnimatedSVG;
