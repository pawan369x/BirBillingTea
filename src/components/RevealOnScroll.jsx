import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const variants = {
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
};

const RevealOnScroll = ({ children, direction = 'up', delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px", amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      variants={variants[direction]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
      style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
