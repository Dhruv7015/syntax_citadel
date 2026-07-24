"use client";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { X, Flame, ChevronLeft, ChevronRight } from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";

export default function StreakCalendar({ onClose, anchorRef }) {
  const { activeDates, progress } = useAuth();
  const streak = progress?.streak ?? 0;
  const popoverRef = useRef(null);

  const [coords, setCoords] = useState(null); // { top, left } in viewport px
  const [mounted, setMounted] = useState(false);

  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-indexed

  const monthName = new Date(viewYear, viewMonth).toLocaleString("default", { month: "long" });
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const activeDateSet = new Set(activeDates ?? []);
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const isCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth();

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  function dateStr(day) {
    return `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  function goToPrevMonth() {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function goToNextMonth() {
    if (isCurrentMonth) return;
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  // Mount check — portals need `document` which isn't available during SSR.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate the popover's fixed viewport position from the anchor button,
  // and keep it in sync on scroll/resize.
  useLayoutEffect(() => {
    function updatePosition() {
      if (!anchorRef?.current) return;
      const rect = anchorRef.current.getBoundingClientRect();
      const popoverWidth = 288; // matches w-72
      let left = rect.right - popoverWidth;
      // Keep it on-screen if the anchor is near the left edge.
      if (left < 8) left = 8;
      // Keep it on-screen if it would overflow the right edge.
      if (left + popoverWidth > window.innerWidth - 8) {
        left = window.innerWidth - popoverWidth - 8;
      }
      setCoords({
        top: rect.bottom + 8,
        left,
      });
    }

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [anchorRef]);

  if (!mounted || !coords) return null;

  return createPortal(
    <>
      {/* Invisible click-outside layer — closes the popover without dimming the page */}
      <div className="fixed inset-0 z-[9998]" onClick={onClose} />

      {/* The popover itself — fixed to viewport coordinates, so it always sits
          above every element on the page regardless of parent overflow/z-index/transform. */}
      <div
        ref={popoverRef}
        style={{ top: coords.top, left: coords.left }}
        className="fixed z-[9999] bg-zinc-950 border border-zinc-800 rounded-2xl p-4 w-72 font-mono text-white shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-zinc-500 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Flame className="w-4 h-4 text-orange-400" />
          <h2 className="text-sm font-black">{streak} Day Streak</h2>
        </div>

        {/* Month navigation */}
        <div className="flex items-center justify-between mb-3 mt-2">
          <button
            onClick={goToPrevMonth}
            className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-zinc-300 font-bold tracking-wide">{monthName} {viewYear}</p>

          <button
            onClick={goToNextMonth}
            disabled={isCurrentMonth}
            className={`p-1 rounded-lg transition-colors ${
              isCurrentMonth
                ? "text-zinc-700 cursor-not-allowed"
                : "hover:bg-zinc-800 text-zinc-400 hover:text-white"
            }`}
            aria-label="Next month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-zinc-500 mb-1">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, i) => {
            if (day === null) return <div key={i} />;
            const ds = dateStr(day);
            const isActive = activeDateSet.has(ds);
            const isToday = ds === todayStr;

            return (
              <div
                key={i}
                className={`aspect-square flex items-center justify-center rounded-lg text-[10px] font-bold
                  ${isActive ? "bg-orange-500/20 border border-orange-400/50 text-orange-300" : "bg-zinc-900/50 text-zinc-600"}
                  ${isToday ? "ring-1 ring-emerald-400" : ""}
                `}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </>,
    document.body
  );
}