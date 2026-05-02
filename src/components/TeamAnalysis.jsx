import React from 'react';
import { motion } from 'motion/react';
import { Users, PieChart as PieIcon, Shield, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export default function TeamAnalysis({ team }) {
  if (!team) return null;

  const COLORS = ['#6366f1', '#10b981', '#f59e0b'];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Collaboration Score */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="tech-card p-8 flex flex-col items-center justify-center text-center"
        >
          <div className="mb-4 p-4 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <Users size={32} className="text-indigo-400" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Collaboration Index</h4>
          <div className="text-6xl font-black text-white font-mono tracking-tighter">
            {team.collaborationScore}
          </div>
          <p className="mt-4 text-xs text-slate-400 font-medium max-w-[200px]">
            Your team integration is in the <span className="text-indigo-400">top 5%</span> of the organization this month.
          </p>
        </motion.div>

        {/* Review Distribution */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="tech-card p-8 h-[300px]"
        >
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Review Influence Sharing</h4>
          <div className="h-[180px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={team.reviewDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {team.reviewDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', fontSize: '11px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {team.reviewDistribution.map((entry, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                {entry.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team Members List */}
      <div className="space-y-4">
        <h3 className="font-bold text-white text-xs uppercase tracking-[0.2em] px-1">Squad Resonance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.members.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="tech-card p-4 flex flex-col items-center text-center group"
            >
              <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full mb-3 border-2 border-slate-700 group-hover:border-indigo-500 transition-colors" />
              <p className="text-sm font-bold text-white mb-1">{member.name}</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight mb-3">{member.role}</p>
              
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-indigo-500 h-full rounded-full" 
                  style={{ width: `${member.contribution}%` }} 
                />
              </div>
              <p className="mt-2 text-[9px] font-black text-indigo-400 uppercase tracking-widest">{member.contribution}% Alignment</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
