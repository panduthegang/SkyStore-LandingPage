import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FA7275] to-pink-500 bg-clip-text text-transparent">
                SkyStore
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Secure cloud storage solution for individuals and businesses. Store, share, and access your files from anywhere.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', color: '#1877F2' },
                { icon: Twitter, href: '#', color: '#1DA1F2' },
                { icon: Instagram, href: '#', color: '#E4405F' },
                { icon: Linkedin, href: '#', color: '#0A66C2' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, color: social.color }}
                  className="text-gray-400 transition-colors p-2 hover:bg-gray-800/50 rounded-full"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                'Home',
                'About',
                'Features',
                'Pricing',
                'Contact'
              ].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2"
                >
                  <ArrowRight className="w-4 h-4 text-[#FA7275]" />
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: 'G1, Jio World Drive, Bandra West, Mumbai' },
                { icon: Phone, text: '+91-123-456-789' },
                { icon: Mail, text: 'support@skystore.com' }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-400 group"
                >
                  <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-[#FA7275]/10 transition-colors">
                    <item.icon className="w-5 h-5 text-[#FA7275]" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#FA7275] focus:ring-2 focus:ring-[#FA7275]/20 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-md bg-[#FA7275] text-white font-medium hover:bg-[#f85d60] transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 mt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-400">
              <span> {currentYear} SkyStore. Made with</span>
              <Heart className="w-4 h-4 text-[#FA7275]" />
              <span>in India</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}