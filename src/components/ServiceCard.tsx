import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditableInvoiceTemplate from './ui/pdfViewer';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  index: number;
  link: string;
}

export default function ServiceCard({ title, description, icon: Icon, features, index,link }: ServiceCardProps) {

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group p-4"
    >
      <div className="card-service h-full">
        {/* Icon Header */}
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-gradient-to-tl from-black via-orange-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ">
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 flex-1">
          <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="pt-6 mt-auto">
          <Button 
            variant="ghost" 
            className="w-full group-hover:bg-primary/10 group-hover:text-primary"
            onClick={() => navigate(link)}
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}