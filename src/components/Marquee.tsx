import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
  PanInfo
} from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  baseVelocity?: number; // pixels per second
  className?: string;
  gap?: number; // gap in pixels
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  baseVelocity = 50, 
  className = "",
  gap = 32 // Default 2rem = 32px
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);
  
  // Measure content width
  useEffect(() => {
    if (contentRef.current) {
      // We need the full scroll width of the content including gaps
      // But offsetWidth of a flex container should be enough if it's not constrained
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, [children]);

  useAnimationFrame((t, delta) => {
    if (!isDragging && contentWidth > 0) {
      let moveBy = baseVelocity * (delta / 1000);
      
      // Current x position
      let currentX = x.get();
      
      // Update x
      let newX = currentX - moveBy;
      
      // Calculate the wrap point (width of one set + gap)
      const wrapWidth = contentWidth + gap;
      
      // Wrap logic
      // We want newX to be within [-wrapWidth, 0]
      // Using modulo to wrap smoothly
      // Note: JS modulo of negative numbers behaves differently, so we handle it carefully
      
      if (newX <= -wrapWidth) {
        // If we've scrolled past the first set, reset by adding wrapWidth
        // We use modulo to keep the remainder so it's smooth
        newX = newX % wrapWidth;
        // If newX is exactly -wrapWidth, it becomes 0. 
        // If it's -wrapWidth - 10, it becomes -10.
        // Wait, -110 % 100 = -10. Correct.
      } else if (newX > 0) {
         // If we dragged it to the right (positive), we want to wrap to the left side
         // newX = 10 -> we want it to be -wrapWidth + 10
         newX = -wrapWidth + (newX % wrapWidth);
      }
      
      x.set(newX);
    }
  });

  return (
    <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing">
      <motion.div
        className={`flex items-center ${className}`}
        style={{ x, gap: `${gap}px` }}
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }} // Allow free dragging
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        whileTap={{ cursor: "grabbing" }}
      >
        <div ref={contentRef} className={`flex items-center shrink-0 ${className}`} style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className={`flex items-center shrink-0 ${className}`} style={{ gap: `${gap}px` }}>
          {children}
        </div>
        {/* Add a third copy just in case the screen is very wide or drag is fast */}
        <div className={`flex items-center shrink-0 ${className}`} style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};
