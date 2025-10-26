import React from 'react';
import { History, Download, Share2 } from 'lucide-react';

const mockRows = [
  { id: 1, date: '2025-10-20 09:10', bpm: 72, confidence: '0.94', status: 'Normal' },
  { id: 2, date: '2025-10-20 15:22', bpm: 88, confidence: '0.91', status: 'Elevated' },
  { id: 3, date: '2025-10-21 07:40', bpm: 68, confidence: '0.96', status: 'Normal' },
];

export default function HistoryTable() {
  const rows = mockRows;

  const handleExport = () => {
    // In a full implementation, this would export CSV/PDF via the backend
    const header = ['Date', 'BPM', 'Confidence', 'Status'];
    const csv = [header, ...rows.map(r => [r.date, r.bpm, r.confidence, r.status])]
      .map(r => r.join(','))
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'vitalsense_history.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: 'VitalSense Heart Rate', text: 'Sharing recent heart rate history.', url: window.location.href });
    }
  };

  return (
    <section id="history" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white text-2xl font-semibold flex items-center gap-2"><History className="h-5 w-5" /> History</h2>
          <p className="text-white/70 text-sm">30-sec validated captures with AI confidence.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={handleExport} className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white px-3 py-2 rounded-md border border-white/20">
            <Download className="h-4 w-4" /> Export
          </button>
          <button onClick={handleShare} className="inline-flex items-center gap-2 text-sm font-medium text-black bg-gradient-to-r from-cyan-300 to-blue-300 hover:from-cyan-200 hover:to-blue-200 px-3 py-2 rounded-md">
            <Share2 className="h-4 w-4" /> Share
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-white/60">
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">BPM</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-white/10 text-sm text-white/90">
                <td className="px-4 py-3">{r.date}</td>
                <td className="px-4 py-3 font-medium">{r.bpm}</td>
                <td className="px-4 py-3">{r.confidence}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-md text-xs ${r.status === 'Normal' ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/20' : 'bg-amber-500/15 text-amber-300 border border-amber-400/20'}`}>{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
