import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, AlertCircle, TrendingUp } from 'lucide-react';

export default function InsightPanel({ insights }) {
  return (
    <div className="space-y-6" id="insight-panel">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles size={16} className="text-indigo-400 group-hover:animate-pulse" />
        <h3 className="font-bold text-white text-xs uppercase tracking-[0.2em]">Coach Insights</h3>
      </div>
      
      {insights.map((insight, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="relative group pr-4"
        >
          <div className={`absolute left-0 top-0 w-[2px] h-full ${
            insight.type === 'positive' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
          }`} />
          <div className="pl-5">
            <div className="flex items-center gap-2 mb-1.5">
              {insight.type === 'positive' ? <TrendingUp size={12} className="text-emerald-400" /> : <AlertCircle size={12} className="text-amber-400" />}
              <p className={`font-bold text-[11px] uppercase tracking-wider ${insight.type === 'positive' ? 'text-emerald-400' : 'text-amber-400'}`}>
                {insight.title}
              </p>
            </div>
            <p className="text-[11px] leading-[1.6] text-slate-400 font-medium">
              {insight.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
