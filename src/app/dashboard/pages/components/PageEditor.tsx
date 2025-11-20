// src/app/dashboard/pages/components/PageEditor.tsx
"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PageData, PageLink, SocialLink, UpdatePageDto } from "@/types/page";
import GeneralForm from "./GeneralForm";
import StyleForm from "./StyleForm";
import LinksForm from "./LinksForm";
import SocialLinksForm from "./SocialLinksForm";
import { cleanPageForBackend } from "@/lib/cleanPage";
import { toast } from "sonner";
import { ApiResponse } from "@/types/api";
import AvatarUploader from "../[id]/AvatarUploader";

type PageEditorProps = {
  initialPage: PageData;
  onSave: (data: UpdatePageDto) => Promise<ApiResponse>;
};

export default function PageEditor({ initialPage, onSave }: PageEditorProps) {
  const [page, setPage] = useState<PageData>(initialPage);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = () => {
    const cleaned = cleanPageForBackend(page);

    startTransition(async () => {
      const result = await onSave(cleaned);

      if (result.success) {
        toast.success("Página salva com sucesso!");
        router.push("/dashboard/pages");
      } else {
        toast.error(result.message ?? "Erro ao salvar");
      }
    });
  };

  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <Section title="Imagem">
        <AvatarUploader
          avatarUrl={page.avatarUrl || ""}
          onUpload={async (file) => {
            const form = new FormData();
            form.append("file", file);

            const res = await fetch("/api/upload/page-avatar", {
              method: "POST",
              body: form,
            });

            const { url }: { url: string } = await res.json();

            setPage((prev) => ({ ...prev, avatarUrl: url }));
          }}
        />
      </Section>

      <Section title="Informações Gerais">
        <GeneralForm
          page={page}
          onChange={(partial) => setPage({ ...page, ...partial })}
        />
      </Section>

      <Section title="Estilo">
        <StyleForm
          style={page.style}
          onChange={(partial) =>
            setPage((prev) => ({
              ...prev,
              style: { ...prev.style, ...partial },
            }))
          }
        />
      </Section>

      <Section title="Links">
        <LinksForm
          links={page.links}
          onChange={(links: PageLink[]) => setPage({ ...page, links })}
        />
      </Section>

      <Section title="Redes sociais">
        <SocialLinksForm
          socialLinks={page.socialLinks}
          onChange={(socialLinks: SocialLink[]) =>
            setPage({ ...page, socialLinks })
          }
        />
      </Section>

      <div className="flex justify-end">
        <Button onClick={handleSubmit} disabled={isPending}>
          {isPending ? "Salvando..." : "Salvar"}
        </Button>
      </div>
    </div>
  );
}
