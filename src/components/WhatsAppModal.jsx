import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Leaf, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppModal = ({ productName, price, onClose }) => {
  const [qtyGrams, setQtyGrams] = useState(100);
  const [amount, setAmount] = useState(price / 10);

  useEffect(() => {
    setAmount((price / 1000) * qtyGrams);
  }, [qtyGrams, price]);

  const updateQty = (change) => {
    let newQty = qtyGrams + change;
    if (newQty < 100) newQty = 100;
    if (newQty > 50000) newQty = 50000;
    setQtyGrams(newQty);
  };

  const sendWhatsAppOrder = () => {
    const phoneNumber = "917018666302";
    let displayQty = qtyGrams >= 1000 && qtyGrams % 1000 === 0
      ? (qtyGrams / 1000) + ' kg'
      : qtyGrams + ' gm';

    const text = `Hello Bir Tea Coop!\n\nI would like to order:\n*Product:* ${productName}\n*Quantity:* ${displayQty}\n*Total:* ₹${amount}\n\nPlease let me know the payment and delivery details.`;
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
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
        style={{ pointerEvents: 'auto', touchAction: 'none' }}
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-[420px] bg-[#111315]/90 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)] text-white overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute top-[40%] right-[-20%] w-[60%] h-[60%] bg-[#25D366]/10 blur-[80px] rounded-full pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:rotate-90 transition-all duration-300 z-[2100]"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Header content */}
        <div className="flex flex-col items-center mb-8 relative z-10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.1, damping: 15 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(196,164,132,0.15)] content-center"
          >
            <Leaf className="text-accent" size={28} />
          </motion.div>
          <h3 className="font-heading text-3xl font-bold tracking-tight text-center mb-3 leading-tight text-white/90">{productName}</h3>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-body text-gray-300 shadow-inner">
            <span>₹<strong className="text-accent font-semibold text-base">{price}</strong> / kg</span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="bg-black/40 border border-white/5 rounded-[1.5rem] p-5 mb-6 relative z-10 shadow-inner">
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-4">Select Quantity</p>
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => updateQty(-100)}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all flex justify-center items-center shadow-sm"
            >
              <Minus size={20} />
            </button>
            <div className="flex-1 flex flex-col items-center justify-center">
              <motion.div 
                key={qtyGrams}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading text-4xl font-bold text-white tracking-tight flex items-baseline gap-1"
              >
                {qtyGrams >= 1000 && qtyGrams % 1000 === 0 ? qtyGrams / 1000 : qtyGrams}
                <span className="text-gray-400 text-lg font-body font-normal">
                  {qtyGrams >= 1000 && qtyGrams % 1000 === 0 ? 'kg' : 'gm'}
                </span>
              </motion.div>
            </div>
            <button
              onClick={() => updateQty(100)}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all flex justify-center items-center shadow-sm"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex justify-between items-end mb-8 px-2 relative z-10">
          <span className="text-gray-400 font-body text-sm font-medium">Total Amount</span>
          <div className="text-right flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">INR</span>
            <motion.span 
              key={amount}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-heading text-4xl font-bold text-accent drop-shadow-[0_0_15px_rgba(196,164,132,0.3)]"
            >
              ₹{amount.toLocaleString('en-IN')}
            </motion.span>
          </div>
        </div>

        {/* Order Button */}
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={sendWhatsAppOrder}
          className="w-full relative group overflow-hidden rounded-xl p-[1px] z-10"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] rounded-xl opacity-80 group-hover:opacity-100 transition-opacity blur-sm" />
          <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-xl py-4 px-6 text-white font-semibold text-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all">
            <MessageCircle size={22} className="fill-white/20" />
            <span className="tracking-wide">Order via WhatsApp</span>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WhatsAppModal;
