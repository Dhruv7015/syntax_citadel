"use client"
import React from 'react'
import { useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'



  const page = () => {
    const [progress, setProgress] = useState(0)
    const [loadingText, setLoadingText] = useState('Booting Source Core Kernel....')
    const router = useRouter()

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval)
            
            return 100
          }
          return prevProgress + 1
        });
    }, 30);
     return () => clearInterval(interval);
  }, []);
   
  useEffect(() => {
    if(progress > 75) {
      setLoadingText('Defeating Null Pointer Minions....')
    } else if (progress > 35) {
      setLoadingText('Calibrating Flexbox Vectors....')
    }

  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        router.push('/mainmenu');
      }, 1000);
      return ()=> clearTimeout(timeout);
      }
  }, [progress, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-slate-950 via-violet-950 to-neutral-950 font-mono text-white p-4 ">
      {/*  logo */}
      <div className="text-center space-y-4 mb-24">
        <img src="/assets/logo.png" 
        alt="Logo" 
        className="w-32 h-32 mx-auto object-cover rounded-3xl p-1 bg-linear-to-tr from-purple-600 via-fuchsia-400 to-violet-800 
    border border-white/20 shadow-[0_0_30px_rgba(168,85,247,0.6),0_0_60px_rgba(217,70,239,0.3),inset_0_0_15px_rgba(168,85,247,0.4)] animate-pulse"  />
        <h1 className='text-5xl md:text-6xl font-black tracking-wider text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] animate-pulse'>SYNTAX CITADEL</h1>
        </div>
        {/*Bottom loading dashboard block */}
        <div className='w-full max-w-md space-y-3'>
          <div className='flex justify-between text-xs text-purple-300 font-medium px-1'> 
            <span>{loadingText}</span>
            <span className='text-purple-400 font-bold'>{progress}%</span>
          </div>
          {/*outer progress track frame */} 
          <div className='w-full h-4 bg-black/50 rounded-full border-purple-800/40 p-0.5 overflow-hidden'>
          {/* Inner Active filling slider bar */}
          <div 
            className="h-full bg-linear-to-r from-purple-600 to-fuchsia-400 rounded-full shadow-[0_0_10px_#a855f7] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
          </div>
        </div>
      
    </main>
  )
}

export default page
