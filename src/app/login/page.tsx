"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "./actions";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full py-2.5 rounded-lg bg-brand hover:bg-brandHover text-sm md:text-base font-semibold tracking-wide transition"
      disabled={pending}
      variant="outline"
    >
      {pending ? "Entrando..." : "Entrar"}
    </Button>
  );
}

export default function LoginPage() {
  const router = useRouter();

  const [state, formAction] = useActionState(loginAction, {
    success: false,
    error: null,
  });

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state.error]);

  useEffect(() => {
    if (state.success) {
      router.push("/dashboard");
    }
  }, [state.success, router]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <form
          action={formAction}
          className="bg-[#111111] border border-[#2A2A2A] rounded-2xl shadow-xl shadow-black/40 px-6 py-8 space-y-6"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            Entrar
          </h1>

          <div className="space-y-2">
            <label className="text-sm opacity-80 block">E-mail</label>
            <input
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-sm text-white placeholder:text-zinc-500 focus:border-brand focus:outline-none focus:ring-0 transition"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm opacity-80 block">Senha</label>
            <input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full px-4 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-sm text-white placeholder:text-zinc-500 focus:border-brand focus:outline-none focus:ring-0 transition"
              required
            />
          </div>

          <SubmitButton />

          <p className="text-center text-xs md:text-sm opacity-50 mt-2">
            © {new Date().getFullYear()} - Smartol
          </p>
        </form>
      </div>
    </div>
  );
}
