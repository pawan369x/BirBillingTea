import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import {
  Leaf, Mountain, Wind, Coffee, Heart, Users, ArrowRight,
  Mail, MapPin, Phone, ArrowUpRight, CheckCircle, Zap, ShieldCheck, Droplets
} from 'lucide-react';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        if (speed) {
          el.style.transform = `translateY(${scrollY * speed}px)`;
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

      {/* 1. ULTRA-PREMIUM HERO SECTION */}
      <header id="home" className="h-[110vh] flex items-center relative overflow-hidden px-[5vw]">
        {/* Cinematic Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 parallax brightness-[0.35]"
          data-speed="0.2"
          style={{ backgroundImage: "url('/assets/bir_tea_factory_1773989094698.png')" }}
        ></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0a0a0a]"></div>

        {/* Floating Glassmorphism Element */}
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse"></div>

        <div className="relative z-10 max-w-[900px]">
          <RevealOnScroll direction="up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <div className="w-2 h-2 rounded-full bg-accent animate-ping"></div>
              <span className="text-[10px] uppercase tracking-[4px] font-bold text-accent">Est. Late 20th Century</span>
            </div>

            <h1 className="font-heading text-[clamp(4rem,12vw,10rem)] leading-[0.8] uppercase tracking-tighter">
              HIMALAYAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent [-webkit-text-stroke:0px] italic">PURITY.</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.4}>
            <div className="flex flex-col md:flex-row gap-10 mt-12 items-start md:items-center">
              <p className="text-lg font-light text-white/60 max-w-[400px] leading-relaxed border-l border-accent/30 pl-6">
                Crafted at 4,500ft in the heart of Kangra Valley. Experience the gold standard of Himalayan Cooperative farming.
              </p>
              <MagneticButton>
                <button className="px-10 py-5 bg-accent text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-500 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                  Shop Collection
                </button>
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>

        {/* Rotating Badge - More Subtle */}
        <div className="absolute bottom-[50px] right-[5vw] w-[150px] h-[150px] [animation:rotate_20s_linear_infinite] opacity-50">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white text-[10px] tracking-[3px] uppercase font-bold">
            <path d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" id="circle" fill="none" />
            <text><textPath href="#circle">ORTHODOX • KANGRA TEA • 100% ORGANIC •</textPath></text>
          </svg>
        </div>
      </header>

      {/* 2. INFINITE GLASS MARQUEE */}
      <div className="py-10 bg-black/50 backdrop-blur-xl border-y border-white/5 relative z-20">
        <div className="flex gap-20 animate-marquee text-white/10 uppercase font-heading text-6xl tracking-tighter">
          <span>Himalayan Gold</span><span>•</span><span>Handpicked</span><span>•</span><span>Organic Certified</span><span>•</span><span>4500ft Altitude</span><span>•</span>
          <span>Himalayan Gold</span><span>•</span><span>Handpicked</span><span>•</span><span>Organic Certified</span><span>•</span><span>4500ft Altitude</span><span>•</span>
        </div>
      </div>

      {/* 3. THE CRAFT - INTERACTIVE SECTION */}
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

      {/* 5. THE PROCESS - CINEMATIC VERTICAL TIMELINE */}
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

      {/* 6. CALL TO ACTION - IMMERSIVE */}
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

      {/* FOOTER - DARK LUXURY */}
      <footer className="py-20 px-[5vw] bg-black border-t border-white/5">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-[400px]">
            <h2 className="text-4xl font-heading uppercase mb-8">Bir <span className="text-accent">Cooperative.</span></h2>
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
        @keyframes rotate { 100% { transform: rotate(360deg); } }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;