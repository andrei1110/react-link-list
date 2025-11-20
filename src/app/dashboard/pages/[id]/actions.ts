// src/app/dashboard/pages/[id]/actions.ts
"use server";

import { cookies } from "next/headers";
import { UpdatePageDto } from "@/types/page";
import { ApiResponse } from "@/types/api";

export async function updatePage(
  id: string,
  data: UpdatePageDto
): Promise<ApiResponse> {
  const token = (await cookies()).get("token")?.value;
  if (!token) {
    return { success: false, message: "Unauthorized" };
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    return { success: false, message: errorText };
  }

  return { success: true };
}
