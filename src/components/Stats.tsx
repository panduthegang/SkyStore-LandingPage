import { motion } from 'framer-motion';
import { HardDrive, Upload, Download } from 'lucide-react';

const stats = [
  {
    icon: HardDrive,
    value: '1 PB',
    label: 'Total Storage',
  },
  {
    icon: Upload,
    value: '99.9%',
    label: 'Uptime',
  },
  {
    icon: Download,
    value: '10 GB/s',
    label: 'Transfer Speed',
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-[#FA7275]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-block p-4 bg-white/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <motion.h3
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}