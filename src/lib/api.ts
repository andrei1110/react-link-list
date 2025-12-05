import { ApiResponse } from "@/types/api";
import { isJson } from "./utils";

export async function apiRequest<T = unknown>(
  path: string,
  token?: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options,
    headers: {
      ...(isJson(options.body) && { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
    cache: "no-store",
    credentials: "include",
  });

  let json: ApiResponse<T>;

  try {
    json = await res.json();
  } catch (e) {
    console.log("error api", e);
    throw new Error("Resposta inválida do servidor");
  }

  if (!json.success) {
    throw new Error(json.message ?? "Erro desconhecido");
  }

  return json;
}
