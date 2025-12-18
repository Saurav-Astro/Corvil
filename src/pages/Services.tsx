import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const aiRef = useRef(null);
  const aiInView = useInView(aiRef, { once: true, margin: '-100px' });
  const engRef = useRef(null);
  const engInView = useInView(engRef, { once: true, margin: '-100px' });
  const growthRef = useRef(null);
  const growthInView = useInView(growthRef, { once: true, margin: '-100px' });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-background min-h-screen"
    >
      <Navigation />
      {/* Abstract animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0.15 }}
          animate={{ x: [0, 20, -10, 0], y: [0, 10, -5, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.12 }}
          animate={{ x: [0, -15, 10, 0], y: [0, -10, 8, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-15%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-foreground/5 blur-3xl"
        />
      </div>
      <div className="pt-32">
        {/* Intro */}
        <section className="section-padding bg-background">
          <div className="container-narrow text-center">
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase block mb-6">Practical AI and Engineering Solutions.</span>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Tailored tech infrastructure designed to scale with your business.</h1>
          </div>
        </section>

        {/* Category 1: AI & Intelligent Automation */}
        <section ref={aiRef} className="section-padding bg-gradient-section">
          <div className="container-wide">
            <h2 className="font-heading text-3xl text-foreground mb-6">AI & Intelligent Automation</h2>
            <motion.div
              variants={container}
              initial="hidden"
              animate={aiInView ? 'visible' : 'hidden'}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                'AI Calling Bots & Voice Automation: Implementation of human-like voice agents to handle outbound prospecting or inbound inquiries.',
                'Conversational AI Agents: Custom chatbots for 24/7 engagement on your website or platform.',
                'Sales & Customer Support Automation: End-to-end systems that qualify leads and resolve support tickets without manual intervention.',
                'Custom AI Workflows & Integrations: Connecting your existing tools (CRM, Email, ERP) with AI to create seamless, automated ecosystems.',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="p-6 border border-border bg-background/60 hover:bg-background transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                  <p className="text-foreground">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category 2: Custom Software Engineering */}
        <section ref={engRef} className="section-padding bg-background">
          <div className="container-wide">
            <h2 className="font-heading text-3xl text-foreground mb-6">Custom Software Engineering</h2>
            <motion.div
              variants={container}
              initial="hidden"
              animate={engInView ? 'visible' : 'hidden'}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                'Website & Web Application Development: Building high-performance, responsive interfaces tailored to your user’s journey.',
                'Backend Systems & APIs: Developing the "brains" of your business—secure, fast, and scalable server-side architecture and third-party integrations.',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="p-6 border border-border bg-background/60 hover:bg-background transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                  <p className="text-foreground">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category 3: Strategic Growth */}
        <section ref={growthRef} className="section-padding bg-gradient-section">
          <div className="container-wide">
            <h2 className="font-heading text-3xl text-foreground mb-6">Strategic Growth</h2>
            <motion.div
              variants={container}
              initial="hidden"
              animate={growthInView ? 'visible' : 'hidden'}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                'Tech Consulting & MVP Development: From ideation to launch. We help you choose the right tech stack and build a Minimum Viable Product that is ready for the market.',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="p-6 border border-border bg-background/60 hover:bg-background transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                  <p className="text-foreground">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-background text-center">
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Why choose our services? Our systems are built for one purpose: to reduce manual workload and maximize your team’s efficiency.
          </p>
        </section>

        {/* Existing Services cards */}
        <ServicesSection />
      </div>
      <Footer />
    </motion.main>
  );
};

export default Services;
