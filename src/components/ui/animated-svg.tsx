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
  // Thunder animation - Enhanced with rotation and floating
  if (src.includes('thunder')) {
    return {
      initial: {
        opacity: 0,
        x: position === 'right' ? 100 : -200,
        y: -50,
        rotate: position === 'right' ? 15 : -15,
        scale: 0.8,
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
          type: 'spring',
          damping: 20,
          stiffness: 100,
          duration: 1.2,
          delay: delay,
        },
      },
      whileHover: {
        rotate: [0, -3, 3, -3, 0],
        scale: 1.05,
        y: -5,
        transition: {
          duration: 0.6,
          ease: 'easeInOut',
        },
      },
      float: {
        y: [0, -10, 0],
        rotate: [0, 2, -2, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    };
  }

  // Hexagon - Enhanced with pulsing and rotation
  if (src.includes('hexagon')) {
    return {
      initial: {
        opacity: 0,
        x: 150,
        rotate: 30,
        scale: 0.6,
      },
      animate: {
        opacity: 1,
        x: 0,
        rotate: 0,
        scale: 1,
        transition: {
          type: 'spring',
          damping: 25,
          stiffness: 120,
          duration: 1.5,
          delay: delay,
        },
      },
      whileHover: {
        rotate: [0, 10, -10, 0],
        scale: 1.08,
        transition: {
          duration: 0.8,
          ease: 'easeInOut',
        },
      },
      float: {
        rotate: [0, 360],
        scale: [1, 1.02, 1],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
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
      <motion.img 
        src={src} 
        alt={alt}
        width={width}
        height={height}
        className="select-none"
        animate={animations.float}
      />
    </motion.div>
  );
};

export default AnimatedSVG;
