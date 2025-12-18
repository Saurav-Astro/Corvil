import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Megaphone, Briefcase, Cog, Zap, Code2, Compass } from 'lucide-react';

const Index = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const serveRef = useRef(null);
  const serveInView = useInView(serveRef, { once: true, margin: '-100px' });
  const glanceRef = useRef(null);
  const glanceInView = useInView(glanceRef, { once: true, margin: '-100px' });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background min-h-screen"
    >
      <Navigation />
      <HeroSection />

      {/* Philosophy */}
      <section ref={ref} className="section-padding bg-background">
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
      <section ref={serveRef} className="section-padding bg-gradient-section">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase block mb-6">Who We Serve</span>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={serveInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Rocket, title: 'Early-Stage Startups', desc: 'Bringing your MVP to life with scalable architecture.' },
              { icon: Megaphone, title: 'Sales-Driven Businesses', desc: 'Automating outreach and lead management.' },
              { icon: Briefcase, title: 'Service Companies', desc: 'Streamlining client workflows and internal operations.' },
              { icon: Cog, title: 'Operations Teams', desc: 'Reducing manual overhead through custom automation.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={item}
                className="p-6 border border-border bg-background/60 hover:bg-background transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <Icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-heading text-lg text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* At a Glance */}
      <section ref={glanceRef} className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-10">
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase block mb-6">At a Glance: What We Do</span>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={glanceInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Zap, title: 'AI Automation', desc: 'From voice bots to conversational agents.' },
              { icon: Code2, title: 'Software Development', desc: 'Web applications and robust backend systems.' },
              { icon: Compass, title: 'Tech Strategy', desc: 'Consulting and MVP development for rapid scaling.' },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={item}
                className="p-6 border border-border bg-background/60 hover:bg-background transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <Icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-heading text-lg text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-section text-center">
        <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Ready to automate your operations?</h3>
        <a href="/contact" className="inline-block text-sm tracking-[0.2em] uppercase bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-all duration-300 shadow-glow">Book a Consultation</a>
      </section>
      <Footer />
    </motion.main>
  );
};

export default Index;
