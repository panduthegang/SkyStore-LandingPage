import { motion } from 'framer-motion';
import { Cloud, Database, Shield, Zap, Lock, Upload, Download, HardDrive, Server, Wifi } from 'lucide-react';

const FloatingIcon = ({ 
  icon: Icon, 
  delay, 
  x, 
  y, 
  size = 'default',
  rotate = false 
}: { 
  icon: any, 
  delay: number, 
  x: number, 
  y: number,
  size?: 'small' | 'default' | 'large',
  rotate?: boolean 
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  const bgClasses = {
    small: 'p-2',
    default: 'p-3',
    large: 'p-4'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="absolute"
      style={{ x, y }}
    >
      <motion.div
        animate={rotate ? {
          y: [0, -10, 0],
          rotateY: [0, 180, 360],
          scale: [1, 1.1, 1],
        } : {
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
        className={`bg-white/10 backdrop-blur-sm ${bgClasses[size]} rounded-xl shadow-lg hover:bg-white/20 transition-colors`}
      >
        <Icon className={`${sizeClasses[size]} text-white`} />
      </motion.div>
    </motion.div>
  );
};

export function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-gradient-to-br from-[#FA7275] to-[#f85d60] flex items-center relative overflow-hidden">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 top-24 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:50px_50px] [transform-style:preserve-3d] [perspective:1000px] [transform:rotateX(60deg)] opacity-20 pointer-events-none"></div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-white/80 font-medium mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm"
            >
              Secure Cloud Storage Solution
            </motion.span>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 [text-shadow:0_4px_8px_rgba(0,0,0,0.1)]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                Your Files,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-white/90"
              >
                In the Sky
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-lg"
            >
              Secure, fast, and unlimited cloud storage for all your important files.
              Access anywhere, anytime with enterprise-grade security.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#FA7275] px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
              >
                Get Started Free
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Illustration */}
          <div className="relative h-[300px] md:h-[600px] -mx-4 md:mx-0">
            {/* Main cloud icon with glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateY: [0, 360],
                y: [-10, 10, -10]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
            >
              <div className="relative scale-[0.6] md:scale-100">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
                <Cloud className="w-32 md:w-48 h-32 md:h-48 text-white/90 relative z-10 drop-shadow-2xl" />
              </div>
            </motion.div>

            {/* Floating Elements - Adjusted for mobile */}
            <div className="scale-[0.6] md:scale-100 origin-center absolute inset-0 will-change-transform">
              <FloatingIcon icon={Database} delay={0.3} x={-60} y={-60} size="large" rotate />
              <FloatingIcon icon={Shield} delay={0.5} x={60} y={-90} size="large" rotate />
              <FloatingIcon icon={Zap} delay={0.7} x={-45} y={90} size="large" rotate />
              <FloatingIcon icon={HardDrive} delay={0.9} x={52} y={60} size="large" rotate />

              {/* Small Decorative Icons */}
              <FloatingIcon icon={Lock} delay={1.1} x={-90} y={-30} size="small" />
              <FloatingIcon icon={Upload} delay={1.3} x={90} y={-45} size="small" />
              <FloatingIcon icon={Download} delay={1.5} x={-75} y={45} size="small" />
              <FloatingIcon icon={Server} delay={1.7} x={82} y={30} size="small" />
              <FloatingIcon icon={Wifi} delay={1.9} x={0} y={-105} size="small" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FA7275] via-transparent to-transparent opacity-50"></div>
    </section>
  );
}