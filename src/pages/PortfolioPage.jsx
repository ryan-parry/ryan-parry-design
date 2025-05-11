
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { ExternalLink, Eye } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    category: 'Web Design & Development',
    shortDescription: 'A complete overhaul of an online retail store for enhanced user experience and sales.',
    longDescription: 'This project involved a full redesign and development of an e-commerce platform. We focused on creating an intuitive user journey, modernizing the visual aesthetic, and optimizing for mobile conversions. Key features include a streamlined checkout process, advanced product filtering, and integration with various payment gateways.',
    tags: ['React', 'Node.js', 'Stripe', 'UX/UI'],
    liveLink: '#'
  },
  {
    id: 2,
    title: 'Restaurant Website',
    category: 'Web Design',
    shortDescription: 'A modern website for a local restaurant showcasing their menu and ambiance.',
    longDescription: 'Created an elegant and user-friendly website for a local restaurant. The design focuses on showcasing their unique atmosphere, menu offerings, and making reservations easy. Features include an online booking system, interactive menu, and integration with food delivery platforms.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
    liveLink: '#'
  },
  {
    id: 3,
    title: 'Fitness App UI/UX',
    category: 'UI/UX Design',
    shortDescription: 'Designed an intuitive and visually appealing interface for a fitness tracking mobile application.',
    longDescription: 'This project focused on the UI/UX design for a new fitness tracking app. We conducted user research, created wireframes and prototypes, and delivered a complete set of high-fidelity mockups and design specifications. The design prioritizes ease of use and motivational elements.',
    tags: ['Figma', 'User Research', 'Prototyping', 'Mobile UI'],
    liveLink: '#'
  },
  {
    id: 4,
    title: 'Local Bakery Website',
    category: 'Web Design & Branding',
    shortDescription: 'A charming website for a local bakery, showcasing their products and story.',
    longDescription: 'Developed a warm and inviting website for a beloved local bakery. The site features beautiful photography of their baked goods, an easy-to-navigate menu, online ordering capabilities, and information about the bakery\'s history. The branding was also refreshed to reflect their artisanal quality.',
    tags: ['WordPress', 'WooCommerce', 'Branding', 'Photography'],
    liveLink: '#'
  }
];

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut', staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }
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
        <motion.h1 variants={pageVariants} className="section-title">Our Portfolio</motion.h1>
        <motion.p variants={pageVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Take a look at some of the projects we're proud to have worked on. Each one is a testament to our commitment to quality and innovation.
        </motion.p>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
        <motion.div 
          variants={pageVariants}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {portfolioItems.map((item) => (
            <DialogTrigger key={item.id} asChild onClick={() => setSelectedProject(item)}>
              <motion.div variants={cardVariants} whileHover="hover" initial="initial" animate="animate">
                <Card className="overflow-hidden h-full flex flex-col cursor-pointer group">
                  <div className="relative h-60 w-full overflow-hidden">
                    {item.id === 1 && (
                      <img alt="Modern e-commerce website design showing product catalog, shopping cart, and checkout interface" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c00d81fb-9aeb-496a-b910-ae4d0317936d/f4df585bcd2e43a15d558c4e8564a421.jpg" />
                    )}
                    {item.id === 2 && (
                      <img alt="Elegant restaurant website design showing menu and reservation interface" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c00d81fb-9aeb-496a-b910-ae4d0317936d/7c148f4f29252c271b32dfc44c09b8e6.webp" />
                    )}
                    {item.id === 3 && (
                      <img alt="Modern fitness app interface design" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1532288744908-b37abee2ed71" />
                    )}
                    {item.id === 4 && (
                      <img alt="Artisanal bakery website design" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c00d81fb-9aeb-496a-b910-ae4d0317936d/7717ff087b172bc48119a2e24081c36c.webp" />
                    )}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded">
                      {item.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-secondary transition-colors">{item.title}</CardTitle>
                    <CardDescription>{item.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      View Details <Eye className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </DialogTrigger>
          ))}
        </motion.div>

        {selectedProject && (
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.category}</DialogDescription>
            </DialogHeader>
            <div className="my-4 max-h-[60vh] overflow-y-auto pr-2">
              <div className="aspect-video w-full rounded-md overflow-hidden mb-4">
                {selectedProject.id === 1 && (
                  <img alt="Detailed view of e-commerce platform interface showing product listings and checkout" className="w-full h-full object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c00d81fb-9aeb-496a-b910-ae4d0317936d/f4df585bcd2e43a15d558c4e8564a421.jpg" />
                )}
                {selectedProject.id === 2 && (
                  <img alt="Detailed view of restaurant website showing menu and ambiance" className="w-full h-full object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c00d81fb-9aeb-496a-b910-ae4d0317936d/7c148f4f29252c271b32dfc44c09b8e6.webp" />
                )}
                {selectedProject.id === 3 && (
                  <img alt="Detailed view of fitness app interface" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532288744908-b37abee2ed71" />
                )}
                {selectedProject.id === 4 && (
                  <img alt="Detailed view of bakery website" className="w-full h-full object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c00d81fb-9aeb-496a-b910-ae4d0317936d/7717ff087b172bc48119a2e24081c36c.webp" />
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <DialogFooter className="sm:justify-between">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              {selectedProject.liveLink && selectedProject.liveLink !== '#' && (
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                  <Button>
                    Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              )}
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </motion.div>
  );
};

export default PortfolioPage;
