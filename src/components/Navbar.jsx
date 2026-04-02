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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ y: -2 }}
              className="relative"
            >
              <div className="font-heading text-xl md:text-3xl uppercase tracking-[0.05em] transition-all duration-500 flex flex-col items-start leading-[0.9] group-hover:opacity-80">
                <span className="text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">
                  BIR BILLING
                </span>
                <span className="text-text-light">
                  TEA.
                </span>
              </div>
              <motion.div
                className="absolute -inset-2 bg-accent/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              />
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