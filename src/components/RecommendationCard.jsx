import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export default function RecommendationCard({ category, title, description, impact }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="tech-card p-6 border-l-Indigo-500 border-l-[3px] bg-slate-900/80 group cursor-pointer"
      id={`recommendation-${category.toLowerCase()}`}
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400">
          {category}
        </span>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          <Zap size={10} className="text-amber-400 fill-amber-400" />
          {impact} Impact
        </div>
      </div>
      
      <h4 className="font-bold text-lg mb-2 leading-tight text-white group-hover:text-indigo-300 transition-colors">
        {title}
      </h4>
      <p className="text-[11px] text-slate-400 leading-relaxed mb-6 font-medium">
        {description}
      </p>
      
      <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-indigo-500 group-hover:text-indigo-400 transition-colors">
        Apply Protocol <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}
