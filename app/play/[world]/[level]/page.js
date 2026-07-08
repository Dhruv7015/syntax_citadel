"use client";
import React, { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Heart, ArrowLeft } from 'lucide-react'

const GameArena = () => {

  const router = useRouter();
  const params = useParams();
  const world = params.world; 
  const levelId = params.level;

  const [isMounted, setIsMounted] = useState(false)
  useEffect (() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) return(
     <div className='min-h-screen bg-slate-950' />
    )
   const fileName = levelId === "1" ? "index.html": `index${levelId}.html`;
   const iframeSource = `/gameplay/${world}-${levelId}/${fileName}`;


  return (
    <main className='flex flex-col h-screen w-screen bg-slate-950 font-mono text-white overflow-hidden'>
        <header className='w-full bg-slate-900/80 backdrop-blur border-b border-zinc-800 flex
        items-center justify-between z-50 shrink-0'>
            <button
            onClick= {()=>router.push(world === 'glacier' ? '/world-2': '/mainmenu')}
            className='flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700
            px-3 py-1.5 rounded-xl text-xs font-bold transition-all'
            >
                <ArrowLeft className='w-4 h-4' />
                <span>Exit to Map</span>
            </button>
            <div className='text-center  '>
                <h1 className='text-sm font-black  tracking-widest text-cyan-400 uppercase'>
                    {world === 'forest' ? 'Flexbox Forest Archipelago' : 'Grid Glacier' }
                </h1>
                <p className="text-[10px] text-zinc-500 font-bold">LEVEL {levelId}</p>
                <div className="w-20"></div> {/* Spacer to keep title centered */}
            </div>

        </header>
        <div className="flex-1 w-full h-full bg-neutral-900">
        <iframe src={iframeSource} className="w-full h-full border-none" sandbox="allow-scripts allow-same-origin" />
      </div>
      
    </main>
  )
}

export default GameArena
