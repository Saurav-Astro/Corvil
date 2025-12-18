import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HoverEffect } from '@/components/ui/hover-effect';

const Index = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const serveRef = useRef(null);
  const glanceRef = useRef(null);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/60 min-h-screen"
    >
      <Navigation />
      <HeroSection />

      {/* Philosophy */}
      <section ref={ref} className="section-padding bg-black/45">
        <div className="container-narrow text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] text-muted-foreground uppercase block mb-6"
          >
            The Coreveil Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl text-foreground mb-6"
          >
            Engineering Efficiency, Not Just Software.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="accent-line" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Many tech companies sell buzzwords. At Coreveil, we sell performance. We bridge the gap between complex technology and real-world business operations, providing foundational infrastructure and advanced AI automation that deliver measurable results.
          </motion.p>
        </div>
      </section>

      {/* Who We Serve */}
      <section ref={serveRef} className="section-padding bg-gradient-to-b from-black/30 via-black/45 to-black/60">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase block mb-6">Who We Serve</span>
          </div>
          <HoverEffect
            items={[
              { title: 'Early-Stage Startups', description: 'Bringing your MVP to life with scalable architecture.', link: '/services' },
              { title: 'Sales-Driven Businesses', description: 'Automating outreach and lead management.', link: '/services' },
              { title: 'Service Companies', description: 'Streamlining client workflows and internal operations.', link: '/services' },
              { title: 'Operations Teams', description: 'Reducing manual overhead through custom automation.', link: '/services' },
            ]}
            className="py-0"
          />
        </div>
      </section>

      {/* At a Glance */}
      <section ref={glanceRef} className="section-padding bg-black/45">
        <div className="container-wide">
          <div className="text-center mb-10">
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase block mb-6">At a Glance: What We Do</span>
          </div>
          <HoverEffect
            items={[
              { title: 'AI Automation', description: 'From voice bots to conversational agents.', link: '/services' },
              { title: 'Software Development', description: 'Web applications and robust backend systems.', link: '/services' },
              { title: 'Tech Strategy', description: 'Consulting and MVP development for rapid scaling.', link: '/services' },
            ]}
            className="py-0"
          />
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-black/45 via-black/60 to-black/75 text-center">
        <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Ready to automate your operations?</h3>
        <a href="/contact" className="inline-block text-sm tracking-[0.2em] uppercase bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-all duration-300 shadow-glow">Book a Consultation</a>
      </section>
      <Footer />
    </motion.main>
  );
};

export default Index;
