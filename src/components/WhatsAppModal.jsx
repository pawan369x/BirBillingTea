import React, { useState, useEffect } from 'react';
import { X, Check, Leaf, MessageCircle, Package, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppModal = ({ productName, variants, initialVariant, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState(initialVariant || variants[0]);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = selectedVariant.price * quantity;

  const sendWhatsAppOrder = () => {
    const phoneNumber = "917018666302";
    const text = `Hello Bir Billing Tea Factory!\n\nI would like to order:\n*Product:* ${productName}\n*Pack Size:* ${selectedVariant.weight}\n*Quantity:* ${quantity} pack(s)\n*Total Price:* ₹${totalPrice}\n\nPlease confirm my order.`;
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[2000] flex justify-center items-center p-4 sm:p-5">
      {/* Animated Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-[450px] bg-[#0c0c0c] border border-white/10 p-10 rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,1)] text-white overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[#25D366]/5 blur-[100px] rounded-full pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 hover:rotate-90 transition-all duration-500 z-[2100]"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="relative z-10 mb-10 text-center">
          <div className="w-20 h-20 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 mx-auto shadow-[0_0_40px_rgba(212,175,55,0.1)]">
            <Leaf className="text-accent" size={32} />
          </div>
          <h3 className="text-3xl font-heading uppercase tracking-tighter mb-2">{productName}</h3>
          <p className="text-white/30 text-[10px] uppercase tracking-[4px] font-bold">Premium Himalayan Harvest</p>
        </div>

        {/* Size Selection */}
        <div className="relative z-10 mb-10">
          <p className="text-[10px] uppercase tracking-[4px] text-white/30 font-black mb-6 flex items-center gap-4">
            <Package size={12} className="text-accent" /> Available Sizes
          </p>
          <div className="grid grid-cols-2 gap-4">
            {variants.map((v) => (
              <button
                key={v.weight}
                onClick={() => setSelectedVariant(v)}
                className={`group relative p-6 rounded-3xl border transition-all duration-500 text-left overflow-hidden ${
                  selectedVariant.weight === v.weight 
                    ? 'bg-accent border-accent text-black' 
                    : 'bg-white/5 border-white/10 text-white hover:border-white/30'
                }`}
              >
                {selectedVariant.weight === v.weight && (
                  <motion.div 
                    layoutId="activeSize"
                    className="absolute inset-0 bg-accent z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10">
                  <div className={`text-[10px] uppercase tracking-widest font-black mb-2 ${selectedVariant.weight === v.weight ? 'text-black/50' : 'text-accent'}`}>Weight</div>
                  <div className="text-2xl font-heading tracking-tighter mb-4">{v.weight}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black tracking-widest">₹{v.price}</span>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${selectedVariant.weight === v.weight ? 'bg-black text-accent border-black' : 'border-white/20'}`}>
                      {selectedVariant.weight === v.weight ? <Check size={14} strokeWidth={4} /> : <div className="w-1 h-1 rounded-full bg-white/20" />}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="relative z-10 mb-12 p-6 rounded-[30px] bg-white/5 border border-white/10 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Number of Packs</p>
            <div className="text-2xl font-heading tracking-tighter">{quantity} <span className="text-xs opacity-30 italic">Units</span></div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 active:scale-90 transition-all"
            >
              -
            </button>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 active:scale-90 transition-all"
            >
              +
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="relative z-10 flex items-end justify-between mb-10 px-2">
          <div>
            <p className="text-[10px] uppercase tracking-[4px] text-accent font-black mb-2">Total Amount</p>
            <div className="text-5xl font-heading tracking-tighter">₹{totalPrice}</div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Delivery</p>
            <p className="text-xs font-bold text-[#25D366] flex items-center gap-2 justify-end">
              Ready to Ship <ArrowRight size={14} />
            </p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={sendWhatsAppOrder}
          className="w-full relative group overflow-hidden rounded-[24px] z-10"
        >
          <div className="absolute inset-0 bg-[#25D366] transition-transform duration-500 group-hover:scale-110" />
          <div className="relative flex items-center justify-center gap-4 py-6 text-black font-black uppercase text-xs tracking-[5px]">
            <MessageCircle size={24} className="fill-black" />
            Order on WhatsApp
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WhatsAppModal;
