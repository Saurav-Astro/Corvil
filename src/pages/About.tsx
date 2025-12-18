import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background min-h-screen"
    >
      <Navigation />
      <div className="pt-32">
        {/* Our Identity */}
        <section className="section-padding bg-background">
          <div className="container-narrow text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">We Build the Engines of Modern Business.</h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Coreveil was founded on a simple principle: Technology should be a multiplier, not a headache. In an era of AI hype, we focus on the practical. We are a team of engineers and strategists dedicated to helping startups and growing businesses navigate the digital landscape with precision.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding bg-gradient-section">
          <div className="container-wide">
            <h2 className="font-heading text-3xl text-foreground mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                'Foundational Strength: We ensure your digital infrastructure is secure and scalable.',
                'Practical AI: We only deploy AI where it adds tangible value—saving time, reducing errors, or increasing revenue.',
                'ROI-First Mindset: Every line of code we write and every bot we deploy is aimed at improving your bottom line.',
              ].map((item, i) => (
                <div key={i} className="p-6 border border-border bg-background/40"><p className="text-foreground">{item}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* No Hype Promise */}
        <section className="section-padding bg-background">
          <div className="container-narrow text-center">
            <h2 className="font-heading text-3xl text-foreground mb-4">The "No Hype" Promise</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              We don't use technology for the sake of it. We listen to your business challenges and build the leanest, most effective solutions to solve them. Whether you are looking to automate a sales team or build a global platform, Coreveil is your technical partner in execution.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </motion.main>
  );
};

export default About;
