"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { apiRequest } from "@/lib/api";
import { ApiResponse } from "@/types/api";
import { UserData } from "@/types/user";

export async function signupAction(
  formData: FormData
): Promise<ApiResponse<UserData>> {
  const name = formData.get("name")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const country = formData.get("country")?.toString() ?? "";
  const city = formData.get("city")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";
  const confirmPassword = formData.get("confirmPassword")?.toString() ?? "";

  if (password !== confirmPassword) {
    return { success: false, message: "As senhas não conincidem" };
  }

  try {
    const result = await apiRequest<{ access_token: string }>(
      "/users",
      undefined,
      {
        method: "POST",
        body: JSON.stringify({ name, email, country, city, password }),
      }
    );

    const data = result.data!;

    (await cookies()).set("token", data?.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });
  } catch (err) {
    console.log("err", err);
    return {
      message: `Erro ao criar conta. ${
        (err as { message?: string }).message || "Verifique seus dados"
      }.`,
      success: false,
    };
  }
  redirect("/dashboard");
}
