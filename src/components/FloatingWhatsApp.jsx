import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const phoneNumber = "917018666302";
    const text = "Hi Bir Billing Tea Factory, I have a question about your products!";
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="z-[3000] cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-[#25D366] blur-[20px] opacity-40 group-hover:opacity-100 transition-opacity rounded-full"></div>
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl border border-white/20">
          <MessageCircle size={32} />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-black text-[10px] uppercase tracking-widest font-black rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 shadow-2xl">
          Chat with us
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingWhatsApp;
