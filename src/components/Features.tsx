import { motion } from 'framer-motion';
import { Cloud, Zap, Lock, Infinity, Shield, Users, Globe, Clock } from 'lucide-react';

const features = [
  { 
    icon: Zap, 
    title: 'Lightning Fast', 
    description: 'Instant uploads and downloads with speeds up to 10 GB/s' 
  },
  { 
    icon: Lock, 
    title: 'Secure Storage', 
    description: 'Military-grade encryption for all your files' 
  },
  { 
    icon: Cloud, 
    title: 'Cloud Access', 
    description: 'Access your files from any device, anywhere' 
  },
  { 
    icon: Infinity, 
    title: 'Free Forever', 
    description: 'Start with 10GB free, no credit card required' 
  },
  { 
    icon: Shield, 
    title: 'Data Protection', 
    description: 'Automatic backups and version history' 
  },
  { 
    icon: Users, 
    title: 'Team Sharing', 
    description: 'Collaborate with unlimited team members' 
  },
  { 
    icon: Globe, 
    title: 'Global CDN', 
    description: 'Fast access from anywhere with our global network' 
  },
  { 
    icon: Clock, 
    title: '24/7 Support', 
    description: 'Round-the-clock expert assistance' 
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#FA7275]">
          Why Choose SkyStore?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((Feature, index) => (
            <motion.div
              key={Feature.title}
              initial={{ opacity: 0, y: 20, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                translateZ: 20
              }}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all transform perspective-1000"
            >
              <motion.div
                whileHover={{ rotateY: 180, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mx-auto mb-4 bg-[#FA7275] rounded-full flex items-center justify-center"
              >
                <Feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-center mb-2">{Feature.title}</h3>
              <p className="text-gray-600 text-center">{Feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}