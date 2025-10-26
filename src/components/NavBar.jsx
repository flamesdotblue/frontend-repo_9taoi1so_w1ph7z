import React from 'react';
import { Heart, Shield, User } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
            <Heart className="h-5 w-5 text-cyan-300" />
          </div>
          <span className="text-white font-semibold tracking-tight">VitalSense</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a>
          <a href="#history" className="hover:text-white transition-colors">History</a>
          <a href="#privacy" className="hover:text-white transition-colors flex items-center gap-2"><Shield className="h-4 w-4" /> Privacy</a>
        </nav>
        <button className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-3 py-2 rounded-md shadow-lg shadow-cyan-500/20">
          <User className="h-4 w-4" /> Sign in
        </button>
      </div>
    </header>
  );
}
