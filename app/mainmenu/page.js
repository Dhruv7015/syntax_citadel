'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
// Fixed: Added Flame and Trophy imports
import { Heart, Flame, Trophy, Map } from "lucide-react"

const Page = () => {
  const router = useRouter();

  const [lives, setLives] = useState(5);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const levels = [
    { id: 1, name: "Justify Jungle", status: "unlocked" },
    { id: 2, name: "Align Amazon", status: "locked" },
    { id: 3, name: "Flex-Direction Deepwoods", status: "locked" },
    { id: 4, name: "Wrap Wilderness", status: "locked" },
    { id: 5, name: "Grow Grove", status: "locked" },
    { id: 6, name: "Shrink Swamplands", status: "locked" },
    { id: 7, name: "Basis Bushlands", status: "locked" },
    { id: 8, name: "Order Outpost", status: "locked" },
    { id: 9, name: "Gap Glade", status: "locked" },
    { id: 10, name: "The Canopy Citadel", status: "locked" },
  ];

  const handleLevelClick = (level) => {
    if (level.status === "unlocked") {
      alert(`Entering level ${level.id}:${level.name}`);
      router.push(`/levels/${level.id}`);
    } else {
      alert(`Level ${level.id}:${level.name} is locked. Complete previous levels to unlock.`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-linear-to-b from-slate-950 via-emerald-950 to-neutral-950 font-mono text-white p-6 relative overflow-hidden">
      
      {/* Fixed: Wrapped arbitrary percentages in brackets and added proper self-closing tags */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 pointer-events-none bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 pointer-events-none bg-purple-500/10 rounded-full blur-3xl" />

      {/* Navigation and status bar */}
      <header className="flex items-center justify-between flex-wrap gap-4 w-full max-w-5xl bg-emerald-950/30 backdrop-blur border border-emerald-500/20 rounded-2xl p-4 shadow-[0_0_20px_rgba(16,186,129,0.05)] z-10">
        
        {/* Exit tab */}
        <button
          onClick={() => router.push('/')}
          className='flex items-center space-x-2 bg-rose-950/60 hover:bg-rose-900 border border-rose-500/30 px-4 py-2 rounded-xl text-rose-300 transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(244,63,94,0.1)]'
        >
          <span>Exit Game</span>
        </button>

        {/* Realtime stats */}
        <div className='flex items-center space-x-6'>
          
          {/* Lives Counter */}
          <div className='flex items-center space-x-2 bg-black/40 px-4 py-2 rounded-xl border border-emerald-800/40'>
            
            <span className='text-xs text-gray-400 font-bold hidden sm:inline'>LIVES:</span>
            <div className='text-emerald-400 font-black flex flex-row tracking-widest'>
              {Array.from({length:lives}).map((_,i) => (
                <Heart
                key = {i}
                className='w-5 h-5 text-rose-500 fill-rose-500  animate-pulse' />

              ))}
              {Array.from({length: 3 - lives}).map((_,i) => (
                <Heart 
                key = {i}
                className='w-5 h-5 text-zinc-700 fill-zinc-800/50' />
              ))}
            </div>
          </div>

          {/* Streak counter */} 
          <div className='flex items-center space-x-2 bg-black/40 px-4 py-2 rounded-xl border border-emerald-800/40 cursor-pointer hover:border-orange-500/30 transition-all'>
            <span className='text-xl text-orange-500 animate-bounce'><Flame size={20} /></span>
            <span className='text-xs text-gray-400 font-bold hidden sm:inline'>STREAK:</span>
            <span className='text-orange-400 font-black tracking-widest'>
              {streak} DAYS
            </span>
          </div>

          {/* Score counter */}
          <div className='flex items-center space-x-2 bg-linear-to-r from-purple-950/50 to-transparent px-4 py-2 rounded-xl border border-purple-500/20'>
            <span className='text-xl text-yellow-500 animate-pulse'><Trophy size={20} /></span>
            <span className='text-xs text-gray-400 font-bold hidden sm:inline'>SCORE:</span>
            <span className='text-purple-300 font-black tracking-wide'>
              {score}
            </span>
          </div>

        </div>
      </header>
      {/* MIDDLE SECTION */}
      <section className="flex flex-col items-center justify-center w-full max-w-4xl my-8 ">
        <div className='text-center mb-6'>
          <span className='text-xs tracking-widest uppercase fomt-bold text-emerald-500/10
          px-3 py-1 rounded-full border border-emerald-500/20'>
            Current Campaign
          </span>
          <h2 className='text-3xl font-black text-transparent bg-clip-text bg-linear-to-r
          from-emerald-400 via-teal-200 to-fuchsia-400 mt-1 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]'>
            FLEXBOX FOREST ARCHIPELAGO
          </h2>

        </div>
        {/* Level selection grid */}
        <div className="grid grid-cols-2  md:grid-cols-5 gap-6 w-full p-4 justify-items-center">
          {levels.map((levels) => {
            const isLocked = levels.status === "locked";
            return (
              <button 
                key={levels.id} 
                onClick={() => handleLevelClick(levels)}
                className={`w-28 h-28  group-relative flex  flex-col items-center justify-center rounded-xl border  transition-all 
                duration-300 outline-none 
                ${isLocked ? 'bg-neutral-900/40 border-neutral-800 text-gray-600 cursor-not-allowed'
                 : 'bg-linear-to-br from-emerald-950/80 to-slate-900 border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]'}`}
              >
                {!isLocked && (
                  <span className='absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 text-emerald-400 rounded-full animate-ping opacity-70'/>
                )}
                {/*level index identifier */}
                <span className={`text-2xl font-black mb-1 ${isLocked ? 'text-gray-700' : 'text-emerald-400 group-hover:text-fuchsia-400 transition-colors'}`}>
                  {isLocked ? '🔒' : String(levels.id).padStart(2,'0')}
                  </span>
                  {/*mini level title text footer */}
                <span className='text-[10px] uppercase font-bold tracking-tight text-center px-1 line-clamp-2'>{levels.name}</span>

              </button>
            );
})}
        </div>

      </section>
      {/*Bottom section */}
      <footer className="flex  items-center justify-center w-full z-10">
        <button
        onClick= {() => alert('World Map selector incoming in next expansion packs!')}
        
        className='group relative px-6 py-3 bg-linear-to-r from-emerald-900 
        via-teal-950 border border-emerald-500/30 rounded-xl font-bold text-sm tracking-wider 
        shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]
        hover:border-fuchsia-500/50 transition-all duration-300 hover:scale-105'>
          <span className='flex items-center space-x-2 text-emerald-300 group-hover:text-fuchsia-200'>
            <span><Map /></span>
            <span className='font-black'>WORLD 01: FLEXBOX FOREST</span>
            <span className='text-xs text-emerald-500 group-hover:text-fuchsia-400 font-medium'>
              (CLICK TO SWITCH)
            </span>
          </span>

        </button>

      </footer>

    </main>
  )
}

export default Page