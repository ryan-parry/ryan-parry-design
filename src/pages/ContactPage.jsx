
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("2fk-fHIdzexk272yB");
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'hello@ryan-parry.co.uk',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        "ryan parry design",
        "template_6l1y7b9",
        templateParams,
        "2fk-fHIdzexk272yB"
      );

      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. We'll get back to you soon.",
        variant: 'default',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: 'Error Sending Message',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } }
  };
  
  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } }
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
        <motion.h1 variants={pageVariants} className="section-title">Get In Touch</motion.h1>
        <motion.p variants={pageVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our services, want to discuss a project, or just want to say hello, feel free to reach out.
        </motion.p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div variants={itemVariants} className="space-y-8 bg-card p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
          
          <div className="flex items-start space-x-4">
            <MapPin className="h-8 w-8 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Our Office</h3>
              <p className="text-muted-foreground">Avishayes Road, Chard Town, Chard, Somerset, TA20 1NZ, UK</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-start space-x-4">
            <Mail className="h-8 w-8 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Email Us</h3>
              <a href="mailto:hello@ryan-parry.co.uk" className="text-muted-foreground hover:text-secondary transition-colors">hello@ryan-parry.co.uk</a>
            </div>
          </div>
          <Separator />
          <div className="flex items-start space-x-4">
            <Phone className="h-8 w-8 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Call Us</h3>
              <a href="tel:+447460912152" className="text-muted-foreground hover:text-secondary transition-colors">+44 7460 912152</a>
            </div>
          </div>
        </motion.div>

        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="space-y-6 bg-card p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
          <div>
            <Label htmlFor="name" className="text-foreground">Full Name</Label>
            <Input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email" className="text-foreground">Email Address</Label>
            <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="message" className="text-foreground">Your Message</Label>
            <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." required rows={5} className="mt-1" />
          </div>
          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <Send className="h-4 w-4" />
                </motion.div>
                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
