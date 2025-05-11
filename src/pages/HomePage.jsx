
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Palette,
  CheckCircle2,
  Rocket,
  Target,
  Award,
  Lightbulb,
  Code,
  Smartphone
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const MotionButton = motion(Button);
const MotionCard = motion(Card);

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 100 } 
    }
  };

  const FeatureCard = ({ icon, title, description, link, linkText }) => (
    <motion.div
      variants={itemVariants}
      className="bg-card p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
    >
      <div className="p-2 bg-secondary/10 rounded-full mb-2 text-secondary">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-3 text-sm flex-grow">{description}</p>
      {link && (
        <Link to={link}>
          <Button variant="outline" size="sm" className="mt-auto group">
            {linkText} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      )}
    </motion.div>
  );

  const ProcessStep = ({ icon, title, description, number }) => (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col items-center text-center p-3"
    >
      <div className="relative">
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold">
          {number}
        </div>
        <div className="p-3 bg-secondary/10 rounded-full text-secondary mb-3">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="pt-14 md:pt-20 pb-6"
    >
      {/* Hero Section */}
      <section className="text-center mb-8 md:mb-12 relative overflow-hidden py-12 md:py-16 min-h-[50vh] flex flex-col justify-center items-center bg-secondary">
        <div className="absolute inset-0 bg-[#FF6B00] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
        <div className="relative z-10 container mx-auto px-3">
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white leading-tight"
          >
            Crafting <span className="text-background">Modern Websites</span>
            <br />
            With Purpose.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-6"
          >
            Ryan Parry Designs is a digital agency in Chard, Somerset, specializing in bespoke web design, branding, and SEO solutions that elevate your online presence.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/portfolio">
              <MotionButton
                size="lg"
                className="bg-white text-[#FF6B00] hover:bg-white/90 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work <Briefcase className="ml-2 h-5 w-5" />
              </MotionButton>
            </Link>
            <Link to="/contact">
              <MotionButton
                size="lg"
                className="bg-transparent text-white hover:bg-white/20 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </MotionButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features/What We Offer Section */}
      <section className="mb-8 md:mb-12">
        <h2 className="section-title">What We Offer</h2>
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
        >
          <FeatureCard 
            icon={<Palette />} 
            title="Creative Web Design" 
            description="Visually stunning and user-friendly websites tailored to your brand."
            link="/services"
            linkText="Our Services"
          />
          <FeatureCard 
            icon={<Briefcase />} 
            title="Diverse Portfolio" 
            description="Explore a range of projects showcasing our design expertise and versatility."
            link="/portfolio"
            linkText="See Projects"
          />
          <FeatureCard 
            icon={<Users />} 
            title="Client Focused" 
            description="We collaborate closely with you to bring your vision to life effectively."
            link="/about"
            linkText="About Us"
          />
          <FeatureCard 
            icon={<MessageSquare />} 
            title="Glowing Testimonials" 
            description="Hear what our satisfied clients have to say about our work and process."
            link="/testimonials"
            linkText="Read Reviews"
          />
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="mb-8 md:mb-12">
        <h2 className="section-title">How We Work</h2>
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-3 md:gap-4"
        >
          <ProcessStep
            icon={<Lightbulb size={24} />}
            title="Discovery"
            description="We learn about your business, goals, and vision"
            number="1"
          />
          <ProcessStep
            icon={<Code size={24} />}
            title="Design & Development"
            description="We create your perfect digital solution"
            number="2"
          />
          <ProcessStep
            icon={<Smartphone size={24} />}
            title="Testing"
            description="Thorough testing across all devices"
            number="3"
          />
          <ProcessStep
            icon={<Rocket size={24} />}
            title="Launch"
            description="Your website goes live with our full support"
            number="4"
          />
        </motion.div>
      </section>

      {/* Latest Work Preview */}
      <section className="mb-8 md:mb-12">
        <h2 className="section-title">Latest Projects</h2>
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-lg">
            <img alt="E-commerce Website Design" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c00d81fb-9aeb-496a-b910-ae4d0317936d/f4df585bcd2e43a15d558c4e8564a421.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white">
                <h3 className="font-semibold">E-commerce Website</h3>
                <p className="text-sm">Modern shopping experience</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-lg">
            <img alt="Restaurant Website Design" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c00d81fb-9aeb-496a-b910-ae4d0317936d/7c148f4f29252c271b32dfc44c09b8e6.webp" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white">
                <h3 className="font-semibold">Restaurant Website</h3>
                <p className="text-sm">Elegant dining experience</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-lg">
            <img alt="Bakery Website Design" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c00d81fb-9aeb-496a-b910-ae4d0317936d/7717ff087b172bc48119a2e24081c36c.webp" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white">
                <h3 className="font-semibold">Local Bakery</h3>
                <p className="text-sm">Artisanal bakery website</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="text-center mt-6">
          <Link to="/portfolio">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="mb-8 md:mb-12">
        <h2 className="section-title">Why Choose Us</h2>
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-3 md:gap-4"
        >
          <motion.div variants={itemVariants} className="flex items-start space-x-3">
            <div className="p-2 bg-secondary/10 rounded-full text-secondary flex-shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Results Driven</h3>
              <p className="text-sm text-muted-foreground">We focus on delivering measurable results that help your business grow.</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start space-x-3">
            <div className="p-2 bg-secondary/10 rounded-full text-secondary flex-shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">Every project undergoes rigorous quality checks before delivery.</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start space-x-3">
            <div className="p-2 bg-secondary/10 rounded-full text-secondary flex-shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">Skilled professionals with years of industry experience.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        variants={containerVariants}
        className="mb-8 md:mb-12"
      >
        <h2 className="section-title">Our Impact By Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <MotionCard variants={statsVariants} className="p-3 text-center">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold text-secondary mb-2">50+</h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </CardContent>
          </MotionCard>
          <MotionCard variants={statsVariants} className="p-3 text-center">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold text-secondary mb-2">98%</h3>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </CardContent>
          </MotionCard>
          <MotionCard variants={statsVariants} className="p-3 text-center">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold text-secondary mb-2">10+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </CardContent>
          </MotionCard>
          <MotionCard variants={statsVariants} className="p-3 text-center">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold text-secondary mb-2">24/7</h3>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </CardContent>
          </MotionCard>
        </div>
      </motion.section>
      
      {/* Call to Action */}
      <motion.section
        variants={itemVariants}
        className="bg-gradient-to-r from-secondary to-accent text-primary-foreground p-6 md:p-8 rounded-xl shadow-xl text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-base md:text-lg mb-6 max-w-xl mx-auto">
          Let's discuss how we can help your business shine online.
        </p>
        <Link to="/contact">
          <MotionButton
            variant="outline"
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground hover:border-primary-foreground/90 transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Free Quote
          </MotionButton>
        </Link>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
