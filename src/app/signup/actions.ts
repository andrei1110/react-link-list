"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { apiRequest } from "@/lib/api";

type SignupState = {
  error?: string;
};

export async function signupAction(formData: FormData): Promise<SignupState> {
  const name = formData.get("name")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";
  const confirmPassword = formData.get("confirmPassword")?.toString() ?? "";

  if (password !== confirmPassword) {
    return { error: "As senhas não coincidem." };
  }

  try {
    const result = await apiRequest<{ access_token: string }>(
      "/auth/signup",
      undefined,
      {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      }
    );

    const data = result.data!;

    (await cookies()).set("token", data?.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    redirect("/dashboard");
  } catch (_err) {
    return { error: "Erro ao criar conta. Verifique seus dados." };
  }
}
