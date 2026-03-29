import React from 'react';

export default function Home() {
  const WALLET_ADDRESS = process.env.NEXT_PUBLIC_SOLANA_WALLET || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'; // USDC placeholder if not set
  
  const usdcCheckoutLink = `solana:${WALLET_ADDRESS}?amount=49&spl-token=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&label=B2B+Zendesk+n8n+Workflow`;

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight">AI Operations Toolkit</h1>
        <p className="text-xl text-slate-400">
          Zendesk + n8n Workflow Automation Template
        </p>
        
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
          <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mb-6 flex items-center justify-center shadow-inner">
            <span className="text-xl font-bold text-white/90">n8n Workflow .json</span>
          </div>
          
          <h2 className="text-2xl font-bold mb-2">Automate Your Customer Support</h2>
          <p className="text-slate-400 mb-6 text-sm">Instantly deploy our internal Zendesk automation routing. Handles triage, sentiment analysis, and AI drafting.</p>
          
          <div className="flex items-center justify-between mb-8">
            <span className="text-4xl font-black text-white">$49 <span className="text-lg text-slate-500 font-normal">USDC</span></span>
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">Digital Download</span>
          </div>

          <a 
            href={usdcCheckoutLink}
            className="block w-full bg-blue-600 text-white text-center font-bold text-lg py-4 rounded-xl hover:bg-blue-500 transition-colors"
          >
            Buy & Download via Solana Pay
          </a>
          <p className="text-xs text-slate-500 mt-4">Includes the JSON template and setup guide. Delivered instantly.</p>
        </div>
      </div>
    </main>
  );
}
