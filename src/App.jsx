import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import DashboardCards from './components/DashboardCards';
import HistoryTable from './components/HistoryTable';

function App() {
  const [measuring, setMeasuring] = useState(false);
  const [latest, setLatest] = useState(null);

  const handleStart = () => {
    // UI-only placeholder to reflect a 30s capture flow without backend calls
    if (measuring) return;
    setMeasuring(true);
    setTimeout(() => {
      setLatest({ bpm: 74, confidence: '0.93', status: 'Normal' });
      setMeasuring(false);
    }, 3000); // shortened demo simulation
  };

  return (
    <div className="min-h-screen bg-[#070B12]">
      <NavBar />
      <Hero onStart={handleStart} />

      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'rPPG + Face Detection',
              desc: 'Leveraging advanced signal processing and face landmarks for accurate, camera-based heart rate.',
            },
            {
              title: 'AI Confidence',
              desc: 'Combines multiple AI models to produce a robust confidence score for each capture.',
            },
            {
              title: 'HIPAA-Ready',
              desc: 'Secure by design with encryption, consent flows, and privacy-first defaults.',
            },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 p-6 bg-white/[0.03] text-white">
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-white/10 p-4 bg-white/[0.03] text-white flex items-center justify-between">
          <div>
            <h4 className="font-semibold">Quick Measure</h4>
            <p className="text-white/70 text-sm">Start a 30-second capture from your webcam. Video stays private to your device during capture.</p>
          </div>
          <button onClick={handleStart} disabled={measuring} className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md ${measuring ? 'bg-white/20 text-white/60 cursor-not-allowed' : 'text-black bg-gradient-to-r from-cyan-300 to-blue-300 hover:from-cyan-200 hover:to-blue-200'}`}>
            {measuring ? 'Measuring…' : 'Start 30s measurement'}
          </button>
        </div>
      </section>

      <DashboardCards latest={latest} />
      <HistoryTable />

      <footer id="privacy" className="border-t border-white/10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white/70 text-sm">
          <p>
            VitalSense does not store raw videos in the browser experience. Processed signals and results are secured with encryption. By using this demo, you agree to basic analytics for reliability improvements.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} VitalSense Health</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
