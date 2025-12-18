import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: '123 Melrose Avenue, Los Angeles, CA 90046',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Sat: 11AM - 8PM | Sun: Closed',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (323) 555-0123',
    href: 'tel:+13235550123',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@themark.studio',
    href: 'mailto:hello@themark.studio',
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-background border-t border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase block mb-6">
            Find Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <item.icon className="w-6 h-6 text-accent mx-auto mb-4" />
              <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase block mb-3">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-foreground">{item.value}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
