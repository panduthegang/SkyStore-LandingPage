import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Shivansu Pasi',
    role: 'Full Stack Developer',
    content: 'SkyStore has revolutionized how I store and share my projects. The speed is incredible!',
    avatar: '/Shivansu.png',
  },
  {
    name: 'Rishika Singh',
    role: 'Software Engineer',
    content: 'The security features are top-notch. I trust SkyStore with all my important documents.',
    avatar: '/Rishika.png',
  },
  {
    name: 'Shyam Pathak',
    role: 'UI/UX Designer',
    content: 'Clean interface and smooth animations make it a joy to use. Best cloud storage solution!',
    avatar: '/Shyam.png',
  },
  {
    name: 'Rishi Singh',
    role: 'DevOps Engineer',
    content: 'Exceptional performance and reliability. Perfect for our team collaboration needs.',
    avatar: '/Rishi.png',
  },
  {
    name: 'Vedangi',
    role: 'Product Manager',
    content: 'The intuitive design and robust features make project management a breeze.',
    avatar: '/Vedangi.png',
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#FA7275]">
          What Our Users Say
        </h2>
        <div className="relative h-[400px] max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-xl text-[#FA7275]">
                      {testimonials[current].name}
                    </h3>
                    <p className="text-gray-600">{testimonials[current].role}</p>
                  </div>
                </div>
                <p className="text-xl text-gray-700 italic">"{testimonials[current].content}"</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6 text-[#FA7275]" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6 text-[#FA7275]" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? 'bg-[#FA7275]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}