import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield, Wrench, HeartHandshake } from 'lucide-react';
import solarImage from '@/assets/solar-panels.jpg';
import gateImage from '@/assets/security-gate.jpg';

export default function About() {
  const stats = [
    { number: '100+', label: 'Projects Completed', icon: Award },
    { number: '10+', label: 'Years Experience', icon: Clock },
    { number: '24/7', label: 'Support Available', icon: HeartHandshake },
    { number: '100%', label: 'Satisfaction Rate', icon: Shield }
  ];

  const values = [
    {
      title: 'Expert Installation',
      description: 'Professional technicians with years of experience in automation and security systems.',
      icon: Wrench
    },
    {
      title: 'Customer Focus',
      description: 'Dedicated to understanding your needs and delivering solutions that exceed expectations.',
      icon: Users
    },
    {
      title: 'Quality Assurance',
      description: 'Premium components and rigorous testing ensure long-lasting, reliable performance.',
      icon: Shield
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
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
            Why Choose
            <span className="bg-gradient-to-tl from-black via-orange-800 to-blue-500 bg-clip-text text-transparent"> CTRONIX</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about delivering innovative automation and security solutions 
            that protect what matters most to you.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-xl mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Professional Solutions for Modern Security
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At CTRONIX, we specialize in cutting-edge automation and security technology. 
                Our comprehensive range of services includes solar energy solutions, automated access systems, 
                electric fencing, and advanced surveillance systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over a decade of experience, we've built a reputation for excellence in both 
                residential and commercial markets, ensuring every installation meets the highest 
                standards of quality and reliability.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={solarImage} 
                alt="Professional solar panel installation"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-foreground">
                <h4 className="font-semibold text-lg">Solar Solutions</h4>
                <p className="text-sm opacity-90">Clean, renewable energy</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={gateImage} 
                alt="Automated security gate system"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-foreground">
                <h4 className="font-semibold text-lg">Smart Security</h4>
                <p className="text-sm opacity-90">Smart, secure home technologies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}