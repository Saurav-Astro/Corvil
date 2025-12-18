import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-narrow text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] text-muted-foreground uppercase block mb-6"
        >
          What We Do
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight"
        >
          Building Digital <span className="italic">Experiences</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <div className="accent-line" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto"
        >
          At Coreveil, we craft modern web experiences and intelligent systems that help your business move faster—from pixel-perfect websites to production-ready web apps and applied AI.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          We blend clean design, robust engineering, and machine learning to deliver outcomes that are reliable, scalable, and delightful to use.
        </motion.p>
      </div>
    </section>
  );
};

export default IntroSection;
