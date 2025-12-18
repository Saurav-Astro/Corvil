import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const schema = z.object({
    name: z.string().min(2, 'Please enter your name'),
    email: z.string().email('Enter a valid company email'),
    interest: z.string().min(2),
    message: z.string().min(10, 'Please provide a short project summary'),
  });

  type FormValues = z.infer<typeof schema>;
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    // Simulate send
    await new Promise(r => setTimeout(r, 600));
    toast({ title: 'Message sent', description: 'We typically respond within 24 business hours.' });
    reset();
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
      <div className="pt-32">
        {/* Heading */}
        <section className="section-padding bg-background text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-3">Let’s Build Something Efficient.</h1>
          <p className="text-muted-foreground text-lg md:text-xl">Ready to automate your operations or build your next big idea? Reach out today.</p>
        </section>

        {/* Form */}
        <section className="section-padding bg-gradient-section">
          <div className="container-narrow">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" {...register('name')} />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email">Company Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" {...register('email')} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="interest">Service of Interest</Label>
                <Select id="interest" {...register('interest')}>
                  <option value="">Select…</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Tech Consulting">Tech Consulting</option>
                  <option value="MVP Development">MVP Development</option>
                  <option value="Other">Other</option>
                </Select>
                {errors.interest && <p className="text-red-500 text-sm mt-1">Please select a service</p>}
              </div>
              <div>
                <Label htmlFor="message">Tell us about your project/challenges</Label>
                <Textarea id="message" rows={6} placeholder="Briefly describe your needs" {...register('message')} />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-fit">{isSubmitting ? 'Sending…' : 'Send Message'}</Button>
            </form>
          </div>
        </section>

        {/* Details */}
        <section className="section-padding bg-background">
          <div className="container-narrow text-center">
            <div className="space-y-2 mb-6">
              <p className="text-foreground">Email: [Insert Email Address]</p>
              <p className="text-foreground">Office Hours: Monday – Friday, 9:00 AM – 6:00 PM</p>
              <p className="text-foreground">Social: LinkedIn</p>
            </div>
            <p className="text-muted-foreground">We typically respond to all inquiries within 24 business hours. Let’s discuss how we can scale your business through modern technology.</p>
          </div>
        </section>
      </div>
      <Footer />
    </motion.main>
  );
};

export default Contact;
