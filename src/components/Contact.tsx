import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+27 (0) 71 298 5905',
      subDetails: 'Available 24/7 for emergencies'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@ctronix.co.za',
      subDetails: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Maphalle village, South Africa',
      subDetails: 'Serving nationwide'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 8AM - 7PM',
      subDetails: 'Sat: 9AM - 4PM'
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-white/40 backdrop-blur-md rounded-2xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your Free
            <span className="bg-gradient-to-tl from-black via-orange-800 to-blue-500 bg-clip-text text-transparent"> Quote Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to secure your property with professional automation and security solutions? 
            Contact our experts for a personalized consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-200/20 backdrop-blur-lg rounded-xl p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Request a Quote
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="Della.." 
                    className="bg-white/30 border-white/40 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Raolane.." 
                    className="bg-white/30 border-white/40 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="illumidev@example.com" 
                  className="bg-white/30 border-white/40 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="+27 123 456 789" 
                  className="bg-white/30 border-white/40 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Service Interested In
                </label>
                <select className="w-full px-3 py-2 bg-white/30 border border-white/40 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors">
                  <option>Select a service</option>
                  <option>Solar Energy Solutions</option>
                  <option>Automated Gates & Garage Doors</option>
                  <option>Electric Fencing</option>
                  <option>CCTV & Security Systems</option>
                  <option>Smart Home Automation</option>
                  <option>Security Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  className="bg-white/30 border-white/40 focus:border-primary resize-none"
                />
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                type="submit"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experts is ready to help you find the perfect security and automation 
                solution for your needs. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-foreground font-medium">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subDetails}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-green-600/20 backdrop-blur-md border border-green-600/30 rounded-lg p-6"
            >
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                Emergency Services
              </h4>
              <p className="text-muted-foreground">
                For urgent security issues or emergency repairs, our 24/7 support team is available 
                to assist you. Call our emergency hotline for immediate response.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
