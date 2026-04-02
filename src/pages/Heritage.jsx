import React, { useEffect } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import {
  Leaf, Mountain, Users, MapPin, Award, History, Clock, Globe, Wind,
  ShieldCheck, Sun, Droplets, CheckCircle2
} from 'lucide-react';

const Heritage = () => {
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

  return (
    <div className="bg-[#fcfaf7] overflow-x-hidden">

      {/* 1. AUTHENTIC HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.3] parallax scale-110"
          data-speed="0.5"
          style={{ backgroundImage: "url('/assets/tea_garden_cinematic.png')" }}
        ></div>
        <div className="relative z-10 text-center px-[5vw] max-w-5xl">
          <RevealOnScroll direction="up">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
              <Award size={16} className="text-accent" />
              <span className="uppercase tracking-[5px] text-white text-[10px] font-bold italic">The Legacy of Mann Brand</span>
            </div>
            <h1 className="text-white font-heading text-[clamp(3.5rem,10vw,9rem)] leading-[0.8] uppercase mb-8 tracking-tighter">
              Himalayan <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-white [-webkit-text-stroke:0px]">Heritage.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Crafting Kangra's legendary tea since 1964. From the first survey in 1849 to the European PGI status in 2023.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. THE DOCUMENTED CHRONICLES (Exact Data) */}
      <section className="py-32 px-[5vw] bg-white relative">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <span className="text-accent uppercase tracking-[6px] text-xs font-black">History of Bir</span>
              <h2 className="text-5xl font-heading text-primary mt-6 mb-8 uppercase leading-none italic">The <br />Timeline.</h2>
              <div className="p-8 bg-[#f8f5f0] rounded-[30px] border border-gray-100">
                <p className="text-primary font-bold mb-4 flex items-center gap-2 underline underline-offset-4 tracking-widest uppercase text-xs">
                  <CheckCircle2 size={16} /> GI Status Verified
                </p>
                <p className="text-gray-500 text-sm italic leading-relaxed">
                  "Superior to that produced in any other part of India." <br /> — 1882 District Gazetteer.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-24 border-l border-gray-100 pl-10 md:pl-20">
              {[
                { year: "1849–1852", title: "Dr. Jameson's Survey", desc: "Superintendent Dr. William Jameson identified Bir and Kangra as ideal regions. Commercial planting began at Holta Estate by 1852." },
                { year: "1886–1895", title: "Global Gold Medals", desc: "Kangra tea won prestigious Gold and Silver medals at exhibitions in London (1886) and Amsterdam (1895)." },
                { year: "1964", title: "The Cooperative Birth", desc: "The Bir Cooperative Tea Factory was established as one of the four key units to empower small-scale Himalayan farmers." },
                { year: "2005 & 2023", title: "GI & European PGI", desc: "Awarded the Indian GI Tag in 2005. In 2023, received the European Union's PGI status for global market access." }
              ].map((item, i) => (
                <RevealOnScroll key={i} direction="up">
                  <div className="relative group">
                    <div className="absolute -left-[53px] md:-left-[93px] top-0 w-6 h-6 rounded-full bg-white border-4 border-accent group-hover:scale-125 transition-all duration-500"></div>
                    <span className="text-6xl font-heading text-accent/20 mb-4 block group-hover:text-accent transition-colors duration-500">{item.year}</span>
                    <h4 className="text-3xl font-heading text-primary mb-4 uppercase">{item.title}</h4>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANN BRAND SPECIALTY (New Section for specific products) */}
      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-[5vw]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <span className="text-accent uppercase tracking-[6px] text-xs font-black mb-4 block">The Mann Brand</span>
              <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none">Traditional <br /><span className="italic text-accent">Orthodox.</span></h2>
            </div>
            <p className="max-w-md text-white/50 italic leading-relaxed text-lg">
              Produced near the iconic Bir Bazaar, our specialty white, green, and black orthodox teas are world-renowned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Specialty White", d: "A delicate, rare blend crafted from the youngest buds.", i: <Sun /> },
              { t: "Green Orthodox", d: "High antioxidant profile with a fresh mountain aroma.", i: <Droplets /> },
              { t: "Black Orthodox", d: "Robust, full-bodied tea with legendary Kangra strength.", i: <Wind /> }
            ].map((product, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.1}>
                <div className="bg-white/5 border border-white/10 p-12 rounded-[40px] hover:border-accent hover:-translate-y-4 transition-all duration-700 h-full group">
                  <div className="mb-8 text-accent/40 group-hover:text-accent transition-all duration-500">{product.i}</div>
                  <h4 className="font-heading text-3xl mb-4 uppercase">{product.t}</h4>
                  <p className="text-sm opacity-50 leading-relaxed group-hover:opacity-100 transition-opacity">{product.d}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISITOR INFORMATION (New Section based on your data) */}
      <section className="py-32 bg-white">
        <div className="max-w-[1300px] mx-auto px-[5vw] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <RevealOnScroll direction="left">
            <div className="rounded-[60px] overflow-hidden shadow-2xl relative group">
              <img src="/assets/bir_factory_main_1773990164233.png" alt="Bir Bazaar Road" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="right">
            <div className="space-y-10">
              <span className="text-accent uppercase tracking-[6px] text-xs font-black">Visit Us</span>
              <h2 className="text-5xl font-heading text-primary uppercase leading-tight">Live The <br /> <span className="italic text-accent underline underline-offset-8">Experience.</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Located near the historic **Bir Bazaar**, our factory is a living landmark. Step inside to witness the authentic rhythm of traditional orthodox tea making.
              </p>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent"><History /></div>
                  <div><p className="font-heading text-xl uppercase">Witness History</p><p className="text-sm text-gray-500">Traditional withering, rolling, and drying processes.</p></div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent"><MapPin /></div>
                  <div><p className="font-heading text-xl uppercase">The Hub</p><p className="text-sm text-gray-500">Just minutes away from the main Bir Bazaar road.</p></div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-32 bg-primary relative overflow-hidden text-center">
        <div className="max-w-[1300px] mx-auto px-[5vw] relative z-10">
          <RevealOnScroll direction="up">
            <h2 className="text-white font-heading text-5xl md:text-7xl mb-12 uppercase leading-none italic underline decoration-accent decoration-2 underline-offset-8">Order Mann Brand.</h2>
            <button className="bg-accent text-primary px-16 py-6 rounded-full font-black uppercase text-xs tracking-[5px] hover:bg-white transition-all shadow-2xl">
              Download Catalog
            </button>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Heritage;