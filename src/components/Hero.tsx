import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage1 from '@/assets/hero-automation.jpg';
import heroImage2 from '@/assets/hero-automation2.jpg';
import heroImage3 from '@/assets/hero-automation3.jpg';
import { useEffect, useState } from 'react';

const heroImages = [heroImage1, heroImage2, heroImage3];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages[currentIndex]}
          alt="Professional automation and security solutions"
          className="w-screen h-screen object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-neutral-900/40" />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-tl from-black via-orange-800 to-blue-500 bg-clip-text text-transparent">
              Smart Security &
            </span>
            <br />
            <span className="bg-blue-900 bg-clip-text text-transparent">
              Automation
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional automation and security solutions for your home and business. 
            From solar panels to automated gates, we deliver cutting-edge technology for a safer, smarter future.
          </motion.p>

          {/* Feature Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 pt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Shield, text: "Security Systems" },
              { icon: Zap, text: "Solar Solutions" },
              { icon: Home, text: "Smart Automation" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2"
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="text-card-foreground font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('#services')}
              className="group-hover:translate-x-1 bg-transparent text-gray-300"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('#contact')}
            >
              Get Free Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}