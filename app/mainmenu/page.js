"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, Lock, Trophy, Unlock, Flame, ArrowLeft } from 'lucide-react';
import { getWorldTheme } from '@/lib/worlds';

export default function MainMenu() {
  const router = useRouter();

  // Game state
  const [lives, setLives] = useState(5);
  const [streak, setStreak] = useState(0);
  const [points, setPoints] = useState(0);

  const [isMounted, setIsMounted] = useState(false);
  
  // 10 Levels with a dynamic status state
  const [levels, setLevels] = useState([
  { id: 1, name: "WORLD-1", slug: "forest", status: "unlocked" },
  { id: 2, name: "WORLD-2", slug: "iceworld", status: "locked" },
  { id: 3, name: "WORLD-3", slug: "desert", status: "locked" },
  { id: 4, name: "WORLD-4", slug: "ocean", status: "locked" },
  { id: 5, name: "WORLD-5", slug: "volcano", status: "locked" },
  { id: 6, name: "WORLD-6", slug: "sky", status: "locked" },
  { id: 7, name: "WORLD-7", slug: "cave", status: "locked" },
  { id: 8, name: "WORLD-8", slug: "swamp", status: "locked" },
  { id: 9, name: "WORLD-9", slug: "tundra", status: "locked" },
  { id: 10, name: "WORLD-10", slug: "space", status: "locked" },
]);

  useEffect(()=> {
    setIsMounted(true);
  }, []);


  // Dynamic click handler to simulate leveling up and watching the lock pop open!
  const handleLevelClick = (clickedLevel, index) => {
    if (clickedLevel.status === "locked") {
      // Check if the previous level is unlocked. If yes, let's unlock this one!
      if (index > 0 && levels[index - 1].status === "unlocked") {
        
        // 1. Trigger the "unlocking" sequence (shows the open lock)
        setLevels(prev => prev.map((lvl, i) => i === index ? { ...lvl, status: "unlocking" } : lvl));
        
        // 2. After 800ms, fade the lock out entirely and mark as "unlocked"
        setTimeout(() => {
          setLevels(prev => prev.map((lvl, i) => i === index ? { ...lvl, status: "unlocked" } : lvl));
          setPoints(prev => prev + 100); // Reward points for unlocking!
        }, 800);

      } else {
        alert(`🔒 Complete "${levels[index - 1]?.name}" first to clear the path!`);
      }
    }  else if (clickedLevel.status === "unlocked") {
  
  router.push(`/play/${clickedLevel.slug}`);
}
  };
  if(!isMounted) {
    return <div className='min-h-screen bg-slate-950' />
  }

  return (
    <main className="flex flex-col justify-between min-h-screen bg-linear-to-b from-slate-950 via-emerald-950/40 to-neutral-950 font-mono text-white p-6 relative overflow-hidden">
      
      {/* Visual decorative backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/*  TOP NAV BAR */}
      <header className={`w-full max-w-5xl mx-auto flex  items-center justify-between  bg-emerald-950/30 backdrop-blur border border-emerald-500/20 
      rounded-2xl p-2 md:p-4 gap-2 shadow-[0_0_20px_rgba(16,185,129,0.05)]`}>
        <button 
          onClick={() => router.push('/')}
          className=" group flex items-center space-x-2 bg-rose-950/60 px-2 border border-rose-500/30 
          md:px-4 md:py-2 rounded-xl text-rose-300 font-bold transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(244,63,94,0.1)]
          max-w-10.5 hover:max-w-35 md:max-w-37.5 shrink-0 "
        >
          <span className=' shrink-0'><ArrowLeft /></span>
          <span className='opacity-0 group-hover:opacity-100 md:opacity-100  transition-opacity duration-300
          text-xs md:text-sm whitespace-nowrap tracking-wide'>Exit Game</span>
        </button>

        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Heart Deck Units */}
          <div className="flex items-center px-2 sm:px-3 h-10 bg-black/40 rounded-xl border border-emerald-800/40 shrink-0">
            <span className="text-gray-400 text-2.75 font-bold hidden md:inline mr-2 tracking-wider">LIVES:</span>
            <div className="flex  space-x-0.5 sm:space-x-1">
              {isMounted && (
                <>
                {Array.from({ length:Math.max(0,lives) }).map((_, i) => (
                <Heart key={`active-${i}`} className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 fill-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.7)] animate-pulse shrink-0" />
              ))}
              {Array.from({ length: Math.max(0, 5 - lives) }).map((_, i) => (
                <Heart key={`empty-${i}`} className="w-5 h-5 text-zinc-700 fill-zinc-800/50" />
              ))}
                </>
              )}
              
            </div>
          </div>
          {/*Streak */}
          <div className="flex items-center space-x-1 bg-black/40 px-2 sm:px-3 h-10  rounded-xl border border-emerald-800/40 shrink-0">
            <span className="text-sm sm:text-lg text-orange-500 animate-bounce"><Flame /></span>
            <span className="text-orange-400 font-black text-xs sm:text-sm whitespace-nowrap">
              {streak} <span className='text-2.5 text-orange-300/70 font-normal ml-0.5'>
              DAYS</span> 
              </span>
          </div>

          <div className="flex items-center space-x-1 bg-linear-to-r from-purple-950/50 to-emerald-950/50 px-2 sm:px-3 h-10 rounded-xl border border-purple-500/20 shrink-0">
            <span className="text-sm sm:text-lg"><Trophy /></span>
            <span className="text-purple-300 font-black text-xs sm:text-sm whitespace-nowrap  tracking-wide">
              {points}
            </span>
          </div>
        </div>
      </header>

      {/* 🌲 MIDDLE LEVEL MAP AREA */}
<section className="flex-1 w-full max-w-4xl mx-auto my-8 flex flex-col items-center justify-center">
  <div className="text-center mb-8">
    <span className="text-xs tracking-widest uppercase font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
      WELCOME!
    </span>
    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-200 to-fuchsia-400 mt-1 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
      CHOOSE YOUR JOURNEY
    </h2>
  </div>

  {/* Level Path Grid System */}
  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full p-4 justify-items-center">
    {levels.map((level, index) => {
      const isLocked = level.status === "locked";
      const isUnlocking = level.status === "unlocking";
      const isUnlocked = level.status === "unlocked";
      const theme = getWorldTheme(level.slug);

      return (
        <button
          key={level.id}
          onClick={() => handleLevelClick(level, index)}
          className={`group relative flex flex-col items-center justify-center w-28 h-28 rounded-2xl border transition-all duration-300 outline-none overflow-hidden
            ${isLocked ? "bg-neutral-900/40 border-neutral-800 text-neutral-600 cursor-pointer" : ""}
            ${isUnlocking ? "bg-emerald-900/40 border-yellow-400/60 shadow-[0_0_20px_rgba(234,179,8,0.3)] scale-105" : ""}
            ${isUnlocked ? `bg-linear-to-br ${theme.tileUnlocked} hover:scale-105 active:scale-95` : ""}
            `}
        >
          {/* THE ANIMATED LOCK GRAPHIC OVERLAY */}
          {(isLocked || isUnlocking) && (
            <div className={`absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center z-20 transition-all duration-700 ease-in-out p-1
              ${isUnlocking ? "opacity-0 scale-150 pointer-events-none -translate-y-5" : "opacity-100 scale-100"}`}
            >
              {isLocked ? (
                <Lock className="w-8 h-8 text-neutral-600 group-hover:text-neutral-400 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Unlock className="w-8 h-8 text-yellow-400 animate-bounce" />
              )}
              <span className="text-[9px] text-zinc-600 font-bold tracking-tighter mt-1">
                {isUnlocking ? "UNLOCKED!" : "LOCKED"}
              </span>
            </div>
          )}

          {/* THE REVEALED CONTENT (Only processes active visual state items cleanly) */}
          {!isLocked && (
            <span className="{`absolute top-1 right-1 w-2 h-2 ${theme.accentDot} rounded-full animate-ping opacity-70" />
          )}
          
          <span className={`text-2xl font-black mb-1 transition-colors duration-300 
            ${isLocked ? "text-neutral-700" : "text-emerald-400 group-hover:text-fuchsia-400"}`}>
            {String(level.id).padStart(2, '0')}
          </span>

          <span className={`text-[10px] uppercase font-bold tracking-tight text-center px-1 line-clamp-2 transition-colors duration-300
            ${isLocked ? "text-neutral-600" : theme.menuAccentText}`}>
            {level.slug}
          </span>
        </button>
      );
    })}
  </div>
</section>

      {/*  BOTTOM WORLD SELECTOR MODULE */}
     
{/* <footer className="w-full flex justify-center items-center z-10 px-2">
  <button 
    onClick={() => router.push('/world-2')} //  This instantly warps players to Grid Glacier!
    className="group relative px-4 py-2.5 sm:px-6 sm:py-3 border rounded-xl font-bold tracking-wider text-xs sm:text-sm transition-all duration-500 hover:scale-105 active:scale-95 shadow-md bg-linear-to-r from-emerald-900 to-slate-900 border-emerald-500/30 text-emerald-300 hover:border-cyan-400"
  >
    <span className="flex items-center space-x-2">
      <span>🗺️</span>
      <span className="font-black uppercase">SWITCH TO: GRID GLACIER</span>
      <span className="text-[10px] opacity-70 font-medium animate-pulse">(WARP)</span>
    </span>
  </button>
</footer> */}
      

    </main>
  );
}