 "use client";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-slate-900 via-purple-900/30 to-slate-900 py-4 px-4 border-t border-slate-700/30">
      <div className="max-w-md mx-auto flex items-center justify-center gap-3">
        <div className="w-8 h-8 bg-slate-700/50 rounded-lg p-1.5 shadow-md flex items-center justify-center">
          <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div className="text-left">
          <p className="text-sm font-medium text-slate-200 leading-tight">(15) 95974-0909</p>
          <p className="text-xs text-slate-500">WhatsApp / Suporte</p>
        </div>
      </div>
    </footer>
  );
} 
