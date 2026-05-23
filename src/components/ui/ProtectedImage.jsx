import React from 'react';
import { motion } from 'framer-motion';

/**
 * ProtectedImage component adds deterrents against copying images.
 * - Disables right-click context menu (onContextMenu)
 * - Disables drag-to-download (draggable="false")
 * - Disables text/image selection (select-none)
 * - Optionally adds a transparent overlay to block DOM element isolation
 * - Optionally adds a branded watermark
 */
export default function ProtectedImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  isMotion = false,
  motionProps = {},
  watermark = false,
  onClick,
  loading,
}) {
  const ImgTag = isMotion ? motion.img : 'img';
  
  return (
    <div 
      className={`relative inline-block ${containerClassName}`}
      onContextMenu={(e) => e.preventDefault()}
      onClick={onClick}
    >
      <ImgTag
        src={src}
        alt={alt}
        className={`select-none pointer-events-none ${className}`}
        draggable="false"
        loading={loading}
        {...motionProps}
      />
      
      {/* Transparent overlay blocks interactions */}
      <div 
        className="absolute inset-0 z-10 pointer-events-auto" 
        onContextMenu={(e) => e.preventDefault()} 
      />
      
      {/* Subtle Watermark */}
      {watermark && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 pointer-events-none opacity-[0.20] text-white font-bold text-lg sm:text-2xl md:text-3xl tracking-[0.4em] uppercase mix-blend-overlay drop-shadow-md">
          ASWANTH KS
        </div>
      )}
    </div>
  );
}
