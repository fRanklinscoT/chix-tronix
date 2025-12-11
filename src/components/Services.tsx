import { motion } from 'framer-motion';
import { ThermometerSun, Shield, Zap, Camera, Home, Fence } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      title: 'Solar Energy Solutions',
      description: 'Harness the power of the sun with our cutting-edge solar panel installations and energy storage systems.',
      icon: ThermometerSun,
      features: [
        'High-efficiency solar panels',
        'Battery backup systems',
        'Smart energy monitoring',
        'Professional installation'
      ]
    },
    {
      title: 'Automated Gates & Garage Doors',
      description: 'Secure and convenient access control with our premium automated gate and garage door solutions.',
      icon: Home,
      features: [
        'Remote access control',
        'Smart home integration',
        'Safety sensors included',
        'Professional maintenance'
      ]
    },
    {
      title: 'Electric Fencing',
      description: 'Robust perimeter security with our state-of-the-art electric fencing systems.',
      icon: Fence,
      features: [
        'High-voltage deterrent',
        'Alarm integration',
        'Weather-resistant design',
        'Easy monitoring system'
      ]
    },
    {
      title: 'CCTV & Security Systems',
      description: 'Comprehensive surveillance and security monitoring for complete peace of mind.',
      icon: Camera,
      features: [
        '4K HD surveillance cameras',
        'Night vision capabilities',
        'Remote monitoring app',
        'Cloud storage options'
      ]
    },
    {
      title: 'Smart Home Automation',
      description: 'Transform your space with intelligent automation systems for modern living.',
      icon: Zap,
      features: [
        'Voice control integration',
        'Mobile app control',
        'Energy efficiency optimization',
        'Custom automation scenarios'
      ]
    },
    {
      title: 'Security Consulting',
      description: 'Expert security assessment and consulting services for comprehensive protection strategies.',
      icon: Shield,
      features: [
        'Risk assessment analysis',
        'Custom security solutions',
        'Compliance guidance',
        'Ongoing support'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
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
            Our Professional
            <span className="bg-gradient-to-tl from-black via-orange-800 to-blue-500 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Delivering cutting-edge automation and security solutions tailored to your needs. 
            From residential to commercial applications, we ensure the highest standards of quality and reliability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              index={index}
              link={`/gallery?service=${encodeURIComponent(service.title)}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? We're here to help.
          </p>
          <motion.button
            className="hover:bg-blue-600/95 bg-blue-500 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}