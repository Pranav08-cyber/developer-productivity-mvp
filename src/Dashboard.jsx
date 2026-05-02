import React, { useState, useEffect } from 'react';
import { getDashboardData } from './services/api';
import MetricCard from './components/MetricCard';
import TrendChart from './components/TrendChart';
import InsightPanel from './components/InsightPanel';
import RecommendationCard from './components/RecommendationCard';
import TeamAnalysis from './components/TeamAnalysis';
import ActivityFeed from './components/ActivityFeed';
import Preferences from './components/Preferences';
import { Users, Mail, LayoutDashboard, Settings, Bell, Search, Menu, X, Terminal, Cpu, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDashboardData('DEV-001');
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#020617]">
        <div className="relative">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="w-16 h-16 border-b-2 border-indigo-500 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-indigo-400 uppercase tracking-tighter">
            SYNC
          </div>
        </div>
      </div>
    );
  }

  const { developer, metrics, trends, insights, recommendations, team, activity } = data;

  const renderContent = () => {
    switch (activeTab) {
      case 'Team Analysis': return <TeamAnalysis team={team} />;
      case 'Activity': return <ActivityFeed activities={activity} />;
      case 'Preferences': return <Preferences />;
      default: return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {metrics.map((metric, idx) => <MetricCard key={idx} {...metric} />)}
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="font-bold text-white text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                  <Activity size={14} className="text-indigo-400" />
                  Performance Vector
                </h3>
                <div className="flex gap-2">
                  {['7D', '30D', '90D'].map(p => (
                    <button key={p} className={`text-[10px] font-bold px-3 py-1 rounded border ${p === '7D' ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' : 'border-slate-800 text-slate-500'}`}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <TrendChart data={trends} />
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-white text-xs uppercase tracking-[0.2em] px-2">System Growth Protocols</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.map((rec) => <RecommendationCard key={rec.id} {...rec} />)}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-10">
            <InsightPanel insights={insights} />
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-indigo-600 text-white shadow-[0_20px_50px_rgba(99,102,241,0.2)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <Cpu size={24} className="mb-4 text-indigo-200" />
                <h4 className="font-bold text-lg mb-2">Neural Optimization</h4>
                <p className="text-xs text-indigo-100 leading-relaxed font-medium mb-6">
                  Biological focus peaks detected at 09:45. Aligning high-entropy tasks with this window.
                </p>
                <button className="w-full py-3 bg-white text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  Auto-Schedule <Terminal size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex font-sans selection:bg-indigo-500/30">
      <div className="scanline" />

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold italic shadow-lg shadow-indigo-500/20">D</div>
          <span className="font-bold text-lg">DevPulse</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-400">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-slate-950/50 backdrop-blur-2xl border-r border-slate-900 flex flex-col p-8 transition-transform lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center gap-3 mb-16 px-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black italic shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            D
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter text-white">DEVPULSE</span>
            <span className="text-[10px] text-indigo-400 font-black tracking-widest uppercase mt-[-4px]">Coaching Node</span>
          </div>
        </div>

        <nav className="space-y-1.5 flex-1">
          <SidebarLink icon={<LayoutDashboard size={18} />} label="Overview" active={activeTab === 'Overview'} onClick={() => { setActiveTab('Overview'); setIsSidebarOpen(false); }} />
          <SidebarLink icon={<Users size={18} />} label="Team Analysis" active={activeTab === 'Team Analysis'} onClick={() => { setActiveTab('Team Analysis'); setIsSidebarOpen(false); }} />
          <SidebarLink icon={<Activity size={18} />} label="Activity" active={activeTab === 'Activity'} onClick={() => { setActiveTab('Activity'); setIsSidebarOpen(false); }} />
          <SidebarLink icon={<Settings size={18} />} label="Preferences" active={activeTab === 'Preferences'} onClick={() => { setActiveTab('Preferences'); setIsSidebarOpen(false); }} />
        </nav>

        <div className="mt-auto pt-8 border-t border-slate-900 flex items-center gap-4 bg-gradient-to-t from-slate-950/20 to-transparent p-2 rounded-xl">
          <img src={developer.avatar} alt="Me" className="w-12 h-12 rounded-xl border border-slate-800 shadow-xl" />
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-white truncate">{developer.name}</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mt-1">{developer.role}</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 min-h-screen pt-24 lg:pt-0">
        <div className="max-w-[1400px] mx-auto p-6 md:p-10 lg:p-12 xl:p-16">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-500">Node Status: Active</span>
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              </div>
              <h1 className="text-4xl font-extrabold text-white tracking-tighter leading-none">{activeTab}</h1>
              <p className="text-slate-500 text-sm font-medium tracking-tight">Syncing data from your neural workspace for the last 24h.</p>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400 transition-colors" size={14} />
                <input 
                  type="text" 
                  placeholder="Query system..." 
                  className="pl-11 pr-6 py-3 bg-slate-900/30 border border-slate-800 rounded-2xl text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all w-64 text-white"
                />
              </div>
              <button className="bg-slate-900/50 p-3 border border-slate-800 rounded-2xl group hover:border-slate-700 transition-colors">
                <Bell size={18} className="text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </button>
            </div>
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ icon, label, active = false, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl transition-all relative overflow-hidden group ${
        active 
          ? 'bg-indigo-600 text-white shadow-[0_10px_25px_rgba(99,102,241,0.3)]' 
          : 'text-slate-500 hover:bg-slate-900/50 hover:text-slate-300'
      }`}
    >
      <div className="flex items-center gap-3 relative z-10">
        <span className={active ? 'text-white' : 'text-slate-500 group-hover:text-indigo-400 transition-colors'}>
          {icon}
        </span>
        <span className={`text-[11px] font-black uppercase tracking-widest ${active ? 'opacity-100' : 'opacity-80'}`}>
          {label}
        </span>
      </div>
      {active && (
        <motion.div 
          layoutId="sidebar-active-indicator"
          className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500" 
        />
      )}
    </button>
  );
}