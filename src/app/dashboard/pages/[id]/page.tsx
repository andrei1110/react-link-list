import PageEditor from "../components/PageEditor";
import { PageData, UpdatePageDto } from "@/types/page";
import { cookies } from "next/headers";
import { apiRequest } from "@/lib/api";
import { updatePage } from "./actions";
import { redirect } from "next/navigation";
import { ApiResponse } from "@/types/api";

type EditPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPage({ params }: EditPageProps) {
  const { id } = await params;

  const token = (await cookies()).get("token")?.value;
  if (!token) redirect("/login");

  const response = await apiRequest<PageData>(`/pages/${id}`, token);

  if (!response.data) {
    redirect("/dashboard/pages");
  }

  const page = response.data;

  async function save(data: UpdatePageDto): Promise<ApiResponse<null>> {
    "use server";

    const result = await updatePage(id, data);

    if (!result.success) {
      return { success: false, message: result.message ?? "Erro ao salvar" };
    }

    return { success: true, data: null };
  }

  return <PageEditor initialPage={page} onSave={save} />;
}
