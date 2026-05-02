import React from 'react';
import { motion } from 'motion/react';
import { GitMerge, GitPullRequest, GitCommit, Rocket, Clock } from 'lucide-react';

export default function ActivityFeed({ activities }) {
  if (!activities) return null;

  const getIcon = (type) => {
    switch (type) {
      case 'merge': return <GitMerge className="text-purple-400" size={16} />;
      case 'review': return <GitPullRequest className="text-emerald-400" size={16} />;
      case 'commit': return <GitCommit className="text-indigo-400" size={16} />;
      case 'deploy': return <Rocket className="text-amber-400" size={16} />;
      default: return <Clock className="text-slate-400" size={16} />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-white text-xs uppercase tracking-[0.2em]">Temporal Activity Log</h3>
        <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest px-3 py-1 bg-indigo-500/5 border border-indigo-500/20 rounded">
          Last 24 Hours
        </span>
      </div>

      {activities.map((activity, idx) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="relative pl-8 pb-8 last:pb-0 group"
        >
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-6 bottom-0 w-[1px] bg-slate-800 last:hidden group-last:hidden" />
          
          {/* Icon Circle */}
          <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-slate-500 transition-colors">
            {getIcon(activity.type)}
          </div>

          <div className="tech-card p-6 ml-4 bg-slate-900/30 group-hover:bg-slate-900/50 transition-colors border-l-Indigo-500 border-l-[3px]">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-white text-sm">{activity.title}</h4>
              <span className="text-[10px] font-bold text-slate-500 font-mono italic">{activity.time}</span>
            </div>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              {activity.detail}
            </p>
            
            <div className="mt-4 flex items-center gap-4">
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest border border-slate-800 px-2 py-0.5 rounded">
                #{activity.type}
              </span>
              <button className="text-[9px] font-black text-indigo-500 uppercase tracking-widest hover:text-indigo-400 transition-colors">
                View Trace
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
