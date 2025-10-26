import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Activity } from 'lucide-react';

export default function Hero({ onStart }) {
  return (
    <section className="relative w-full" style={{ minHeight: '60vh' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-white/80">
            <Shield className="h-3.5 w-3.5" /> HIPAA-grade privacy • On-device capture
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            AI Heart Rate Monitoring,
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Right from your camera</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Measure heart rate in 30 seconds using cutting-edge rPPG and face detection. Accurate, private, and built for healthcare workflows.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={onStart} className="inline-flex items-center gap-2 text-sm font-medium text-black bg-gradient-to-r from-cyan-300 to-blue-300 hover:from-cyan-200 hover:to-blue-200 px-4 py-2 rounded-md">
              <Activity className="h-4 w-4" /> Start 30s measurement
            </button>
            <a href="#features" className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white px-4 py-2 rounded-md border border-white/20">
              Learn more
            </a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
