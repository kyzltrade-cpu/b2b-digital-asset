import React from 'react';

export default function Home() {
  const WALLET_ADDRESS = process.env.NEXT_PUBLIC_SOLANA_WALLET || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
  const usdcCheckoutLink = `solana:${WALLET_ADDRESS}?amount=49&spl-token=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&label=B2B+Zendesk+n8n+Workflow`;

  return (
    <main className="min-h-screen bg-[#f4f4f0] text-black font-mono p-4 md:p-12 lg:p-24 selection:bg-black selection:text-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        <div className="md:col-span-8 flex flex-col justify-start">
          <h1 className="text-[12vw] md:text-[8vw] font-black leading-none uppercase tracking-tighter mix-blend-difference mb-8 md:mb-24">
            STOP DOING SUPPORT MANUALLY.
          </h1>
          <div className="max-w-xl text-xl md:text-3xl font-bold uppercase leading-snug space-y-6">
            <p>IT'S LATE. YOUR COMPETITORS ARE USING AI.</p>
            <p>WE BUILT THE EXACT N8N + ZENDESK WORKFLOW YOU NEED.</p>
            <p>BUY IT. IMPORT IT. FIRE YOUR TIER 1 SUPPORT.</p>
          </div>
        </div>

        <div className="md:col-span-4 mt-12 md:mt-48 border-4 border-black p-6 md:p-8 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="uppercase font-bold text-sm tracking-widest border-b-2 border-black pb-4 mb-8">
            DIGITAL ASSET: N8N_ZENDESK_TRIAGE.JSON
          </div>
          
          <div className="mb-12">
            <span className="text-6xl md:text-8xl font-black block leading-none">$49</span>
            <span className="text-xl font-bold block mt-2">USDC ONLY</span>
          </div>

          <a 
            href={usdcCheckoutLink}
            className="block w-full bg-black text-white text-center font-black text-xl md:text-2xl py-6 hover:bg-transparent hover:text-black border-4 border-transparent hover:border-black transition-all uppercase"
          >
            PAY VIA SOLANA
          </a>
          
          <p className="text-sm font-bold mt-6 text-right uppercase">
            INSTANT DELIVERY. NO REFUNDS.
          </p>
        </div>
      </div>
    </main>
  );
}
