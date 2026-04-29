import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import CallButton from './CallButton';
import FloatingWhatsApp from './FloatingWhatsApp';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <div className="fixed bottom-8 right-8 z-[2000] flex flex-col items-end gap-4">
        <FloatingWhatsApp />
        <CallButton />
      </div>
    </>
  );
};

export default Layout;
