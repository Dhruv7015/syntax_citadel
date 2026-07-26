"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Heart, Lock, Trophy, Unlock, Flame, ArrowLeft } from 'lucide-react';
import { getWorldTheme } from '@/lib/worlds';
import { useAuth } from '@/app/context/AuthContext';
import StreakCalendar from '@/app/components/StreakCalendar';

import forestData from '@/data/levels/forest';
import iceworldData from '@/data/levels/iceworld';
import desertData from '@/data/levels/desert';
import oceanData from '@/data/levels/ocean';
import volcanoData from '@/data/levels/volcano';
import skyData from '@/data/levels/sky';
import caveData from '@/data/levels/cave';
import swampData from '@/data/levels/swamp';
import tundraData from '@/data/levels/tundra';
import spaceData from '@/data/levels/space';

const WORLD_DATA = {
  forest: forestData,
  iceworld: iceworldData,
  desert: desertData,
  ocean: oceanData,
  volcano: volcanoData,
  sky: skyData,
  cave: caveData,
  swamp: swampData,
  tundra: tundraData,
  space: spaceData,
};

export default function WorldLevels() {
  const router = useRouter();
  const params = useParams();
  const world = params.world;
  const theme = getWorldTheme(world);
  const worldData = WORLD_DATA[world];

  const { user, loading, progress } = useAuth();
  const [showCalendar, setShowCalendar] = useState(false);
  const streakButtonRef = useRef(null);

  useEffect(() => {
    if (!loading && !user) router.push('/login');
  }, [loading, user]);

  if (loading || !user) {
    return <div className='min-h-screen bg-slate-950' />;
  }

  const lives = progress?.lives ?? 5;
  const streak = progress?.streak ?? 0;
  const points = progress?.points ?? 0;
  const solved = progress?.solved ?? [];

  // Which question IDs are solved for this world + level
  function solvedIdsForLevel(levelId) {
    return solved
      .filter(p => p.world === world && Number(p.level) === Number(levelId))
      .map(p => p.questionId);
  }

  // A level is complete when every one of its question IDs is solved
  function isLevelComplete(levelId) {
    const levelData = worldData?.[levelId];
    if (!levelData) return false;
    const requiredIds = levelData.questions.map(q => q.id);
    const solvedIds = solvedIdsForLevel(levelId);
    return requiredIds.every(id => solvedIds.includes(id));
  }

  // Build the 1-10 level list with real unlock status
  const levels = Array.from({ length: 10 }, (_, i) => {
    const levelId = i + 1;
    const prevComplete = levelId === 1 || isLevelComplete(levelId - 1);
    return { id: levelId, status: prevComplete ? "unlocked" : "locked" };
  });

  const handleLevelClick = (clickedLevel, index) => {
    if (clickedLevel.status === "locked") {
      alert(`🔒 Complete Level ${levels[index - 1]?.id} first to clear the path!`);
    } else {
      router.push(`/play/${world}/${clickedLevel.id}`);
    }
  };

  return (
    <main className={`flex flex-col justify-between min-h-screen bg-linear-to-b ${theme.bgGradient} font-mono text-white p-6 relative overflow-hidden`}>

      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* TOP NAV BAR */}
      <header className={`w-full max-w-5xl mx-auto flex items-center justify-between ${theme.navBg} backdrop-blur border ${theme.navBorder} rounded-2xl p-2 md:p-4 gap-2 ${theme.navGlow}`}>
        <button
          onClick={() => router.push('/mainmenu')}
          className="group flex items-center space-x-2 bg-rose-950/60 px-2 border border-rose-500/30 md:px-4 md:py-2 rounded-xl text-rose-300 font-bold transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(244,63,94,0.1)] max-w-10.5 hover:max-w-35 md:max-w-37.5 shrink-0"
        >
          <span className='shrink-0'><ArrowLeft /></span>
          <span className='opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-300 text-xs md:text-sm whitespace-nowrap tracking-wide'>Map</span>
        </button>

        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Heart Deck Units */}
          <div className="flex items-center px-2 sm:px-3 h-10 bg-black/40 rounded-xl border border-emerald-800/40 shrink-0">
            <span className="text-gray-400 text-2.75 font-bold hidden md:inline mr-2 tracking-wider">LIVES:</span>
            <div className="flex  space-x-0.5 sm:space-x-1">
              {Array.from({ length: Math.max(0, lives) }).map((_, i) => (
                <Heart key={`active-${i}`} className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 fill-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.7)] animate-pulse shrink-0" />
              ))}
              {Array.from({ length: Math.max(0, 5 - lives) }).map((_, i) => (
                <Heart key={`empty-${i}`} className="w-5 h-5 text-zinc-700 fill-zinc-800/50" />
              ))}
            </div>
          </div>

          {/* Streak — clickable, opens the calendar dropdown */}
          <div className="relative">
            <button
              ref={streakButtonRef}
              type="button"
              onClick={() => setShowCalendar(true)}
              className="flex items-center space-x-1 bg-black/40 px-2 sm:px-3 h-10 rounded-xl border border-emerald-800/40 shrink-0 cursor-pointer hover:border-orange-500/40 transition-colors"
            >
              <span className="text-sm sm:text-lg text-orange-500 animate-bounce"><Flame /></span>
              <span className="text-orange-400 font-black text-xs sm:text-sm whitespace-nowrap">
                {streak} <span className='text-2.5 text-orange-300/70 font-normal ml-0.5'>
                  DAYS</span>
              </span>
            </button>

            {showCalendar && (
              <StreakCalendar
                onClose={() => setShowCalendar(false)}
                anchorRef={streakButtonRef}
              />
            )}
          </div>

          <div className="flex items-center space-x-1 bg-linear-to-r from-purple-950/50 to-emerald-950/50 px-2 sm:px-3 h-10 rounded-xl border border-purple-500/20 shrink-0">
            <span className="text-sm sm:text-lg"><Trophy /></span>
            <span className="text-purple-300 font-black text-xs sm:text-sm whitespace-nowrap  tracking-wide">
              {points}
            </span>
          </div>
        </div>
      </header>

      {/* WORLD TITLE + LEVEL GRID */}
      <section className="flex-1 w-full max-w-4xl mx-auto my-8 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-black text-transparent bg-clip-text bg-linear-to-r ${theme.titleGradient} mt-1 ${theme.titleGlow}`}>
            {theme.name}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full p-4 justify-items-center">
          {levels.map((level, index) => {
            const isLocked = level.status === "locked";
            const isUnlocked = level.status === "unlocked";
            const solvedIds = solvedIdsForLevel(level.id);
            const totalQuestions = worldData?.[level.id]?.questions?.length ?? 0;

            return (
              <button
                key={level.id}
                onClick={() => handleLevelClick(level, index)}
                className={`group relative flex flex-col items-center justify-center w-28 h-28 rounded-2xl border transition-all duration-300 outline-none overflow-hidden
                  ${isLocked ? "bg-neutral-900/40 border-neutral-800 text-neutral-600 cursor-pointer" : ""}
                  ${isUnlocked ? `bg-linear-to-br ${theme.tileUnlocked} hover:scale-105 active:scale-95` : ""}
                `}
              >
                {isLocked && (
                  <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center z-20 p-1">
                    <Lock className="w-8 h-8 text-neutral-600 group-hover:text-neutral-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-[9px] text-zinc-600 font-bold tracking-tighter mt-1">
                      LOCKED
                    </span>
                  </div>
                )}

                {!isLocked && (
                  <span className={`absolute top-1 right-1 w-2 h-2 ${theme.accentDot} rounded-full animate-ping opacity-70`} />
                )}

                <span className={`text-2xl font-black mb-1 transition-colors duration-300 
                  ${isLocked ? "text-neutral-700" : theme.menuAccentText}`}>
                  {String(level.id).padStart(2, '0')}
                </span>

                <span className={`text-[10px] uppercase font-bold tracking-tight text-center px-1 line-clamp-2 transition-colors duration-300
                  ${isLocked ? "text-neutral-600" : "text-zinc-400 group-hover:text-emerald-200"}`}>
                  LEVEL {level.id}
                </span>

                {!isLocked && (
                  <span className="text-[8px] text-zinc-500 mt-0.5">
                    {solvedIds.length}/{totalQuestions}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

    </main>
  );
}