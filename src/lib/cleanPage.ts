import { PageData } from "@/types/page";

export function cleanPageForBackend(page: Partial<PageData>) {
  const { id: _id, style, links, socialLinks, ...rest } = page;

  return {
    ...rest,
    style: {
      backgroundColor: style?.backgroundColor || "#000000",
      textColor: style?.textColor || "#ffffff",
      buttonColor: style?.buttonColor || "#ff8c00",
      fontFamily: style?.fontFamily || "Inter",
    },
    links: links?.map((l) => ({
      label: l.label,
      url: l.url,
      icon: l.icon,
      order: l.order,
    })),
    socialLinks: socialLinks?.map((s) => ({
      type: s.type,
      url: s.url,
      icon: s.icon,
      order: s.order,
    })),
  };
}
