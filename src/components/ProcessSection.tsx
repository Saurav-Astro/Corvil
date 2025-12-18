import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We align on goals, users, and success metrics to shape a focused plan.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We prototype UX flows and system architecture for clarity and speed.',
  },
  {
    number: '03',
    title: 'Build & Launch',
    description: 'We ship, iterate, and deploy production-ready solutions with confidence.',
  },
];

const ProcessSection = () => {
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
            How We Work
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            Our Process
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center md:text-left"
            >
              <span className="font-heading text-6xl md:text-7xl text-accent/30 block mb-4">
                {step.number}
              </span>
              <div className="accent-line mb-6 mx-auto md:mx-0" />
              <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
