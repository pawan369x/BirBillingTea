import React, { useState, useEffect } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import { 
  Phone, MessageCircle, Truck, ShieldCheck, Scale, Award, 
  ChevronDown, ArrowRight, CornerDownRight, CheckCircle2, Building 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BulkOrders = () => {
  const [selectedTea, setSelectedTea] = useState('Orthodox Black Tea');
  const [selectedQty, setSelectedQty] = useState(700); // Default 700 kg
  const [inquiryStatus, setInquiryStatus] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teaOptions = [
    'Orthodox Black Tea',
    'Green Tea (Laccha & Mogra)',
    'Green Bliss Tea (Superfine)',
    'Vintage Black Tea',
    'Natural Spark Orthodox'
  ];

  const handleWhatsAppInquiry = (qty = selectedQty, tea = selectedTea) => {
    const phoneNumber = "917018666302";
    const text = `Hello Bir Billing Tea Factory Dealer!\n\nI am interested in a bulk dealership order of:\n*Tea Type:* ${tea}\n*Quantity:* ${qty} KG\n\nPlease send us the current wholesale pricing and shipping details.\n\nThank you!`;
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(waUrl, '_blank');
  };

  // Calculate pricing tier details dynamically
  const getTierDetails = (qty) => {
    if (qty >= 1000) {
      return {
        title: "Exclusive Master Dealer Tier",
        discount: "Maximum wholesale margin",
        packing: "Heavy-duty 50kg wholesale sacks",
        shipping: "Priority cargo dispatch & real-time tracking",
        perks: "Exclusive regional distribution rights, dedicated dealer manager support"
      };
    } else if (qty >= 700) {
      return {
        title: "Premium Distributor Tier",
        discount: "High volume dealer rates",
        packing: "Industrial 25kg PP Woven Bags",
        shipping: "Standard freight cargo delivery",
        perks: "Marketing assets kit, priority stock allocation during first-flush"
      };
    } else {
      return {
        title: "Standard Wholesaler Tier",
        discount: "Standard factory wholesale rates",
        packing: "Standard 10kg/20kg bulk cartons",
        shipping: "Standard surface transport",
        perks: "Flexible payment terms after 3 orders, samples of upcoming flushes"
      };
    }
  };

  const tierInfo = getTierDetails(selectedQty);

  return (
    <div className="bg-[#050505] text-white selection:bg-accent selection:text-black min-h-screen pt-32 pb-24 overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="px-[5vw] mb-20 md:mb-32">
        <div className="max-w-[1300px] mx-auto">
          <RevealOnScroll direction="up">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <Building size={16} className="text-accent" />
              <span className="uppercase tracking-[5px] text-accent text-[10px] font-bold">B2B DEALER HUB & WHOLESALE</span>
            </div>
            <h1 className="font-heading text-[clamp(2.8rem,9vw,8.5rem)] leading-[0.9] uppercase mb-8 tracking-tighter">
              DIRECT FACTORY <br />
              <span className="italic text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]">BULK SUPPLY.</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light max-w-3xl leading-relaxed">
              We empower wholesale distributors, tea merchants, and large retail networks globally. Register direct bulk orders of <span className="text-accent font-bold">500kg, 700kg, or 1000kg+</span> to lock in unbeatable factory rates.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. THE CHANNELS (Quick Call & WhatsApp) */}
      <section className="px-[5vw] mb-24 md:mb-40">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Card 1: WhatsApp Dealer */}
          <RevealOnScroll direction="left">
            <div className="group relative rounded-[40px] bg-[#0c0c0c] border border-white/5 p-10 md:p-12 hover:border-[#25D366]/30 hover:shadow-[0_20px_50px_rgba(37,211,102,0.05)] transition-all duration-700 h-full flex flex-col justify-between overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-[#25D366]/10 blur-[50px] rounded-full group-hover:bg-[#25D366]/20 transition-all duration-75" />
              <div>
                <span className="text-[#25D366] text-sm uppercase tracking-widest font-black mb-4 block">INSTANT CHAT</span>
                <h3 className="font-heading text-4xl uppercase mb-6">WhatsApp Dealer</h3>
                <p className="text-white/40 leading-relaxed mb-10">
                  Send your requirements directly to the dealer on WhatsApp. Get instant responses regarding stock status, leaf grade details, and custom logistics coordination.
                </p>
              </div>
              <MagneticButton>
                <button 
                  onClick={() => handleWhatsAppInquiry()}
                  className="w-full py-6 rounded-2xl bg-[#25D366] text-black font-black uppercase text-xs tracking-[4px] hover:bg-white transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle size={18} className="fill-black" /> Chat with Dealer
                </button>
              </MagneticButton>
            </div>
          </RevealOnScroll>

          {/* Card 2: Voice Hotline */}
          <RevealOnScroll direction="right">
            <div className="group relative rounded-[40px] bg-[#0c0c0c] border border-white/5 p-10 md:p-12 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] transition-all duration-700 h-full flex flex-col justify-between overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-accent/10 blur-[50px] rounded-full group-hover:bg-accent/20 transition-all duration-75" />
              <div>
                <span className="text-accent text-sm uppercase tracking-widest font-black mb-4 block">HOTLINE HOTSPOT</span>
                <h3 className="font-heading text-4xl uppercase mb-6">Call Mobile Dealer</h3>
                <p className="text-white/40 leading-relaxed mb-10">
                  Prefer direct vocal negotiations? Dial our dedicated dealer line. Speak directly with the factory management to discuss custom logistics, pricing structures, and long-term contracts.
                </p>
              </div>
              <MagneticButton>
                <a 
                  href="tel:+917018666302"
                  className="w-full py-6 rounded-2xl bg-accent text-black font-black uppercase text-xs tracking-[4px] hover:bg-white transition-all flex items-center justify-center gap-3 text-center"
                >
                  <Phone size={18} className="fill-black" /> +91 70186 66302
                </a>
              </MagneticButton>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* 3. INTERACTIVE BULK CONSOLE */}
      <section className="px-[5vw] mb-32 md:mb-48">
        <div className="max-w-[1300px] mx-auto rounded-[50px] bg-[#0c0c0c] border border-white/5 p-8 md:p-20 relative overflow-hidden">
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Input Console */}
            <div className="lg:col-span-6 space-y-10">
              <div>
                <span className="text-accent uppercase tracking-[6px] text-xs font-black mb-2 block">Configure Order</span>
                <h2 className="text-4xl md:text-6xl font-heading uppercase leading-none">Inquiry Console</h2>
              </div>

              {/* Tea Type Selection */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold block">1. Select tea variety</label>
                <div className="relative">
                  <select 
                    value={selectedTea}
                    onChange={(e) => setSelectedTea(e.target.value)}
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent appearance-none transition-all uppercase tracking-wider text-xs font-bold"
                  >
                    {teaOptions.map(option => <option key={option} value={option} className="bg-[#0c0c0c] text-white">{option}</option>)}
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40" size={18} />
                </div>
              </div>

              {/* Quantity Selector Slider */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">2. Select Bulk volume</label>
                  <span className="text-3xl font-heading text-accent">{selectedQty} <span className="text-xs uppercase opacity-50">KG</span></span>
                </div>
                
                {/* Range Slider */}
                <input 
                  type="range" 
                  min="200" 
                  max="3000" 
                  step="50"
                  value={selectedQty}
                  onChange={(e) => setSelectedQty(parseInt(e.target.value))}
                  className="w-full accent-accent bg-white/10 h-1.5 rounded-full cursor-pointer"
                />
                
                {/* Quick Presets */}
                <div className="flex gap-3">
                  {[500, 700, 1000, 2000].map(preset => (
                    <button
                      key={preset}
                      onClick={() => setSelectedQty(preset)}
                      className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider border transition-all duration-300 ${
                        selectedQty === preset 
                          ? 'bg-accent text-black border-accent' 
                          : 'bg-white/5 text-white/40 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {preset} kg
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Dynamic Output Details Card */}
            <div className="lg:col-span-6 bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-6 right-8 text-accent opacity-20"><Award size={40} /></div>
              
              <span className="text-[10px] uppercase tracking-widest text-[#25D366] font-black mb-2 block">Dynamic Tier Analysis</span>
              <h4 className="font-heading text-3xl uppercase mb-6 tracking-tight">{tierInfo.title}</h4>
              
              <div className="space-y-6 mb-10 border-y border-white/5 py-8">
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded bg-accent/20 flex items-center justify-center text-accent mt-1 shrink-0"><CheckCircle2 size={12} /></div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Pricing Margin</span>
                    <p className="text-sm font-medium text-white">{tierInfo.discount}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded bg-accent/20 flex items-center justify-center text-accent mt-1 shrink-0"><Scale size={12} /></div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Packaging Standard</span>
                    <p className="text-sm font-medium text-white">{tierInfo.packing}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded bg-accent/20 flex items-center justify-center text-accent mt-1 shrink-0"><Truck size={12} /></div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Freight Logistics</span>
                    <p className="text-sm font-medium text-white">{tierInfo.shipping}</p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button 
                onClick={() => handleWhatsAppInquiry(selectedQty, selectedTea)}
                className="w-full py-6 rounded-2xl bg-white text-black font-black uppercase text-xs tracking-[4px] hover:bg-accent transition-all flex items-center justify-center gap-3"
              >
                Inquire This Tier <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE ADVANTAGES (Why Dealership) */}
      <section className="px-[5vw] mb-32 md:mb-44">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent uppercase tracking-[6px] text-xs font-black mb-4 block">Dealer Network</span>
            <h2 className="text-4xl md:text-7xl font-heading uppercase">Why Partner With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "GI Origin Authority",
                desc: "Every batch of tea is direct-from-factory from our GI Tagged gardens in Bir. European PGI status ensures global market credibility.",
                icon: <Award className="text-accent" size={32} />
              },
              {
                title: "High Margins",
                desc: "By cutting out middle-tier brokers and agents, we provide raw factory rates directly to the distributor network, enabling lucrative dealer margins.",
                icon: <Scale className="text-accent" size={32} />
              },
              {
                title: "Pristine Terroir Quality",
                desc: "Cultivated at 4,500 feet in pure mountain soil, our Orthodox blends feature rich, delicate profiles highly sought after by premium audiences.",
                icon: <Truck className="text-accent" size={32} />
              }
            ].map((adv, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.1}>
                <div className="bg-[#0c0c0c] border border-white/5 p-10 rounded-[35px] hover:border-white/10 hover:shadow-2xl transition-all h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                    {adv.icon}
                  </div>
                  <h4 className="font-heading text-2xl uppercase mb-4">{adv.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{adv.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEALER FAQ */}
      <section className="px-[5vw] mb-24">
        <div className="max-w-[900px] mx-auto bg-[#0c0c0c] border border-white/5 rounded-[40px] p-8 md:p-16">
          <h3 className="font-heading text-3xl md:text-4xl uppercase mb-12 text-center">Dealer FAQ</h3>
          <div className="space-y-10">
            {[
              {
                q: "What is the Minimum Order Quantity (MOQ) for Dealer pricing?",
                a: "Our wholesale tiers start at 500kg. For smaller retail quantities, our standard website store features competitive MRP-based retail shipping."
              },
              {
                q: "How are shipments dispatched from Bir, Himachal Pradesh?",
                a: "We partner with trusted mountain logistics operators to coordinate surface freight cargo across India. For international bulk dealer requests, sea freight and air-freight arrangements can be negotiated."
              },
              {
                q: "Do you offer white-labeling or customized packaging?",
                a: "For mega orders (1000kg+), we can coordinate custom bulk packaging options (e.g. customized woven bags or custom weight crates). Contact our dealer hotline to request specific customized order setups."
              }
            ].map((item, i) => (
              <div key={i} className="space-y-3 pb-8 border-b border-white/5 last:border-b-0 last:pb-0">
                <h5 className="font-heading text-lg text-accent uppercase tracking-tight">Q: {item.q}</h5>
                <p className="text-white/50 text-sm leading-relaxed">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulkOrders;
