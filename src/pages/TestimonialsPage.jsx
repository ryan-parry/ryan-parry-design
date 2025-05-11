
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, UserCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'James Thompson, Owner of The Crown & Anchor Pub',
    quote: "Ryan transformed our traditional pub's online presence beautifully. The new website perfectly captures our historic charm while making it easy for customers to find our daily specials and events. Bookings have increased significantly!",
    rating: 5,
    avatarText: "JT"
  },
  {
    id: 2,
    name: 'Sarah Williams, Director of Somerset Dental Care',
    quote: "Working with Ryan was a pleasure from start to finish. He created a professional, welcoming website that has helped us attract new patients. The online booking system has streamlined our appointment process tremendously.",
    rating: 5,
    avatarText: "SW"
  },
  {
    id: 3,
    name: 'Robert Clarke, Owner of Yeovil Fresh Foods',
    quote: "Our new e-commerce website has revolutionised how we do business. Local customers can now easily browse our fresh produce and place orders for delivery. Ryan understood exactly what we needed.",
    rating: 5,
    avatarText: "RC"
  },
  {
    id: 4,
    name: 'Emma Phillips, Founder of Taunton Yoga Studio',
    quote: "The website Ryan designed for us is simply beautiful. The class booking system works perfectly, and our members love how easy it is to use. It's helped us grow our community significantly.",
    rating: 5,
    avatarText: "EP"
  },
  {
    id: 5,
    name: 'Michael Barnes, Director of Devon Property Solutions',
    quote: "Ryan created a sophisticated property listing platform that's easy for both our team and clients to use. The property search functionality is exactly what we needed. Excellent work!",
    rating: 5,
    avatarText: "MB"
  },
  {
    id: 6,
    name: 'Lucy Henderson, Owner of The Garden Room Café',
    quote: "Our café's website perfectly captures the cozy atmosphere we're known for. The online ordering system has been a game-changer, especially during busy periods. Couldn't be happier!",
    rating: 5,
    avatarText: "LH"
  },
  {
    id: 7,
    name: 'David Mitchell, Manager of Exeter Motors',
    quote: "The virtual showroom Ryan designed for us has transformed how we showcase our vehicles. The website's professional look has definitely helped increase customer trust and enquiries.",
    rating: 5,
    avatarText: "DM"
  },
  {
    id: 8,
    name: 'Catherine Turner, Owner of Somerset Wedding Planning',
    quote: "Our new website beautifully showcases our wedding portfolio. The enquiry system Ryan implemented has helped us capture more leads. The whole process was smooth and professional.",
    rating: 5,
    avatarText: "CT"
  },
  {
    id: 9,
    name: 'Peter Wright, Director of Bridgwater Building Supplies',
    quote: "Ryan modernised our entire online presence. The new product catalogue and order system has made life easier for both our staff and trade customers. Brilliant service!",
    rating: 5,
    avatarText: "PW"
  }
];

const TestimonialsPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
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
        <motion.h1 variants={itemVariants} className="section-title">
          Client Testimonials
        </motion.h1>
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Hear what our clients have to say about their experience working with Ryan Parry Designs.
        </motion.p>
      </section>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={pageVariants}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            className="h-full"
          >
            <Card className="h-full bg-card hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-semibold shadow-md">
                    {testimonial.avatarText || <UserCircle size={32} />}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-sm">{testimonial.name}</h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic flex-grow">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TestimonialsPage;
