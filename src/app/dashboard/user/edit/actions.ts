"use server";

import { apiRequest } from "@/lib/api";
import { cookies } from "next/headers";

export async function updateUserAction(formData: FormData): Promise<void> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    console.error("Usuário não autenticado");
    return;
  }

  try {
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      country: formData.get("country"),
      city: formData.get("city"),
    };

    await apiRequest("/users", token, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao atualizar usuário:", error.message);
    } else {
      console.error("Erro desconhecido ao atualizar usuário:", error);
    }
  }
}
