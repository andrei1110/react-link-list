"use server";

import { loginService } from "@/services/auth";
import { cookies } from "next/headers";

export async function loginAction(_prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const { data } = await loginService(email, password);

    (await cookies()).set("token", data?.access_token || "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return { success: true, error: null };
  } catch (e) {
    console.log(e);
    return { success: false, error: "E-mail ou senha incorretos", message: e };
  }
}
