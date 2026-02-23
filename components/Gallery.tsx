import React from 'react';
import { ChevronDown, Heart, Cake } from 'lucide-react';

interface GalleryItem {
  date: string;
  title: string;
  description: string;
  image?: string;
  side: 'left' | 'right';
  isHeart?: boolean;
}

const Gallery_DATA: GalleryItem[] = [
  {
    date: 'APR 3, 2025',
    title: 'Day one',
    description: "For me, it was the first day we talked. I asked for your Snapchat, you played hard to get... and look at us now.",
    side: 'left'
  },
  {
    date: 'JUL 21, 2025',
    title: 'A couple',
    description: "That was the day I asked you to be mine... and you said yes. ❤️✨",
    side: 'right' 
  },
  {
    date: 'AUG 06, 2025',
    title: 'Our First Date',
    description: "It was the first time we met. We went in the morning to a viewpoint as beautiful as you... and that's when we had our first physical contact. ❤️",
    side: 'left'
  },
  {
    date: 'SEP 24, 2025',
    title: 'First kiss',
    description: "Our first kiss was incredible. Neither of us really knew how to kiss... but we somehow made it work. 😂❤️",
    image: 'https://i.pinimg.com/736x/1e/c5/82/1ec58291c524b1f8716f2611943557f3.jpg',
    side: 'right',
    isHeart: true
  }
];

const Gallery: React.FC = () => {
  return (
    <div className="mx-auto flex flex-col items-center px-6 py-28 lg:px-10 animate-fade-in-up">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center max-w-2xl mb-24">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
          <Cake size={12} />
          Happy Birthday, My Love
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
          Every moment with you <br />
          is a <span className="text-primary italic">treasure</span>.
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed font-medium">
          From the first hello to our forever. Here's a journey through the beautiful chapters we've written together.
        </p>
        <div className="mt-8 animate-bounce-slow text-primary">
          <ChevronDown size={32} strokeWidth={3} />
        </div>
      </div>

      {/* Vertical Gallery */}
      <div className="relative w-full max-w-5xl">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-yellow-400/60 hidden md:block"></div>
        <div className="absolute left-8 top-0 h-full w-[2px] bg-yellow-400/60 md:hidden"></div>

        <div className="space-y-24 md:space-y-32">
          {Gallery_DATA.map((item, idx) => (
            <div key={idx} className={`relative flex items-center w-full ${item.side === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
              
              {/* Point Marker */}
              <div className={`absolute left-8 md:left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-white ring-4 ring-yellow-100 flex items-center justify-center ${item.isHeart ? 'h-8 w-8 ring-pink-100' : ''}`}>
                {item.isHeart && <Heart size={14} className="text-primary fill-current" />}
              </div>

              {/* Content Card */}
              <div className={`w-full pl-20 md:pl-0 md:w-[45%] ${item.side === 'left' ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <div className={`inline-block mb-3 rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold tracking-widest text-amber-700`}>
                  {item.date}
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                  {item.description}
                </p>

                {item.image && (
                  <div className="mt-8 flex justify-center animate-fade-in-up">
                    <div className="bg-white p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-slate-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="h-64 w-80 object-cover grayscale-[20%] hover:grayscale-0 transition-all" 
                      />
                      <div className="h-10"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Card */}
      <div className="mt-40 w-full max-w-lg animate-fade-in-up">
        <div className="rounded-[40px] bg-white p-12 text-center shadow-2xl shadow-slate-200 border border-slate-50 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary"></div>
          
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:scale-110 transition-transform">
            <Cake size={32} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">To Many More Memories</h2>
          <p className="text-slate-400 font-medium leading-relaxed">
            This is just the beginning of our story. I can't wait to see what the next year brings for us. I love you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;