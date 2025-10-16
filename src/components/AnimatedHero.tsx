'use client'; // Esta directiva es buena práctica para componentes de React en Astro/Next.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Definimos las props que el componente espera recibir
interface AnimatedHeaderProps {
  text: string;
  className?: string;
  speed?: number;
}

// Exportamos el componente de React como lo harías normalmente
export const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  text,
  className = "",
  speed = 100
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <motion.h2
      className={`gradient-text ${className}`} // En React, se usa className
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-1 h-full bg-black ml-1" // Usamos className
        />
      )}
    </motion.h2>
  );
};
