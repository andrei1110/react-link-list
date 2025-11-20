"use client";

import { SocialLink } from "@/types/page";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

type Props = {
  item: SocialLink;
  onChange: (partial: Partial<SocialLink>) => void;
  onRemove: () => void;
};

export default function SocialLinkItem({ item, onChange, onRemove }: Props) {
  return (
    <div className="bg-[#222] p-4 rounded-lg space-y-3 border border-[#333]">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm opacity-70 block">Tipo</label>
          <Input
            value={item.type}
            onChange={(e) => onChange({ type: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm opacity-70 block">Ícone</label>
          <Input
            value={item.icon ?? ""}
            onChange={(e) => onChange({ icon: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="text-sm opacity-70 block">URL</label>
        <Input
          value={item.url}
          onChange={(e) => onChange({ url: e.target.value })}
        />
      </div>

      <div>
        <label className="text-sm opacity-70 block">Ordem</label>
        <Input
          type="number"
          value={item.order}
          onChange={(e) => onChange({ order: Number(e.target.value) || 0 })}
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="button"
          onClick={onRemove}
          className="bg-red-600 hover:bg-red-700"
        >
          Remover
        </Button>
      </div>
    </div>
  );
}
