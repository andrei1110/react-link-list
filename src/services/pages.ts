import { api } from "./api";

export async function createPageService(token: string, data: any) {
  return api("/pages", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
