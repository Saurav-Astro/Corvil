import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, AppWindow, Brain, Boxes, PhoneCall } from 'lucide-react';
import { HoverEffect } from '@/components/ui/hover-effect';

const services = [
  {
    title: 'Website',
    description: 'Responsive, fast, and SEO-friendly marketing and content sites.',
    icon: Globe,
  },
  {
    title: 'Web App',
    description: 'Production-ready SPAs and dashboards with robust backends.',
    icon: AppWindow,
  },
  {
    title: 'ML Model Training & Chatbot',
    description: 'Fine-tuned models and conversational agents for real workflows.',
    icon: Brain,
  },
  {
    title: 'ERP System',
    description: 'Custom ERP modules to streamline operations and reporting.',
    icon: Boxes,
  },
  {
    title: 'Calling Bot',
    description: 'Voice-enabled automation for outreach, reminders, and support.',
    icon: PhoneCall,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-black/30 via-black/45 to-black/60"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" />
      </div>
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-3">
            What We Build
          </h2>
          <div className="flex justify-center">
            <span className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </motion.div>

        <HoverEffect
          items={services.map((s) => ({
            title: s.title,
            description: s.description,
            link: '/contact',
          }))}
          className="py-0"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
