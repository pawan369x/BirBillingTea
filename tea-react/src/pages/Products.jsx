import React, { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import WhatsAppModal from '../components/WhatsAppModal';
import { ArrowUpRight, Plus, Minus, Leaf, Zap, Droplets, Wind } from 'lucide-react';

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ name: '', price: 0 });

  const openModal = (name, price) => {
    setSelectedProduct({ name, price });
    setIsModalOpen(true);
  };

  const productData = [
    {
      name: "Silver Needles",
      price: 2500,
      weight: "500g",
      desc: "Sun-dried buds from 4,500ft. The champagne of Himalayan teas.",
      image: "/assets/white_tea_special.png",
      tag: "Ultra Rare",
      stats: ["Floral", "Low Caffeine", "Specialty"],
      color: "from-[#e0e0e0] to-[#ffffff]"
    },
    {
      name: "Himalayan Green",
      price: 800,
      weight: "1kg",
      desc: "Zero bitterness. Pure mountain energy in every leaf.",
      image: "/assets/Green.png",
      tag: "Best Seller",
      stats: ["Fresh", "Medium Caffeine", "Organic"],
      color: "from-[#d4fc79] to-[#96e6a1]"
    },
    {
      name: "Imperial Black",
      price: 750,
      weight: "1kg",
      desc: "Bold, malty, and deep. The legendary Kangra strength.",
      image: "/assets/Black.png",
      tag: "Traditional",
      stats: ["Bold", "High Caffeine", "Malty"],
      color: "from-[#ff9a9e] to-[#fecfef]"
    },
    {
      name: "Orthodox Blend",
      price: 950,
      weight: "1kg",
      desc: "Hand-rolled heritage blend. Balance in a cup.",
      image: "/assets/orthodox_special.png",
      tag: "Artisanal",
      stats: ["Balanced", "Rich Aroma", "Mann Brand"],
      color: "from-[#a1c4fd] to-[#c2e9fb]"
    }
  ];

  return (
    <div className="py-32 bg-[#080808] text-white selection:bg-accent selection:text-black min-h-screen">

      {/* 1. MINIMALIST HEADER */}
      <div className="max-w-[1400px] mx-auto px-[5vw] mb-32">
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-2xl">
              <span className="text-accent uppercase tracking-[10px] text-[10px] font-black mb-6 block">Premium Inventory</span>
              <h2 className="text-6xl md:text-8xl font-heading uppercase leading-[0.8] tracking-tighter">
                THE <br /> <span className="italic opacity-30">COLLECTION.</span>
              </h2>
            </div>
            <p className="text-white/40 text-lg md:text-xl font-light italic max-w-sm text-right">
              "Every leaf carries the DNA of the Dhauladhar mountains."
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* 2. TRENDY PRODUCT GRID */}
      <div className="max-w-[1400px] mx-auto px-[5vw] grid grid-cols-1 md:grid-cols-2 gap-8">
        {productData.map((product, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <div className="group relative bg-[#121212] rounded-[40px] overflow-hidden border border-white/5 h-[500px] md:h-[600px] flex flex-col justify-end p-6 md:p-10 cursor-pointer">

              {/* Image Layer - Full Cover on Hover */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>

              {/* Tag Header */}
              <div className="absolute top-10 left-10 z-20">
                <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[10px] uppercase tracking-widest font-black text-accent">
                  {product.tag}
                </span>
              </div>

              {/* Content Layer */}
              <div className="relative z-10 w-full transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
                <h3 className="text-5xl md:text-7xl font-heading uppercase leading-none mb-6">
                  {product.name}
                </h3>

                {/* Reveal on Hover Section */}
                <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                  <p className="text-white/50 text-lg mb-8 font-light leading-relaxed">
                    {product.desc}
                  </p>

                  {/* Stats Badges */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {product.stats.map(stat => (
                      <span key={stat} className="text-[9px] uppercase tracking-widest px-3 py-1 bg-white/10 rounded-md border border-white/5 text-white/70">
                        {stat}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-end border-t border-white/10 pt-8">
                    <div>
                      <p className="text-[10px] text-accent uppercase tracking-widest font-black mb-1">Retail Price</p>
                      <p className="text-4xl font-heading tracking-tighter">₹{product.price} <span className="text-xs text-white/30 font-bold uppercase">/ {product.weight}</span></p>
                    </div>

                    <MagneticButton>
                      <button
                        onClick={() => openModal(product.name, product.price)}
                        className="w-16 h-16 rounded-full bg-accent text-black flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                      >
                        <ArrowUpRight size={28} />
                      </button>
                    </MagneticButton>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 group-hover:text-accent transition-all duration-700">
                <Plus size={40} strokeWidth={1} />
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* 3. BULK SECTION (Ultra Modern) */}
      <div className="max-w-[1400px] mx-auto px-[5vw] mt-40">
        <div className="relative rounded-[60px] bg-white text-black p-12 md:p-24 overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/40 transition-all"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-xl">
              <h4 className="text-5xl md:text-7xl font-heading uppercase leading-[0.8] mb-8">Wholesale <br /><span className="italic opacity-40 leading-normal">Supply.</span></h4>
              <p className="text-black/50 text-xl font-light leading-relaxed">Partner with the Cooperative Factory for global distribution and wholesale exports.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton>
                <a href="tel:+917018666302" className="px-12 py-6 inline-flex items-center justify-center whitespace-nowrap bg-transparent border border-black text-black rounded-full font-black uppercase text-[10px] md:text-xs tracking-[5px] hover:bg-black hover:text-white transition-all">
                  Call Us
                </a>
              </MagneticButton>
              <MagneticButton>
                <button className="px-12 py-6 inline-flex items-center justify-center whitespace-nowrap bg-black text-white rounded-full font-black uppercase text-[10px] md:text-xs tracking-[5px] hover:bg-accent hover:text-black transition-all">
                  Get Quotation
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <WhatsAppModal
          productName={selectedProduct.name}
          price={selectedProduct.price}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Products;