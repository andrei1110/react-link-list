"use server";

import { cookies } from "next/headers";
import { PageData } from "@/types/page";
import { cleanPageForBackend } from "@/lib/cleanPage";
import { apiRequest } from "@/lib/api";
import { ApiResponse } from "@/types/api";

export async function createPageAction(
  data: Partial<PageData>
): Promise<ApiResponse> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return { success: false, message: "Usuário não autenticado." };
  }

  const payload = cleanPageForBackend(data);

  try {
    await apiRequest("/pages", token, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    return { success: true };
  } catch (err) {
    console.error("[CREATE PAGE ERROR]", err);
    return { success: false, message: "Erro ao criar página." };
  }
}
