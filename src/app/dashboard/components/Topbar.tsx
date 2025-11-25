"use client";

import Link from "next/link";

export function Topbar() {
  return (
    <header className="w-full border-b border-[#2A2A2A] bg-[#111] px-6 py-4 flex items-center justify-between">
      <Link href="/dashboard">
        <h1 className="text-xl font-semibold tracking-wide">Dashboard</h1>
      </Link>

      <div className="flex items-center gap-4 text-sm opacity-80">
        Logado como <span className="font-semibold text-white">Andrei</span>
      </div>
    </header>
  );
}
