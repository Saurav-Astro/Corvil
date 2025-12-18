import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import studioSpace from '@/assets/studio-space.jpg';

const SpaceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-section overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1"
          >
            <img
              src={studioSpace}
              alt="THE MARK studio interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase block mb-6">
              The Space
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              A Sanctuary <span className="italic">for</span> Creation
            </h2>
            <div className="accent-line mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our studio is designed to be a tranquil escape—a minimalist space where creativity flourishes and clients feel completely at ease.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every detail, from our private booths to our curated music selection, is crafted to ensure your experience is as memorable as the art itself.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
