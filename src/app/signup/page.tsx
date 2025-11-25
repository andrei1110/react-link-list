"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { signupAction } from "./actions";
import { toast } from "sonner";

export const metadata = {
  title: "Cadastre-se | Konn",
};

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const passwordStrength = getPasswordStrength(form.password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("As senhas não são iguais.");
      return;
    }

    if (passwordStrength.score < 3) {
      toast.error("Sua senha ainda está fraca.");
      return;
    }

    setLoading(true);

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      fd.append(key, value);
    });

    const result = await signupAction(fd);

    setLoading(false);

    if (!result.success) {
      toast.error(result.message || "Erro ao criar conta");
      return;
    }

    toast.success("Conta criada com sucesso!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md space-y-8">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-[#111] border border-[#2A2A2A] px-6 py-8 rounded-2xl shadow-xl shadow-black/40 space-y-6"
        >
          <h1 className="text-2xl font-bold text-center">Criar conta</h1>

          {/* Campos */}
          <Input
            label="Nome"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            label="E-mail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            label="País"
            name="country"
            value={form.country}
            onChange={handleChange}
          />
          <Input
            label="Cidade"
            name="city"
            value={form.city}
            onChange={handleChange}
          />

          {/* Senha */}
          <div className="space-y-2">
            <label className="text-sm opacity-80 block">Senha</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-white focus:border-brand focus:outline-none"
              />
              <button
                type="button"
                className="absolute right-3 top-3 opacity-70 hover:opacity-100"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <PasswordStrengthBar
              score={passwordStrength.score}
              label={passwordStrength.label}
            />
          </div>

          <Input
            label="Confirmar senha"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <Button
            variant="outline"
            type="submit"
            disabled={loading}
            className="w-full mt-4"
          >
            {loading ? "Criando..." : "Criar conta"}
          </Button>
        </motion.form>
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm opacity-80 block">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-white focus:border-brand focus:outline-none"
      />
    </div>
  );
}

function PasswordStrengthBar({
  score,
  label,
}: {
  score: number;
  label: string;
}) {
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
  ];
  const width = ["w-1/4", "w-2/4", "w-3/4", "w-full"];

  return (
    <div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${colors[score]} ${width[score]} transition-all`}
        />
      </div>
      <p className="text-xs mt-1 opacity-80">{label}</p>
    </div>
  );
}

function getPasswordStrength(password: string) {
  let score = 0;

  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score++;

  return {
    score: Math.min(score, 3),
    label: ["Fraca", "Média", "Boa", "Forte"][Math.min(score, 3)],
  };
}
