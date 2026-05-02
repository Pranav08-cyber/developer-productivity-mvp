import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import { motion } from 'motion/react';

export default function TrendChart({ data }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="tech-card p-8 h-[350px] flex flex-col"
      id="trend-chart-container"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-bold text-white tracking-tight uppercase text-xs">Energy Allocation Matrix</h3>
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest mt-1">Cross-activity temporal analysis</p>
        </div>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2 text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" /> Focus
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" /> Meetings
          </div>
        </div>
      </div>
      
      <div className="flex-1 w-full translate-x-[-15px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" opacity={0.5} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#475569', fontSize: 10, fontWeight: 600 }}
              dy={15}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#475569', fontSize: 10, fontWeight: 600 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0f172a',
                borderRadius: '8px', 
                border: '1px solid #334155', 
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)',
                fontSize: '11px',
                color: '#f1f5f9'
              }}
              itemStyle={{ color: '#818cf8' }}
              cursor={{ stroke: '#334155', strokeWidth: 1 }}
            />
            <Area 
              type="monotone" 
              dataKey="focus" 
              stroke="#6366f1" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorFocus)" 
              animationDuration={1500}
            />
            <Area 
              type="monotone" 
              dataKey="meetings" 
              stroke="#334155" 
              strokeWidth={2}
              fill="transparent"
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
