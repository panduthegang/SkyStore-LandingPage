import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Harsh Rathod',
    role: 'CEO & Co-Founder',
    image: '/Harsh Rathod.jpg',
    bio: 'Visionary leader with 10+ years in cloud solutions.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Durvesh Shelar',
    role: 'CTO & Co-Founder',
    image: '/Durvesh Shelar.jpg',
    bio: 'Cloud architecture expert, previously at AWS.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'RudraPratap Singh',
    role: 'Head of Design & Co-Founder',
    image: '/Rudrapratap Singh.jpg',
    bio: 'Award-winning UX designer shaping digital experiences.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

export function Team() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-[#FA7275] mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The brilliant minds behind SkyStore, working together to revolutionize cloud storage.
            Our diverse team brings decades of combined experience in cloud solutions and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#FA7275] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[#FA7275] font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-[#0077B5] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}