import React, { useState, useMemo } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import { ArrowUpRight, Plus, Leaf, Zap, Droplets, Filter, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Products = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [showCartHint, setShowCartHint] = useState(false);

  const productData = [
    {
      id: 1,
      name: "Leafy Bliss Orthodox",
      category: "Black Tea",
      variants: [
        { weight: "400g", price: 620 },
        { weight: "200g", price: 350 }
      ],
      desc: "Superior SFTGFOP-1 grade. Hand-rolled buds offering a delicate floral aroma and a sophisticated palate.",
      image: "/assets/black_tea_leaves_1773989075937.png",
      tag: "Premium",
      stats: ["Hand-rolled", "Floral", "SFTGFOP-1"],
    },
    {
      id: 2,
      name: "Vintage Black Tea",
      category: "Black Tea",
      variants: [
        { weight: "400g", price: 530 }
      ],
      desc: "A timeless blend of SFTGFOP-1 and BPS. Balanced, malty, and deep with a signature mountain character.",
      image: "/assets/vintage_black_pack.png",
      tag: "Aromatic",
      stats: ["Balanced", "Deep Amber", "Heritage"],
    },
    {
      id: 3,
      name: "Natural Spark Orthodox",
      category: "Black Tea",
      variants: [
        { weight: "500g", price: 450 },
        { weight: "200g", price: 270 }
      ],
      desc: "Robust BPS & TGBOP-1 blend. High-energy brew designed for those who prefer a strong, malty cup.",
      image: "/assets/natural_spark_pack.png",
      tag: "Strong",
      stats: ["Energizing", "Robust", "Full-bodied"],
    },
    {
      id: 4,
      name: "Green Bliss Tea",
      category: "Green Tea",
      variants: [
        { weight: "400g", price: 520 },
        { weight: "200g", price: 300 }
      ],
      desc: "Superfine grade green tea. Exceptionally smooth with zero bitterness and maximum antioxidant retention.",
      image: "/assets/green_tea_macro.png",
      tag: "High Grade",
      stats: ["Organic", "Superfine", "Pure"],
    },
    {
      id: 5,
      name: "Himalayan Green Tea",
      category: "Green Tea",
      variants: [
        { weight: "500g", price: 450 }
      ],
      desc: "Classic Laccha & Mogra blend. Harvested at peak freshness for a crisp, mountain-fresh experience.",
      image: "/assets/green_tea_pack.png",
      tag: "Natural",
      stats: ["Refreshing", "Laccha Mogra", "Zero Bitterness"],
    },
    {
      id: 6,
      name: "Green Glimmer",
      category: "Green Tea",
      variants: [
        { weight: "500g", price: 430 }
      ],
      desc: "A unique triple-blend of Laccha, Mogra, and Superfine. A complex and satisfying daily green brew.",
      image: "/assets/green_tea_leaves_1773989058831.png",
      tag: "Specialty",
      stats: ["Triple Blend", "Unique", "Smooth"],
    },
    {
      id: 7,
      name: "Pahadi Kali Chai",
      category: "Black Tea",
      variants: [
        { weight: "500g", price: 350 }
      ],
      desc: "Authentic local Kangra blend. The perfect 'Daily Chai' with a rich color and strong, earthy flavor.",
      image: "/assets/black_tea_macro.png",
      tag: "Daily Choice",
      stats: ["Kangra Special", "Strong", "Local Blend"],
    },
    {
      id: 8,
      name: "Green Harmony",
      category: "Green Tea",
      variants: [
        { weight: "200g", price: 250 }
      ],
      desc: "Delicate Laccha & Mogra notes. A peaceful, balanced brew for mindful moments throughout the day.",
      image: "/assets/Green.png",
      tag: "Balanced",
      stats: ["Mellow", "Calming", "Fresh"],
    }
  ];

  const categories = ['All', 'Black Tea', 'Green Tea'];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return productData;
    return productData.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleBulkInquiry = () => {
    const phoneNumber = "917018666302";
    const text = `Hello Bir Billing Tea Factory!\n\nI am interested in bulk supply and wholesale prices for your tea products. Please provide a quotation and minimum order quantities.\n\nThank you!`;
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="py-32 bg-[#080808] text-white selection:bg-accent selection:text-black min-h-screen">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-[1400px] mx-auto px-[5vw] mb-20">
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-2xl">
              <span className="text-accent uppercase tracking-[10px] text-[10px] font-black mb-6 block">Premium Inventory</span>
              <h2 className="text-6xl md:text-8xl font-heading uppercase leading-[0.8] tracking-tighter">
                OUR <br /> <span className="italic opacity-30">COLLECTION.</span>
              </h2>
            </div>
            <div className="flex flex-col items-end gap-6">
              <p className="text-white/40 text-lg md:text-xl font-light italic max-w-sm text-right">
                "Directly from the Bir Billing factory to your cup."
              </p>
              
              {/* Category Filter */}
              <div className="flex bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-500 ${
                      activeCategory === cat 
                        ? 'bg-accent text-black' 
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* 2. PRODUCT GRID */}
      <div className="max-w-[1400px] mx-auto px-[5vw] grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProducts.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            index={index} 
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* 3. BULK SECTION */}
      <div className="max-w-[1400px] mx-auto px-[5vw] mt-40">
        <div className="relative rounded-[60px] bg-white text-black p-12 md:p-24 overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/40 transition-all"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-xl">
              <h4 className="text-5xl md:text-7xl font-heading uppercase leading-[0.8] mb-8">Market <br /><span className="italic opacity-40 leading-normal">Supply.</span></h4>
              <p className="text-black/50 text-xl font-light leading-relaxed">We supply to retailers and wholesalers across the market. Partner with Bir Billing Tea Factory for premium quality.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton>
                <a href="tel:+917018666302" className="px-12 py-6 inline-flex items-center justify-center whitespace-nowrap bg-transparent border border-black text-black rounded-full font-black uppercase text-[10px] md:text-xs tracking-[5px] hover:bg-black hover:text-white transition-all">
                  Call Factory
                </a>
              </MagneticButton>
              <MagneticButton>
                <button 
                  onClick={handleBulkInquiry}
                  className="px-12 py-6 inline-flex items-center justify-center whitespace-nowrap bg-black text-white rounded-full font-black uppercase text-[10px] md:text-xs tracking-[5px] hover:bg-accent hover:text-black transition-all"
                >
                  Bulk Inquiry
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, index, addToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  return (
    <RevealOnScroll delay={index * 0.1}>
      <div className="group relative bg-[#121212] rounded-[40px] overflow-hidden border border-white/5 h-[500px] md:h-[650px] flex flex-col justify-end p-6 md:p-10 cursor-default">
        
        {/* Image Layer */}
        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        {/* Tag Header */}
        <div className="absolute top-10 left-10 z-20">
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[10px] uppercase tracking-widest font-black text-accent">
            {product.tag}
          </span>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full transition-all duration-500">
          <h3 className="text-4xl md:text-6xl font-heading uppercase leading-none mb-6">
            {product.name}
          </h3>

          <p className="text-white/50 text-sm md:text-base mb-8 font-light leading-relaxed max-w-lg">
            {product.desc}
          </p>

          {/* Stats Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {product.stats.map(stat => (
              <span key={stat} className="text-[8px] uppercase tracking-[2px] px-2.5 py-1 bg-white/5 rounded border border-white/5 text-white/40">
                {stat}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-8 border-t border-white/10 pt-8">
            {/* Variant Selector */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Select Size:</span>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.weight}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest border transition-all duration-300 ${
                      selectedVariant.weight === v.weight 
                        ? 'border-accent bg-accent text-black' 
                        : 'border-white/10 text-white/40 hover:border-white/30'
                    }`}
                  >
                    {v.weight}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-accent uppercase tracking-widest font-black mb-1">Retail Price</p>
                <p className="text-4xl md:text-5xl font-heading tracking-tighter">
                  ₹{selectedVariant.price} 
                  <span className="text-xs text-white/30 font-bold uppercase ml-2">/ {selectedVariant.weight}</span>
                </p>
              </div>

              <MagneticButton>
                <button
                  onClick={() => addToCart(product, selectedVariant)}
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
  );
};

export default Products;