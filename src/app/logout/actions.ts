"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
  // Remove o token (nome pode variar)
  (await cookies()).delete("token");

  // Redireciona para login
  redirect("/login");
}
