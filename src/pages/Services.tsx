import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { motion } from 'framer-motion';
import { HoverEffect } from '@/components/ui/hover-effect';
import { useRef } from 'react';

const Services = () => {
  const aiRef = useRef(null);
  const engRef = useRef(null);
  const growthRef = useRef(null);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-black/60 min-h-screen"
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
        <section className="section-padding bg-black/45">
          <div className="container-narrow text-center">
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase block mb-6">Practical AI and Engineering Solutions.</span>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Tailored tech infrastructure designed to scale with your business.</h1>
          </div>
        </section>

        {/* Category 1: AI & Intelligent Automation */}
        <section ref={aiRef} className="section-padding bg-gradient-to-b from-black/30 via-black/45 to-black/60">
          <div className="container-wide">
            <h2 className="font-heading text-3xl text-foreground mb-6">AI & Intelligent Automation</h2>
            <HoverEffect
              items={[
                { title: 'AI Calling Bots & Voice Automation', description: 'Human-like voice agents for outbound prospecting or inbound inquiries.', link: '/contact' },
                { title: 'Conversational AI Agents', description: 'Custom chatbots for 24/7 engagement on your website or platform.', link: '/contact' },
                { title: 'Sales & Support Automation', description: 'Systems that qualify leads and resolve tickets without manual intervention.', link: '/contact' },
                { title: 'Custom AI Workflows & Integrations', description: 'Connect CRM, Email, ERP with AI to build seamless automation.', link: '/contact' },
              ]}
              className="py-0"
            />
          </div>
        </section>

        {/* Category 2: Custom Software Engineering */}
        <section ref={engRef} className="section-padding bg-black/45 pb-16">
          <div className="container-wide">
            <h2 className="font-heading text-3xl text-foreground mb-6">Custom Software Engineering</h2>
            <HoverEffect
              items={[
                { title: 'Website & Web App Development', description: 'High-performance, responsive interfaces tailored to your user’s journey.', link: '/contact' },
                { title: 'Backend Systems & APIs', description: 'Secure, fast, and scalable server-side architecture and integrations.', link: '/contact' },
              ]}
              className="py-0"
            />
          </div>
        </section>

        {/* Category 3: Strategic Growth */}
        <section ref={growthRef} className="section-padding bg-gradient-to-b from-black/30 via-black/45 to-black/60 pt-12">
          <div className="container-wide">
            <h2 className="font-heading text-3xl text-foreground mb-6">Strategic Growth</h2>
            <HoverEffect
              items={[
                { title: 'Tech Consulting & MVP Development', description: 'From ideation to launch with the right stack and a market-ready MVP.', link: '/contact' },
              ]}
              className="py-0"
            />
          </div>
        </section>

        {/* Existing Services cards */}
        <ServicesSection />

        {/* Value Proposition (moved to end) */}
        <section className="py-16 bg-black/45 text-center">
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Why choose our services? Our systems are built for one purpose: to reduce manual workload and maximize your team’s efficiency.
          </p>
        </section>
      </div>
      <Footer />
    </motion.main>
  );
};

export default Services;
