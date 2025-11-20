"use client";

import { SocialLink } from "@/types/page";
import SocialLinkItem from "./SocialLinkItem";
import { Button } from "@/components/ui/Button";

type Props = {
  socialLinks: SocialLink[];
  onChange: (socialLinks: SocialLink[]) => void;
};

export default function SocialLinksForm({ socialLinks, onChange }: Props) {
  const handleAdd = () => {
    const nextOrder = (socialLinks[socialLinks.length - 1]?.order ?? 0) + 1;
    onChange([
      ...socialLinks,
      {
        id: crypto.randomUUID(),
        type: "instagram",
        url: "",
        icon: "instagram",
        order: nextOrder,
      },
    ]);
  };

  const handleUpdate = (id: string, partial: Partial<SocialLink>) => {
    onChange(socialLinks.map((s) => (s.id === id ? { ...s, ...partial } : s)));
  };

  const handleRemove = (id: string) => {
    onChange(socialLinks.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-4">
      {socialLinks.map((item) => (
        <SocialLinkItem
          key={item.id}
          item={item}
          onChange={(partial) => handleUpdate(item.id!, partial)}
          onRemove={() => handleRemove(item.id!)}
        />
      ))}

      <Button type="button" onClick={handleAdd}>
        Adicionar rede social
      </Button>
    </div>
  );
}
