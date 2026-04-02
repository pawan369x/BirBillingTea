import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import { Leaf, MapPin, Users, Award, Eye, Target, Zap, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-24 md:pt-32 md:pb-40 min-h-screen bg-bg-dark text-text-light relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-accent/10 to-transparent pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-[5vw] relative z-10">

        {/* 1. HEADER SECTION */}
        <RevealOnScroll direction="up">
          <div className="text-center mb-24">
            <span className="uppercase tracking-[6px] text-accent block mb-4 font-bold text-sm">Our Essence & Heritage</span>
            <h2 className="font-heading text-5xl md:text-[4.5rem] leading-[1] text-text-light uppercase tracking-tighter">
              About <span className="italic text-accent">Bir Tea Factory</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-8 opacity-50"></div>
          </div>
        </RevealOnScroll>

        {/* 2. MAIN STORY SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <RevealOnScroll direction="right">
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-white">
                A Legacy Born in the Heart of <span className="text-accent italic">Himachal</span>
              </h3>
              <p className="text-gray-400 mb-8 leading-[1.9] text-lg">
                Nestled at 4,500 feet in the serene foothills of the Dhauladhar range, the Bir Cooperative Tea Factory has been the heartbeat of Kangra's tea culture since the late 20th century. While Bir is famous globally for Paragliding, our roots are deeply planted in the emerald tea gardens that surround this valley.
              </p>
              <p className="text-gray-400 mb-10 leading-[1.9] text-lg">
                Established as a cooperative to protect and empower local small-scale tea growers, we ensure that every leaf is nurtured with care. We aren't just a factory; we are a community of 500+ farmers dedicated to preserving the "Orthodox" tea-making tradition that is rare to find in today's industrial world.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Leaf />, title: "GI Tagged", sub: "Authentic Kangra" },
                  { icon: <Users />, title: "500+ Farmers", sub: "Cooperative Model" },
                  { icon: <MapPin />, title: "Bir Billing", sub: "Pristine Altitude" },
                  { icon: <ShieldCheck />, title: "100% Organic", sub: "Zero Pesticides" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(212,175,55,0.15)] transition-all duration-300 group cursor-default">
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-lg group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left" delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-[2.5rem] blur-2xl group-hover:bg-accent/30 transition-all"></div>
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
                <img
                  src="/assets/tea_garden_cinematic.png"
                  alt="Bir Billing Tea Gardens"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-accent font-heading text-4xl font-bold">19XX</p>
                  <p className="text-white/60 uppercase tracking-widest text-xs">Year of Establishment</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* 3. MISSION & VISION SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <RevealOnScroll direction="up">
            <div className="relative group p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-accent/40 transition-all duration-500 h-full hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10 w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                <Target size={32} />
              </div>
              <h4 className="relative z-10 text-3xl font-heading font-bold mb-6 text-white uppercase group-hover:text-accent transition-colors duration-500">Our Mission</h4>
              <p className="relative z-10 text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                To empower the small tea growers of Kangra Valley by providing them a world-class processing facility and a global platform, ensuring fair trade and sustainable farming practices that benefit the soil and the soul.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <div className="relative group p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-accent/40 transition-all duration-500 h-full hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10 w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                <Eye size={32} />
              </div>
              <h4 className="relative z-10 text-3xl font-heading font-bold mb-6 text-white uppercase group-hover:text-accent transition-colors duration-500">Our Vision</h4>
              <p className="relative z-10 text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                To become the global gold standard for Himalayan Orthodox Tea, where every cup tells the story of the Dhauladhars and the hard work of our mountain community, making Bir synonymous with premium purity.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* 4. WHY US / STATS SECTION */}
        <RevealOnScroll direction="up">
          <div className="bg-accent/5 border border-accent/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <h3 className="font-heading text-4xl md:text-5xl mb-12 text-white uppercase">By The <span className="italic text-accent">Numbers</span></h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <h5 className="text-5xl md:text-6xl font-heading text-accent mb-2">500+</h5>
                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Small Growers</p>
              </div>
              <div>
                <h5 className="text-5xl md:text-6xl font-heading text-accent mb-2">1300m</h5>
                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Altitude</p>
              </div>
              <div>
                <h5 className="text-5xl md:text-6xl font-heading text-accent mb-2">100%</h5>
                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Orthodox Process</p>
              </div>
              <div>
                <h5 className="text-5xl md:text-6xl font-heading text-accent mb-2">15+</h5>
                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Export Countries</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </div>
  );
};

export default About;