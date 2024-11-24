import { motion } from 'framer-motion';

export function Dashboard() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[#FA7275] mb-4"
          >
            Beautiful & Intuitive Interface
          </motion.h2>
          <p className="text-xl text-gray-600">
            Manage your files with our clean and user-friendly dashboard
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/Dashboard.jpg"
              alt="SkyStore Dashboard Interface"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          
          {/* Progress Bar Overlay */}
          {/* <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "75%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-8 left-8 right-8 h-1 bg-[#FA7275]/20 rounded-full overflow-hidden"
          >
            <div className="h-full w-3/4 bg-[#FA7275] rounded-full"></div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
