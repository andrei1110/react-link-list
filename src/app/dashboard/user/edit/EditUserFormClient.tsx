"use client";

import { useState } from "react";

interface UserFormData {
  name: string;
  email: string;
  country: string;
  city: string;
}

interface EditUserFormClientProps {
  user: UserFormData;
}

export default function EditUserFormClient({ user }: EditUserFormClientProps) {
  const [form, setForm] = useState<UserFormData>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-5">
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
    </div>
  );
}

interface InputProps {
  label: string;
  name: keyof UserFormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function Input({ label, name, value, onChange, type = "text" }: InputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm opacity-80 block">{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={value}
        onChange={onChange}
        className="w-full px-4 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-white focus:border-brand focus:outline-none"
      />
    </div>
  );
}
