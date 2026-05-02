import React from 'react';
import { motion } from 'motion/react';
import { Settings, Shield, Bell, Zap, Brain, Palette } from 'lucide-react';

export default function Preferences() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
          <Settings size={20} className="text-indigo-400" />
        </div>
        <div>
          <h3 className="font-bold text-white text-lg">System Orchestration</h3>
          <p className="text-xs text-slate-500 font-medium">Configure your intelligent coaching environment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coaching Focus */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Brain size={14} className="text-indigo-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Coaching Core</span>
          </div>
          <div className="tech-card p-6 space-y-6">
            <ToggleSetting label="Flow State Optimization" active={true} />
            <ToggleSetting label="Review Cycle Monitoring" active={true} />
            <ToggleSetting label="Code Quality Guard" active={false} />
            <ToggleSetting label="Burnout Prevention" active={true} />
          </div>
        </section>

        {/* Interface Preferences */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Palette size={14} className="text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Atmospheric Control</span>
          </div>
          <div className="tech-card p-6 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-slate-200">Current Nexus</span>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-[#020617] border-2 border-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.4)]" />
                <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700" />
                <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300" />
              </div>
            </div>
            <ToggleSetting label="Haptics Feedback" active={true} />
            <ToggleSetting label="Compact Grid Layout" active={false} />
          </div>
        </section>
      </div>

      {/* API Configuration */}
      <section className="space-y-4 mt-8">
        <div className="flex items-center gap-2 mb-2">
          <Shield size={14} className="text-amber-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security & Integration</span>
        </div>
        <div className="tech-card p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1">
              <h4 className="text-sm font-bold text-white mb-1">Live Sync Credentials</h4>
              <p className="text-xs text-slate-500 font-medium">Secure handshake with V1 Productivity API</p>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
              <input 
                type="password" 
                value="••••••••••••••••" 
                disabled 
                className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-500 font-mono focus:outline-none"
              />
              <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg transition-colors">
                Rotate Secret
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ToggleSetting({ label, active }) {
  const [isOn, setIsOn] = React.useState(active);
  return (
    <div className="flex justify-between items-center group">
      <span className="text-sm font-bold text-slate-100 transition-colors">{label}</span>
      <button 
        onClick={() => setIsOn(!isOn)}
        className={`w-10 h-5 rounded-full relative transition-all duration-300 ${
          isOn ? 'bg-indigo-600' : 'bg-slate-800'
        }`}
      >
        <motion.div 
          animate={{ x: isOn ? 20 : 2 }}
          className={`absolute top-1 w-3 h-3 rounded-full shadow-lg ${
            isOn ? 'bg-white' : 'bg-slate-400'
          }`}
        />
      </button>
    </div>
  );
}
