import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  images: string[];
}

const projects: Record<string, Project[]> = {
  "Solar Energy Solutions": [
    {
      title: "Residential Solar Install - Pretoria",
      description: "Full 6kW hybrid solar system with inverter & battery setup.",
      images: ["/images/solar1.jpg", "/images/solar2.jpg", "/images/solar3.jpg"]
    },
    {
      title: "Commercial Solar Array - Johannesburg",
      description: "25kW array powering office park.",
      images: ["/images/solar4.jpg", "/images/solar5.jpg"]
    }
  ],
  "CCTV & Security Systems": [
    {
      title: "Retail Security Setup - Durban",
      description: "Installed 12 HD cameras with motion alerts.",
      images: ["/images/cctv1.jpg", "/images/cctv2.jpg"]
    }
  ],
  
};

export default function Projects() {
  const navigate = useNavigate();
  const selectedService = location.state?.service || "All Projects";
  const currentProjects = projects[selectedService] || [];

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">{selectedService}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-card rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="grid grid-cols-2 gap-2 p-2">
              {proj.images.map((img, i) => (
                <img 
                  key={i}
                  src={img}
                  alt={proj.title}
                  className="rounded-lg object-cover h-32 w-full"
                />
              ))}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
