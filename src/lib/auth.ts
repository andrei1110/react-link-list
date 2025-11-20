import { cookies } from "next/headers";

export async function isLoggedIn() {
  const token = (await cookies()).get("token")?.value;
  return Boolean(token);
}
