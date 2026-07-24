"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";

export default function SignupPage() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white font-mono flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
        <h1 className="text-xl font-black text-center mb-2">Create Account</h1>
        {error && <p className="text-rose-400 text-xs text-center">{error}</p>}
        <input
          type="email" placeholder="Email" value={email}
          onChange={e => setEmail(e.target.value)} required
          className="w-full bg-black/40 border border-zinc-700 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-500"
        />
        <input
          type="password" placeholder="Password (min 8 characters)" value={password}
          onChange={e => setPassword(e.target.value)} required minLength={8}
          className="w-full bg-black/40 border border-zinc-700 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-500"
        />
        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 rounded-xl py-2 text-sm font-bold transition-colors">
          Sign Up
        </button>
        <p className="text-xs text-zinc-500 text-center">
          Already have an account? <Link href="/login" className="text-emerald-400">Log in</Link>
        </p>
      </form>
    </main>
  );
}