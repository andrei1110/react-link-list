// src/app/dashboard/pages/[id]/actions.ts
"use server";

import { cookies } from "next/headers";
import { PageData, UpdatePageDto } from "@/types/page";
import { ApiResponse } from "@/types/api";
import { apiRequest } from "@/lib/api";

export async function updatePage(
  id: string,
  data: UpdatePageDto
): Promise<ApiResponse> {
  const token = (await cookies()).get("token")?.value;
  if (!token) {
    return { success: false, message: "Unauthorized" };
  }

  const res = await apiRequest<PageData>(
    `${process.env.API_URL}/pages/${id}`,
    token,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  if (!res.success) {
    return {
      success: false,
      message: res.message || "Erro ao atualizar página",
    };
  }

  return { success: true };
}
