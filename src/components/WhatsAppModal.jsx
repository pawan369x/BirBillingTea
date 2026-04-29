import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
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
=======
import { X, Check, Leaf, MessageCircle, Package, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppModal = ({ productName, variants, initialVariant, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState(initialVariant || variants[0]);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = selectedVariant.price * quantity;

  const sendWhatsAppOrder = () => {
    const phoneNumber = "917018666302";
    const text = `Hello Bir Billing Tea Factory!\n\nI would like to order:\n*Product:* ${productName}\n*Pack Size:* ${selectedVariant.weight}\n*Quantity:* ${quantity} pack(s)\n*Total Price:* ₹${totalPrice}\n\nPlease confirm my order.`;
>>>>>>> main
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
<<<<<<< HEAD
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
        style={{ pointerEvents: 'auto', touchAction: 'none' }}
=======
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
>>>>>>> main
      />

      {/* Modal Content */}
      <motion.div 
<<<<<<< HEAD
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
=======
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
>>>>>>> main
            </button>
          </div>
        </div>

<<<<<<< HEAD
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
=======
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
>>>>>>> main
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WhatsAppModal;
