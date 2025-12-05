import { Button } from "@/components/ui/Button";
import EditUserFormClient from "./EditUserFormClient";
import { updateUserAction } from "./actions";

interface UserFormData {
  name: string;
  email: string;
  country: string;
  city: string;
}

export default function EditUserForm({ user }: { user: UserFormData }) {
  return (
    <form
      action={updateUserAction}
      className="bg-[#111] border border-[#2A2A2A] px-6 py-8 rounded-2xl shadow-xl shadow-black/40 space-y-6"
    >
      <h1 className="text-2xl font-bold text-center">Editar Perfil</h1>

      <EditUserFormClient user={user} />

      <Button
        type="submit"
        className="w-full bg-brand text-white py-2.5 rounded-lg mt-4"
      >
        Salvar
      </Button>
    </form>
  );
}
