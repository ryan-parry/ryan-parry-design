
    import React, { Suspense, lazy } from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import { Toaster } from '@/components/ui/toaster';
    import Layout from '@/components/Layout';
    import { motion } from 'framer-motion';
    import { Loader2 } from 'lucide-react';

    const HomePage = lazy(() => import('@/pages/HomePage'));
    const AboutPage = lazy(() => import('@/pages/AboutPage'));
    const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
    const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
    const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));
    const ContactPage = lazy(() => import('@/pages/ContactPage'));

    const PageLoader = () => (
      <div className="flex justify-center items-center h-screen w-screen fixed inset-0 bg-background/80 backdrop-blur-sm z-[9999]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="h-12 w-12 text-secondary" />
        </motion.div>
      </div>
    );

    function App() {
      return (
        <Router>
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </Layout>
          <Toaster />
        </Router>
      );
    }

    export default App;
  