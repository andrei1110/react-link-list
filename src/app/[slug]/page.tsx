import { apiRequest } from "@/lib/api";
import { notFound } from "next/navigation";
import { PageData, PageLink, SocialLink } from "@/types/page";
import {
  Instagram,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Link as LinkIcon,
} from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";

export const dynamic = "force-dynamic";

// mapa de ícones tipado
const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; strokeWidth?: number }>
> = {
  instagram: Instagram,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  globe: Globe,
  link: LinkIcon,
};

export default async function PublicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let page: PageData | null = null;

  try {
    page = (await apiRequest<PageData>(`/pages/slug/${slug}`)).data as PageData;
  } catch {
    return notFound();
  }

  if (!page) return notFound();

  return (
    <div
      style={{
        backgroundColor: page.style?.backgroundColor,
        color: page.style?.textColor,
        fontFamily: page.style?.fontFamily || "Inter",
      }}
      className="min-h-screen flex flex-col items-center px-6 py-10"
    >
      <div className="flex justify-center mb-6">
        <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg shadow-black/50 border border-white/10">
          <Avatar size="2xl" src={page.avatarUrl} />
        </div>
      </div>

      {/* HEADER */}
      <div className="max-w-xl w-full text-center space-y-3">
        <h1 className="text-3xl font-bold drop-shadow-sm">{page.title}</h1>

        {page.description && (
          <p className="opacity-80 text-base leading-relaxed">
            {page.description}
          </p>
        )}
      </div>

      <div className="max-w-xl w-full mt-10 space-y-4">
        {page.links
          ?.sort((a, b) => a.order - b.order)
          ?.map((link: PageLink) => {
            const Icon = iconMap[link.icon || "empty"] ?? LinkIcon;

            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group block text-center py-3 rounded-xl font-medium
                  shadow-lg border border-white/5
                  transition-all duration-300
                  hover:scale-[1.03] hover:shadow-xl active:scale-[0.97]
                "
                style={{
                  backgroundColor: page.style.buttonColor,
                  color: page.style.textColor,
                }}
              >
                <div className="flex justify-center items-center gap-2">
                  <Icon size={18} strokeWidth={2} />
                  <span>{link.label}</span>
                </div>
              </a>
            );
          })}
      </div>

      {page.socialLinks?.length > 0 && (
        <div className="flex gap-6 mt-10 opacity-90">
          {page.socialLinks
            .sort((a, b) => a.order - b.order)
            .map((social: SocialLink) => {
              const Icon = iconMap[social.icon || "empty"] ?? Globe;

              return (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition hover:scale-110 active:scale-95"
                  style={{ color: page.style.textColor }}
                >
                  <Icon size={28} strokeWidth={2} />
                </a>
              );
            })}
        </div>
      )}
    </div>
  );
}
