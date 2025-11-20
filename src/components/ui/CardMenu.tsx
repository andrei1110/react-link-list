"use client";

import { useState, useRef, useEffect } from "react";

type CardMenuProps = {
  onEdit: () => void;
  onDelete: () => void;
  onView: () => void;
};

export default function CardMenu({ onEdit, onDelete, onView }: CardMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="p-1 rounded-md hover:bg-zinc-800 transition"
      >
        ⋮
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 bg-[#111] border border-[#2A2A2A]
          rounded-lg shadow-lg shadow-black/40 w-36 z-20 py-1"
        >
          <button
            onClick={() => {
              setOpen(false);
              onView();
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800 transition"
          >
            🔗 Visualizar
          </button>
          <button
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800 transition"
          >
            ✏️ Editar
          </button>

          <button
            onClick={() => {
              setOpen(false);
              onDelete();
            }}
            className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-900/40 transition"
          >
            🗑️ Excluir
          </button>
        </div>
      )}
    </div>
  );
}
