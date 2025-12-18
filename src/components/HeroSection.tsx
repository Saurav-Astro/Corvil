import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Abstract background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-sm md:text-base tracking-[0.3em] text-muted-foreground uppercase">
            Coreveil
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 tracking-wide"
        >
          Scaling Businesses Through Intelligent Technology & Automation.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8"
        >
          We design and deploy practical, ROI-driven software and AI solutions that eliminate manual work, reduce costs, and accelerate growth. No hype—just systems that work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-block text-sm tracking-[0.2em] uppercase bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-all duration-300 shadow-glow"
          >
            Get Started
          </Link>
          <Link
            to="/services"
            className="inline-block text-sm tracking-[0.2em] uppercase border border-foreground/30 text-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View Our Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center"
        >
          <div className="accent-line" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-16 bg-gradient-to-b from-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
