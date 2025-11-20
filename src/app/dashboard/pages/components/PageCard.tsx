"use client";

import { useState } from "react";
import Link from "next/link";
import { PageData } from "@/types/page";
import CardMenu from "@/components/ui/CardMenu";
import ConfirmModal from "@/components/ui/ConfirmModal";
import { toast } from "sonner";

export function PageCard({ page }: { page: PageData }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  async function deletePage() {
    try {
      const res = await fetch(`/api/pages/${page.id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!data.success) throw new Error();

      toast.success("Página excluída com sucesso!");
      window.location.reload();
    } catch {
      toast.error("Erro ao excluir página.");
    }
  }

  function viewPage() {
    window.open(`/${page.slug}`, "_blank", "noopener,noreferrer");
    return;
  }

  return (
    <>
      <div
        className="
        relative
        bg-[#111] border border-[#2A2A2A] 
        rounded-xl p-5 shadow-md shadow-black/30
        hover:border-brandHover hover:shadow-brandHover/20 
        transition-colors duration-200
        flex flex-col gap-2
      "
      >
        {/* MENU */}
        <div className="absolute top-3 right-3">
          <CardMenu
            onEdit={() =>
              (window.location.href = `/dashboard/pages/${page.id}`)
            }
            onDelete={() => setConfirmOpen(true)}
            onView={() => viewPage()}
          />
        </div>

        <Link href={`/dashboard/pages/${page.id}`} className="block">
          <h3 className="text-lg font-semibold">{page.title}</h3>

          <p className="text-sm opacity-60">
            {page.description || "Sem descrição"}
          </p>

          <div className="flex justify-between mt-3 text-sm opacity-70">
            <span>{page.links?.length ?? 0} links</span>
            <span>{page.totalClicks ?? 0} cliques</span>
          </div>
        </Link>
      </div>

      <ConfirmModal
        open={confirmOpen}
        title="Excluir página?"
        description={`Tem certeza que deseja excluir a página "${page.title}"?`}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => {
          setConfirmOpen(false);
          deletePage();
        }}
      />
    </>
  );
}
