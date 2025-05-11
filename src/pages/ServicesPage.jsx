
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Palette, Code, Search, PenTool, BarChart3, ShoppingCart } from 'lucide-react';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';

    const services = [
      {
        icon: <Palette className="h-10 w-10 text-secondary mb-4" />,
        title: 'Web Design',
        description: 'We create visually stunning, user-centric websites that capture your brand essence and engage your audience. From initial concept to final launch, we focus on intuitive navigation and responsive design for all devices.',
      },
      {
        icon: <Code className="h-10 w-10 text-secondary mb-4" />,
        title: 'Web Development',
        description: 'Our development team builds robust, scalable, and high-performance websites using the latest technologies. We specialize in custom solutions, e-commerce platforms, and content management systems.',
      },
      {
        icon: <PenTool className="h-10 w-10 text-secondary mb-4" />,
        title: 'Branding & Identity',
        description: 'We help you define and articulate your brand identity. This includes logo design, color palettes, typography, and brand guidelines that create a cohesive and memorable brand experience.',
      },
      {
        icon: <Search className="h-10 w-10 text-secondary mb-4" />,
        title: 'SEO Optimization',
        description: 'Improve your online visibility and rank higher in search engine results. We offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, and content strategy.',
      },
      {
        icon: <ShoppingCart className="h-10 w-10 text-secondary mb-4" />,
        title: 'E-commerce Solutions',
        description: 'Launch or grow your online store with our custom e-commerce solutions. We design and develop secure, user-friendly online shops with features like product management, payment gateway integration, and inventory control.',
      },
      {
        icon: <BarChart3 className="h-10 w-10 text-secondary mb-4" />,
        title: 'Analytics & Reporting',
        description: 'Understand your website\'s performance and user behavior with our analytics services. We set up tracking, analyze data, and provide actionable insights to help you make informed decisions and optimize your online strategy.',
      },
    ];

    const ServicesPage = () => {
      const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut', staggerChildren: 0.1 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } }
      };

      const cardVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
        hover: { scale: 1.03, y: -5, transition: { duration: 0.2 } }
      };

      return (
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pt-24 md:pt-32 pb-16"
        >
          <section className="text-center mb-16">
            <motion.h1 variants={pageVariants} className="section-title">Our Services</motion.h1>
            <motion.p variants={pageVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive suite of digital services designed to elevate your brand and achieve your business objectives.
            </motion.p>
          </section>

          <motion.div 
            variants={pageVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" initial="initial" animate="animate">
                <Card className="h-full flex flex-col text-center items-center p-6 bg-card hover:bg-primary/30 transition-colors duration-300">
                  <CardHeader className="items-center">
                    {service.icon}
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.section 
            variants={pageVariants}
            className="mt-20 text-center bg-gradient-to-r from-secondary to-accent text-primary-foreground p-10 md:p-16 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a Specific Need?</h2>
            <p className="text-lg mb-6 max-w-xl mx-auto">
              If you don't see exactly what you're looking for, get in touch! We love a new challenge and can often tailor our services to meet unique requirements.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Discuss Your Project
              </Button>
            </Link>
          </motion.section>
        </motion.div>
      );
    };

    export default ServicesPage;
  