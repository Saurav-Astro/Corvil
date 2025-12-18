import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, AppWindow, Brain, Boxes, PhoneCall } from 'lucide-react';

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
    <section ref={ref} className="section-padding bg-gradient-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase block mb-6">
            Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            What We Build
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 border border-border bg-background/40 hover:bg-background/60 transition-colors duration-300"
            >
              <s.icon className="w-7 h-7 text-accent mb-4" />
              <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
