import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  const outlineX = useSpring(0, { stiffness: 150, damping: 20 });
  const outlineY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 992);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      outlineX.set(e.clientX);
      outlineY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('.magnetic-btn') ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isDesktop, mouseX, mouseY, outlineX, outlineY]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: mouseX,
          translateY: mouseY,
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 border border-accent rounded-full pointer-events-none z-[9999]"
        animate={{
          width: isHovered ? 60 : 40,
          height: isHovered ? 60 : 40,
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.1)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
        style={{
          translateX: outlineX,
          translateY: outlineY,
          x: "-50%",
          y: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;
