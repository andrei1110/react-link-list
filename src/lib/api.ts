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
  });

  let json: ApiResponse<T>;

  try {
    json = await res.json();
  } catch {
    throw new Error("Resposta inválida do servidor");
  }

  console.log("json", json);

  if (!json.success) {
    throw new Error(json.message ?? "Erro desconhecido");
  }

  return json;
}
