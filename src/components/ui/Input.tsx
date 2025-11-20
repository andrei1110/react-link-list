import * as React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`input w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-white focus:outline-none focus:ring-0 ${
        props.className || ""
      }`}
    />
  );
}
