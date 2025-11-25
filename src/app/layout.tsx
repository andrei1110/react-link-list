import "./tailwind.css";
import "./globals.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konn",
  description:
    "Crie sua página de links personalizada, estilize do seu jeito e compartilhe com o mundo.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Toaster richColors theme="dark" />
        {children}
      </body>
    </html>
  );
}
