import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function MetricCard({ label, value, unit, trend, description }) {
  const isPositive = trend > 0;
  const isGood = label.toLowerCase().includes('latency') || label.toLowerCase().includes('velocity') || label.toLowerCase().includes('time') || label.toLowerCase().includes('rate')
    ? trend < 0 
    : trend > 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="tech-card p-6 group cursor-default"
      id={`metric-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">{label}</span>
        {trend !== undefined && (
          <div className={`flex items-center text-[10px] font-bold px-2 py-0.5 rounded-sm border ${
            isGood ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/5 text-rose-400 border-rose-500/20'
          }`}>
            {isPositive ? <ArrowUpRight size={10} className="mr-1" /> : <ArrowDownRight size={10} className="mr-1" />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-white font-mono tracking-tighter group-hover:text-indigo-400 transition-colors">
          {value}
        </span>
        <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">{unit}</span>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-800/50">
        <p className="text-slate-500 text-[11px] leading-relaxed font-medium italic">
          {description}
        </p>
      </div>
      
      {/* Decorative dot */}
      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-slate-800" />
    </motion.div>
  );
}
