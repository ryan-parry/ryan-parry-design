
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      <main className="flex-grow container mx-auto px-2 sm:px-3 lg:px-4"> {/* Further reduced padding */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
