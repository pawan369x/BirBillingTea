import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Leaf, 
  Users, 
  Award, 
  HelpCircle, 
  Coffee, 
  ArrowRight,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const teamMembers = [
  {
    name: "Arpit Soni",
    role: "CEO & Founder",
    category: "leadership",
    bio: "Arpit Soni is the visionary CEO of the Bir Billing Tea Factory. With a deep passion for Himalayan orthodox tea, he leads our global expansion, marketing, and strategic partnerships, bringing the rich heritage of Kangra Valley to tea enthusiasts worldwide.",
    image: "/assets/team_arpit_soni.png",
    stat: "CEO & Founder",
    quote: "We are not just selling tea; we are sharing a century of Himalayan heritage and empowering our local farming communities.",
    email: "arpit.soni@birbillingtea.com",
    favTea: "Vintage Black",
    origin: "Bir, HP",
    story: "Arpit starts his day reviewing customer feedback and matching regional batch quality. He spends his afternoons collaborating with global distributors and exploring new sustainable packaging designs."
  },
  {
    name: "Amit Dwibedi",
    role: "General Manager",
    category: "leadership",
    bio: "Amit Dwibedi is the General Manager at the Bir Billing Tea Factory. With over 20 years of expert management and agricultural leadership, he is a core pillar of our processing efficiency, grower outreach, and operational standards.",
    image: "/assets/team_amit_dwibedi.png",
    stat: "20+ Yrs Experience",
    quote: "Quality orthodox tea requires a fine balance of temperature, timing, and dedication.",
    email: "amit.dwibedi@birbillingtea.com",
    favTea: "Green Tea",
    origin: "Uttarakhand",
    story: "Amit starts his day inspecting the wood-fired hearths and orthodox rolling pressure. He guides our junior staff and ensures all export quality parameters are met before packaging."
  },
  {
    name: "Sh. Kalyan Singh",
    role: "Cooperative President & Director",
    category: "leadership",
    bio: "With over 35 years of agrarian leadership in the Kangra Valley, Sh. Kalyan Singh manages the cooperative operations. He has dedicated his life to organizing and empowering local small-scale tea growers, ensuring fair compensation and sustainable practices.",
    image: "/assets/team_kalyan_singh.png",
    stat: "35+ Yrs Experience",
    quote: "Our strength lies in the hands of the 500+ mountain families who pluck each leaf with pride.",
    email: "kalyan.singh@birbillingtea.com",
    favTea: "Vintage Black",
    origin: "Bir Valley, HP",
    story: "Sh. Kalyan Singh starts his day at 5:00 AM, walking through the cooperative gardens to meet with the early-morning pluckers. He coordinates logistics for our 500+ growers and ensures our organic certification standards are met daily."
  },
  {
    name: "Dr. Aarav Sharma",
    role: "Master Tea Blender & Sommelier",
    category: "craft",
    bio: "Dr. Sharma holds a Ph.D. in Food Science and is the architect of our orthodox flavor profiles. He carefully inspects each harvest lot, tasting and blending to ensure the signature floral and sweet orthodox character is consistent across every batch.",
    image: "/assets/team_aarav_sharma.png",
    stat: "15+ Yrs Blending",
    quote: "Tea tasting is an art of patience. The mountain air of Bir gives our leaves an unmatched crispness.",
    email: "aarav.sharma@birbillingtea.com",
    favTea: "Himalayan Green",
    origin: "Palampur, HP",
    story: "Dr. Aarav starts with raw leaf grading at 8:00 AM, measuring moisture levels and checking leaf integrity. His afternoons are spent in our state-of-the-art cupping room, running sensory evaluations on new flushes."
  },
  {
    name: "Smt. Meera Devi",
    role: "Lead Harvester & Farmer Liaison",
    category: "field",
    bio: "Meera Devi represents the heartbeat of our cooperative, coordinating harvesting schedules and standardizing organic plucking techniques. She is a pioneer of women-led agricultural community models in the region.",
    image: "/assets/team_meera_devi.png",
    stat: "500+ Farmers Managed",
    quote: "A perfect orthodox brew begins with the 'two leaves and a bud' standard we strictly maintain.",
    email: "meera.devi@birbillingtea.com",
    favTea: "Leafy Bliss",
    origin: "Billing Foothills, HP",
    story: "Meera Devi coordinates harvest rotations across different mountain elevations to optimize quality. In the afternoon, she leads training workshops on bio-composting and organic pest management for small growers."
  },
  {
    name: "Rajesh Thakur",
    role: "Factory Production Head",
    category: "craft",
    bio: "Rajesh oversees the vintage orthodox processing rollers and drying hearths inside the Bir factory. He ensures that modern quality standards are met while preserving the delicate, time-consuming orthodox curing techniques.",
    image: "/assets/team_rajesh_thakur.png",
    stat: "1200 Tons Processed",
    quote: "Maintaining orthodox machines is about keeping history alive. Every roll shapes the flavor.",
    email: "rajesh.thakur@birbillingtea.com",
    favTea: "Vintage Black (Double Brewed)",
    origin: "Kangra Valley, HP",
    story: "Rajesh monitors the traditional wood-fired drying hearths and the pressure of our heavy rolling tables. He handles the delicate curing process, balancing temperature and humidity inside our heritage curing chambers."
  }
];


const faqCategories = [
  { id: 'all', name: 'All Questions', icon: <HelpCircle size={16} /> },
  { id: 'tea', name: 'Tea & Terroir', icon: <Leaf size={16} /> },
  { id: 'coop', name: 'Cooperative', icon: <Users size={16} /> },
  { id: 'brewing', name: 'Brewing & Care', icon: <Coffee size={16} /> },
  { id: 'orders', name: 'Orders & Wholesale', icon: <TrendingUp size={16} /> }
];

const faqs = [
  {
    category: 'tea',
    question: "What makes Kangra Orthodox Tea different from ordinary tea?",
    answer: "Kangra Tea holds a prestigious Protected Geographical Indication (GI) tag. The unique Dhauladhar microclimate (high altitude, rich soil, and pristine mountain water) creates a lighter, sweet-undertoned beverage. 'Orthodox' means we process the whole tea leaves manually and mechanically with zero crushing, tearing, or curling (CTC), preserving all natural essential oils, antioxidants, and a distinct floral aroma."
  },
  {
    category: 'tea',
    question: "At what altitude is your tea grown?",
    answer: "Our tea gardens are situated in and around Bir Billing at an altitude of approximately 1,300 to 1,500 meters (4,200 to 5,000 feet) above sea level. This high-altitude slow growth concentrates the catechins and flavor compounds in the tea leaves, giving them their characteristic premium quality."
  },
  {
    category: 'coop',
    question: "How does the cooperative model function at Bir Billing Tea Factory?",
    answer: "We represent a cooperative union of over 500+ local small-scale tea farmers. By pooling resources, farmers bring their daily harvest directly to our cooperative processing unit, avoiding middle-men. 100% of our profits are shared back through fair wages, farmer health initiatives, agricultural subsidies, and modern ecological training."
  },
  {
    category: 'coop',
    question: "Are your teas organic and pesticide-free?",
    answer: "Yes, our cooperative growers follow traditional, organic biodynamic farming practices. The cold climate and natural high-altitude isolation naturally suppress major pests, allowing us to maintain a zero-chemical-pesticide standard. We utilize locally sourced organic composts to enrich the Himalayan soil."
  },
  {
    category: 'brewing',
    question: "What is the best way to brew Bir Billing Orthodox Green Tea?",
    answer: "For green tea, avoid boiling water as it burns the delicate leaves and makes them bitter. Heat fresh water to about 80°C (176°F). Add 1 teaspoon (approx. 2g) of tea leaves per cup. Pour water and steep for exactly 2-3 minutes. Strain and enjoy the natural sweet aroma without sugar or milk."
  },
  {
    category: 'brewing',
    question: "How should I store orthodox whole leaf teas?",
    answer: "Whole leaf orthodox tea is sensitive to light, moisture, heat, and strong odors. Store your tea in a clean, airtight container (preferably dark glass, ceramic, or tin) in a cool, dark cupboard. Do not store tea in the refrigerator or near spices."
  },
  {
    category: 'orders',
    question: "What are your minimum quantities for bulk orders?",
    answer: "Our retail pricing applies to standard packaging (100g, 250g, 500g) via our website. Bulk wholesale quantities begin at 500kg, 700kg, and 1000kg+ tiers. If you are looking for distributor volumes, please visit our Bulk Orders page or directly contact our factory dealer at +91 70186 66302."
  },
  {
    category: 'orders',
    question: "Do you supply custom packaging or white labeling for cafes and brands?",
    answer: "Yes, for master dealer tiers (1000kg+) we provide customized orthodox blending, bulk vacuum bags, and custom cooperative branding solutions. Please contact our cooperative office at birbillingtea@gmail.com to request detailed specifications."
  }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-white/5 py-6">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center text-left text-white hover:text-accent transition-colors py-2 group cursor-pointer"
      >
        <span className="font-heading text-lg md:text-xl font-bold pr-6 group-hover:translate-x-1 transition-transform">
          {faq.question}
        </span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:border-accent group-hover:bg-accent/10 transition-all">
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 text-gray-400 leading-[1.8] text-base font-normal max-w-4xl">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Team = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTeamCategory, setActiveTeamCategory] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const teamCategories = [
    { id: 'all', name: 'All Leaders', icon: <Users size={16} /> },
    { id: 'leadership', name: 'Leadership & Heritage', icon: <Award size={16} /> },
    { id: 'craft', name: 'Tea Craft & Blending', icon: <Coffee size={16} /> },
    { id: 'field', name: 'Field & Community', icon: <Leaf size={16} /> }
  ];

  // Filtered FAQ
  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Filtered Team Members
  const filteredTeamMembers = useMemo(() => {
    return teamMembers.filter(member => {
      return activeTeamCategory === 'all' || member.category === activeTeamCategory;
    });
  }, [activeTeamCategory]);

  const handleToggleFAQ = (idx) => {
    setOpenFAQIndex(prevIndex => prevIndex === idx ? null : idx);
  };

  return (
    <div className="pt-24 pb-24 md:pt-32 md:pb-40 min-h-screen bg-bg-dark text-text-light relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-[5vw] relative z-10">
        
        {/* 1. HERO SECTION */}
        <RevealOnScroll direction="up">
          <div className="text-center mb-24">
            <span className="uppercase tracking-[6px] text-accent block mb-4 font-bold text-sm">The Faces Behind the Brew</span>
            <h1 className="font-heading text-5xl md:text-[4.5rem] leading-[1] text-text-light uppercase tracking-tighter">
              Meet Our <span className="italic text-accent">Cooperative Team</span>
            </h1>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-body">
              Behind each cup of Bir Billing Orthodox Tea is a close-knit group of agricultural leaders, master blenders, and 500+ mountain growers dedicated to heritage quality.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-8 opacity-50"></div>
          </div>
        </RevealOnScroll>

        {/* TEAM CATEGORY FILTER */}
        <RevealOnScroll direction="up">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-16 shadow-2xl relative">
            <div className="flex flex-wrap gap-3 items-center justify-center">
              {teamCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTeamCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-widest font-black transition-all cursor-pointer border ${
                    activeTeamCategory === cat.id
                      ? 'bg-accent text-bg-dark border-accent shadow-[0_4px_15px_rgba(212,175,55,0.3)]'
                      : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:bg-white/10 hover:border-white/10'
                  }`}
                >
                  {cat.icon}
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* 2. TEAM GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {filteredTeamMembers.map((member, idx) => (
            <RevealOnScroll key={idx} direction={idx % 2 === 0 ? "right" : "left"} delay={idx * 0.1}>
              <div className="group relative rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-accent/40 p-8 md:p-10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] hover:-translate-y-2 flex flex-col justify-between h-full overflow-hidden">
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div>
                  {/* Photo & Identity */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-8">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-[2rem] overflow-hidden border border-white/10 flex-shrink-0 relative bg-white/5">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-accent/20 text-accent font-heading text-4xl">${member.name.split(' ').map(n=>n[0]).join('')}</div>`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] tracking-[3px] uppercase font-bold text-accent px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                        {member.stat}
                      </span>
                      <h3 className="font-heading text-2xl md:text-3xl text-white font-bold mt-3 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-400 group-hover:text-gray-300 leading-[1.8] text-base mb-8 transition-colors">
                    {member.bio}
                  </p>
                </div>

                {/* Quote & CTA */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <p className="italic text-accent/80 text-sm mb-6 font-heading leading-relaxed relative pl-4 before:content-['“'] before:absolute before:left-0 before:top-0 before:text-2xl before:text-accent/30">
                    {member.quote}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => setSelectedMember(member)}
                      className="text-white/60 hover:text-accent flex items-center gap-2 text-xs uppercase tracking-widest font-black transition-colors cursor-pointer"
                    >
                      Read Story <ArrowRight size={12} />
                    </button>
                    <div className="text-white/25 group-hover:text-accent/50 transition-colors">
                      <Award size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* 3. COOPERATIVE STATS CALLOUT */}
        <RevealOnScroll direction="up">
          <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-[3rem] p-10 md:p-16 mb-36 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent)] pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">
                Owned by Farmers. <span className="italic text-accent">Nurtured by Tradition.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10 font-body">
                Our cooperative model ensures that profits from our premium orthodox tea bypass middlemen and are funneled directly back to the local growers. This sustains the livelihood of mountain communities across Himachal Pradesh.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <Users size={24} />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white mb-1">500+ Organic Farmers</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Livelihoods Supported</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white mb-1">GI Certified Origin</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Protected Kangra Terroir</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <Coffee size={24} />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white mb-1">100% Orthodox Cured</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Whole Leaf Process</p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 4. ADVANCED FAQ SECTION */}
        <RevealOnScroll direction="up">
          <div className="mb-24">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="uppercase tracking-[6px] text-accent block mb-4 font-bold text-sm">Knowledge Hub</span>
              <h2 className="font-heading text-4xl md:text-[3.5rem] leading-[1.1] text-text-light uppercase tracking-tighter mb-4">
                Frequently Asked <span className="italic text-accent">Questions</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto text-base">
                Explore in-depth details regarding our cooperative farming, the orthodox process, brewing tips, and dealer guidelines.
              </p>
            </div>

            {/* Live Search & Categories Container */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-12 shadow-2xl relative">
              <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
                
                {/* Category Filters */}
                <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start w-full lg:w-auto">
                  {faqCategories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setOpenFAQIndex(null);
                      }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs uppercase tracking-widest font-black transition-all cursor-pointer border ${
                        activeCategory === cat.id
                          ? 'bg-accent text-bg-dark border-accent shadow-[0_4px_15px_rgba(212,175,55,0.3)]'
                          : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:bg-white/10 hover:border-white/10'
                      }`}
                    >
                      {cat.icon}
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full lg:w-80">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setOpenFAQIndex(null);
                    }}
                    placeholder="Search questions..."
                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent/60 focus:bg-white/10 transition-all font-body"
                  />
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

              </div>
            </div>

            {/* Accordion FAQ List */}
            <div className="max-w-4xl mx-auto">
              {filteredFAQs.length > 0 ? (
                <div className="border-t border-white/5">
                  {filteredFAQs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      faq={faq}
                      isOpen={openFAQIndex === index}
                      toggleOpen={() => handleToggleFAQ(index)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border border-dashed border-white/10 rounded-3xl bg-white/5">
                  <HelpCircle size={48} className="text-accent/50 mx-auto mb-4" />
                  <h4 className="font-heading text-xl text-white font-semibold mb-2">No matching questions found</h4>
                  <p className="text-gray-500 text-sm max-w-sm mx-auto">
                    We couldn't find any questions matching "{searchQuery}" in this category. Try adjusting your search query or switching categories.
                  </p>
                </div>
              )}
            </div>

            {/* Expert Support CTA */}
            <div className="mt-20 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 max-w-3xl mx-auto">
                <div className="text-left sm:max-w-md">
                  <h4 className="font-heading text-lg md:text-xl text-white font-bold mb-1">
                    Still have questions about our orthodox tea?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Connect directly with our factory office or dealer to resolve wholesale, export, or licensing queries.
                  </p>
                </div>
                <a
                  href="https://wa.me/917018666302?text=Hello%2C%20I%20have%20some%20questions%20regarding%20Bir%20Billing%20Tea."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-accent text-bg-dark font-black text-xs uppercase tracking-widest px-6 py-4 rounded-full hover:bg-accent-hover transition-all flex-shrink-0 cursor-pointer shadow-lg hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                >
                  Contact Tea Expert <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </RevealOnScroll>

      </div>

      {/* 5. INTERACTIVE STORY MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {/* Modal Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-[#121212] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all cursor-pointer"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Image */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] overflow-hidden border border-white/10 flex-shrink-0 relative bg-white/5 shadow-2xl">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-accent/20 text-accent font-heading text-5xl">${selectedMember.name.split(' ').map(n=>n[0]).join('')}</div>`;
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center md:text-left">
                  <span className="text-[10px] tracking-[3px] uppercase font-bold text-accent px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                    {selectedMember.stat}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl text-white font-bold mt-4 mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-6">
                    {selectedMember.role}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 border-t border-b border-white/5 py-4 text-left">
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase tracking-wider">Origin</span>
                      <span className="text-white font-semibold text-sm">{selectedMember.origin}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase tracking-wider">Favorite Blend</span>
                      <span className="text-accent font-semibold text-sm">{selectedMember.favTea}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm mb-6 font-body text-left">
                    {selectedMember.bio}
                  </p>

                  <h5 className="font-heading text-xs uppercase tracking-widest text-white/50 mb-3 text-left">A Day in the Life</h5>
                  <p className="text-gray-400 leading-relaxed text-sm italic font-body text-left mb-8">
                    "{selectedMember.story}"
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-white/5">
                    <a 
                      href={`mailto:${selectedMember.email}`} 
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent text-bg-dark font-black text-xs uppercase tracking-widest px-6 py-4 rounded-full hover:bg-accent-hover transition-all cursor-pointer shadow-lg hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                    >
                      <Mail size={14} /> Send Email
                    </a>
                    <button 
                      onClick={() => setSelectedMember(null)}
                      className="text-white/40 hover:text-white text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
                    >
                      Close Story
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
