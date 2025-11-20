"use client";

import { PageLink } from "@/types/page";
import LinkItem from "./LinkItem";
import { Button } from "@/components/ui/Button";

type Props = {
  links: PageLink[];
  onChange: (links: PageLink[]) => void;
};

export default function LinksForm({ links, onChange }: Props) {
  const handleAdd = () => {
    const nextOrder = (links[links.length - 1]?.order ?? 0) + 1;
    onChange([
      ...links,
      {
        id: crypto.randomUUID(),
        label: "",
        url: "",
        icon: "link",
        order: nextOrder,
      },
    ]);
  };

  const handleUpdate = (id: string, partial: Partial<PageLink>) => {
    onChange(links.map((l) => (l.id === id ? { ...l, ...partial } : l)));
  };

  const handleRemove = (id: string) => {
    onChange(links.filter((l) => l.id !== id));
  };

  return (
    <div className="space-y-4">
      {links.map((link) => (
        <LinkItem
          key={link.id}
          link={link}
          onChange={(partial) => handleUpdate(link.id!, partial)}
          onRemove={() => handleRemove(link.id!)}
        />
      ))}

      <Button type="button" onClick={handleAdd}>
        Adicionar link
      </Button>
    </div>
  );
}
