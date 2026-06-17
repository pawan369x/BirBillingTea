import React from 'react';
import { X, ShoppingBag, Trash2, MessageCircle, ArrowRight, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    const phoneNumber = "917018666302";
    let message = "Hello Bir Billing Tea Factory!\n\nI would like to place an order:\n\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Size: ${item.weight}\n`;
      message += `   Qty: ${item.quantity} pack(s)\n`;
      message += `   Price: ₹${item.price * item.quantity}\n\n`;
    });

    message += `*Total Amount:* ₹${cartTotal}\n\nPlease confirm my order. Thank you!`;
    
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[2500]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[450px] bg-[#0c0c0c] border-l border-white/10 z-[2600] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col text-white"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading uppercase tracking-tighter">Your Bag</h3>
                  <p className="text-[10px] uppercase tracking-[4px] text-white/30 font-bold">{cartItems.length} Unique Items</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:rotate-90 transition-all duration-500"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8 opacity-20">
                    <ShoppingBag size={48} />
                  </div>
                  <h4 className="text-2xl font-heading uppercase mb-4 opacity-30">Bag is Empty</h4>
                  <button 
                    onClick={onClose}
                    className="text-accent text-[10px] uppercase tracking-[4px] font-black hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={`${item.id}-${item.weight}`}
                    className="group relative bg-white/5 border border-white/5 p-6 rounded-[30px] hover:border-white/20 transition-all"
                  >
                    <div className="flex gap-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-black border border-white/5 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-heading uppercase tracking-tight">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id, item.weight)}
                            className="text-white/20 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-accent font-black mb-4">{item.weight} Pack</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3 bg-black/40 rounded-xl p-1 px-2 border border-white/5">
                            <button 
                              onClick={() => updateQuantity(item.id, item.weight, -1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-all"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.weight, 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-all"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <div className="text-xl font-heading tracking-tighter">₹{item.price * item.quantity}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-8 bg-[#0a0a0a] border-t border-white/10 space-y-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase tracking-[4px] text-white/30 font-bold mb-2">Grand Total (MRP)</p>
                    <div className="text-5xl font-heading tracking-tighter">₹{cartTotal}</div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-[#25D366] font-black">Free Delivery</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Standard Shipping</p>
                  </div>
                </div>

                {/* Bulk Dealer Notice */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-accent font-bold mb-1">Buying Bulk (500kg, 700kg, 1000kg+)?</p>
                  <p className="text-[9px] text-white/40 mb-2 leading-relaxed">Get direct factory prices. Skip the cart and contact our mobile dealer directly.</p>
                  <a 
                    href="tel:+917018666302"
                    className="text-[9px] uppercase tracking-widest text-[#25D366] hover:underline font-black inline-flex items-center gap-1 justify-center"
                  >
                    Call Mobile Dealer
                  </a>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full relative group overflow-hidden rounded-[24px]"
                >
                  <div className="absolute inset-0 bg-[#25D366] transition-transform duration-500 group-hover:scale-110" />
                  <div className="relative flex items-center justify-center gap-4 py-6 text-black font-black uppercase text-xs tracking-[5px]">
                    <MessageCircle size={24} className="fill-black" />
                    Checkout on WhatsApp
                  </div>
                </button>
                
                <p className="text-[10px] text-center text-white/20 uppercase tracking-[2px] font-bold">
                  Safe & Secure Checkout via Official Factory Line
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
