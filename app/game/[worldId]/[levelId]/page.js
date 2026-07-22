"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { executeCode } from "@/lib/judge0";
import WebDevEditor from "@/components/WebDevEditor";

export default function CodingPanel({ questionData, levelData, currentLevel = 1, onClose }) {
  const router = useRouter();

  // Track current round if multi-round mode is used (1, 2, or 3)
  const [currentRound, setCurrentRound] = useState(1);

  // 1. SAFELY RESOLVE QUESTION DATA
  // Handles explicit question object, q1/q2/q3 direct objects, or round-based arrays
  const roundData = 
    questionData || 
    levelData?.[`q${currentRound}`] || 
    levelData?.rounds?.[currentRound] || 
    levelData?.levels?.[currentLevel]?.rounds?.[currentRound] || 
    levelData;

  // Editor and runner states
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [totalXp, setTotalXp] = useState(0);
  const [status, setStatus] = useState("idle");

  // Determine challenge type (Web Dev vs DSA)
  const isWebDev = roundData?.type === "WEB_DEV" || roundData?.starterCode?.html !== undefined;

  // 2. SAFELY INITIALIZE STARTER CODE ON CHANGE
  useEffect(() => {
    if (roundData) {
      if (typeof roundData.starterCode === "string") {
        setCode(roundData.starterCode);
      } else if (roundData.starterCode?.[language]) {
        setCode(roundData.starterCode[language]);
      } else if (typeof roundData.starterCode?.html === "string") {
        setCode(roundData.starterCode.html);
      } else {
        setCode("");
      }
      setConsoleOutput([]);
    }
  }, [currentRound, roundData, language]);

  if (!roundData) {
    return (
      <div className="p-8 text-white h-full flex items-center justify-center bg-slate-900 font-mono">
        Challenge or level data not found!
      </div>
    );
  }

  // 3. HANDLE ADVANCEMENT OR COMPLETION
  const advanceRound = () => {
    const currentRoundXp = roundData.xp || roundData.xpReward || 50;
    const newTotal = totalXp + currentRoundXp;
    setTotalXp(newTotal);

    // If modal onClose prop exists, trigger it on finish
    if (onClose && !levelData?.rounds) {
      alert(`🎉 Challenge Complete! You earned +${currentRoundXp} XP!`);
      onClose();
      return;
    }

    if (currentRound < 3 && (levelData?.q2 || levelData?.rounds)) {
      alert(`🎉 Round ${currentRound} Complete! Moving to Round ${currentRound + 1}`);
      setCurrentRound((prev) => prev + 1);
    } else {
      setTimeout(() => {
        alert(`🏆 Level Complete! You earned a total of ${newTotal} XP!`);
        if (onClose) {
          onClose();
        } else {
          router.push("/mainmenu");
        }
      }, 500);
    }
  };

  // 4. DSA EXECUTOR
  const handleRunDSA = async () => {
    setStatus("running");
    setConsoleOutput([{ received: "Sending to execution engine... ⏳" }]);

    const results = await executeCode(code, language, roundData.testCases || []);
    setConsoleOutput(results);

    const allPassed = results.every((r) => r.passed);
    setStatus(allPassed ? "success" : "failed");

    if (allPassed) {
      advanceRound();
    }
  };

  return (
    <div className="flex h-full w-full bg-slate-900 text-slate-100 font-sans">
      
      {/* LEFT PANEL: Question Description & Info */}
      <div className="w-[40%] p-6 border-r border-slate-700 flex flex-col overflow-y-auto">
        <div className="mb-6 p-4 bg-slate-800 rounded-lg border border-red-500/30 flex flex-col gap-2">
          
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              Level {currentLevel} • {questionData ? roundData.title : `Round ${currentRound}/3`}
            </h3>
            <span className="text-yellow-400 font-bold text-sm">🏆 {roundData.xp || roundData.xpReward || 50} XP</span>
          </div>
          
          {!questionData && (
            <div>
              <div className="w-full bg-slate-700 h-3 rounded-full mt-1 overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-500" 
                  style={{ width: `${(currentRound / 3) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <h1 className="text-2xl font-black mb-2">{roundData.title}</h1>
        <span className="px-2 py-0.5 rounded text-xs bg-emerald-500/20 text-emerald-400 font-bold self-start mb-4">
          {isWebDev ? "Web Development" : "Data Structures & Algo"}
        </span>
        
        <p className="mt-2 text-slate-300 leading-relaxed text-sm">{roundData.description}</p>
        
        {roundData.problemStatement && (
          <div className="mt-4 p-4 bg-slate-950 rounded border border-slate-800 font-mono text-sm">
            {roundData.problemStatement}
          </div>
        )}
      </div>

      {/* RIGHT PANEL: Code Editors */}
      <div className="w-[60%] flex flex-col h-full bg-slate-950">
        
        {isWebDev ? (
          /* Web Dev Sandpack Editor */
          <WebDevEditor 
            key={roundData.id || `web-dev-${currentRound}`} 
            challenge={roundData} 
            onComplete={advanceRound} 
          />
        ) : (
          /* DSA Judge0 Editor */
          <>
            <div className="h-12 border-b border-slate-800 px-4 flex items-center justify-between">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-slate-800 text-sm text-slate-200 border border-slate-700 rounded px-2 py-1 outline-none"
              >
                {(roundData.allowedLanguages || ["javascript"]).map((lang) => (
                  <option key={lang} value={lang}>{lang.toUpperCase()}</option>
                ))}
              </select>
            </div>

            <div className="flex-1 p-4">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full bg-transparent text-emerald-400 resize-none outline-none font-mono text-sm"
                spellCheck="false"
              />
            </div>

            {/* Console Output */}
            <div className="h-48 border-t border-slate-800 bg-slate-900 p-4 font-mono text-xs overflow-y-auto">
              <div className="text-slate-400 border-b border-slate-800 pb-1 mb-2 font-bold uppercase tracking-wider">
                Console Output
              </div>
              {consoleOutput.map((out, i) => (
                <div key={i} className="mb-2">
                  {out.error ? (
                    <span className="text-red-400">🚨 {out.error}</span>
                  ) : out.received?.includes("Sending") ? (
                    <span className="text-blue-400">{out.received}</span>
                  ) : (
                    <span className={out.passed ? "text-emerald-400" : "text-red-400"}>
                      {out.passed ? "✅ Passed" : "❌ Failed"} Input: {out.input} | Expected: {out.expected} | Got: {out.received}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="h-16 border-t border-slate-800 px-6 flex items-center justify-end bg-slate-900">
              <button 
                onClick={handleRunDSA}
                disabled={status === "running"}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-600 rounded font-bold text-sm text-slate-950 transition-all disabled:opacity-50 cursor-pointer"
              >
                {status === "running" ? "Running..." : "Execute Solution ⚔️"}
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}