
import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
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
        <motion.h1 variants={sectionVariants} className="section-title">About Ryan Parry Designs</motion.h1>
        <motion.p variants={sectionVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We are a passionate web design agency based in Chard, Somerset, dedicated to creating impactful digital experiences that drive results.
        </motion.p>
      </section>

      <motion.section 
        variants={sectionVariants}
        className="grid md:grid-cols-2 gap-12 items-center mb-16"
      >
        <motion.div variants={itemVariants} className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold mb-4 text-foreground">Meet Ryan Parry</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Hello! I'm Ryan, the founder and lead designer at Ryan Parry Designs. With a keen eye for detail and a passion for innovative design, I started this agency to help businesses like yours succeed online. My approach is collaborative and client-focused, ensuring that every project is a true reflection of your brand's identity and goals.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Based in the heart of Somerset, I combine local understanding with global design trends to deliver websites that are not only beautiful but also functional and effective. I believe great design is about problem-solving and creating seamless user experiences.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="order-1 md:order-2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-secondary to-accent p-1">
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c00d81fb-9aeb-496a-b910-ae4d0317936d/e213a7bdaddeaec54f2e49f19ff66f2a.jpg" 
              alt="Ryan Parry, Founder of Ryan Parry Designs" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-10 text-foreground">Our Design Approach</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg shadow-lg text-center">
            <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Purpose-Driven Design</h3>
            <p className="text-muted-foreground text-sm">
              We focus on understanding your objectives to create designs that achieve specific business goals and resonate with your target audience.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg shadow-lg text-center">
            <Lightbulb className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Creative Innovation</h3>
            <p className="text-muted-foreground text-sm">
              We blend creativity with the latest design trends and technologies to deliver unique and memorable digital experiences.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg shadow-lg text-center">
            <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Collaborative Process</h3>
            <p className="text-muted-foreground text-sm">
              Your input is invaluable. We work closely with you throughout the design process, ensuring transparency and alignment.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      <motion.section variants={sectionVariants} className="text-center bg-primary/50 p-10 rounded-lg shadow-xl">
         <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">Let's Build Something Amazing Together</h2>
         <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
           Whether you're starting a new venture or looking to revamp your existing online presence, we're here to help you succeed.
         </p>
         <Link to="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Get in Touch
            </Button>
          </Link>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;
