"use server";

import { loginService } from "@/services/auth";
import { cookies } from "next/headers";

export async function loginAction(_prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const { access_token } = await loginService(email, password);

    console.log("testeee", access_token);

    (await cookies()).set("token", access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return { success: true, error: null };
  } catch {
    return { success: false, error: "E-mail ou senha incorretos" };
  }
}
