import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  delay?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, delay = '0s' }) => {
  return (
    <div 
      className="group flex flex-col items-center justify-center gap-1 rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:border-white/20 hover:shadow-xl hover:shadow-black/20"
      style={{ animationDelay: delay }}
    >
      <span className="font-sans text-5xl font-bold text-white md:text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
        {value}
      </span>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-pink-100/80">
        {label}
      </span>
    </div>
  );
};

export default StatCard;