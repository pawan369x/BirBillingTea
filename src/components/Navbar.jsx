import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Leaf, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import WhatsAppModal from './WhatsAppModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Heritage', path: '/heritage' },
    { name: 'Premium Teas', path: '/premium-teas' },
    { name: 'About Us', path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled || location.pathname !== '/'
          ? 'py-4 bg-bg-dark/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl'
          : 'py-10 bg-transparent'
          }`}
      >
        <div className="flex justify-between items-center max-w-[1600px] mx-auto px-[6vw]">

          {/* Brand Logo with Parallax effect */}
          <Link to="/" className="relative z-50 group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -2, scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <svg width="240" height="130" viewBox="0 0 130 70" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-500 group-hover:drop-shadow-[0_0_24px_rgba(212,175,55,0.8)]">
                {/* Mountain peaks */}
                <path d="M28 38 L38 20 L48 38" fill="none" stroke="#D4AF37" strokeWidth="2.4" strokeLinejoin="round"/>
                <path d="M36 38 L48 16 L60 38" fill="none" stroke="#D4AF37" strokeWidth="2.4" strokeLinejoin="round"/>
                <path d="M46 38 L56 24 L66 38" fill="none" stroke="#D4AF37" strokeWidth="2.4" strokeLinejoin="round"/>
                {/* Tea leaf branch */}
                <path d="M52 34 Q62 28 72 32" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
                <path d="M56 32 Q60 26 65 30" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M62 30 Q67 24 71 28" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M66 30 Q72 26 75 31" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
                {/* Text */}
                <text x="48" y="52" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fontWeight="bold" fill="#D4AF37" letterSpacing="2.5">BIR BILLING</text>
                <text x="48" y="62" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fill="#D4AF37" letterSpacing="4">TEA.</text>
              </svg>
            </motion.div>
          </Link>

          {/* Luxury Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-12 list-none">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`relative text-[13px] tracking-[0.2em] uppercase font-semibold no-underline transition-all duration-300 hover:text-accent ${location.pathname === link.path ? 'text-accent' : 'text-text-light/70'
                    }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute -bottom-3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Action Hub */}
          <div className="flex items-center gap-6">
            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="relative overflow-hidden group px-8 py-3 bg-accent rounded-full transition-all duration-500"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />

                <div className="relative flex items-center gap-3 text-bg-dark font-black text-xs tracking-tighter">
                  <ShoppingBag size={16} strokeWidth={2.5} />
                  <span className="hidden sm:inline">ESTORE SHOP</span>
                  <ChevronRight size={14} className="opacity-50 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            </MagneticButton>


            <button
              className="lg:hidden relative z-50 p-2 text-text-light hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <X size={28} strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                    <Menu size={28} strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>


      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg-dark/98 backdrop-blur-2xl flex items-center justify-center z-[990] lg:hidden"
          >

            <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
              <Leaf className="absolute top-10 -left-10 text-accent rotate-45" size={300} />
              <Leaf className="absolute bottom-10 -right-10 text-accent -rotate-12" size={400} />
            </div>

            {/* Logo in mobile menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute top-8 left-1/2 -translate-x-1/2"
            >
              <img
                src="/assets/logo1.png"
                alt="Logo"
                className="h-36 w-auto"
                style={{ mixBlendMode: 'screen' }}
              />
            </motion.div>

            <nav className="relative flex flex-col items-center gap-8 md:gap-10 pt-[10vh]">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tighter text-text-light hover:text-accent transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {isModalOpen && (
          <WhatsAppModal
            productName="Bir Tea Organic Selection"
            price={600}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );

};



export default Navbar;