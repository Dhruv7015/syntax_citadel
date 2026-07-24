"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [activeDates, setActiveDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  async function fetchProgress(token) {
    const res = await fetch(`${API_URL}/api/progress`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) setProgress(await res.json());
  }

  async function fetchActivity(token, year, month) {
    const now = new Date();
    const y = year ?? now.getFullYear();
    const m = month ?? now.getMonth() + 1;
    const res = await fetch(`${API_URL}/api/activity?year=${y}&month=${m}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setActiveDates(data.activeDates);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { setLoading(false); return; }

    fetch(`${API_URL}/api/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(async (data) => {
        setUser(data);
        await fetchProgress(token);
        await fetchActivity(token);
      })
      .catch(() => localStorage.removeItem("token"))
      .finally(() => setLoading(false));
  }, []);

  async function signup(email, password) {
    const res = await fetch(`${API_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error((await res.json()).error);
    const data = await res.json();
    localStorage.setItem("token", data.token);
    setUser({ email });
    await fetchProgress(data.token);
    await fetchActivity(data.token);
    router.push("/mainmenu");
  }

  async function login(email, password) {
    const res = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error((await res.json()).error);
    const data = await res.json();
    localStorage.setItem("token", data.token);
    setUser({ email });
    await fetchProgress(data.token);
    await fetchActivity(data.token);
    router.push("/mainmenu");
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    setProgress(null);
    setActiveDates([]);
    router.push("/login");
  }

  async function markSolved(world, level, questionId) {
    const token = localStorage.getItem("token");
    await fetch(`${API_URL}/api/progress/solve`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ world, level, questionId }),
    });
    await fetchProgress(token);
  }

  async function loseLife() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/api/lives/lose`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setProgress(prev => prev ? { ...prev, lives: data.lives } : prev);
    }
  }

  return (
    <AuthContext.Provider value={{ user, progress, activeDates, loading, signup, login, logout, markSolved, loseLife, fetchActivity }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);