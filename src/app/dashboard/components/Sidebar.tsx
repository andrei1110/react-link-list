"use client";

import Link from "next/link";
import { Home, FileText, LogOut } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#111] border-r border-[#2A2A2A] min-h-screen p-6 hidden md:block">
      <div className="text-xl font-bold mb-10 tracking-wide">Painel</div>

      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition"
        >
          <Home size={18} /> Início
        </Link>

        <Link
          href="/dashboard/pages"
          className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition"
        >
          <FileText size={18} /> Minhas Páginas
        </Link>

        <form action="/logout" method="post">
          <button className="flex items-center gap-3 text-sm opacity-80 hover:text-red-500 transition w-full text-left">
            <LogOut size={18} /> Sair
          </button>
        </form>
      </nav>
    </aside>
  );
}
