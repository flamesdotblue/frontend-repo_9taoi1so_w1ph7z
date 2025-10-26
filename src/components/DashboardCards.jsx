import React from 'react';
import { Activity, Shield, Bell, TrendingUp } from 'lucide-react';

export default function DashboardCards({ latest }) {
  const safeLatest = latest || { bpm: '--', confidence: '--', status: 'N/A' };
  return (
    <section id="dashboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <h2 className="text-white text-2xl font-semibold">Dashboard</h2>
        <p className="text-white/70 text-sm">Live metrics, privacy, and proactive alerts at a glance.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">Latest Heart Rate</span>
            <Activity className="h-4 w-4 text-cyan-300" />
          </div>
          <div className="mt-3">
            <div className="text-3xl font-semibold text-white">{safeLatest.bpm}</div>
            <div className="text-xs text-white/60">Confidence: {safeLatest.confidence}</div>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">Trend</span>
            <TrendingUp className="h-4 w-4 text-green-300" />
          </div>
          <div className="mt-3">
            <div className="text-3xl font-semibold text-white">Stable</div>
            <div className="text-xs text-white/60">7-day comparison</div>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">Privacy</span>
            <Shield className="h-4 w-4 text-blue-300" />
          </div>
          <div className="mt-3">
            <div className="text-3xl font-semibold text-white">Encrypted</div>
            <div className="text-xs text-white/60">At rest and in transit</div>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">Notifications</span>
            <Bell className="h-4 w-4 text-amber-300" />
          </div>
          <div className="mt-3">
            <div className="text-3xl font-semibold text-white">Calm</div>
            <div className="text-xs text-white/60">No alerts right now</div>
          </div>
        </div>
      </div>
    </section>
  );
}
