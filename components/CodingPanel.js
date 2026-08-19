'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

import { SUPPORTED_LANGUAGES, DEFAULT_WEB_DEV_STARTER } from '@/constants/languages';
import { evaluateDsaProblem } from '@/services/dsaEvaluator';
import { evaluateWebDevProblem } from '@/services/webDevEvaluator';

// Load Monaco Editor dynamically on client-side only
const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

// Helper to guarantee Monaco receives a valid string value
const safeString = (val) => {
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return String(val);
  if (typeof val === 'object' && val !== null) {
    return JSON.stringify(val, null, 2);
  }
  return '';
};

// Smart detector for Web Development mode
const checkIsWebDev = (q) => {
  if (!q) return false;

  // 1. Direct WebDev code property checks
  if (
    q.html || q.css || q.js || 
    q.initialHtml || q.initialCss || q.initialJs ||
    q.initialCode?.html || q.starterCode?.html
  ) {
    return true;
  }

  // 2. Scan all descriptive text fields for web-related keywords
  const searchableText = [
    q.type,
    q.category,
    q.domain,
    q.topic,
    q.world,
    q.kind,
    q.mode,
    q.section,
    ...(Array.isArray(q.tags) ? q.tags : [])
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  const webKeywords = ['web', 'frontend', 'html', 'css', 'dom', 'ui'];
  return webKeywords.some(keyword => searchableText.includes(keyword));
};

export default function CodingPanel({ question, questionData, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [mobileTab, setMobileTab] = useState('code'); // 'code' | 'preview' | 'console'

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentQuestion = question || questionData || {};

  // Determine if current question is WebDev or DSA
  const isWebDev = checkIsWebDev(currentQuestion);

  // Safe default language resolution for DSA
  const languagesList = SUPPORTED_LANGUAGES || [];
  const defaultLang = languagesList[0] || { id: 63, name: 'JavaScript', key: 'javascript', defaultCode: '' };

  // States
  const [selectedLang, setSelectedLang] = useState(defaultLang);
  const [dsaCode, setDsaCode] = useState('');

  const [activeWebTab, setActiveWebTab] = useState('html');
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  const [testResults, setTestResults] = useState([]);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const iframeRef = useRef(null);

  // Extract starter codes flexibly regardless of data schema
  useEffect(() => {
    const webStarter = DEFAULT_WEB_DEV_STARTER || { html: '', css: '', js: '' };

    if (isWebDev) {
      let html = currentQuestion?.initialHtml || currentQuestion?.html;
      let css = currentQuestion?.initialCss || currentQuestion?.css;
      let js = currentQuestion?.initialJs || currentQuestion?.js;

      if (typeof currentQuestion?.initialCode === 'object' && currentQuestion?.initialCode !== null) {
        html = html || currentQuestion.initialCode.html;
        css = css || currentQuestion.initialCode.css;
        js = js || currentQuestion.initialCode.js;
      }
      if (typeof currentQuestion?.starterCode === 'object' && currentQuestion?.starterCode !== null) {
        html = html || currentQuestion.starterCode.html;
        css = css || currentQuestion.starterCode.css;
        js = js || currentQuestion.starterCode.js;
      }

      setHtmlCode(safeString(html || webStarter.html || ''));
      setCssCode(safeString(css || webStarter.css || ''));
      setJsCode(safeString(js || webStarter.js || ''));
    } else {
      setSelectedLang(defaultLang);
      const code = currentQuestion?.initialCode || currentQuestion?.starterCode || defaultLang.defaultCode || '';
      setDsaCode(safeString(code));
    }
    setTestResults([]);
  }, [currentQuestion, isWebDev]);

  // Live Iframe Renderer for WebDev Mode
  useEffect(() => {
    if (isWebDev && iframeRef.current) {
      const combinedDocument = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>${cssCode || ''}</style>
          </head>
          <body>
            ${htmlCode || ''}
            <script>
              try {
                ${jsCode || ''}
              } catch (err) {
                console.error("WebDev Sandbox Error:", err);
              }
            </script>
          </body>
        </html>
      `;
      iframeRef.current.srcdoc = combinedDocument;
    }
  }, [isWebDev, htmlCode, cssCode, jsCode]);

  const editorOptions = {
    fontSize: 13,
    minimap: { enabled: false },
    automaticLayout: true,
    scrollBeyondLastLine: false,
    tabSize: 2,
    wordWrap: 'on',
    touchSupport: 'on',
    fixedOverflowWidgets: true,
    scrollbar: {
      verticalScrollbarSize: 6,
      horizontalScrollbarSize: 6
    }
  };

  const getActiveWebDevCode = () => {
    if (activeWebTab === 'html') return safeString(htmlCode);
    if (activeWebTab === 'css') return safeString(cssCode);
    return safeString(jsCode);
  };

  const getActiveWebDevLanguage = () => {
    if (activeWebTab === 'html') return 'html';
    if (activeWebTab === 'css') return 'css';
    return 'javascript';
  };

  const handleWebDevCodeChange = (value) => {
    const val = value || '';
    if (activeWebTab === 'html') setHtmlCode(val);
    else if (activeWebTab === 'css') setCssCode(val);
    else setJsCode(val);
  };

  const handleRunEvaluation = async () => {
    setIsEvaluating(true);
    setTestResults([]);

    try {
      if (isWebDev) {
        const results = await evaluateWebDevProblem({
          html: htmlCode,
          css: cssCode,
          js: jsCode,
          testSuite: currentQuestion?.testSuite || currentQuestion?.testCases || [],
          iframeElement: iframeRef.current
        });
        setTestResults(results || []);
      } else {
        const results = await evaluateDsaProblem({
          sourceCode: dsaCode,
          languageId: selectedLang?.id || 63,
          testCases: currentQuestion?.testCases || []
        });
        setTestResults(results || []);
      }
      
      // Auto switch to results tab on mobile after running
      if (window.innerWidth < 1024) {
        setMobileTab('console');
      }
    } catch (err) {
      console.error('Evaluation Error:', err);
      setTestResults([{ passed: false, error: err.message || 'An evaluation error occurred.' }]);
    } finally {
      setIsEvaluating(false);
    }
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-full text-slate-400 font-mono text-xs">
        Initializing Workspace...
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 p-2 sm:p-4 gap-3 sm:gap-4 font-sans select-none overflow-hidden">
      
      {/* HEADER BAR */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-800 p-3 sm:px-4 rounded-lg border border-slate-700 shrink-0 gap-3">
        <div>
          <h2 className="font-bold text-base sm:text-lg text-white leading-tight">{currentQuestion?.title || 'Coding Challenge'}</h2>
          <span className="text-[11px] sm:text-xs text-slate-400 font-mono">
            Mode: {isWebDev ? 'Web Development' : 'DSA Mode'}
          </span>
        </div>

        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2">
          {!isWebDev && languagesList.length > 0 && (
            <select
              className="bg-slate-700 text-white px-2.5 py-1.5 rounded text-xs sm:text-sm border border-slate-600 focus:outline-none cursor-pointer"
              value={selectedLang?.id || defaultLang.id}
              onChange={(e) => {
                const selectedId = Number(e.target.value);
                const lang = languagesList.find(l => Number(l.id) === selectedId);
                if (lang) {
                  setSelectedLang(lang);
                  setDsaCode(safeString(lang.defaultCode || ''));
                }
              }}
            >
              {languagesList.map(lang => (
                <option key={lang.id} value={lang.id}>{lang.name}</option>
              ))}
            </select>
          )}

          <button
            onClick={handleRunEvaluation}
            disabled={isEvaluating}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded font-semibold text-xs sm:text-sm transition cursor-pointer disabled:opacity-50 ml-auto sm:ml-0"
          >
            {isEvaluating ? 'Testing...' : 'Submit & Test'}
          </button>
        </div>
      </div>

      {/* MOBILE SCREEN NAVIGATION TABS */}
      <div className="flex lg:hidden bg-slate-800 p-1 rounded-lg border border-slate-700 shrink-0 text-xs font-semibold">
        <button
          onClick={() => setMobileTab('code')}
          className={`flex-1 py-1.5 rounded transition ${mobileTab === 'code' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
        >
          Editor
        </button>
        {isWebDev && (
          <button
            onClick={() => setMobileTab('preview')}
            className={`flex-1 py-1.5 rounded transition ${mobileTab === 'preview' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
          >
            Live Preview
          </button>
        )}
        <button
          onClick={() => setMobileTab('console')}
          className={`flex-1 py-1.5 rounded transition ${mobileTab === 'console' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
        >
          Results {testResults.length > 0 && `(${testResults.filter(t => t.passed).length}/${testResults.length})`}
        </button>
      </div>

      {/* WORKSPACE AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 min-h-0">
        
        {/* MONACO CODE EDITOR */}
        <div className={`flex-col bg-slate-800 rounded-lg border border-slate-700 overflow-hidden min-h-0 ${
          mobileTab === 'code' ? 'flex flex-1' : 'hidden lg:flex'
        }`}>
          {isWebDev ? (
            <>
              {/* HTML / CSS / JS TABS */}
              <div className="flex border-b border-slate-700 bg-slate-850 shrink-0">
                {[
                  { id: 'html', label: 'HTML', color: 'text-orange-400' },
                  { id: 'css', label: 'CSS', color: 'text-blue-400' },
                  { id: 'js', label: 'JS', color: 'text-yellow-400' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveWebTab(tab.id)}
                    className={`px-4 py-2 text-xs font-bold tracking-wider border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
                      activeWebTab === tab.id
                        ? 'border-indigo-500 bg-slate-800 text-white'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className={`font-mono ${tab.color}`}>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex-1 min-h-0 relative">
                <Editor
                  height="100%"
                  theme="vs-dark"
                  language={getActiveWebDevLanguage()}
                  value={getActiveWebDevCode()}
                  onChange={handleWebDevCodeChange}
                  options={editorOptions}
                  loading={<div className="p-4 text-xs font-mono text-slate-400">Loading Editor...</div>}
                />
              </div>
            </>
          ) : (
            <div className="flex-1 min-h-0 relative">
              <Editor
                height="100%"
                theme="vs-dark"
                language={selectedLang.key || 'javascript'}
                value={safeString(dsaCode)}
                onChange={(value) => setDsaCode(value || '')}
                options={editorOptions}
                loading={<div className="p-4 text-xs font-mono text-slate-400">Loading Editor...</div>}
              />
            </div>
          )}
        </div>

        {/* PREVIEW & TEST CONSOLE PANEL */}
        <div className={`flex-col gap-4 min-h-0 ${
          mobileTab !== 'code' ? 'flex flex-1' : 'hidden lg:flex'
        }`}>
          
          {/* LIVE PREVIEW IFRAME */}
          {isWebDev && (
            <div className={`bg-white rounded-lg border border-slate-700 overflow-hidden relative ${
              mobileTab === 'preview' ? 'flex-1 h-full' : 'h-1/2 shrink-0 hidden lg:block'
            }`}>
              <span className="absolute top-2 right-2 text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded opacity-75 z-10 font-mono">
                Live Preview
              </span>
              <iframe
                ref={iframeRef}
                title="Web Dev Sandbox Preview"
                sandbox="allow-scripts"
                className="w-full h-full border-none"
              />
            </div>
          )}

          {/* TEST RESULTS CONSOLE */}
          <div className={`bg-slate-800 p-4 rounded-lg border border-slate-700 overflow-y-auto ${
            !isWebDev 
              ? 'h-full flex-1' 
              : mobileTab === 'console' 
                ? 'h-full flex-1' 
                : 'h-1/2 hidden lg:block'
          }`}>
            <h3 className="font-semibold text-slate-300 mb-3 text-sm tracking-wide">
              Evaluation Results ({testResults.filter(t => t.passed).length}/{testResults.length})
            </h3>

            {testResults.length === 0 ? (
              <p className="text-xs text-slate-500 font-mono">Run your code to see output and test assertion results.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {testResults.map((res, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded border text-xs font-mono ${
                      res.passed
                        ? 'bg-emerald-950/30 border-emerald-700/50 text-emerald-200'
                        : 'bg-rose-950/30 border-rose-700/50 text-rose-200'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold">
                        {isWebDev ? `Assertion #${idx + 1}` : `Test Case #${res.testCaseIndex || idx + 1}`} - {res.passed ? 'PASSED ✅' : 'FAILED ❌'}
                      </span>
                      {res.executionTime && <span className="text-[10px] text-slate-400">{res.executionTime}</span>}
                    </div>

                    {res.description && <p className="text-slate-300 mb-1">{res.description}</p>}
                    {res.error && <p className="text-rose-400 mt-1">{res.error}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}