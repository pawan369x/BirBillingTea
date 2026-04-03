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
      <section className="py-40 px-[5vw] bg-white text-black rounded-[60px] relative z-30">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
            <div>
              <h2 className="text-7xl md:text-9xl font-heading uppercase leading-none mb-4">Our <br /> Signature</h2>
              <span className="text-accent uppercase tracking-[10px] font-bold">Blends 2026</span>
            </div>
            <p className="max-w-[350px] text-black/50 text-right italic text-lg">
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

      {/* FOOTER */}
      <footer className="py-20 px-[5vw] bg-black border-t border-white/5">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-[400px]">
            <h2 className="text-4xl font-heading uppercase mb-8">Bir Billing <span className="text-accent">Tea.</span></h2>
            <p className="text-white/40 font-light leading-relaxed">
              Preserving Himalayan tea heritage since the late 20th century. A community of 500+ small growers in Kangra Valley.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-6">
              <span className="uppercase text-[10px] tracking-widest font-black text-accent">Navigation</span>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                <li className="hover:text-accent cursor-pointer transition-colors"><Link to="/">Home</Link></li>
                <li className="hover:text-accent cursor-pointer transition-colors"><Link to="/heritage">Factory</Link></li>
                <li className="hover:text-accent cursor-pointer transition-colors"><Link to="/about">Our Story</Link></li>
                <li className="hover:text-accent cursor-pointer transition-colors"><Link to="/premium-teas">Collections</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <span className="uppercase text-[10px] tracking-widest font-black text-accent">Connect</span>
              <div className="flex gap-6">
                <i className="ri-instagram-line text-xl hover:text-accent cursor-pointer transition-colors"></i>
                <i className="ri-facebook-circle-fill text-xl hover:text-accent cursor-pointer transition-colors"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1300px] mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[4px] text-white/20">
          <p>© 2026 The Bir Cooperative Tea Factory</p>
          <p className="flex items-center gap-2 italic"> <Mountain size={14} /> Made in Himachal Pradesh </p>
        </div>
      </footer>

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

const faqs = [
  {
    q: "What makes Bir Billing Tea different from other teas?",
    a: "Our tea is grown at 4,500ft altitude in the Kangra Valley — one of the world's oldest tea-growing regions. We use the traditional Orthodox process where every leaf is hand-picked and slow-rolled, preserving the natural aroma and full-leaf integrity that mass-produced teas can never match."
  },
  {
    q: "Is your tea certified organic and pesticide-free?",
    a: "Yes. All our gardens are cultivated without any synthetic pesticides or fertilizers. We follow GI-tagged (Geographical Indication) organic farming practices passed down through generations of Himalayan cooperative farmers."
  },
  {
    q: "How do you ship and how long does it take?",
    a: "We ship directly from our factory in Bir via trusted courier partners across India. Orders are typically dispatched within 1–2 business days and delivered within 4–7 days depending on your location. Freshness sealing is done in-house."
  },
  {
    q: "Can I order in bulk or for wholesale?",
    a: "Absolutely. We supply to hotels, restaurants, cafes, and bulk buyers. Contact us directly on WhatsApp or email for custom bulk pricing, sample kits, and packaging options tailored to your business needs."
  },
  {
    q: "What is the best way to brew Orthodox Kangra Tea?",
    a: "Use freshly boiled water at 90–95°C. Add 1 teaspoon of loose-leaf tea per cup, steep for 3–4 minutes, and strain. For a richer experience, add a splash of cold milk after brewing — the traditional Kangra style."
  },
  {
    q: "Do you offer tea tasting or factory visits?",
    a: "Yes! We welcome visitors to our factory in Bir, Himachal Pradesh. You can schedule a guided tour through our orthodox processing unit, walk through the tea gardens, and participate in a curated tasting session. Contact us in advance to book."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-32 md:py-40 px-[5vw] bg-[#020202] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[900px] mx-auto relative z-10">
        <RevealOnScroll direction="up">
          <div className="mb-16 md:mb-24">
            <span className="text-accent uppercase tracking-[6px] text-xs font-black block mb-4">Everything You Need To Know</span>
            <h2 className="font-heading text-5xl md:text-8xl uppercase leading-none tracking-tighter">
              Questions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white/60 italic">Answered.</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <RevealOnScroll key={i} direction="up" delay={i * 0.07}>
              <div
                className={`group border rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer
                    ${openIndex === i
                    ? 'border-accent/40 bg-white/[0.04]'
                    : 'border-white/[0.06] bg-white/[0.02] hover:border-white/20'
                  }`}
                onClick={() => toggle(i)}
              >
                <div className="flex items-center justify-between gap-6 px-6 md:px-10 py-6 md:py-8">
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className={`text-xs font-black transition-colors ${openIndex === i ? 'text-accent' : 'text-white/20'}`}>0{i + 1}</span>
                    <h3 className="font-heading text-base md:text-xl uppercase tracking-tight">{faq.q}</h3>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openIndex === i ? 'bg-accent text-black' : 'border-white/20 text-white/40'}`}>
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </div>
                <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                  <div className="px-6 md:px-10 pb-8 md:pb-10 ml-8 md:ml-12 border-t border-white/5 pt-6">
                    <p className="text-white/50 font-light leading-relaxed text-sm md:text-base">{faq.a}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;