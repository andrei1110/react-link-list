import { cookies } from "next/headers";
import { apiRequest } from "@/lib/api";
import { PageData } from "@/types/page";
import { UserData } from "@/types/user";
import { redirect } from "next/navigation";

export default async function DashboardHome() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    redirect("login");
  }

  const user = (await apiRequest<UserData>("/users/me", token)).data;

  if (!user) {
    redirect("login");
  }

  const pages = (await apiRequest<PageData[]>(`/pages/me`, token)).data;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold tracking-wide">Início</h2>

      <div className="text-lg">
        Bem-vindo, <span className="text-brand font-semibold">{user.name}</span>{" "}
        👋
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111] border border-[#2A2A2A] rounded-xl p-6 shadow-xl shadow-black/40">
          <h3 className="text-lg font-semibold mb-2">Páginas Criadas</h3>
          <p className="text-3xl font-bold text-brand">{pages?.length || 0}</p>
        </div>

        <div className="bg-[#111] border border-[#2A2A2A] rounded-xl p-6 shadow-xl shadow-black/40">
          <h3 className="text-lg font-semibold mb-2">Cliques Totais</h3>
          <p className="text-3xl font-bold text-brand">
            {pages?.reduce((acc, p) => acc + (p.totalClicks ?? 0), 0)}
          </p>
        </div>

        <div className="bg-[#111] border border-[#2A2A2A] rounded-xl p-6 shadow-xl shadow-black/40">
          <h3 className="text-lg font-semibold mb-2">Links Ativos</h3>
          <p className="text-3xl font-bold text-brand">
            {pages?.reduce((acc, p) => acc + (p.links?.length || 0), 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
