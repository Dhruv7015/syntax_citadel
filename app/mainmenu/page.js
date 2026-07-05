"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, Lock, Trophy, Unlock, Flame } from 'lucide-react';

export default function MainMenu() {
  const router = useRouter();

  // Game state
  const [lives, setLives] = useState(5);
  const [streak, setStreak] = useState(0);
  const [points, setPoints] = useState(0);

  // 10 Levels with a dynamic status state
  const [levels, setLevels] = useState([
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
  ]);

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
    } else if (clickedLevel.status === "unlocked") {
      alert(`Entering Level ${clickedLevel.id}: ${clickedLevel.name}`);
      // router.push(`/level/${clickedLevel.id}`);
    }
  };

  return (
    <main className="flex flex-col justify-between min-h-screen bg-linear-to-b from-slate-950 via-emerald-950/40 to-neutral-950 font-mono text-white p-6 relative overflow-hidden">
      
      {/* Visual decorative backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/*  TOP NAV BAR */}
      <header className="w-full max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 bg-emerald-950/30 backdrop-blur border border-emerald-500/20 rounded-2xl p-4 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
        <button 
          onClick={() => router.push('/')}
          className="flex items-center space-x-2 bg-rose-950/60 hover:bg-rose-900 border border-rose-500/30 px-4 py-2 rounded-xl text-rose-300 font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
        >
          <span> Exit Game</span>
        </button>

        <div className="flex items-center space-x-6">
          {/* Heart Deck Units */}
          <div className="flex items-center space-x-2 bg-black/40 px-4 py-2 rounded-xl border border-emerald-800/40">
            <span className="text-gray-400 text-xs font-bold hidden sm:inline mr-1">LIVES:</span>
            <div className="flex space-x-1">
              {Array.from({ length: lives }).map((_, i) => (
                <Heart key={i} className="w-5 h-5 text-rose-500 fill-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.7)] animate-pulse" />
              ))}
              {Array.from({ length: 3 - lives }).map((_, i) => (
                <Heart key={i} className="w-5 h-5 text-zinc-700 fill-zinc-800/50" />
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-black/40 px-4 py-2 rounded-xl border border-emerald-800/40">
            <span className="text-xl text-orange-500 animate-bounce"><Flame /></span>
            <span className="text-orange-400 font-black">{streak} DAYS</span>
          </div>

          <div className="flex items-center space-x-2 bg-linear-to-r from-purple-950/50 to-emerald-950/50 px-4 py-2 rounded-xl border border-purple-500/20">
            <span className="text-xl"><Trophy /></span>
            <span className="text-purple-300 font-black tracking-wide">{points}</span>
          </div>
        </div>
      </header>

      {/* 🌲 MIDDLE LEVEL MAP AREA */}
      <section className="flex-1 w-full max-w-4xl mx-auto my-8 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <span className="text-xs tracking-widest uppercase font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Current Campaign
          </span>
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-200 to-fuchsia-400 mt-1 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            FLEXBOX FOREST ARCHIPELAGO
          </h2>
          <p className="text-xs text-zinc-500 mt-1 font-sans">💡 Tip: Click the next locked level to simulate an unlocking effect!</p>
        </div>

        {/* Level Path Grid System */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full p-4 justify-items-center">
          {levels.map((level, index) => {
            const isLocked = level.status === "locked";
            const isUnlocking = level.status === "unlocking";
            const isUnlocked = level.status === "unlocked";

            return (
              <button
                key={level.id}
                onClick={() => handleLevelClick(level, index)}
                className={`group relative flex flex-col items-center justify-center w-28 h-28 rounded-2xl border transition-all duration-300 outline-none overflow-hidden
                  ${isLocked ? "bg-neutral-900/40 border-neutral-800 text-neutral-600 cursor-pointer" : ""}
                  ${isUnlocking ? "bg-emerald-900/40 border-yellow-400/60 shadow-[0_0_20px_rgba(234,179,8,0.3)] scale-105" : ""}
                  ${isUnlocked ? "bg-linear-to-br from-emerald-950/80 to-slate-900 border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:border-emerald-400 hover:scale-105 active:scale-95" : ""}
                `}
              >
                {/* 🔒 THE ANIMATED LOCK GRAPHIC OVERLAY */}
                {(isLocked || isUnlocking) && (
                  <div className={`absolute inset-0 bg-neutral-950/90 flex flex-col items-center justify-center z-20 transition-all duration-700 ease-in-out p-1
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

                {/* 🔮 THE REVEALED CONTENT (Shows when Unlocked or Unlocking background) */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-70" />
                
                <span className="text-2xl font-black mb-1 text-emerald-400 group-hover:text-fuchsia-400 transition-colors duration-300">
                  {String(level.id).padStart(2, '0')}
                </span>

                <span className="text-[10px] uppercase font-bold tracking-tight text-center px-1 line-clamp-2 text-zinc-400 group-hover:text-emerald-200">
                  {level.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 🗺️ BOTTOM WORLD SELECTOR MODULE */}
      <footer className="w-full flex justify-center items-center z-10">
        <button 
          onClick={() => alert("World Map selector incoming in next expansion packs!")}
          className="group relative px-6 py-3 bg-linear-to-r from-emerald-900 via-teal-950 to-purple-950 border border-emerald-500/30 rounded-xl font-bold tracking-wider text-sm shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:border-fuchsia-500/50 transition-all duration-300 hover:scale-105"
        >
          <span className="flex items-center space-x-2 text-emerald-300 group-hover:text-fuchsia-200">
            <span>🗺️</span>
            <span className="font-black">WORLD 01: FLEXBOX FOREST</span>
            <span className="text-xs text-emerald-500 group-hover:text-fuchsia-400 font-medium">(CLICK TO SWITCH)</span>
          </span>
        </button>
      </footer>

    </main>
  );
}