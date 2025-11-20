import { Palette, Sparkles, Share2, Link as LinkIcon } from "lucide-react";

export function Features() {
  const items = [
    {
      icon: <LinkIcon size={32} />,
      title: "Links ilimitados",
      description:
        "Adicione quantos links quiser, organize e personalize do seu jeito.",
    },
    {
      icon: <Palette size={32} />,
      title: "Visual 100% customizável",
      description:
        "Cores, fontes, estilo dos botões... tudo como você imaginar.",
    },
    {
      icon: <Share2 size={32} />,
      title: "Compartilhe em qualquer lugar",
      description:
        "Use sua página no Instagram, TikTok, cartões digitais e muito mais.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Animações e toques modernos",
      description:
        "Sua página ganha vida com animações suaves e interações elegantes.",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto cursor-default">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Tudo o que você precisa em um só link
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              bg-[#111] p-6 rounded-2xl border border-white/10 
              shadow-lg shadow-black/40 hover:shadow-brand/20
              transition-all hover:-translate-y-1 text-center
              cursor-default
            "
          >
            <div className="flex justify-center mb-4 text-brand">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm opacity-70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
