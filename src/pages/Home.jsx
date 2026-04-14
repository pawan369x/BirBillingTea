import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import {
  Leaf, Mountain, Wind, Coffee, Heart, Users, ArrowRight,
  Mail, MapPin, Phone, ArrowUpRight, CheckCircle, Zap, ShieldCheck, Droplets, Plus, Minus
} from 'lucide-react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        if (speed) {
          el.style.transform = `translateY(${window.pageYOffset * speed}px)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { title: "Black Tea", desc: "Robust and full-bodied, fermented for Himalayan strength.", icon: <Coffee size={32} />, tag: "Bold" },
    { title: "Green Tea", desc: "Fresh, unoxidized leaves packed with antioxidants.", icon: <Leaf size={32} />, tag: "Vitality" },
    { title: "Orthodox Tea", desc: "Hand-processed whole leaf tea with floral notes.", icon: <Wind size={32} />, tag: "Premium" }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-accent selection:text-black overflow-x-hidden">

      {/* 1. NEW ADVANCED HERO SECTION */}
      <header id="home" className="min-h-screen flex items-center relative overflow-hidden px-[5vw] py-32">
        {/* Cinematic Background with Zoom Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center parallax brightness-[0.4] transition-transform duration-700 ease-out"
          data-speed="0.15"
          style={{
            backgroundImage: "url('/assets/bir_tea_factory_1773989094698.png')",
            transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.15}px)`
          }}
        ></div>

        {/* Dynamic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-1"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-1"></div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          <RevealOnScroll direction="up">
            {/* CLEAN MODERN CAPTION */}
            <div className="flex items-center gap-6 mb-10 group">
              <div className="h-[1px] w-16 bg-accent group-hover:w-24 transition-all duration-700"></div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] font-black text-white/90">
                4500FT ABOVE THE ORDINARY
              </span>
            </div>

            {/* HYBRID TYPOGRAPHY STYLE */}
            <div className="relative">
              <h1 className="font-heading text-[clamp(3rem,13vw,12rem)] leading-[0.8] uppercase mb-6">
                <span className="block tracking-tighter hover:tracking-normal transition-all duration-1000 cursor-default">
                  BIR <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]">BILLING</span>
                </span>
                <span className="block italic font-light text-accent flex items-center gap-8">
                  TEA <span className="text-[0.2em] not-italic tracking-[0.5em] text-white/20 hidden md:block">Factory</span>
                </span>
              </h1>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.4}>
            <div className="flex flex-col md:flex-row gap-12 mt-12 items-start md:items-center">
              <div className="max-w-[550px] border-l-2 border-accent/30 pl-8">
                <p className="text-lg md:text-xl font-light text-white/50 leading-relaxed">
                  Deep in the Kangra Valley, we preserve the <span className="text-white font-medium">Orthodox Art</span> of tea making. Every leaf is a story of Himalayan heritage.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <MagneticButton>
                  <button className="px-10 py-6 bg-white text-black font-black uppercase text-[10px] tracking-[4px] rounded-full hover:bg-accent transition-all duration-500 shadow-2xl">
                    Shop Collection
                  </button>
                </MagneticButton>
                <div className="w-16 h-[1px] bg-white/20 hidden md:block"></div>
                <button className="text-[10px] uppercase tracking-[4px] font-bold text-white/40 hover:text-accent transition-colors">
                  Our Story
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* SIDE FLOATING BADGE - VERY UNIQUE */}
        <div
          className="absolute right-[5vw] top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-10 opacity-20 hover:opacity-100 transition-opacity duration-700"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        >
          <span className="[writing-mode:vertical-rl] uppercase tracking-[15px] text-[10px] font-black">ESTABLISHED 1980</span>
          <div className="w-[1px] h-32 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </header>

      {/* 2. INFINITE GLASS MARQUEE */}
      <div className="py-10 bg-black/50 backdrop-blur-xl border-y border-white/5 relative z-20">
        <div className="flex gap-20 animate-marquee text-white/10 uppercase font-heading text-6xl tracking-tighter">
          <span>Himalayan Gold</span><span>•</span><span>Handpicked</span><span>•</span><span>Organic Certified</span><span>•</span><span>4500ft Altitude</span><span>•</span>
          <span>Himalayan Gold</span><span>•</span><span>Handpicked</span><span>•</span><span>Organic Certified</span><span>•</span><span>4500ft Altitude</span><span>•</span>
        </div>
      </div>

      {/* 3. THE CRAFT */}
      <section className="py-40 px-[5vw] relative">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <RevealOnScroll direction="left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative rounded-[40px] overflow-hidden border border-white/10">
                <img
                  src="/assets/bir_factory_main_1773990164233.png"
                  alt="Craft"
                  className="w-full h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 flex gap-6">
                  <div className="flex flex-col">
                    <span className="text-accent text-3xl font-heading">GI</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/50">Tagged Origin</span>
                  </div>
                  <div className="w-[1px] h-12 bg-white/20"></div>
                  <div className="flex flex-col">
                    <span className="text-accent text-3xl font-heading">500+</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/50">Growers</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div className="space-y-10">
              <span className="text-accent uppercase tracking-[6px] text-xs font-bold">The Quality Standard</span>
              <h2 className="text-6xl md:text-8xl font-heading leading-none uppercase">Grade A <br /> <span className="italic opacity-50">Whole Leaf</span></h2>
              <p className="text-xl text-white/40 leading-relaxed max-w-lg">
                Unlike mass-produced tea, we use the <span className="text-white">Orthodox process</span>. Every leaf is hand-picked at dawn to capture the moisture of the Himalayan morning dew.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
                <div className="flex gap-4 items-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent"><ShieldCheck /></div>
                  <span className="font-bold uppercase text-[10px] tracking-widest">Pesticide Free</span>
                </div>
                <div className="flex gap-4 items-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent"><Droplets /></div>
                  <span className="font-bold uppercase text-[10px] tracking-widest">Natural Aroma</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. ULTRA-MODERN COLLECTIONS */}
      <section className="py-24 md:py-40 px-[5vw] bg-white text-black rounded-[30px] md:rounded-[80px] relative z-30 -mt-16 md:-mt-24">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10">
            <div>
              <h2 className="text-[clamp(3.5rem,12vw,10rem)] md:text-9xl font-heading uppercase leading-[0.85] mb-6">Our <br /> Signature</h2>
              <span className="text-accent uppercase tracking-[6px] md:tracking-[15px] font-black text-[10px] md:text-sm">Blends 2026</span>
            </div>
            <p className="max-w-[400px] text-black/50 text-left md:text-right italic text-lg md:text-xl leading-relaxed">
              "A limited collection of the season's finest flush, hand-crafted in Bir."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.2}>
                <div className="group relative p-12 rounded-[50px] bg-[#f8f5f0] border border-black/5 hover:bg-black hover:text-white transition-all duration-700 h-[500px] flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-10 right-10 text-[10px] uppercase tracking-widest font-bold opacity-30 group-hover:opacity-100 group-hover:text-accent transition-all">
                    {item.tag}
                  </div>

                  <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-black group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-4xl font-heading mb-6 uppercase tracking-tighter">{item.title}</h3>
                    <p className="text-black/50 group-hover:text-white/60 mb-10 leading-relaxed font-light">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-4 cursor-pointer group-hover:gap-6 transition-all duration-500">
                      <span className="uppercase text-xs font-black tracking-widest">Discover</span>
                      <ArrowRight size={20} className="text-accent" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE PROCESS */}
      <section className="py-40 px-[5vw] bg-black">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-32">
            <span className="text-accent uppercase tracking-[10px] text-xs font-black mb-6 block">Legacy Ritual</span>
            <h2 className="text-6xl md:text-8xl font-heading leading-none uppercase">From Garden <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">To Your Cup.</span></h2>
          </div>

          <div className="space-y-40">
            {[
              { n: "01", t: "Plucking", d: "At precisely 5:30 AM, our farmers select the 'two leaves and a bud' from the dew-covered gardens.", img: "/assets/tea_garden_cinematic.png" },
              { n: "02", t: "Withering", d: "Leaves are rested on traditional troughs to reduce moisture naturally by 50%.", img: "/assets/bir_factory_main_1773990164233.png" },
              { n: "03", t: "Orthodox Rolling", d: "Slow mechanical rolling releases the essential aromatic oils without damaging the cell structure.", img: "/assets/green_tea_macro.png" }
            ].map((step, i) => (
              <RevealOnScroll key={i} direction="up">
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}>
                  <div className="flex-1 space-y-8">
                    <span className="text-8xl font-heading text-accent/10 block">{step.n}</span>
                    <h4 className="text-4xl font-heading uppercase">{step.t}</h4>
                    <p className="text-xl text-white/40 leading-relaxed italic font-light">"{step.d}"</p>
                  </div>
                  <div className="flex-1 w-full rounded-[40px] overflow-hidden h-[400px] border border-white/5">
                    <img src={step.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt={step.t} />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-40 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0 bg-accent opacity-5 blur-[150px] animate-pulse"></div>
        <div className="max-w-[1300px] mx-auto text-center relative z-10">
          <RevealOnScroll direction="up">
            <h2 className="text-6xl md:text-9xl font-heading uppercase leading-[0.8] mb-12 tracking-tighter">
              Start Your <br /> <span className="text-accent italic">Ritual.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8 mt-20">
              <MagneticButton>
                <button className="px-16 py-8 bg-white text-black font-black uppercase text-sm tracking-[5px] rounded-full hover:bg-accent transition-colors duration-500 shadow-2xl">
                  Order Samples
                </button>
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQSection />



      <style jsx="true">{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
          opacity: 0;
        }
        .faq-answer.open {
          max-height: 600px;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

// Signature FAQ Data 
const faqs = [
  {
    q: "What makes Bir Billing Tea different?",
    a: "Grown at 4,500ft, our tea undergoes the 'Orthodox Process'—a slow, rhythmic rolling that preserves essential oils. Unlike mass-market CTC, we keep the leaf whole, ensuring every brew is a pure Himalayan infusion.",
    tag: "Terroir"
  },
  {
    q: "Is it truly Organic & Certified?",
    a: "Absolutely. Our gardens are GI-Tagged (Geographical Indication). We reject synthetic pesticides, relying on the Kangra Valley's natural ecosystem to nourish our bushes. It's tea as nature intended.",
    tag: "Purity"
  },
  {
    q: "Global Shipping & Freshness?",
    a: "We vacuum-seal every batch at the source in Bir. Orders are processed within 48 hours, ensuring the mountain mist is still practically in the bag when it reaches your doorstep.",
    tag: "Logistics"
  },
  {
    q: "Wholesale & Custom Curation?",
    a: "We partner with Michelin-star restaurants and luxury boutiques. For bulk inquiries or bespoke blend curation, our factory concierge is available via WhatsApp or Email.",
    tag: "Business"
  },
  {
    q: "The Perfect Brewing Ritual?",
    a: "90°C water, 3 minutes of patience, and zero haste. For Kangra Orthodox, we recommend skipping the sugar to truly experience the floral notes unique to our high-altitude soil.",
    tag: "Ritual"
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Pehla wala open rakhenge for design depth

  return (
    <section className="py-40 px-[5vw] bg-[#050505] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* LEFT SIDE: STICKY HEADER */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-40">
              <RevealOnScroll direction="left">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-accent"></div>
                  <span className="text-accent uppercase tracking-[6px] text-xs font-black">Expertise</span>
                </div>
                <h2 className="font-heading text-6xl md:text-8xl uppercase leading-[0.9] mb-10">
                  Common <br />
                  <span className="italic text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]">Curiosities</span>
                </h2>
                <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm mb-12">
                  Everything you need to know about our Himalayan heritage and the art of the perfect brew.
                </p>

                {/* Visual Badge */}
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md inline-flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Zap size={20} />
                  </div>
                  <div>
                    <span className="block uppercase tracking-widest text-[10px] font-bold text-accent">Factory Direct</span>
                    <p className="text-sm text-white/60">Skipping middlemen since 1980.</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* RIGHT SIDE: ADVANCED ACCORDIONS */}
          <div className="lg:col-span-7 space-y-6">
            {faqs.map((faq, i) => (
              <RevealOnScroll key={i} direction="up" delay={i * 0.1}>
                <div
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                  className={`group relative overflow-hidden transition-all duration-700 cursor-pointer rounded-[32px] 
                    ${openIndex === i
                      ? 'bg-white text-black shadow-[0_20px_80px_-20px_rgba(255,255,255,0.15)]'
                      : 'bg-white/[0.03] text-white border border-white/10 hover:border-white/30'}`}
                >
                  {/* Watermark Number */}
                  <span className={`absolute -right-4 -bottom-6 font-heading text-9xl transition-all duration-700 pointer-events-none
                    ${openIndex === i ? 'opacity-5 text-black' : 'opacity-[0.02] text-white'}`}>
                    0{i + 1}
                  </span>

                  <div className="relative z-10 p-8 md:p-10">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex flex-col gap-2">
                        <span className={`text-[10px] uppercase tracking-[4px] font-bold transition-colors duration-500
                          ${openIndex === i ? 'text-black/40' : 'text-accent'}`}>
                          {faq.tag}
                        </span>
                        <h3 className="font-heading text-xl md:text-2xl uppercase tracking-tight pr-10">
                          {faq.q}
                        </h3>
                      </div>

                      <div className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500
                        ${openIndex === i ? 'bg-black text-white border-black rotate-180' : 'border-white/20 group-hover:bg-white/10'}`}>
                        {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </div>

                    <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                      <div className="border-t border-black/10 mt-8 pt-8">
                        <p className={`text-lg leading-relaxed font-light italic transition-colors duration-500
                          ${openIndex === i ? 'text-black/70' : 'text-white/50'}`}>
                          "{faq.a}"
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                          <div className={`h-[1px] w-8 transition-all duration-500 ${openIndex === i ? 'bg-black/20' : 'bg-accent/20'}`}></div>
                          <span className="text-[10px] uppercase tracking-widest opacity-50">Verified Wisdom</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;