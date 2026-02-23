import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineImage {
  id: number;
  url: string;
  date: string;
}

const TIMELINE_IMAGES: TimelineImage[] = [
  {
    id: 1,
    url: 'https://i.pinimg.com/736x/a4/5d/1b/a45d1be581820cc51aa90f59759c31b4.jpg',
    date: ''
  },
  {
    id: 2,
    url: 'https://i.pinimg.com/736x/df/eb/c2/dfebc270295db06b5682d6046c3ad75e.jpg',
    date: 'Pag 1'
  },
  {
    id: 3,
    url: 'https://i.pinimg.com/736x/e5/9b/74/e59b7485742032ef329b6b46ce70e0c8.jpg',
    date: 'Pag 2'
  },
  {
    id: 4,
    url: 'https://i.pinimg.com/736x/36/1c/10/361c10a73829cee6d145c982a444c7fc.jpg',
    date: 'Pag 3'
  },
  {
    id: 5,
    url: 'https://i.pinimg.com/736x/bd/34/42/bd3442ea1a1db3e5279a4f89b5ab28be.jpg',
    date: 'Pag 4'
  },
  {
    id: 6,
    url: 'https://i.pinimg.com/736x/9d/1e/b7/9d1eb72eb7bdd9cd5d622384dc28a1c1.jpg',
    date: 'Pag 5'
  },
  {
    id: 7,
    url: 'https://i.pinimg.com/736x/5b/d0/d8/5bd0d8ec5c200b50f52be3bde75ee0e5.jpg',
    date: 'Pag 6'
  },
  {
    id: 8,
    url: 'https://i.pinimg.com/736x/1c/4d/bc/1c4dbcbefffdd498e7b0fe55552b69e1.jpg',
    date: 'Pag 7'
  },
  {
    id: 9,
    url: 'https://i.pinimg.com/736x/67/31/e3/6731e33f94b1c39918051c467bb51970.jpg',
    date: 'Pag 8'
  },
  {
    id: 10, 
    url: 'https://i.pinimg.com/736x/25/90/d8/2590d8705381f33f488eb1e261a2f4a9.jpg',
    date: 'Pag 9'
  },
  {
    id: 11, 
    url: 'https://i.pinimg.com/736x/52/d1/3a/52d13aa4e7e227ff5152380026899a2c.jpg',
    date: 'Pag 10'
  }
];

const Timeline: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, TIMELINE_IMAGES.length - 1));
  };

  const prevCard = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === TIMELINE_IMAGES.length - 1;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 pt-20">
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-pink-100/30 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl" />

      {/* Navigation Arrows */}
      <button
        onClick={prevCard}
        disabled={isAtStart}
        className={`absolute left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white transition-all md:left-10 lg:left-20 ${
          isAtStart 
            ? 'bg-slate-300/50 cursor-not-allowed opacity-50' 
            : 'bg-slate-400/50 hover:bg-slate-500/70'
        }`}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextCard}
        disabled={isAtEnd}
        className={`absolute right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white transition-all md:right-10 lg:right-20 ${
          isAtEnd 
            ? 'bg-slate-300/50 cursor-not-allowed opacity-50' 
            : 'bg-slate-400/50 hover:bg-slate-500/70'
        }`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Cards Container */}
      <div 
        className="relative flex h-[700px] w-full max-w-[400px] items-center justify-center"
        style={{ perspective: '1000px' }}
      >
        <AnimatePresence mode="popLayout">
          {TIMELINE_IMAGES.map((image, index) => {
            const position = index - currentIndex;
            if (Math.abs(position) > 2) return null;

            const isFront = position === 0;
            const zIndex = 30 - Math.abs(position) * 10;
            const scale = 1 - Math.abs(position) * 0.1;
            const xOffset = position * 40;
            const rotate = position * 5;
            const opacity = 1 - Math.abs(position) * 0.3;

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{
                  opacity,
                  scale,
                  x: xOffset,
                  rotate,
                  zIndex,
                }}
                exit={{ opacity: 0, scale: 0.5, x: -100 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                className={`absolute h-[640px] w-[350px] overflow-hidden rounded-[40px] shadow-2xl bg-white ${
                  position !== 0 ? 'cursor-pointer' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => {
                  if (position !== 0) {
                    setCurrentIndex(index);
                  }
                }}
              >
                {/* EL CAMBIO CRUCIAL ESTÁ AQUÍ ABAJO: object-contain */}
                <img
                  src={image.url}
                  alt={image.date || "Página del cuento"}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {isFront && image.date && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 text-white"
                  >
                    <p className="text-xl font-bold uppercase tracking-widest opacity-90">
                      {image.date}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="mt-4 flex gap-2">
        {TIMELINE_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              currentIndex === index ? 'w-8 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;