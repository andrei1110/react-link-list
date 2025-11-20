"use client";

import { Input } from "@/components/ui/Input";
import { PageData } from "@/types/page";

type Props = {
  page: PageData;
  onChange: (
    partial: Partial<Pick<PageData, "slug" | "title" | "description">>
  ) => void;
};

export default function GeneralForm({ page, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm opacity-70">Slug</label>
        <Input
          name="slug" // nome apenas para acessibilidade, o valor real vem do JSON
          value={page.slug}
          onChange={(e) => onChange({ slug: e.target.value })}
        />
      </div>

      <div>
        <label className="text-sm opacity-70">Título</label>
        <Input
          name="title"
          value={page.title}
          onChange={(e) => onChange({ title: e.target.value })}
        />
      </div>

      <div>
        <label className="text-sm opacity-70">Descrição</label>
        <textarea
          name="description"
          value={page.description}
          onChange={(e) => onChange({ description: e.target.value })}
          className="input w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-white focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
}
