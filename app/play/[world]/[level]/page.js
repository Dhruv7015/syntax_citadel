"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Heart, Lock, Trophy, Flame, ArrowLeft, Star, Box } from 'lucide-react';
import { getWorldTheme } from '@/lib/worlds';
import { getLevelData } from '@/lib/levels';
import CodingPanel from '@/app/game/[worldId]/[levelId]/page';

const GameArena = () => {
  const router = useRouter();
  const [lives, setLives] = useState(5);
  const params = useParams();
  
  // Extract params safely
  const world = params?.worldId || params?.world;
  const levelId = params?.levelId || params?.level;
  
  const theme = getWorldTheme(world);
  const levelData = getLevelData(world, levelId);

  const [activeQuestion, setActiveQuestion] = useState(null);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  if (!isMounted) return <div className='min-h-screen bg-slate-950' />;

  if (!levelData) {
    return (
      <div className='min-h-screen bg-slate-950 text-white flex items-center justify-center font-mono'>
        Level not found (World: {world}, Level: {levelId})
      </div>
    );
  }

  // Safely extract questions from object { q1, q2, q3 } or array format
  const questionsList = Array.isArray(levelData)
    ? levelData
    : levelData.questions || Object.values(levelData);

  // FIX: Alias questionData to activeQuestion so any reference to questionData resolves safely
  const questionData = activeQuestion;

  const solvedCount = 0; // Wire to real progress later
  const totalQuestions = questionsList.length;

  return (
    <main className={`min-h-screen bg-linear-to-b ${theme.bgGradient} font-mono text-white p-6 relative`}>

      {/* TOP BAR */}
      <div className="max-w-3xl mx-auto flex items-center justify-between mb-6">
        <button
          onClick={() => router.push(`/play/${world}`)}
          className='flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer'
        >
          <ArrowLeft className='w-4 h-4' />
          <span>Back to Levels</span>
        </button>

        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Lives */}
          <div className="flex items-center px-2 sm:px-3 h-10 bg-black/40 rounded-xl border border-emerald-800/40 shrink-0">
            <span className="text-gray-400 text-xs font-bold hidden md:inline mr-2 tracking-wider">LIVES:</span>
            <div className="flex space-x-0.5 sm:space-x-1">
              {isMounted && (
                <>
                  {Array.from({ length: Math.max(0, lives) }).map((_, i) => (
                    <Heart key={`active-${i}`} className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 fill-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.7)] animate-pulse shrink-0" />
                  ))}
                  {Array.from({ length: Math.max(0, 5 - lives) }).map((_, i) => (
                    <Heart key={`empty-${i}`} className="w-5 h-5 text-zinc-700 fill-zinc-800/50" />
                  ))}
                </>
              )}
            </div>
          </div>

          {/* Streak */}
          <div className="flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-xl border border-zinc-700 text-xs font-bold">
            <Flame className="w-4 h-4 text-orange-400" /> 0
          </div>

          {/* Trophy */}
          <div className="flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-xl border border-zinc-700 text-xs font-bold">
            <Trophy className="w-4 h-4 text-purple-400" /> 0
          </div>
        </div>
      </div>

      <h1 className={`text-2xl font-black text-center mb-6 text-transparent bg-clip-text bg-linear-to-r ${theme.titleGradient} ${theme.titleGlow}`}>
        {levelData.title || `${world?.toUpperCase()} - LEVEL ${levelId}`}
      </h1>

      {/* WELCOME BANNER */}
      <div className="max-w-3xl mx-auto flex items-center justify-between bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 mb-6">
        <div>
          <h2 className="font-bold text-sm">Welcome, Code Warrior!</h2>
          <p className="text-xs text-zinc-400">Complete all questions to unlock the next level.</p>
        </div>
        <div className="text-3xl"><Trophy /></div>
      </div>

      {/* PROGRESS */}
      <div className="max-w-3xl mx-auto bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 mb-6">
        <h3 className="text-xs font-bold text-zinc-400 mb-3">📊 LEVEL PROGRESS</h3>
        <div className="flex items-center justify-between">
          <div className="flex gap-6">
            {questionsList.map((q, i) => (
              <div key={q.id || i} className="flex flex-col items-center gap-1">
                <div className={`w-3 h-3 rounded-full ${i < solvedCount ? theme.accentDot : "bg-zinc-700"}`} />
                <span className="text-[10px] text-zinc-500">Q{i + 1}</span>
              </div>
            ))}
          </div>
          <span className="text-xs font-bold text-zinc-400">{solvedCount} / {totalQuestions}</span>
        </div>
      </div>

      {/* QUESTION CARDS */}
      <div className="max-w-3xl mx-auto space-y-4">
        {questionsList.map((q) => (
          <div key={q.id} className="flex items-center justify-between bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4">
            <div className="flex items-center gap-4">
              <div className="text-3xl">{q.icon || "📜"}</div>
              <div>
                <h2 className="font-bold text-sm">{q.title}</h2>
                <div className="flex gap-2 my-1">
                  {q.tags?.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700">{tag}</span>
                  ))}
                </div>
                <p className="text-xs text-zinc-400 text-start">{q.description}</p>
                <div className="text-[10px] text-zinc-500 mt-1 flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {q.xp || 50} XP · 📊 {q.difficulty || "Easy"}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-zinc-500 mb-1">Not Solved</p>
              <button
                onClick={() => setActiveQuestion(q)}
                className={`text-xs font-bold px-4 py-2 rounded-xl bg-linear-to-br ${theme.tileUnlocked} cursor-pointer hover:opacity-90 transition-opacity`}
              >
                Start →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* NEXT LEVEL TEASER */}
      <div className="max-w-3xl mx-auto flex items-center justify-between bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 mt-6 opacity-70">
        <div className="text-3xl"><Lock className="w-8 h-8 text-zinc-600" /></div>
        <div className="text-center">
          <p className="text-xs text-zinc-500">Complete all {totalQuestions} questions to unlock</p>
          <h2 className="font-black text-lg">LEVEL {Number(levelId || 1) + 1}</h2>
        </div>
        <div className="text-3xl"><Box /></div>
      </div>

      {/* CODING PANEL OVERLAY */}
      {activeQuestion && (
        <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 w-screen h-screen'>
          <div className='bg-zinc-950 border border-zinc-700 w-full max-w-6xl h-[90vh] flex flex-col relative overflow-hidden shadow-2xl rounded-2xl'>
             
             {/* Header for the overlay */}
             <div className='flex justify-between items-center p-4 border-b border-zinc-800 bg-zinc-900 shrink-0'>
              <h2 className='font-bold flex items-center gap-2 text-white'>
                <span className='text-xl'>{activeQuestion.icon || "📜"}</span>
                {activeQuestion.title}
              </h2>
              <button 
                onClick={() => setActiveQuestion(null)}
                className='text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 px-3 py-1 rounded-lg text-sm transition-colors cursor-pointer'
              >
                Close
              </button>
             </div>

             {/* Content area */}
            <div className="flex-1 p-0 flex flex-col overflow-hidden">
               <CodingPanel
                 levelData={levelData}
                 questionData={questionData}
                 currentLevel={levelId}
                 onClose={() => setActiveQuestion(null)}
               />
            </div>

          </div>
        </div> 
      )}

    </main>
  );
}

export default GameArena;