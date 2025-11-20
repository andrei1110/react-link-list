import { cookies } from "next/headers";
import { apiRequest } from "@/lib/api";
import { PageCard } from "./components/PageCard";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PageData } from "@/types/page";

export default async function UserPages() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    redirect("login");
  }

  const pages = (await apiRequest<PageData[]>(`/pages/me`, token)).data;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-wide">Minhas Páginas</h1>

        <Link
          href="/dashboard/pages/new"
          className="
            bg-brand hover:bg-brandHover 
            text-white px-4 py-2 rounded-lg 
            text-sm font-semibold tracking-wide
            transition
          "
        >
          Criar Página
        </Link>
      </div>

      {(pages?.length || 0) === 0 ? (
        <div className="text-center opacity-60 py-20">
          Você ainda não criou nenhuma página.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pages?.map((page: PageData) => (
            <PageCard key={page.id} page={page} />
          ))}
        </div>
      )}
    </div>
  );
}
