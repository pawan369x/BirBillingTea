import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CallButton = () => {
  const phoneNumber = "+917018666302";

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="z-[999]"
    >
      <motion.a
        href={`tel:${phoneNumber}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-3 bg-accent text-primary p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-shadow group overflow-hidden relative"
      >
        <div className="relative z-10">
          <Phone size={24} className="fill-primary" />
        </div>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[120px] transition-all duration-500 font-heading font-bold uppercase tracking-wider text-sm relative z-10">
          Call Now
        </span>
        
        {/* Pulsing effect */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-accent rounded-full -z-0"
        />
      </motion.a>
    </motion.div>
  );
};

export default CallButton;
