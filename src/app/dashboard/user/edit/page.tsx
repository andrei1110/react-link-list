import { cookies } from "next/headers";
import { apiRequest } from "@/lib/api";
import EditUserForm from "./EditUserForm";
import { redirect } from "next/navigation";

interface UserApiResponse {
  id: string;
  name: string;
  email: string;
  country: string;
  city: string;
}

export const metadata = {
  title: "Editar perfil | Konn",
};

export default async function EditUserPage() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    redirect("login");
  }

  const response = await apiRequest<UserApiResponse>("/users/me", token);

  if (!response.data) {
    return (
      <div className="p-10 text-center">
        <p>Não foi possível carregar os dados do usuário.</p>
      </div>
    );
  }

  const user = response.data;

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">
        <EditUserForm
          user={{
            name: user.name,
            email: user.email,
            country: user.country,
            city: user.city,
          }}
        />
      </div>
    </div>
  );
}
