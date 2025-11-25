import { apiRequest } from "@/lib/api";

export async function loginService(email: string, password: string) {
  const response = await apiRequest<{ access_token: string }>(
    "/auth/login",
    undefined,
    {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }
  );

  return response;
}
