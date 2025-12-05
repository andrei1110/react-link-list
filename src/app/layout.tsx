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
  const isProd = process.env.NODE_ENV === "production";
  return (
    <html lang="pt-BR">
      <body>
        <Toaster richColors theme="dark" />
        {children}
        {isProd && (
          <script
            async
            src="https://analytics.smartol.com.br/tracker.js"
            data-ackee-server="https://analytics.smartol.com.br"
            data-ackee-domain-id="0498c27e-6e0c-4d1f-b049-92ac001de424"
          ></script>
        )}
      </body>
    </html>
  );
}
